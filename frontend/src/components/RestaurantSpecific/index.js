import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route, useHistory, useParams } from 'react-router-dom';
import * as sessionActions from "../../store/session";
import { getBusiness, getBusinessAmenities } from "../../store/business"
import "./index.css"
import { getReviewsSingle, deleteReview } from '../../store/review';
import SingleReview from '../SingleReview';
import Navigation from '../Navigation';


function RestaurantSpecific() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const history = useHistory();

    const [reviewed, setReviewed] = useState(false)
    // const [isUserLoaded, setIsUserLoaded] = useState(false)
    // const [isBusinessLoaded, setIsBusinessLoaded] = useState(false)
    // const [isAmenitiesLoaded, setIsAmenitiesLoaded] = useState(false)
    // const [isReviewsLoaded, setIsReviewsLoaded] = useState(false)
    const [isAllLoaded, setIsAllLoaded] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const [showMore, setShowMore] = useState(false)
    const [loggedIn, setLoggedIn] = useState(false)
    const [userId, setUserId] = useState(null)

    const session = useSelector(state => {
        return state.session
    })

    const restaurant = useSelector(state => {
        return state.businesses.single
    })
    const amenities = useSelector(state => {
        return state.businesses.amenities
    })
    const reviews = useSelector(state => {
        return state.reviews.single
    })
    // const userId = useSelector(state =>{
    //     if(state.session.user){
    //        return state.session.user.id
    //     }
    //     else{
    //         return null;
    //     }
    // })

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }


    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    const d = new Date();
    let day = d.getDay();
    let correctedDay;
    if (day === 0) {
        correctedDay = 6;
    } else {
        correctedDay = day - 1;
    }
    let today = days[correctedDay]
    let currTimeHour = d.getHours();
    let currTimeMinute = d.getMinutes();


    // console.log('jhahdsfhasdkiufhasdkljfhasdjl;')
    useEffect(async () => {
        await dispatch(sessionActions.restoreUser())
        await dispatch(getBusinessAmenities(id))
        await dispatch(getReviewsSingle(id))
        await dispatch(getBusiness(id)).then(() => setIsAllLoaded(true))
    }, [dispatch])

    // const didMountRef = useRef(false);
    // useEffect (() =>{
    //     if(didMountRef.current){
    //         let findPrevReviewArray = Object.values(review)

    //         let findPrevReview;
    //         findPrevReviewArray.forEach(ele =>{
    //         if(ele.userId ===userId){
    //             findPrevReview = ele;
    //         }
    //     })

    //     setPrevReview(findPrevReview)
    //     }
    //     didMountRef.current = true;

    // }, [reviewsLoaded])
    const didMountRef = useRef(0);

    useEffect(() => {
        if (didMountRef.current === 1) {
            let reviewedCheckArray = Object.values(reviews)
            let checkReviewedIds = [];
            reviewedCheckArray.forEach(ele => {
                checkReviewedIds.push(ele.User.id)
            })
            if (session.user) {
                if (checkReviewedIds.includes(session.user.id)) {
                    setReviewed(true);
                }

                setUserId(session.user.id)
                setLoggedIn(true);
            }
        }
        didMountRef.current += 1;


    }, [isAllLoaded])





    let images;
    let address;
    let encode;
    let mapsQuery;
    let hours;
    let mapsUrl;
    let description = "Come and Enjoy the Food!"
    let ratings = [];
    let reviewKeys;
    let ratingSum;
    let avgRating;
    let avgRatingInt;
    let avgRatingDec;
    let ratingsLength;
    let starDivs = (
        <div>Loading</div>
    )
    let hoursToday;
    let openTodayHour;
    let openTodayMinute;
    let closeTodayHour;
    let closeTodayMinute;
    let hoursTodayDiv;
    let hoursTodayDivBottom;


    if (isAllLoaded) {




        images = restaurant.imgs
        address = restaurant.address
        encode = encodeURIComponent(address)
        mapsQuery = `https://www.google.com/maps/embed/v1/place?q=${encode}&key=AIzaSyD1nYDZVEp2m6eIrrbFU-9Jc8X7tQUYAxI`
        mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encode}`

        hours = restaurant.hours
        hoursToday = hours[correctedDay]
        openTodayHour = parseInt(hoursToday.split(" - ")[0].split(" ")[0].split(":")[0])
        openTodayMinute = parseInt(hoursToday.split(" - ")[0].split(" ")[0].split(":")[1])
        closeTodayHour = parseInt(hoursToday.split(" - ")[1].split(" ")[0].split(":")[0])
        closeTodayMinute = parseInt(hoursToday.split(" - ")[1].split(" ")[0].split(":")[1])
        if (currTimeHour > openTodayHour && currTimeMinute > openTodayMinute && currTimeHour < closeTodayHour) {
            setIsOpen(true);
        }

        if (isOpen) {
            hoursTodayDiv = (
                <div id="headerHours">
                    <div id="isOpen">
                        Open
                    </div>
                    <div>
                        {hoursToday}
                    </div>
                </div>
            )
        } else {
            hoursTodayDiv = (
                <div id="headerHours">
                    <div id="isClosed">
                        Closed
                    </div>
                    <div>
                        {hoursToday}
                    </div>
                </div>
            )
        }


        if (isOpen) {
            hoursTodayDivBottom = (
                <span id="hoursBottomOpen">
                    Open Now
                </span>
            )
        } else {
            hoursTodayDivBottom = (
                <span id="hoursBottomClosed">
                    Closed Now
                </span>
            )
        }

        if (restaurant.description) {
            description = restaurant.description;
        }
        reviewKeys = Object.keys(reviews);
        reviewKeys.forEach(ele => {
            ratings.push(reviews[ele].rating)
        })
        ratingsLength = ratings.length
        ratingSum = ratings.reduce((ele, accum) => {
            return ele + accum;
        })
        avgRating = ratingSum / ratingsLength
        avgRatingInt = parseInt(avgRating.toString().split(".")[0])
        avgRatingDec = parseInt(avgRating.toString().split(".")[1])



        //star rating stuff
        starDivs = [];
        for (let i = 0; i < avgRatingInt; i++) {
            starDivs.push(
                <div key={i} id="fullStar">
                    <i className="fas fa-star fa-1x"></i>
                </div>
            )
        }
        if (avgRatingDec !== 0) {
            starDivs.push(
                <div key="halfKey" id="halfStar">
                    <i className="fas fa-star fa-1x"></i>
                </div>
            )
        }
        if (starDivs.length > avgRatingInt) {
            for (let i = avgRatingInt + 1; i < 5; i++) {
                starDivs.push(
                    <div key={i} id="emptyStar">
                        <i className="fas fa-star fa-1x"></i>
                    </div>
                )
            }
        } else {
            for (let i = avgRatingInt; i < 5; i++) {
                starDivs.push(
                    <div key={i} id="emptyStar">
                        <i className="fas fa-star fa-1x"></i>
                    </div>
                )
            }
        }
        //star rating stuff
    }












    // Amenities Variables
    let reservations = amenities.reservations;
    let takeout = amenities.takeout;
    let delivery = amenities.delivery;
    let vegetarianOptions = amenities.vegetarianOptions;
    let veganOptions = amenities.veganOptions;
    let streetParking = amenities.streetParking;
    let acceptsCreditCards = amenities.acceptsCreditCards;
    let noisy = amenities.noisy;
    // Amenities Variables

    let amenitiesShow = (
        <div className="amenitiesContainer">
            <div id="leftAmenities">
                {reservations &&
                    <div id="orderAmenities">
                        <div id="amenityIconUp">
                            <i className="fas fa-thumbs-up fa-2x"></i>
                        </div>
                        <div id="amenity">
                            Takes Reservations
                        </div>
                    </div>
                }
                {!reservations &&
                    <div id="orderAmenities">
                        <div id="amenityIconDown">
                            <i className="fas fa-thumbs-down fa-2x"></i>
                        </div>
                        <div id="amenity">
                            Does Not Take Reservations
                        </div>
                    </div>
                }
            </div>
            <div id="rightAmenities">
                {takeout &&
                    <div id="orderAmenities">
                        <div id="amenityIconUp">
                            <i className="fas fa-calendar-day fa-2x"></i>
                        </div>

                        <div id="amenity">
                            Takeout
                        </div>
                    </div>
                }
                {!takeout &&
                    <div id="orderAmenities">
                        <div id="amenityIconDown">
                            <i className="fas fa-thumbs-down fa-2x"></i>
                        </div>
                        <div id="amenity">
                            Does Not Do Takeout
                        </div>
                    </div>
                }
            </div>
        </div>
    )

    if (showMore) {
        amenitiesShow = (
            <div className="amenitiesContainer">
                <div id="leftAmenities">
                    {reservations &&
                        <div id="orderAmenities">
                            <div id="amenityIconUp">
                                <i className="fas fa-thumbs-up fa-2x"></i>
                            </div>
                            <div id="amenity">
                                Takes Reservations
                            </div>
                        </div>
                    }
                    {!reservations &&
                        <div id="orderAmenities">
                            <div id="amenityIconDown">
                                <i className="fas fa-thumbs-down fa-2x"></i>
                            </div>
                            <div id="amenity">
                                Does Not Take Reservations
                            </div>
                        </div>
                    }
                    {delivery &&
                        <div id="orderAmenities">
                            <div id="amenityIconUp">
                                <i className="fas fa-thumbs-up fa-2x"></i>
                            </div>
                            <div id="amenity">
                                Does Deliveries
                            </div>
                        </div>
                    }
                    {!delivery &&
                        <div id="orderAmenities">
                            <div id="amenityIconDown">
                                <i className="fas fa-thumbs-down fa-2x"></i>
                            </div>
                            <div id="amenity">
                                Does Not Do Deliveries
                            </div>
                        </div>
                    }
                    {veganOptions &&
                        <div id="orderAmenities">
                            <div id="amenityIconUp">
                                <i className="fas fa-thumbs-up fa-2x"></i>
                            </div>
                            <div id="amenity">
                                Vegan Options
                            </div>
                        </div>
                    }
                    {!veganOptions &&
                        <div id="orderAmenities">
                            <div id="amenityIconDown">
                                <i className="fas fa-thumbs-down fa-2x"></i>
                            </div>
                            <div id="amenity">
                                No Vegan Options
                            </div>
                        </div>
                    }
                    {acceptsCreditCards &&
                        <div id="orderAmenities">
                            <div id="amenityIconUp">
                                <i className="fas fa-thumbs-up fa-2x"></i>
                            </div>
                            <div id="amenity">
                                Accepts Credit Cards
                            </div>
                        </div>
                    }
                    {!acceptsCreditCards &&
                        <div id="orderAmenities">
                            <div id="amenityIconDown">
                                <i className="fas fa-thumbs-down fa-2x"></i>
                            </div>
                            <div id="amenity">
                                Does Not Accept Credit Cards
                            </div>
                        </div>
                    }
                </div>
                <div id="rightAmenities">
                    {takeout &&
                        <div id="orderAmenities">
                            <div id="amenityIconUp">
                                <i className="fas fa-thumbs-up fa-2x"></i>
                            </div>

                            <div id="amenity">
                                Takeout
                            </div>
                        </div>
                    }
                    {!takeout &&
                        <div id="orderAmenities">
                            <div id="amenityIconDown">
                                <i className="fas fa-thumbs-down fa-2x"></i>
                            </div>
                            <div id="amenity">
                                Does Not Do Takeout
                            </div>
                        </div>
                    }
                    {vegetarianOptions &&
                        <div id="orderAmenities">
                            <div id="amenityIconUp">
                                <i className="fas fa-thumbs-up fa-2x"></i>
                            </div>

                            <div id="amenity">
                                Has Vegetarian Options
                            </div>
                        </div>
                    }
                    {!vegetarianOptions &&
                        <div id="orderAmenities">
                            <div id="amenityIconDown">
                                <i className="fas fa-thumbs-down fa-2x"></i>
                            </div>
                            <div id="amenity">
                                Does Not Have Vegetarian Options
                            </div>
                        </div>
                    }
                    {streetParking &&
                        <div id="orderAmenities">
                            <div id="amenityIconUp">
                                <i className="fas fa-thumbs-up fa-2x"></i>
                            </div>

                            <div id="amenity">
                                Has Streetparking
                            </div>
                        </div>
                    }
                    {!streetParking &&
                        <div id="orderAmenities">
                            <div id="amenityIconDown">
                                <i className="fas fa-thumbs-down fa-2x"></i>
                            </div>
                            <div id="amenity">
                                Does Not Have Streetparking
                            </div>
                        </div>
                    }
                    {noisy &&
                        <div id="orderAmenities">
                            <div id="amenityIconUp">
                                <i className="fas fa-thumbs-up fa-2x"></i>
                            </div>

                            <div id="amenity">
                                Noisy
                            </div>
                        </div>
                    }
                    {!noisy &&
                        <div id="orderAmenities">
                            <div id="amenityIconDown">
                                <i className="fas fa-thumbs-down fa-2x"></i>
                            </div>
                            <div id="amenity">
                                Quiet
                            </div>
                        </div>
                    }
                </div>
            </div>
        )
    }

    return (
        <div className="restaurantsContainer">
            <Navigation isLoaded = {isAllLoaded} />
            <div className="singleRestaurantContainer">

                {isAllLoaded &&
                    <div className="loaded">

                        {/* Header Div */}
                        <div className="singlePageHead" >
                            <div className="imageCarousel" >
                                {images.map((ele, i) => {
                                    const img = ele;
                                    return (
                                        <div id="specificImageDiv" key={i}>
                                            <img id="specificImage" src={img}></img>
                                        </div>
                                    )
                                })}
                                <div className="headerInformation">
                                    <div id="title">
                                        <h1>{restaurant.title}</h1>
                                    </div>

                                    <div id="starRating">
                                        <div id="starShapes">
                                            {starDivs}&nbsp;&nbsp;&nbsp;{Object.keys(reviews).length}
                                        </div>
                                    </div>

                                    <div id="headerCategories">
                                        {restaurant.categories.map((ele, i) => {
                                            if (i === restaurant.categories.length - 1) {
                                                return (
                                                    <div key={i}>
                                                        {ele}
                                                    </div>
                                                )
                                            } else {
                                                return (
                                                    <div key={i}>
                                                        {ele},&nbsp;
                                                    </div>
                                                )
                                            }

                                        })}
                                    </div>

                                    <div id="headerHours">
                                        {hoursTodayDiv}
                                    </div>

                                </div>
                            </div>
                        </div>

                        {/* The single page navbar div */}
                        {loggedIn && <div className="singleInternalNavBar">
                            {!reviewed ? <button type="button" onClick={() => history.push(`new/review/${id}`)}>Write a Review</button> :
                                <>
                                    <button type="button" onClick={() => history.push(`edit/review/${id}`)}>Edit</button>
                                    <button type="button" onClick={async() =>{
                                        await dispatch(deleteReview({ id, userId }))
                                        setReviewed(false)
                                        }}>Delete</button>
                                </>}

                        </div>}

                        <div className="singleDescription">
                            {description}
                        </div>


                        <div className="singleNavigationBox">
                            <div className="webAddress">
                                <a href={restaurant.webAddress}>{restaurant.webAddress}</a>
                            </div>
                            <div className="phoneNumber">
                                {restaurant.phoneNumber}
                            </div>
                            <div className="address">
                                <a href={mapsUrl}>{restaurant.address}</a>
                            </div>

                        </div>
                        <div className="locationHours">
                            <div id="locationDiv">
                                <iframe id="map"
                                    width="300" height="200" style={{ border: 0 }}
                                    loading="lazy"
                                    allowFullScreen
                                    src={mapsQuery}>
                                </iframe>
                            </div>
                            <div id='hoursDiv'>

                                <div id="days">
                                    <ul>
                                        {hours.map((ele, i) => {
                                            if (days[i] === today) {
                                                return (
                                                    <li id="today" key={i}>{days[i]}</li>
                                                )
                                            } else {
                                                return (
                                                    <li id="notToday" key={i}>{days[i]}</li>
                                                )
                                            }
                                        })}
                                    </ul>
                                </div>

                                <div id="hours">
                                    <ul>
                                        {hours.map((ele, i) => {
                                            if (days[i] === today) {
                                                return (
                                                    <li key={i}>{ele}&nbsp;&nbsp;&nbsp;{hoursTodayDivBottom}</li>
                                                )
                                            }
                                            return (
                                                <li key={i}>{ele}</li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>

                        </div>

                        <div className="singleAmenities">
                            <h2>Amenities</h2>
                            {amenitiesShow}
                            {!showMore && <button id="showMoreButton" type="button" onClick={() => setShowMore(true)}>Show More</button>}
                            {showMore && <button id="showLessButton" type="button" onClick={() => setShowMore(false)}>Show Less</button>}

                        </div>
                        <div className="singleReviews">
                            {Object.values(reviews).map((ele, i) => {
                                return (
                                    <div key={i} className="singleReviewComponent">
                                        <SingleReview reviewData={ele} />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                }

            </div>
        </div>


    )
}

export default RestaurantSpecific
