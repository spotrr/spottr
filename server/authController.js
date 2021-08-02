const { OAuth2Client } = require('google-auth-library');
const CLIENT_ID =
  '62713775190-jaen743kigprmkr2hkg6gcg9cc2mj0dq.apps.googleusercontent.com';
const client = new OAuth2Client(CLIENT_ID);
const session = require('express-session');
const { User, Event } = require('./userModels');

const authController = {};

authController.authToken = async (req, res, next) => {
  // Google auth process based on Google's developer guide: Authentication on Backend server
  const { token } = req.body;
  const verify = async () => {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: CLIENT_ID,
    });
    const payload = ticket.getPayload();
    // SAVE PAYLOAD to res.locals; this includes name, email etc
    res.locals.googleInfo = payload;
    const { email, given_name, family_name } = res.locals.googleInfo;

    res.locals.newUser = false;
    const result = await User.find({ username: email });
    if (result.length === 0) {
      res.locals.newUser = true;
      User.create({
        username: email,
        first_name: given_name,
        last_name: family_name,
      });
    }

    // data to send back to client
    res.locals.data = {
      username: email,
      given_name: given_name,
      newUser: res.locals.newUser,
    };
  };
  await verify();
  return next();
};

module.exports = authController;
