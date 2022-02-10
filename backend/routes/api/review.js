const express = require('express')
const asyncHandler = require('express-async-handler');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const {Business, City, Review} = require('../../db/models');

const reviewValidations = require('../../validations/reviews');

const router = express.Router();

router.get(
    "/single/:id",
    asyncHandler(async(req,res) =>{
        const id = req.params.id;
        const reviews = await Review.findAll({where:{
            businessId:id
        }})
        return res.json(reviews)
    })
)




router.get(
    "/:businessIds",
    asyncHandler(async(req,res) =>{
        const { Op } = require('sequelize');
        const ids = req.params.businessIds;
        console.log('these are my ids',ids)
        const split = ids.split("_");
        const splitNum = split.map(ele=>{
            return parseInt(ele)
        })
        // console.log('test',typeof split[0])
        const reviews = await Review.findAll({where:{
            businessId: {
                [Op.in]:splitNum
            }
        }});
        // console.log('this is the test',reviews)
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

router.put(
    '/:id',
    reviewValidations.validateUpdate,
    asyncHandler(async (req, res) => {
        const id = await Review.update(req.body);
        const review = await Review.findByPk(id);
        return res.json(review);
    })
);

router.delete("/:id", asyncHandler(async (req, res) =>{
    const review = await Review.findByPk(req.params.id);
    if(!review){
        throw new Error("No review exists")
    }
    await Review.destroy({where:{id:review.id}})
    return res.json(review);
}));


module.exports =  router;
