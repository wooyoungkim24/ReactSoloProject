const express = require('express')
const asyncHandler = require('express-async-handler');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const {Business, City} = require('../../db/models');

const router = express.Router();

//Function for calculating distance between points
function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2 - lat1);  // deg2rad below
    var dLon = deg2rad(lon2 - lon1);
    var a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2)
        ;
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km
    return d;
}
// console.log(getDistanceFromLatLonInKm(41.8781,87.6298,34.0994837,118.329268))

function deg2rad(deg) {
    return deg * (Math.PI / 180)
}
// function for grabbing lowest distances
const pickLowest = (obj, num = 1) => {
    const requiredObj = {};
    if (num > Object.keys(obj).length) {
        return false;
    };
    Object.keys(obj).sort((a, b) => obj[a] - obj[b]).forEach((key, ind) => {
        if (ind < num) {
            requiredObj[key] = obj[key];
        }
    });
    return requiredObj;
};


const capitalize = (string) => {
    const words = string.split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1).toLowerCase();
    }
    return words.join(" ");

    // const first = string.charAt(0).toUpperCase()
    // const rest = string.slice(1).toLowerCase();
    // return first+rest;
}


router.get(
    "/coordinates/:location",
    asyncHandler(async(req,res) =>{
        const { Op } = require('sequelize');
        const coordinates = req.params.location

        const test = /^\d+\.\d+_\d+\.\d+$/.test(coordinates)
        if(!test){
            throw new Error("Coordinates not formatted properly: 12.345_67.899")
            // return res.json({
            //     error: "Coordinates not formatted properly: 12.345_67.899"
            // })
        }

        const splitCoord = coordinates.split("_");
        const latSplit = splitCoord[0];
        const longSplit = splitCoord[1];

        const lat = parseFloat(latSplit)
        const long = parseFloat(longSplit)
        // console.log('coords', typeof lat, typeof long)
        const businesses = await Business.findAll();
        const businessLocations = {};
        businesses.forEach(ele =>{
            // console.log(parseFloat(ele.latitude))
            businessLocations[ele.id] = getDistanceFromLatLonInKm(parseFloat(ele.latitude), parseFloat(ele.longitude), lat, long)
        })

        const fiveClosest = pickLowest(businessLocations,5);
        // console.log(businessLocations)
        const keysClosest = Object.keys(fiveClosest);

        const businessesClosest = await Business.findAll({where:{
            id:{
                [Op.in]: keysClosest
            }
        }})
        // console.log('lasttest', businessesClosest)
        return res.json(
            businessesClosest
        )
    })
)

router.get(
    `/location/:city`,
    asyncHandler(async (req, res) => {
        const { Op } = require('sequelize');
        let city = req.params.city;
        // console.log('this is city', city)
        city = capitalize(city);
        console.log('this is city', city)
        const cityData = await City.findOne({where: {
            name: city
        }})
        const latTarget = cityData.latitude;
        const longTarget = cityData.longitude;
        const businesses = await Business.findAll();
        const distances = {};
        businesses.forEach(ele =>{
            const latFocus = parseFloat(ele.latitude);
            const longFocus = parseFloat(ele.longitude);
            const distance = getDistanceFromLatLonInKm(latTarget,longTarget,latFocus,longFocus)
            distances[ele.id] = distance;
        })
        // console.log('distances', distances)
        const fiveClosest = pickLowest(distances,5);

        const keysClosest = Object.keys(fiveClosest);

        const businessesClosest = await Business.findAll({where:{
            id:{
                [Op.in]: keysClosest
            }
        }})
        // console.log("closest",businessesClosest)
        return res.json(businessesClosest);
    }),
);

router.get(
    "/:id",
    asyncHandler(async(req,res) =>{
        const id = req.params.id;
        const business = await Business.findByPk(id);
        return res.json(business)
    })
)

router.get("/amenities/:id", asyncHandler(async(req,res) =>{
    const id = req.params.id;
    const businessAmenities = await Business.findByPk(id, {include: "Amenity"})
    console.log('this is me im the test look at me',businessAmenities)
    return res.json(businessAmenities)
}))


module.exports = router;
