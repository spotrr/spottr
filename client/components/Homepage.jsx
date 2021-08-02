import React, { useState } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { useSelector, useDispatch } from 'react-redux';
import * as types from '../constants/actionTypes';
// Created Client ID for project on Google console
const CLIENT_ID =
  '62713775190-jaen743kigprmkr2hkg6gcg9cc2mj0dq.apps.googleusercontent.com';

const GoogleButton = (props) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [accessToken, setAccessToken] = useState('');
  const dispatch = useDispatch();
  // log in function ==> updates state and sends access token to backend
  const login = (googleData) => {
    setLoggedIn(true);
    window.sessionStorage.setItem('access_token', googleData.accessToken);
    fetch('http://localhost:3000/api/google/auth', {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify({
        token: googleData.tokenId,
      }),
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // check if user is new or not and change state accordingly
        if (data.newUser)
          dispatch({
            type: types.IS_NEW_USER,
            payload: data.username,
          });
        else
          dispatch({
            type: types.USER_LOGGED_IN,
            payload: data.username,
          });
      });
  };

  const handleLoginFailure = (response) => {
    console.log(response);
  };

  // what is single host origin
  return (
    <div>
      <GoogleLogin
        clientId={CLIENT_ID}
        buttonText='Login with Google'
        onSuccess={login}
        onFailure={handleLoginFailure}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
};

export default GoogleButton;
