import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route, useHistory, useParams } from 'react-router-dom';
import * as sessionActions from "../../store/session";
import { getBusiness, getBusinessAmenities } from "../../store/business"
import "./index.css"


function RestaurantSpecific() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const history = useHistory();
    const [isUserLoaded, setIsUserLoaded] = useState(false)
    const [isBusinessLoaded, setIsBusinessLoaded] = useState(false)
    const [isAmenitiesLoaded, setIsAmenitiesLoaded] = useState(false)
    const [showMore, setShowMore] = useState(false)

    const user = useSelector(state => {
        return state.sesssion
    })

    const restaurant = useSelector(state => {
        return state.businesses.single
    })
    const amenities = useSelector(state => {
        return state.businesses.amenities
    })

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }


    useEffect(() => {
        dispatch(sessionActions.restoreUser()).then(() => setIsUserLoaded(true))
    }, [dispatch])

    useEffect(() => {
        dispatch(getBusinessAmenities(id)).then(() => setIsAmenitiesLoaded(true))
    }, [isUserLoaded])

    useEffect(() => {
        dispatch(getBusiness(id)).then(() => setIsBusinessLoaded(true))
    }, [isAmenitiesLoaded])

    let images;
    let address;
    let encode;
    let mapsQuery;
    let hours;
    let mapsUrl;
    let description = "Come and Enjoy the Food!"
    if (isBusinessLoaded) {

        images = restaurant.imgs
        address = restaurant.address
        encode = encodeURIComponent(address)
        mapsQuery = `https://www.google.com/maps/embed/v1/place?q=${encode}&key=AIzaSyD1nYDZVEp2m6eIrrbFU-9Jc8X7tQUYAxI`
        mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encode}`
        hours = restaurant.hours
        if (restaurant.description) {
            description = restaurant.description;
        }
    }

    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

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

        <div className="singleRestaurantContainer">

            {isBusinessLoaded &&
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
                                <h1>Testing</h1>
                            </div>
                        </div>
                    </div>

                    {/* The single page navbar div */}
                    <div className="singleInternalNavBar">
                        <button type="button">Write a Review</button>
                    </div>

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
                                        return (
                                            <li key={i}>{days[i]}</li>
                                        )
                                    })}
                                </ul>
                            </div>

                            <div id="hours">
                                <ul>
                                    {hours.map((ele, i) => {
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
                        {!showMore &&<button id="showMoreButton" type="button" onClick={() => setShowMore(true)}>Show More</button>}
                        {showMore && <button id="showLessButton" type ="button" onClick={() => setShowMore(false)}>Show Less</button>}

                    </div>
                    <div className="singleReviews">

                    </div>
                </div>
            }

        </div>

    )
}

export default RestaurantSpecific
