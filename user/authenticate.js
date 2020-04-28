import React, { useState, useEffect, useReducer, useCallback } from 'react';
import {
  ScrollView,
  View,
  KeyboardAvoidingView,
  StyleSheet,
  ActivityIndicator,
  Alert,
  TouchableOpacity,
  Text,
} from 'react-native';
import { useDispatch } from 'react-redux';

import Input from '../components/Input';
import Card from '../components/Card';
import Colors from '../constants/Colors';
import { loginUser, signUp } from '../store/actions/authActions';
import { ImageBackground } from 'react-native';

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';

const formReducer = (state, action) => {
  if (action.type === FORM_INPUT_UPDATE) {
    const updatedValues = {
      ...state.inputValues,
      [action.input]: action.value,
    };
    const updatedValidities = {
      ...state.inputValidities,
      [action.input]: action.isValid,
    };
    let updatedFormIsValid = true;
    for (const key in updatedValidities) {
      updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
    }
    return {
      formIsValid: updatedFormIsValid,
      inputValidities: updatedValidities,
      inputValues: updatedValues,
    };
  }
  return state;
};

const AuthScreen = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [isSignup, setIsSignup] = useState(false);
  const dispatch = useDispatch();

  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      email: '',
      password: '',
    },
    inputValidities: {
      email: false,
      password: false,
    },
    formIsValid: false,
  });

  useEffect(() => {
    if (error) {
      Alert.alert('An Error Occurred!', error, [{ text: 'Okay' }]);
    }
  }, [error]);

  const authHandler = async () => {
    if (!formState.formIsValid) {
      Alert.alert('No input!', 'Please fill the form.', [{ text: 'Okay' }]);
      return;
    }
    let action;
    if (isSignup) {
      action = signUp(
        formState.inputValues.email,
        formState.inputValues.password
      );
    } else {
      action = loginUser(
        formState.inputValues.email,
        formState.inputValues.password
      );
    }
    setError(null);
    setIsLoading(true);
    try {
      dispatch(action);
      setIsLoading(false);
    } catch (err) {
      setError(err.message);
    }
  };

  const inputChangeHandler = useCallback(
    (inputIdentifier, inputValue, inputValidity) => {
      dispatchFormState({
        type: FORM_INPUT_UPDATE,
        value: inputValue,
        isValid: inputValidity,
        input: inputIdentifier,
      });
    },
    [dispatchFormState]
  );

  const Image = require('../assets/cropped/crop1.jpg');

  return (
    <ImageBackground source={Image} style={styles.image}>
      <KeyboardAvoidingView
        behavior='height'
        keyboardVerticalOffset={50}
        style={styles.screen}
      >
        <View style={styles.auth}>
          <Card style={styles.authContainer}>
            <ScrollView>
              <Input
                id='email'
                label='E-Mail'
                keyboardType='email-address'
                required
                email
                autoCapitalize='none'
                errorText='Please enter a valid email address.'
                onInputChange={inputChangeHandler}
                initialValue=''
              />
              <Input
                id='password'
                label='Password'
                keyboardType='default'
                secureTextEntry
                required
                minLength={5}
                autoCapitalize='none'
                errorText='Please enter a valid password.'
                onInputChange={inputChangeHandler}
                initialValue=''
              />
              <View style={styles.buttonContainer}>
                {isLoading ? (
                  <ActivityIndicator size='small' color={Colors.primary} />
                ) : (
                  <TouchableOpacity activeOpacity={0.6} onPress={authHandler}>
                    <View style={styles.button}>
                      <Text style={styles.buttonText}>
                        {isSignup ? 'Sign Up' : 'Login'}
                      </Text>
                    </View>
                  </TouchableOpacity>
                )}
              </View>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  activeOpacity={0.6}
                  onPress={() => {
                    setIsSignup((prevState) => !prevState);
                  }}
                >
                  <View
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: '#ad9405f6',
                      padding: 2,
                      margin: 4,
                      borderRadius: 20,
                    }}
                  >
                    <Text style={styles.buttonText}>{`Switch to ${
                      isSignup ? 'Login' : 'Sign Up'
                    }`}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  auth: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
  authContainer: {
    width: '60%',
    maxWidth: 400,
    maxHeight: 400,
    padding: 20,
    backgroundColor: 'white',
    opacity: 0.8,
  },
  buttonContainer: {
    marginTop: 10,
    borderRadius: 10,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f4511e',
    padding: 2,
    borderRadius: 14,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default AuthScreen;
