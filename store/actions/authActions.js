import { InsertNewUser, fetchUser } from '../../database/db';

export const SIGNUP_USER = 'SIGN_UP_USER';
export const LOGIN_USER = 'LOGIN_USER';

export const signUp = (email, password) => {
  return async dispatch => {
    try {
      const dbData_1 = await InsertNewUser(email, password);

      dispatch({
        type: SIGNUP_USER,
        userSignupData: { id: dbData_1.insertId }
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
};

export const loginUser = (email, password) => {
  return async dispatch => {
    try {
      const dbData_2 = await fetchUser();

      dispatch({
        type: LOGIN_USER,
        userLoginData: { id: dbData_2.rows._array }
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
};
