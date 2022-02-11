import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route, useHistory, useParams } from 'react-router-dom';
import * as sessionActions from "../../store/session";
import { getReviews } from "../../store/review"
import { getBusinessesLocation, getCities, getBusinessesCity, clearBusinesses } from "../../store/business"
import Navigation from '../Navigation';
import "./index.css"

function RestaurantsPageLocation() {
    const dispatch = useDispatch();
    const history = useHistory();
    // console.log(useParams())
    // console.log('my coordinates', coordinates)
    const { location } = useParams();
    console.log('location', location)
    const [isLoaded, setIsLoaded] = useState(false);
    const [isBusinessLoaded, setIsBusinessLoaded] = useState(false);
    const [isUserLoaded, setIsUserLoaded] = useState(false)

    const restaurants = useSelector(state => {
        return state.businesses.closeBusinesses;
    })
    const reviews = useSelector(state => {
        return state.reviews.closeReviews
    })
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }


    useEffect(() => {
        dispatch(sessionActions.restoreUser())
        .then(() => setIsUserLoaded(true))

    }, [dispatch])

    useEffect(() => {
        dispatch(getBusinessesCity(location)).then(() => setIsBusinessLoaded(true));
    }, [dispatch, isUserLoaded])

    useEffect(() => {
        // console.log('my coordinates', coordinates)

        // dispatch(sessionActions.restoreUser()).then(() => setIsSession(true))
        if (isBusinessLoaded) {
            dispatch(getReviews(Object.keys(restaurants))).then(() => setIsLoaded(true))
        }

    }, [isBusinessLoaded])



    const encode = encodeURIComponent(location)
    const mapsQuery = `https://www.google.com/maps/embed/v1/place?q=${encode}&key=AIzaSyD1nYDZVEp2m6eIrrbFU-9Jc8X7tQUYAxI`

    return (
        <>
            <Navigation isLoaded={isUserLoaded} />
            <div className="restaurants">
                {isLoaded &&
                    <>
                        <ol>
                            {Object.values(restaurants).map((restaurant) => {
                                const bid = restaurant.id
                                const reviewList = reviews[bid]

                                const reviewListRatings = []
                                reviewList.forEach(ele => {
                                    reviewListRatings.push(ele.rating)
                                })
                                // console.log('rating list', reviewListRatings)
                                let sum = reviewListRatings.reduce((ele, accum) => {
                                    return ele + accum;
                                })
                                let ratingAvg = sum / reviewListRatings.length

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

                                const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                                const d = new Date();
                                let day = weekday[d.getDay()];
                                let currTimeHour = d.getHours();
                                let currTimeMinute = d.getMinutes();
                                // console.log(time)
                                const dayHours = hours[day];
                                let currOpen;
                                if (dayHours !== "Closed") {
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

                                    if (closeTimeSplitPre[1] === "PM" || closeTime === "12:00 AM") {
                                        closeTimeHour += 12;
                                    }
                                    if (openTimeSplitPre[1] === "PM") {
                                        openTimeHour += 12;
                                    }


                                    if (currTimeHour < closeTimeHour && (currTimeHour > openTimeHour && currTimeMinute > openTimeMinute)) {
                                        currOpen = (
                                            <>
                                                Open until {closeTime}.
                                            </>
                                        )
                                    } else {
                                        currOpen = (
                                            <>
                                                Closed. Opens at {openTime}.
                                            </>
                                        )
                                    }
                                } else {

                                    let today = d.getDay();
                                    let nextOpen;
                                    for (let i = today; i < weekday.length; i++) {
                                        const currDay = weekday[i]
                                        if (hours[currDay] !== "Closed") {
                                            nextOpen = currDay;
                                            break;
                                        }
                                    }
                                    const openTime = hours[nextOpen].split(" - ")[0];
                                    currOpen = (
                                        <>
                                            Closed for Today. Opens {nextOpen} at {openTime}.
                                        </>
                                    )
                                }
                                const chooseReview = getRandomInt(reviewList.length)
                                const chosenReview = reviewList[chooseReview]
                                console.log('chosen review', chosenReview)

                                // console.log('testing stuff', openTimeHour,openTimeMinute)
                                return (
                                    <div key={bid} className ="restaurant-component-container">
                                        <div>
                                            <img id="restaurant-component-image" src={restaurant.imgs[0]}/>
                                        </div>
                                        <li className="restaurant-component">
                                            <div className = "onClickComponent" onClick={() => history.push(`/restaurants/single/${restaurant.id}`)}>
                                                <h2>{restaurant.title}</h2>
                                                <div className="avgRating">
                                                    Average Rating: {ratingAvg} Number of Reviews: {reviewListRatings.length}
                                                </div>
                                                <div className="categories">
                                                    {categories.map(ele => {
                                                        return <button key={ele}>{ele}</button>
                                                    })}
                                                </div>
                                                <div className="hours">
                                                    {currOpen}
                                                </div>
                                                <div className="reviewComponent">
                                                    <span id="speechBubble">
                                                        <i className="fas fa-comment-dots"></i>
                                                    </span>
                                                    &nbsp;&nbsp;{chosenReview.reviewText}
                                                </div>
                                            </div>
                                        </li>
                                    </div>

                                )
                            })}
                        </ol>
                        <div className="bigMap">
                            <iframe id="map"
                                width="800" height="99%" style={{ border: 0 }}
                                loading="lazy"
                                allowFullScreen
                                src={mapsQuery}>
                            </iframe>
                        </div>
                    </>}
            </div>
        </>

    )
}



export default RestaurantsPageLocation;
