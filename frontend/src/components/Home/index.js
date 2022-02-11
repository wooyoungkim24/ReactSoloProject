import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoginFormPage from '../../components/LoginFormModal/LoginFormPage';
import SignupFormPage from "../../components/SignupFormPage";
import * as sessionActions from "../../store/session";
import Navigation from "../../components/Navigation";
import { NavLink } from 'react-router-dom';
import { Route, Switch } from "react-router-dom";
import Search from '../Search'
import { clearBusinesses, getAllBusinesses } from "../../store/business";
import { getAllReviews } from "../../store/review";
import "./index.css"


function Home() {
    const dispatch = useDispatch();
    const [isLoaded, setIsLoaded] = useState(false);
    const [isAllLoaded, setIsAllLoaded] = useState(false)
    const [imageLoaded, setImageLoaded] = useState("")
    const [loggedIn, setLoggedIn] = useState(false)

    const [cOneLoaded, setCOneLoaded] = useState([])
    const [cTwoLoaded, setCTwoLoaded] = useState([])
    const [cThreeLoaded, setCThreeLoaded] = useState([])

    const businesses = useSelector(state => {
        return state.businesses.all
    })
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    const reviews = useSelector(state => {
        return state.reviews.all
    })
    const sessionId = useSelector(state =>{
        return state.session.user
    })
    useEffect(async () => {
        await dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true))
            .then(() => dispatch(clearBusinesses))
            .then(() => dispatch(getAllBusinesses()))
            .then(() => dispatch(getAllReviews())).then(() => setIsAllLoaded(true))
    }, [dispatch]);

    const didMountRef = useRef(0);

    let topImage;
    let columnOne = [];
    let columnTwo = []
    let columnThree = [];
    useEffect(() => {
        let bigEnough = false;
        if (didMountRef.current === 1) {

            let length = businesses.length;
            let singleBusinessPick = businesses[getRandomInt(length)].imgs
            topImage = singleBusinessPick[getRandomInt(3)]
            setImageLoaded(topImage)
            // if(session){
            //     if(session.id){
            //         setLoggedIn(true)
            //     }

            // }

            let reviewPop = [...reviews];
            let iter = true;
            while (iter) {
                let length = 50;
                for (let i = 0; i < 4; i++) {
                    let pop = reviewPop.splice(getRandomInt(length), 1)
                    columnOne.push(...pop)
                    length--;
                }
                for (let i = 0; i < 4; i++) {
                    let pop = reviewPop.splice(getRandomInt(length), 1)
                    columnTwo.push(...pop)
                    length--;
                }
                for (let i = 0; i < 4; i++) {
                    let pop = reviewPop.splice(getRandomInt(length), 1)
                    columnThree.push(...pop)
                    length--;
                }
                iter = false;
            }
            // console.log(columnOne)
            setCOneLoaded(columnOne)

            setCTwoLoaded(columnTwo)
            setCThreeLoaded(columnThree)
        }
        didMountRef.current += 1;
    }, [isAllLoaded])
    const demoLogin = async () =>{
        await dispatch(sessionActions.login({
            credential: "demo@user.io",
            password: "password"
        }))
    }

    return (
        // {isAllLoaded && }
        <div className="homeContainer">
            {!sessionId && <button type="button" onClick={demoLogin}> Demo User </button>}
            {isAllLoaded &&
                <>
                    <div className="homeTop">
                        <img src={imageLoaded}></img>
                        <div className="navigationHome">
                            <Navigation isLoaded={isLoaded} />
                        </div>
                        <div className="homeLogoLogo">
                            <i className="fab fa-yelp fa-6x"></i>
                        </div>
                        <Search />
                    </div>
                    <div className="homePageReviewContainer">
                        {/* Organize review by most recent *future* */}
                        <div className="homePageReviews">
                            <div id="reviewColumnOne">
                                {/* {console.log(cOneLoaded)} */}
                                {cOneLoaded.map((ele, i) => {
                                    const rating = ele.rating;
                                    const stars = []
                                    for (let i = 0; i < rating; i++) {
                                        stars.push(
                                            <div key={i} id="fullStars">
                                                <i className="fas fa-star"></i>
                                            </div>
                                        )
                                    }
                                    for (let i = rating; i < 5; i++) {
                                        stars.push(
                                            <div key={i} id="emptyStars">
                                                <i className="fas fa-star"></i>
                                            </div>
                                        )
                                    }
                                    return (
                                        <div key={i} id="homeReviewComponentOne">
                                            <div id="userInformationPreview">
                                                {ele.User.username}
                                            </div>
                                            <div id="restaurantNamePreview">
                                                {ele.Business.title}
                                            </div>
                                            <div id="restaurantRatingPreview">
                                                {stars}
                                            </div>
                                            <div id="reviewTitlePreview">
                                                {ele.title}
                                            </div>
                                            <div id="reviewTextPreview">
                                                {ele.reviewText}
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            <div id="reviewColumnTwo">
                                {cTwoLoaded.map((ele, i) => {
                                    const rating = ele.rating;
                                    const stars = []
                                    for (let i = 0; i < rating; i++) {
                                        stars.push(
                                            <div key={i} id="fullStars">
                                                <i className="fas fa-star"></i>
                                            </div>
                                        )
                                    }
                                    for (let i = rating; i < 5; i++) {
                                        stars.push(
                                            <div key={i} id="emptyStars">
                                                <i className="fas fa-star"></i>
                                            </div>
                                        )
                                    }
                                    return (
                                        <div key={i} id="homeReviewComponentTwo">
                                            <div id="userInformationPreview">
                                                {ele.User.username}
                                            </div>
                                            <div id="restaurantNamePreview">
                                                {ele.Business.title}
                                            </div>
                                            <div id="restaurantRatingPreview">
                                                {stars}
                                            </div>
                                            <div id="reviewTitlePreview">
                                                {ele.title}
                                            </div>
                                            <div id="reviewTextPreview">
                                                {ele.reviewText}
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            <div id="reviewColumnThree">
                                {cThreeLoaded.map((ele, i) => {
                                    const rating = ele.rating;
                                    const stars = []
                                    for (let i = 0; i < rating; i++) {
                                        stars.push(
                                            <div key={i} id="fullStars">
                                                <i className="fas fa-star"></i>
                                            </div>
                                        )
                                    }
                                    for (let i = rating; i < 5; i++) {
                                        stars.push(
                                            <div key={i} id="emptyStars">
                                                <i className="fas fa-star"></i>
                                            </div>
                                        )
                                    }
                                    return (
                                        <div key={i} id="homeReviewComponentThree">
                                            <div id="userInformationPreview">
                                                {ele.User.username}
                                            </div>
                                            <div id="restaurantNamePreview">
                                                {ele.Business.title}
                                            </div>
                                            <div id="restaurantRatingPreview">
                                                {stars}
                                            </div>
                                            <div id="reviewTitlePreview">
                                                {ele.title}
                                            </div>
                                            <div id="reviewTextPreview">
                                                {ele.reviewText}
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>

                </>

            }


        </div>
    );
}

export default Home;
