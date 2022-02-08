const express = require('express')
const asyncHandler = require('express-async-handler');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const {Business, City} = require('../../db/models');
const { route } = require('.');
const router = express.Router();




router.get(
    "/",
    asyncHandler(async(req,res) =>{
        const cities = await City.findAll();
        const citiesArray = [];
        cities.forEach(ele =>{
            citiesArray.push(ele.name)
        })
        // console.log('cities array',citiesArray)
        return res.json([citiesArray])
    })
)

module.exports = router;
