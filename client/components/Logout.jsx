import React, { useState } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { useSelector, useDispatch } from 'react-redux';
import * as types from '../constants/actionTypes';


// Created Client ID for project on Google console
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID

const GoogleButton = (props) => {

  const logout = (googleData) => {
    alert("Logged out!");
  };

  return (
    <div>
      <GoogleLogout
        clientId={CLIENT_ID}
        buttonText="Logout"
        onLogoutSuccess={logout}
      >
      </GoogleLogout>
    </div>
  );
};

export default GoogleButton;
