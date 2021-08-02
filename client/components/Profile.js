import React from 'react';

const Profile = (props) => {
  return (
    <div>
      <h1>{props.username}</h1>
      <p>{`Favorite sport: ${props.sports}`}</p>
      <p>{`Description: ${props.description}`}</p>
      {/* <button onClick={() => props.logInUser('strom')}>change to strom</button> */}

    </div>
  );
};

export default Profile;

