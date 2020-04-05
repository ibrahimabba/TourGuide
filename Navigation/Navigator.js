import React, { useState } from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import FavoriteNav from '../screens/FavoriteNav';
import { Ionicons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Authenticate from '../user/authenticate';

const Tab = createMaterialBottomTabNavigator();
const Drawer = createDrawerNavigator()


const DrawerNavigator = props => {
    const [isLoading, setIsLoading] = useState(null)
    const [userToken, setUserToken] = useState(false)

    return (
        <Drawer.Navigator
            screenOptions={({ route }) => ({
                drawerIcon: () => {
                    return <Ionicons name='md-home' size={25} color='teal' />;
                }
            })}
        >
            {userToken == null ? (   // still to work on this???????????? to implement {state.userToken == null...}
                // No token found, user isn't signed in
                <Drawer.Screen
                    name="auth"
                    component={Authenticate}
                    options={{
                        title: 'Authenticate'
                    }}
                />
            ) : (
                    // User is signed in
                    <Drawer.Screen name="Places" component={TabNavigator} />
                )}
        </Drawer.Navigator>
    )}

const TabNavigator = props => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Places') {
                        iconName = 'ios-pin';
                    } else if (route.name === 'Favorite') {
                        iconName = 'ios-star';
                    }

                    return <Ionicons name={iconName} size={25} color={color} />;
                }
            })}
            shifting={true}
            // activeColor='#3e2465'
            // inactiveColor='#f0edf6'
            barStyle={{ backgroundColor: 'teal' }}
        >
            <Tab.Screen name='Places' component={HomeScreen} />
            <Tab.Screen name='Favorite' component={FavoriteNav} />
        </Tab.Navigator>
    )
}

export default DrawerNavigator
