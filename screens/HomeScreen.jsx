import React, { useCallBack, useEffect } from 'react';
import { StyleSheet } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import StatesDetailScreen from './StatesDetailScreen';
import StatesScreen from './StatesScreen';
import DestinationScreen from './DestinationScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoriteNav from './FavoriteNav';
import CustomDrawerContent from './DrawerNavigator';
import { useDispatch, useSelector } from 'react-redux';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator()


const MyDrawer = () => {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="States" component={StatesScreen} />
      <Drawer.Screen name="favorites" component={FavoriteNav} />
    </Drawer.Navigator>
  );
}
const HomeScreen = ({route}) => {
  
  const { FavId } = route.params

  const favorites = useSelector(state => state.placesreducer.places)
  const selectedFavorite = favorites.find(sel => sel.id === FavId)
  const dispatch = useDispatch()

  const toggleFavorite = () => {
    dispatch(FavToggle(selectedFavorite))
  }

  useEffect(() => {
    props.navigation.setParams({ FavToggle: toggleFavorite})
  }), [toggleFavorite]

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }}
    >
      <Stack.Screen
        name='States'
        component={StatesScreen}
        options={(nav) =>({
          title: 'States',
          headerLeft: () => <Ionicons title='menu' name='ios-menu' color='white' size={30} onPress={() => {
            nav.navigation.toggleDrawer()
          }} /> 
        })}
      />
      <Stack.Screen
        name='StatesDetails'
        component={StatesDetailScreen}
        options={({ route }) => {
          const { titleName } = route.params;
          return { title: titleName };
        }}
      />
      <Stack.Screen
        name='Destinations'
        component={DestinationScreen}
        options={({ route, FavToggle }) => ({
          title: route.params.titleName,
          headerRight: () => <Ionicons name='ios-heart' size={32} color='white' onPress={FavToggle}/>,
          headerStyle: {
            backgroundColor: 'blue'
          }
        })}

      />
    </Stack.Navigator>
  );
};

export default HomeScreen;
