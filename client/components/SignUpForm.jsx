import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as types from '../constants/actionTypes';
const SignUpForm = (props) => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const [description, setDescription] = useState('');
  const [sports, setSports] = useState({ basketball: false, soccer: false });
  const dispatch = useDispatch();
  const handleSubmit = (form) => {
    form.preventDefault();
    // Send form data to server so it can get saved into database
    const data = {
      username: currentUser,
      sports: Object.keys(sports).filter((elem) => sports[elem]),
      description: description,
    };
    // POST TO SERVER
    fetch('http://localhost:3000/api/form/', {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(data),
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.username === currentUser)
          dispatch({
            type: types.USER_LOGGED_IN,
            payload: data.username,
          });
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>List Sports or Actvities you enjoy</h2>

      <label>
        Basketball{' '}
        <input
          type='checkbox'
          id='basketball'
          checked={sports.basketball}
          onChange={() =>
            setSports({ ...sports, basketball: !sports.basketball })
          }
        />
      </label>

      <label>
        Soccer{' '}
        <input
          type='checkbox'
          id='soccer'
          checked={sports.soccer}
          onChange={() => setSports({ ...sports, soccer: !sports.soccer })}
        />
      </label>

      <input type='submit' value='Submit' />

      <label>
        Describe yourself{' '}
        <input
          type='text'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
    </form>
  );
};

export default SignUpForm;
