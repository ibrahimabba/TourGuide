import { InsertNewUser, fetchUsers } from '../../database/db';
import { Alert } from 'react-native';

export const SIGNUP_USER = 'SIGN_UP_USER';
export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';

let randGen = (min, max) => Math.floor(Math.random() * (max - min) + min);

export const signUp = (email, password) => {
  const token = randGen(1089, 10780);

  return async dispatch => {
    try {
      const dbData = await fetchUsers();

      const users = dbData.rows._array;
      const foundUser = users.find(user => user.email == email);

      if (foundUser) {
        // throw new Error('A user with this email already exist');
        Alert.alert('A user with this email already exist!', 'Please Signup with a different email.', [
          { text: 'Okay' },
        ]);
      } else {
        const dbData_1 = await InsertNewUser(email, password, token);
        dispatch({
          type: SIGNUP_USER,
          userSignupData: { id: dbData_1.insertId, token: token }
        });
      }
    } catch (err) {
      // console.log(err);
      throw err;
    }
  };
};

export const loginUser = (email, password) => {
  return async dispatch => {
    try {
      const dbData_2 = await fetchUsers();
      // console.log(dbData_2)

      const users = dbData_2.rows._array;

      const foundUser = users.find(
        user => user.email == email && user.password == password
      );

      if (foundUser) {
        dispatch({
          type: LOGIN_USER,
          userLoginData: { id: foundUser.id, token: foundUser.token }
        });
      } else {
        // throw new Error('Wrong email or password');
        Alert.alert('', 'Wrong Email or Password', [{
          text: 'Okay'
        }])
      }
    } catch (err) {
      // console.log(err);
      throw err;
    }
  };
};

export const logout = () => {
  return { type: LOGOUT_USER };
};

