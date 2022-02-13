import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import LoginFormPage from '../../components/LoginFormModal/LoginFormPage';
import SignupFormPage from "../../components/SignupFormPage";
import * as sessionActions from "../../store/session";
import Navigation from "../../components/Navigation";
import { useHistory } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Route, Switch } from "react-router-dom";
// import { ValidationError } from '../utils/validationError';
import { getBusinessesLocation, getCities } from "../../store/business"
import AutoComplete from "../AutoComplete";


function Search() {
    const dispatch = useDispatch();

    // const [errorMessages, setErrorMessages] = useState({});
    const [coordinates, setCoordinates] = useState("");
    const [isError, setIsError] = useState(false);
    const [cities, setCities] = useState([]);
    const history = useHistory();

    const updateCoordinates = (e) => setCoordinates(e.target.value);

    useEffect(() => {
        dispatch(getCities()).then((citiesReturn) => setCities(citiesReturn[0]))
        if (isError) {
            document.addEventListener('click', handleOutsideClick);
        }
        return (() => {
            document.removeEventListener('click', handleOutsideClick);
        })
    }, [dispatch, isError]);

    const errorSeachCoord = (
        <div className="errorSearchDiv">
            Latitude and Longitude not Formatted Properly
        </div>
    )
    const handleOutsideClick = () => {
        // Leave dropdown visible as long as input is focused
        setIsError(false)
    }
    const handleSubmit1 = async (e) => {
        e.preventDefault();

        // const payload = {
        //   coordinates
        // };

        // let foundBusinesses;
        // // try {
        //   foundBusinesses = await dispatch(getBusinessesLocation(payload));
        // } catch (error) {
        //   if (error instanceof ValidationError) setErrorMessages(error.errors);
        //   // If error is not a ValidationError, add slice at the end to remove extra
        //   // "Error: "
        //   else setErrorMessages({ overall: error.toString().slice(7) })
        // }
        // if (foundBusinesses) {
        //   setErrorMessages({});
        if (!(/^\d+\.\d+_\d+\.\d+$/.test(coordinates))) {
            setIsError(true);
        } else {
            history.push(`/restaurants/coordinates/${coordinates}`);
        }

        // }
    };



    return (
        <>
            <div className="searchBar">
                <div className="searchAndError">

                    <form className="formSearchBar" onSubmit={handleSubmit1}>
                        <input
                            type="search"
                            placeholder="latitude_longitude"
                            required
                            value={coordinates}
                            onChange={updateCoordinates}
                        />
                        <button type="submit">
                            Go
                        </button>
                    </form>
                    {isError && errorSeachCoord}
                </div>

                <AutoComplete names={cities} />
            </div>
        </>
    );
}

export default Search;
