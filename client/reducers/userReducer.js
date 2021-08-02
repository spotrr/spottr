import * as types from '../constants/actionTypes';

const initialState = {
  currentUser: '',
  loggedIn: false,
  isNewUser: false,
};

const userReducer = (state = initialState, action) => {
  let username;
  switch (action.type) {
    case types.USER_LOGGED_IN:
      username = action.payload;
      return {
        ...state,
        currentUser: username,
        loggedIn: true,
        isNewUser: false,
      };
    case types.USER_LOGGED_OUT:
      return {
        ...state,
        currentUser: '',
        loggedIn: false,
      };
    case types.IS_NEW_USER:
      return {
        ...state,
        currentUser: action.payload,
        isNewUser: true,
      };
    default: {
      return state;
    }
  }
};

export default userReducer;
