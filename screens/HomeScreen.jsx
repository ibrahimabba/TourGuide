import React, { useCallBack, useEffect } from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import StatesDetailScreen from './StatesDetailScreen';
import StatesScreen from './StatesScreen';
import DestinationScreen from './DestinationScreen';


const Stack = createStackNavigator();


const HomeScreen = ({route, navigation}) => {

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',

        }
      }}
    >
      <Stack.Screen
        name='States'
        component={StatesScreen}
        options={() =>({
          headerLeft: () => <Ionicons title='list' name='ios-list' color='white' size={27} onPress={() => {navigation.toggleDrawer()}} />,
          title: 'States'
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
        options={({ route }) => ({
          title: route.params.titleName,
          headerRight: () => <Ionicons name='ios-heart' size={32} color='white' onPress={() =>{}}/>,
          headerStyle: {
            backgroundColor: 'brown'
          }
        })}

      />
    </Stack.Navigator>
  );
};

export default HomeScreen;
