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

// }
//  ]
{/* <div class="card">
  <img src="img.jpg" alt="John" style="width:100%">
  <h1>John Doe</h1>
  <p class="title">CEO & Founder, Example</p>
  <p>props.sports</p>
  <a href="#"><i class="fa fa-dribbble"></i></a>
  <a href="#"><i class="fa fa-twitter"></i></a>
  <a href="#"><i class="fa fa-linkedin"></i></a>
  <a href="#"><i class="fa fa-facebook"></i></a>
  <p><button>Contact</button></p>
</div> */}

// const userSchema = new Schema({
//   username: {
//     type: String,
//     required: true,
//   },
//   first_name: {
//     type: String,
//     required: true,
//   },
//   last_name: {
//     type: String,
//     required: true,
//   },
//   sports: [
//     {
//       type: String,
//       required: true,
//     },
//   ],
//   //are the [] brackets right in user_events?
//   user_events: [
//     {
//       type: Schema.Types.ObjectId,
//       ref: 'events',
//     },
//   ],
//   about: {
//     type: String,
//     required: true,
//   },
// });