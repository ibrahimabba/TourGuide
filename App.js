import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import * as Font from 'expo-font';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import placesReducers from './store/reducers/placesReducers';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { enableScreens } from 'react-native-screens';
import DrawerNavigator from './Navigation/Navigator';
import authReducer from './store/reducers/authReducer';
import { init } from './database/db';
import { AppLoading } from 'expo';

init()
  .then(() => {
    console.log('initialized database');
  })
  .catch(err => {
    console.log('initializing db failed');
    console.log(err);
  });
enableScreens();

const rootReducer = combineReducers({
  placesreducer: placesReducers,
  authReducer: authReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
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
      />
    );
  }
  return (
    <Provider store={store}>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
