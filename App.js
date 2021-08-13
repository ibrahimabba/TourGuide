import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import * as Font from 'expo-font';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import placesReducers from './store/reducers/placesReducers';
import googlePlacesReducer from './store/reducers/googlePlacesReducers';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { enableScreens } from 'react-native-screens';
import authReducer from './store/reducers/authReducer';
import { init, init2 } from './database/db';
import AppLoading from 'expo-app-loading';
import Navigator from './Navigation/Navigator';
import ratings from './store/reducers/ratings';

init();
init2();

enableScreens();

const rootReducer = combineReducers({
  placesreducer: placesReducers,
  authReducer: authReducer,
  ratingReducer: ratings,
  googlePlacesReducer: googlePlacesReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
};

function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => {
          setFontLoaded(true);
        }}
        onError={console.warn}
      />
    );
  }
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
