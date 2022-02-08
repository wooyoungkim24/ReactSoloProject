
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route, useParams } from 'react-router-dom';
import {getReviews} from "../../store/review"

function RestaurantsPageCoordinates () {
    const dispatch = useDispatch();
    const {coordinates} = useParams();

    const restaurantsValues = useSelector(state =>{
        return Object.values(state.businesses.closeBusinesses);
    })
    const restaurantsKeys = useSelector(state =>{
        return Object.keys(state.businesses.closeBusinesses);
    })
    const reviews = useSelector(state => {
        return state.reviews.closeReviews
    })

    useEffect(() =>{
        dispatch(getReviews(restaurantsKeys))
    }, [dispatch])





    return (
        <div className="restaurants">
            <ol>
                {restaurantsValues.map((restaurant) => {
                    const bid = restaurant.id
                    const arrayReviews = [];
                    for(const businessId in reviews){
                        if(businessId === bid){
                            arrayReviews.push(reviews[businessId])
                        }
                    }
                    return (
                        <li className="restaurant-component">
                            <h2>{restaurant.name}</h2>

                        </li>
                    )
                })}
            </ol>

        </div>
    )

}




export default RestaurantsPageCoordinates;
