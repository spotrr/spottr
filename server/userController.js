const { User, Event } = require('./userModels');

const userController = {};

userController.getUser = async (req, res, next) => {
  try {
    const userDocs = await User.find({ _id });
    res.locals.user = userDocs;
    return next();
  } catch (err) {
    return next({
      log: `userController.getUser: ERROR: ${err}`,
      message: { err: 'Error occured in userController.getUser' },
    });
  }
};

userController.getEvent = async (req, res, next) => {
  try {
    const _id = req.query.id;
    const eventDoc = await Event.find({});
    res.locals.event = eventDoc;
    return next();
  } catch (err) {
    return next({
      log: `userController.getEvent: ERROR: ${err}`,
      message: { err: 'Error occured in userController.getEvent' },
    });
  }
};

userController.createEvent = async (req, res, next) => {
  try {
    const event = await Event.create({
      typeofEvent: req.body.typeofEvent,
      date: req.body.date,
      description: req.body.description,
    });
    return next();
  } catch (err) {
    return next({
      log: `userController.createEvent: ERROR: ${err}`,
      message: { err: 'Error occured in userController.createEvent' },
    });
  }
};

module.exports = userController;
