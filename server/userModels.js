const mongoose = require('mongoose');

const MONGO_URI =
  'mongodb+srv://selilac:database@cluster0.mchq6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose
  .connect(MONGO_URI, {
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'spottr',
  })
  .then(() => console.log('Connected to Mongo DB.'))
  .catch((err) => console.log(err));

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  // sports: [
  //   {
  //     type: String,
  //     required: true,
  //   },
  // ],
  // //are the [] brackets right in user_events?
  // event_id: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: 'event',
  //   },
  // ],
  // about: {
  //   type: String,
  //   required: true,
  // },
});

const User = mongoose.model('user', userSchema);

const eventSchema = new Schema({
  event_name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  sports: {
    type: String,
    required: true,
  },
  // user_id: {
  //   type: Schema.Types.ObjectID,
  //   ref: 'user',
  // },
});

const Event = mongoose.model('event', eventSchema);

module.exports = { User, Event };
