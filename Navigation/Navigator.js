import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import FavoriteNav from '../screens/FavoriteNav';
import { Ionicons } from '@expo/vector-icons';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList
} from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import Authenticate from '../user/authenticate';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/actions/authActions';
import WelcomeScreen from '../components/WelcomeScreen';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();
const Drawer = createDrawerNavigator();
const welcome = createStackNavigator()


// const WelcomeNavigator = props => {
//   const token = useSelector(state => state.authReducer.token);
//   // const loading = useSelector(load => load.authReducer.loading)

//   return(
//     <welcome.Navigator
    
//     >
//       <welcome.Screen name='welcome' component={WelcomeScreen} /> 
//     </welcome.Navigator>
//   )
// }

const DrawerNavigator = props => {
  const token = useSelector(state => state.authReducer.token);
    const loading = useSelector(load => load.authReducer.loading)
  if (token == null) {
    return <Authentication />;
  }

  const dispatch = useDispatch();
  return (
    <Drawer.Navigator
      drawerContent={props => (
        <DrawerContentScrollView {...props}>
          <DrawerItemList {...props} />
          <View style={{ flex: 1, padding: 50 }}>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => dispatch(logout())}
            >
              <View style={styles.button}>
                <Text style={styles.buttonText}>Logout</Text>
              </View>
            </TouchableOpacity>
          </View>
        </DrawerContentScrollView>
      )}
      screenOptions={({ route }) => ({
        drawerIcon: () => {
          let iconName, iconColor
          if(route.name === 'Home'){
            iconName = 'md-home'
            iconColor='#175b64f8'
          }else if(route.name === 'Places'){
            iconName = 'md-list'
            iconColor='#d1c51cf6' 
          }
          return <Ionicons name={iconName} size={25} color={iconColor} />;
        }
      })}
    >
      {!loading &&
      <Drawer.Screen name='Home' component={WelcomeScreen} />}
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

          return <Ionicons name={iconName} size={25} color={color} />;
        }
      })}
      shifting={true}
      // activeColor='#f0edf6'
      // inactiveColor='#3e2465'
      barStyle={{ backgroundColor: '#1e6885d2' }}
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
          backgroundColor: '#9b3016f6'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }}
    >
      <Stack.Screen name='Welcome' component={Authenticate} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0e6277f6',
    padding: 2,
    borderRadius: 14
  },
  buttonText: {
    color: 'white',
    fontSize: 18
  }
});

export default DrawerNavigator;