import React, { useState } from 'react'

const SignUpForm = (props) => {

  const handleSubmit = (form) => {
    // POST TO SERVER
    fetch('http://localhost:3000/api/form/',
    {
      method: "POST",
      mode: "cors",
      body: '',
      headers: {
        'Access-Control-Allow-Origin':'*',
        "Content-Type": "application/json"
    }
  })
  }

    return (
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
}


export default SignUpForm;




