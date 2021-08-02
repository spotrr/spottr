const { User, Event } = require('./userModels');

const userController = {};

userController.updateUser = async (req, res, next) => {
  // takes in form data and updates the User document
  const { username, sports, description } = req.body;
  console.log(sports);
  // let update = await User.findOneAndUpdate({username: username}, {sports: sport, about: description}, {new: true});
  // console.log(update);
  return next();
};

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
    // console.log(res.locals.googleInfo.email);
    const event = await Event.create({
      typeofEvent: req.body.typeofEvent,
      // date: req.body.date,
      description: req.body.description,
    });

    res.locals.event = event
    console.log('event1', res.locals.event)
    console.log('create event works')
    return next();
  } catch (err) {
    return next({
      log: `userController.createEvent: ERROR: ${err}`,
      message: { err: 'Error occured in userController.createEvent' },
    });
  }
};


userController.likeEvent = async (req, res, next) => {
  try {
    const { username, id } = req.body; 
    // const fakeUser = "victoriousvan"
    console.log('eventID/uesrname in likeevent', id, username)
    const doc = await Event.findOneAndUpdate({ _id: id }, { $push: {likes: username}});
    return next();
    // console.log(doc)
  } catch (e) {
    return next({
      log: `userController.createEvent: ERROR: ${err}`,
      message: { err: 'Error occured in userController.likeEvent' },
    });
  }
  

  
};

module.exports = userController;
