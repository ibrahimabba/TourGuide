import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStore, combineReducers } from 'redux';
import placesReducers from './store/placesReducers';
import { Provider } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import FavoriteNav from './screens/FavoriteNav';
import HomeScreen from './screens/HomeScreen';
import { enableScreens } from 'react-native-screens';

enableScreens();

const rootReducer = combineReducers({
  placesreducer: placesReducers
});

const store = createStore(rootReducer);

const Tab = createMaterialBottomTabNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Places') {
                iconName = 'ios-pin';
              } else if (route.name === 'Favorite') {
                iconName = 'ios-heart';
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={25} color={color} />;
            }
          })}
          shifting={true}
          // activeColor='#f0edf6'
          // inactiveColor='#3e2465'
          barStyle={{ backgroundColor: '#f4511e' }}
        >
          <Tab.Screen name='Places' component={HomeScreen} />
          <Tab.Screen name='Favorite' component={FavoriteNav} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
