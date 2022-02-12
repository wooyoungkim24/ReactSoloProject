
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route, useHistory, useParams } from 'react-router-dom';
import * as sessionActions from "../../store/session";
import "./index.css"
import { createReview } from "../../store/review"
import { getBusiness } from "../../store/business"
import Navigation from '../Navigation';

function CreateReviewForm() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const [title, setTitle] = useState("");
    const [reviewText, setReviewText] = useState('');
    const [rating, setRating] = useState(1);
    const [isLoaded, setIsLoaded] = useState(false)

    const updateTitle = (e) => setTitle(e.target.value);
    const updateReviewText = (e) => setReviewText(e.target.value);
    const updateRating = (e) => {
        console.log(e.target.value)
        setRating(e.target.value);
    }
    const userId = useSelector(state => {
        if (state.session.user) {
            return state.session.user.id
        }
        else {
            return null;
        }
    })
    const restaurant = useSelector(state => {
        return state.businesses.single
    })


    useEffect(async () => {
        await dispatch(sessionActions.restoreUser())
        await dispatch(getBusiness(id)).then(() => setIsLoaded(true))
    }, [dispatch])


    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            rating,
            title,
            reviewText,
            id,
            userId
        };
        let createdReview = await dispatch(createReview(payload));
        if (!createdReview.message) {
            //   setErrorMessages({});
            history.goBack();
            //   hideForm();
        } else {
            console.log(createdReview)
        }


        // } catch (error) {
        //   if (error instanceof ValidationError) setErrorMessages(error.errors);
        //   // If error is not a ValidationError, add slice at the end to remove extra
        //   // "Error: "
        //   else setErrorMessages({ overall: error.toString().slice(7) })
        // }

    };








    return (
        <div className="createReviewContainer">
            <Navigation isLoaded={isLoaded} />
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
                <button type="submit" onClick={handleSubmit}>Post Review</button>

            </div>

        </div>
    )
}

export default CreateReviewForm
