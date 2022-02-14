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
        const reviews = await Review.findAll({
            where:{
                businessId:id
            },
            include:"User"})
        // console.log('this is the ',reviews)
        return res.json(reviews)
    })
)

router.get('/', asyncHandler(async(req,res) =>{
    const reviews= await Review.findAll({include: ["User", "Business"]});
    return res.json(reviews)
}))


router.get(
    "/:businessIds",
    asyncHandler(async(req,res) =>{
        const { Op } = require('sequelize');
        const ids = req.params.businessIds;
        // console.log('these are my ids',ids)
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
        const { Op } = require('sequelize');
        const {businessId, userId} =req.body;
        const reviewCheck = await Review.findOne({where:{
            [Op.and]:[
                {businessId:businessId},
                {userId:userId}
            ]
        }})
        // console.log('whre is this review', reviewCheck)
        if(!reviewCheck){
            const newReview = await Review.create(req.body);
            return res.json(newReview)
        }else{
            throw new Error('Already Reviewed')
        }

    })
)

router.put(
    '/',

    reviewValidations.validateUpdate,
    asyncHandler(async (req, res) => {
        const { Op } = require('sequelize');

        const {userId, businessId} = req.body;
        // console.log('testing params', userId, businessId)
        const reviewUpdate = await Review.findOne({where:{
            [Op.and]:[
                {userId: userId},
                {businessId: businessId}
            ]
        }})
        // console.log('lookat me it sthe bug', reviewUpdate)
        const reviewUpdated = await reviewUpdate.update(req.body)
        return res.json(reviewUpdated);
    })
);

router.delete("/:ids",asyncHandler(async (req, res) =>{
    const { Op } = require('sequelize');
    const splitIds = req.params.ids.split("_");
    const businessId = parseInt(splitIds[0])
    const userId = parseInt(splitIds[1]);

    let deletedReview = await Review.findOne({where:{
        [Op.and]:[
            {userId:userId},
            {businessId:businessId}
        ]
    }})

    await Review.destroy({where:{
        [Op.and]:[
            {userId:userId},
            {businessId:businessId}
        ]
    }})

    return res.json(deletedReview);
}));


module.exports =  router;
