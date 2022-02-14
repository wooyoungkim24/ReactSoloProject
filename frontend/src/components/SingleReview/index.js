import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route, useHistory, useParams } from 'react-router-dom';
import * as sessionActions from "../../store/session";
import { getBusiness, getBusinessAmenities } from "../../store/business"



function SingleReview({reviewData, rerender}) {
    const [isUpdated, setIsUpdated] = useState(false)
    const [reviewChange, setReviewChange] = useState(false)

    useEffect(() =>{
        setReviewChange(rerender)
    },[])

    const rating = reviewData.rating

    const ratingStars = [];
    for(let i = 0; i < rating; i ++){
        ratingStars.push(
            <div key = {i} id="singleRatingStarBoxFill">
                <i className="fas fa-star fa-1x" id="smallSingleStar"></i>
            </div>
        )
    }
    for(let i =rating; i< 5; i ++){
        ratingStars.push(
            <div key = {i} id="singleRatingStarBoxEmpty">
                <i className="fas fa-star fa-1x" id="smallSingleStar"></i>
            </div>
        )
    }


    const reviewDateCreateUnparsed = reviewData.createdAt;
    const reviewDateCreate = reviewDateCreateUnparsed.split("T")[0].split("-")
    let shiftC = reviewDateCreate.shift()
    reviewDateCreate.push(shiftC)
    let finalCDate= reviewDateCreate.join("/")

    const reviewDateUpdateUnparsed = reviewData.createdAt;
    const reviewDateUpdate = reviewDateUpdateUnparsed.split("T")[0].split("-")
    let shiftU = reviewDateUpdate.shift()
    reviewDateUpdate.push(shiftU)
    let finalUDate = reviewDateUpdate.join("/")

    // console.log(rerender)
    return (
        <>
            <div id="userReview">
                <div id="forceRerender">
                    {rerender}
                </div>
                <div id="username">
                    {reviewData.User.username}
                </div>
                <div id="userEmail">
                    {reviewData.User.email}
                </div>
            </div>

            <div id="reviewRating">
                <div className="ratingStars">
                    {ratingStars}&nbsp;&nbsp;&nbsp;{isUpdated? finalUDate: finalCDate}
                </div>
            </div>

            <div id="reviewTitle">
                <h2>{reviewData.title}</h2>

            </div>
            <div id = "reviewText">
                <p>{reviewData.reviewText}</p>
            </div>
        </>
    )
}



export default SingleReview;
