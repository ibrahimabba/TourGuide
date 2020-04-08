import { SIGNUP_USER, LOGIN_USER } from '../actions/authActions';

const initialState = {
  userId: null,
  token: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_USER:
      return {
        userId: action.userSignupData.id,
        token: action.userSignupData.token
      };
    case LOGIN_USER:
      return {
        userId: action.userLoginData.id,
        token: action.userLoginData.token
      };
    default:
      return state;
  }
};

export default authReducer;
