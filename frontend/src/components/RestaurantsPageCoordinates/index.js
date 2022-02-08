
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route, useParams } from 'react-router-dom';
import {getReviews} from "../../store/review"

function RestaurantsPageCoordinates () {
    const dispatch = useDispatch();
    const {coordinates} = useParams();

    const restaurants = useSelector(state =>{
        return state.businesses.closeBusinesses;
    })
    const reviews = useSelector(state => {
        return state.reviews.closeReviews
    })
    console.log(Object.keys(restaurants));
    // const testRestaurants = useSelector(state=>{
    //     return state.businesses.closeBusinesses
    // })
    // console.log(testRestaurants)
    useEffect(() =>{
        dispatch(getReviews(Object.keys(restaurants)))
    }, [dispatch])





    return (
        <div className="restaurants">
            <ol>
                {Object.values(restaurants).map((restaurant) => {
                    const bid = restaurant.id
                    const reviewList = reviews[bid]
                    const reviewListRatings = []
                    reviewList.forEach(ele=>{
                        reviewListRatings.push(ele.rating)
                    })
                    // console.log('rating list', reviewListRatings)
                    let sum = reviewListRatings.reduce((ele, accum) =>{
                        return ele+accum;
                    })
                    let ratingAvg = sum/reviewListRatings.length
                    // console.log('testing stuff', ratingAvg, sum)
                    return (
                        <li key = {bid} className="restaurant-component">
                            <div>
                               <h2>{restaurant.title}</h2>
                                <div className="avgRating">
                                    Average Rating: {ratingAvg} Number of Reviews: {reviewListRatings.length}
                                </div>
                            </div>
                        </li>
                    )
                })}
            </ol>

        </div>
    )

}




export default RestaurantsPageCoordinates;
