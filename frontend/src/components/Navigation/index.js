import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';
import { Route, Switch } from "react-router-dom";
import Home from '../Home'
import "./Navigation.css"
import Search from '../Search';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);
  const history = useHistory();
  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <div className="loginButtonDiv">
            <NavLink id = "loginLink" to="/login">Log in</NavLink>
        </div>

        <div className="signupButtonDiv">
            <NavLink id ="signupLink" to="/signup">Sign Up</NavLink>
        </div>

      </>
    );
  }

  return (
    <div className="navBarSite">


      <div className="siteHomeButton">
          <i className="fab fa-yelp fa-5x" onClick={() => history.push("/")}></i>
      </div>

      <Search />
      <div className="sessionLinksDiv">
        {isLoaded && sessionLinks}
      </div>


    </div>
  );
}

export default Navigation;
