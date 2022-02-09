// frontend/src/App.js
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import { NavLink } from 'react-router-dom';
import LoginFormPage from './components/LoginFormModal/LoginFormPage';
import Home from  "./components/Home"
import RestaurantsPageCoordinates from "./components/RestaurantsPageCoordinates";
import RestaurantsPageLocation from "./components/RestaurantsPageLocation";
import RestaurantSpecific from "./components/RestaurantSpecific";

function App() {

  return (
    <>
      <Route exact path="/">
        <Home/>
      </Route>

      <Route path="/signup">
        <SignupFormPage />
      </Route>

      <Route path='/login'>
        <LoginFormPage />
      </Route>

       <Route exact path= "/restaurants/coordinates/:coordinates">
        <RestaurantsPageCoordinates/>
      </Route>

      <Route exact path ="/restaurants/location/:location">
        <RestaurantsPageLocation/>
      </Route>

      <Route exact path="/restaurants/single/:id">
        <RestaurantSpecific/>
      </Route>

      {/* <Route path="/review">
        <ReviewFormPage/>
      </Route> */}
    </>
  );
}

export default App;
