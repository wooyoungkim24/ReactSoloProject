// frontend/src/App.js
import React, { useState, useEffect, useContext } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch, useParams, useLocation } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import { NavLink } from 'react-router-dom';
import LoginFormPage from './components/LoginFormModal/LoginFormPage';
import Home from "./components/Home"
import RestaurantsPageCoordinates from "./components/RestaurantsPageCoordinates";
import RestaurantsPageLocation from "./components/RestaurantsPageLocation";
import RestaurantSpecific from "./components/RestaurantSpecific";
import CreateReviewForm from "./components/CreateReviewForm";
import EditReviewForm from "./components/EditReviewForm";
import { useQueryParam} from 'use-query-params';

function App() {

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/signup">
          <SignupFormPage />
        </Route>

        <Route path='/login'>
          <LoginFormPage />
        </Route>

        <Route exact path="/restaurants/coordinates/:coordinates">
          <RestaurantsPageCoordinates key={useLocation().pathname.split("/")[3]}/>
        </Route>

        <Route key={useLocation().pathname.split("/")[2]} exact path="/restaurants/location/:location">
          <RestaurantsPageLocation key={useLocation().pathname.split("/")[3]}/>
        </Route>

        {/* <Route exact path="/restaurants/location/:location" render={(props) => (
          <RestaurantsPageLocation key={props.matchparams.pageid} {...props} />)
        } /> */}

        <Route exact path="/restaurants/single/:id">
          <RestaurantSpecific />
        </Route>

        <Route exact path="/restaurants/single/new/review/:id">
          <CreateReviewForm />
        </Route>

        <Route exact path="/restaurants/single/edit/review/:id">
          <EditReviewForm />
        </Route>
      </Switch>

    </>
  );
}

export default App;
