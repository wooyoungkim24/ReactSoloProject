const express = require('express')
const asyncHandler = require('express-async-handler');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const {Business, City} = require('../../db/models');
const { route } = require('.');
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
router.get(
    "/",
    asyncHandler(async(req,res) =>{
        const businesses = await Business.findAll();
        return res.json({
            businesses
        })
    })
)

router.get(
    `/:city`,
    asyncHandler(async (req, res) => {
        const { Op } = require('sequelize');
        const city = req.params.city;
        const cityData = await City.findOne({where: {
            name: city
        }})
        const latTarget = cityData.latitude;
        const longTarget = cityData.longitude;
        const businesses = await Business.findAll();
        const distances = {};
        businesses.forEach(ele =>{
            const latFocus = ele.latitude;
            const longFocus = ele.longitude;
            const distance = getDistanceFromLatLonInKm(latTarget,longTarget,latFocus,longFocus)
            distances[ele.id] = distance;
        })
        const fiveClosest = pickLowest(distances,5);

        const keysClosest = Object.keys(fiveClosest);

        const businessesClosest = await Business.findAll({where:{
            id:{
                [Op.in]: keysClosest
            }
        }})
        return res.json({
            businessesClosest
        });
    }),
);




module.exports = router;
