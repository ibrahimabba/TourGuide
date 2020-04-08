import React, { useState } from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import FavoriteNav from '../screens/FavoriteNav';
import { Ionicons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import Authenticate from '../user/authenticate';
import { useSelector } from 'react-redux';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = props => {
  const token = useSelector(state => state.authReducer.token);

  if (token == null) {
    return <Authentication />;
  }

  return (
    <Drawer.Navigator
      screenOptions={({ route }) => ({
        drawerIcon: () => {
          return <Ionicons name='md-home' size={25} color='#f4511e' />;
        }
      })}
    >
      <Drawer.Screen name='Places' component={TabNavigator} />
    </Drawer.Navigator>
  );
};

const TabNavigator = props => {
  return (
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
  );
};

const Authentication = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }}
    >
      <Stack.Screen name='Authenticate' component={Authenticate} />
    </Stack.Navigator>
  );
};

export default DrawerNavigator;
