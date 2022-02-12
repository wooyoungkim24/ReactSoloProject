
import { useEffect, useState, useLayoutEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route, useHistory, useParams } from 'react-router-dom';
import * as sessionActions from "../../store/session";

import {editReview, getReviewsSingle} from "../../store/review"
import {getBusiness} from "../../store/business"
import Navigation from '../Navigation';


function EditReviewForm() {

    const {id} = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const [title, setTitle] = useState("");
    const [reviewText, setReviewText] = useState('');
    const [rating, setRating] = useState(1);
    const [prevReview, setPrevReview] = useState({})
    const [reviewsLoaded, setReviewsLoaded] = useState(false)
    const updateTitle = (e) => setTitle(e.target.value);
    const updateReviewText = (e) => setReviewText(e.target.value);
    const updateRating = (e) => {
        // console.log(e.target.value)
        setRating(e.target.value);
    }
    const userId = useSelector(state =>{
        if(state.session.user){
           return state.session.user.id
        }
        else{
            return null;
        }
    })
    const restaurant = useSelector(state =>{
        return state.businesses.single
    })


    const review = useSelector(state=>{
        return state.reviews.single
    })

    useEffect(async() =>{
        // dispatch(sessionActions.restoreUser())
        // dispatch(getBusiness(id))
        // dispatch(getReviewsSingle(id)).then(() => setReviewsLoaded(true))
        await dispatch(sessionActions.restoreUser())
            .then(() =>dispatch(getBusiness(id)))
            .then(() =>dispatch(getReviewsSingle(id)))
            .then(() =>setReviewsLoaded(true))
    },[dispatch])

    const didMountRef = useRef(false);
    useEffect (() =>{
        if(didMountRef.current){
            let findPrevReviewArray = Object.values(review)

            let findPrevReview;
            findPrevReviewArray.forEach(ele =>{
            if(ele.userId ===userId){
                findPrevReview = ele;
            }
        })

        setPrevReview(findPrevReview)
        }
        didMountRef.current = true;

    }, [reviewsLoaded])

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
          rating,
          title,
          reviewText,
          id,
          userId
        };
        console.log('test to here', payload)
        let editedReview = await dispatch(editReview(payload));
        if(editedReview){
           history.goBack();
        }
    }
    const ratingRef = useRef(null)
    const titleRef = useRef(null)
    const reviewTextRef = useRef(null)

    return (
        // <div className="editReviewContainer">
        //     <NavLink isLoaded={reviewsLoaded}/>
        //     <div className="reviewEditRestaurantName">
        //         <h1>{restaurant.title}</h1>
        //     </div>
        // {/* Dont know how to make it controlled so it can have default values *future* */}
        //     <form className="editReviewForm" onSubmit={handleSubmit}>

        //         <select value ={rating} onChange={updateRating} id="starReviewRating">
        //             <option value="">--Rate this Restaurant!--</option>
        //             <option value={1}>Not Good</option>
        //             <option value={2}>Ok</option>
        //             <option value={3}>Good</option>
        //             <option value={4}>Great</option>
        //             <option value={5}>Fantastic</option>
        //         </select>

        //         <input
        //             type="text"
        //             placeholder={prevReview.title}
        //             required
        //             value={title}
        //             onChange={updateTitle}
        //         />
        //         <textarea
        //             placeholder = {prevReview.reviewText}
        //             required
        //             value = {reviewText}
        //             onChange={updateReviewText}
        //         />
        //         <button type="submit">Submit</button>
        //     </form>
        // </div>
        <div className="createReviewContainer">
            <Navigation isLoaded={reviewsLoaded} />
            <div className="createReviewBody">
                <div className="reviewCreateRestaurantName">
                    <h1>{restaurant.title}</h1>
                </div>
                <div className="createReviewFormContainer">
                    <form className="createReviewForm" >
                        {/* star rating can't figure out *future* */}
                        {/* <ul className="rate-area">
                    <input type="radio" id="5-star" value= "5"/>
                    <label htmlFor="5-star" title="Amazing">5 stars</label>
                    <input type="radio" id="4-star" value="4"/>
                    <label htmlFor="4-star" title="Good">4 stars</label>
                    <input type="radio" id="3-star" value="3"/>
                    <label htmlFor="3-star" title="Average">3 stars</label>
                    <input type="radio" id="2-star" value="2"/>
                    <label htmlFor="2-star" title="Not Good">2 stars</label>
                    <input type="radio" id="1-star" value="1"/>
                    <label htmlFor="1-star" title="Bad">1 star</label>

                </ul> */}
                        <div className="topOfCreateReviewForm">
                            <input
                                id="reviewTitleInput"
                                type="text"
                                placeholder="Review Title"
                                required
                                value={title}
                                onChange={updateTitle}
                            />
                            <div id="reviewRatingInputDiv">
                                <select value={rating} onChange={updateRating} id="starReviewRating">
                                    <option value="">--Rate this Restaurant!--</option>
                                    <option value={1}>1--Not Good</option>
                                    <option value={2}>2--Ok</option>
                                    <option value={3}>3--Good</option>
                                    <option value={4}>4--Great</option>
                                    <option value={5}>5--Fantastic</option>
                                </select>
                            </div>

                        </div>

                        <textarea
                            placeholder="Enter your review here"
                            required
                            value={reviewText}
                            onChange={updateReviewText}
                        />

                    </form>
                </div>
                <button type="submit" onClick={handleSubmit}>Edit Review</button>

            </div>

        </div>
    )
}






export default EditReviewForm
