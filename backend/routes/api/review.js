const express = require('express')
const asyncHandler = require('express-async-handler');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const {Business, City, Review} = require('../../db/models');
const { route } = require('.');
const reviewValidations = require('../../validations/reviews');

const router = express.Router();


router.get(
    "/:id",
    asyncHandler(async(req,res) =>{
        const id = req.params.id;
        const reviews = await Review.findAll({where:{
            businessId: id
        }});
        return res.json({
            reviews
        })
    })
)

router.post(
    "/",
    reviewValidations.validateCreate,
    asyncHandler(async(req,res) =>{
        const newReview = await Review.create(req.body);
        return res.json(newReview)
    })
)


module.exports =  router;
