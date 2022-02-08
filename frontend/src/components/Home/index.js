import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import LoginFormPage from '../../components/LoginFormModal/LoginFormPage';
import SignupFormPage from "../../components/SignupFormPage";
import * as sessionActions from "../../store/session";
import Navigation from "../../components/Navigation";
import { NavLink } from 'react-router-dom';
import { Route, Switch } from "react-router-dom";
import Search from '../Search'




function Home() {
    const dispatch = useDispatch();
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
    }, [dispatch]);


    return (
        <>
            <Navigation isLoaded={isLoaded} />
            <Search />
        </>
    );
}

export default Home;
