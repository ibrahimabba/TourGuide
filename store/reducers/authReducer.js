import { SIGNUP_USER, LOGIN_USER, LOGOUT_USER, RESTORE_TOKEN } from '../actions/authActions';

const initialState = {
  token: null,
  laoding: true
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
    case RESTORE_TOKEN:
      return {
        UserId: action.tokenData.id,
        token: action.tokenData.token,
        NewPassword: action.tokenData.newpassword
      }
    case LOGOUT_USER:
      return initialState;
    default:
      return state;
  }
};

export default authReducer;
