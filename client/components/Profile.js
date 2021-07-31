import React from 'react';

const Profile = (props) => {
  return (
    <div>
      <h1>{props.username}</h1>
      <button onClick={() => props.logInUser('strom')}>change to strom</button>
    </div>
  );
};

export default Profile;
