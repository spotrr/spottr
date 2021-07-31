const express = require('express');
const path = require('path');
const cors = require('cors')
const app = express();
const index = path.join(__dirname, '../client/index.html');
const PORT = 3000;
const { OAuth2Client } = require('google-auth-library')
const CLIENT_ID = '62713775190-jaen743kigprmkr2hkg6gcg9cc2mj0dq.apps.googleusercontent.com';
const client = new OAuth2Client(CLIENT_ID)

app.use(cors());

app.use('/dist', express.static(path.join(__dirname, '../dist')));
app.use(express.static(path.join(__dirname, '..', '/client/')));

app.use(express.json());

app.get('/', (req, res) => {
  return res.status(200).sendFile(index);
});

app.get('/main', (req, res) => {
  return res.status(200).sendFile(index);
});

// GOOGLE AUTH

// Step 1: send access token to Google
//client sends access token in body
//create ticket and use google auth library to authenticate token

app.post('/google/auth', (req, res) => {

  const { profile }  = req.body;

  // const ticket = client.verifyIdToken({
  //   idToken: token,
  //   audience: CLIENT_ID
  // });

  // TICKET PAYLOAD GIVES US USER INFORMATION
  //**** SEND THIS INFORMATION TO DATABASE ***//
  // const { name, email } = ticket.getPayload();
  console.log(profile);
  User.create({username:profile.email, first_name:profile.givenName, last_name:profile.familyName})
}
)



app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;
