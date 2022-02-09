
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route, useParams } from 'react-router-dom';
import {getReviews} from "../../store/review"
import { restoreUser } from '../../store/session';

function RestaurantsPageCoordinates () {
    const dispatch = useDispatch();
    const {coordinates} = useParams();
    const [isLoaded, setIsLoaded] = useState(false);

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
        dispatch(getReviews(Object.keys(restaurants))).then(() => setIsLoaded(true))
    }, [dispatch])





    return (

        <div className="restaurants">
            {isLoaded &&
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

                    const categories = restaurant.categories;

                    const getHours = restaurant.hours;
                    const hours = {
                        "Monday": getHours[0],
                        "Tuesday": getHours[1],
                        "Wednesday": getHours[2],
                        "Thursday": getHours[3],
                        "Friday": getHours[4],
                        "Saturday": getHours[5],
                        "Sunday": getHours[6],
                    };

                    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
                    const d = new Date();
                    let day = weekday[d.getDay()];
                    let currTimeHour = d.getHours();
                    let currTimeMinute = d.getMinutes();
                    // console.log(time)
                    const dayHours = hours[day];
                    let split = dayHours.split(" - ");

                    const closeTime = split[1];
                    const openTime = split[0];


                    const closeTimeSplitPre = closeTime.split(" ")
                    const openTimeSplitPre = openTime.split(" ")

                    const closeTimeSplit = closeTimeSplitPre[0]
                    const openTimeSplit = openTimeSplitPre[0];


                    let closeTimeHour = parseInt(closeTimeSplit.split(":")[0]);
                    let openTimeHour = parseInt(openTimeSplit.split(":")[0]);
                    const closeTimeMinute = parseInt(closeTimeSplit.split(":")[1]);
                    const openTimeMinute = parseInt(openTimeSplit.split(":")[1]);

                    if(closeTimeSplitPre[1] === "PM" || closeTime === "12:00 AM"){
                        closeTimeHour += 12;
                    }
                    if(openTimeSplitPre[1] === "PM"){
                        openTimeHour += 12;
                    }

                    let currOpen;
                    if(currTimeHour < closeTimeHour && (currTimeHour > openTimeHour && currTimeMinute > openTimeMinute)){
                        currOpen = (
                            <>
                            Open until {closeTime}
                            </>
                        )
                    }else{
                        currOpen = (
                            <>
                            Closed. Opens at {openTime}
                            </>
                        )
                    }


                    // console.log('testing stuff', openTimeHour,openTimeMinute)
                    return (
                        <li key = {bid} className="restaurant-component">
                            <div>
                               <h2>{restaurant.title}</h2>
                                <div className="avgRating">
                                    Average Rating: {ratingAvg} Number of Reviews: {reviewListRatings.length}
                                </div>
                                <div className="categories">
                                    {categories.map(ele =>{
                                        return <button key={ele}>{ele}</button>
                                    })}
                                </div>
                                <div className ="hours">
                                    {currOpen}
                                </div>
                            </div>
                        </li>
                    )
                })}
            </ol>}

        </div>
    )

}




export default RestaurantsPageCoordinates;
