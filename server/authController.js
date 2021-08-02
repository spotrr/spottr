const { OAuth2Client } = require('google-auth-library')
const CLIENT_ID = '62713775190-jaen743kigprmkr2hkg6gcg9cc2mj0dq.apps.googleusercontent.com';
const client = new OAuth2Client(CLIENT_ID);
const session = require('express-session');

const authController = {};

authController.authToken = (req, res, next) => {
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
    return next();
  }
  verify().catch(console.error);
};

authController.userCheck = (req, res, next) => {
  // Checks if this is a new user or not and redirects as applicable

  const { email } = req.locals.googleInfo;
  User.find({username: email}, (err, result) => {
    if (err) {
      res.locals.newUser = true;
      return next()
    }
    return next();
  })
};



module.exports = authController;
