import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route, useHistory, useParams } from 'react-router-dom';
import * as sessionActions from "../../store/session";
import {getBusiness} from "../../store/business"

function RestaurantSpecific() {
    const dispatch = useDispatch();
    const {id} = useParams();
    const history = useHistory();
    const [isLoaded, setIsLoaded] = useState(false)


    const user = useSelector(state=> {
        return state.sesssion
    })

    const restaurant = useSelector(state =>{
        return state.businesses.single
    })




    useEffect(() =>{
        dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true))
    }, [dispatch])


    useEffect(() =>{
        dispatch(getBusiness(id))
    }, [dispatch, isLoaded])


    return (
        <div className="singleRestaurantContainer">
            <div className="singlePageImage">

            </div>
            <div className="singleInternalNavBar">

            </div>
            <div className="singleNavigationBox">

            </div>
            <div className="singleHours">

            </div>
            <div className ="singleAmenities">

            </div>
            <div className="singleReviews">

            </div>

        </div>
    )
}

export default RestaurantSpecific
