import React, { useState } from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import FavoriteNav from '../screens/FavoriteNav';
import { Ionicons } from '@expo/vector-icons';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItems, DrawerItemList } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import Authenticate from '../user/authenticate';
import { useSelector, useDispatch } from 'react-redux';
import { Button, View } from 'react-native';
import { logout } from '../store/actions/authActions';
import UserProfile from '../user/UserProfile';


const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();
const Drawer = createDrawerNavigator();


const DrawerNavigator = () => {
  const token = useSelector(uId => uId.authReducer.token)
  const dispatch = useDispatch()

  if (token == null) {
    return <Authentication />;
  }

  return (
    <Drawer.Navigator
      drawerContent={ props => <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <View style={{flex:1, paddingTop:20}}>
      <Button title='logout' onPress={() => {
        dispatch(logout())
      }} />
      </View>
      
    </DrawerContentScrollView>}
      screenOptions={({ route }) => ({
        // drawerIcon: () => {
        //   return <Ionicons name='md-home' size={25} color='#f4511e' />;
        // }
      })}
    >
      <Drawer.Screen name='Places' component={TabNavigator} />
      <Drawer.Screen name='User Profile' component={UserProfile} />
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

const Authentication = ({navigation}) => {
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