import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import StatesDetailScreen from './StatesDetailScreen';
import StatesScreen from './StatesScreen';
import DestinationScreen from './DestinationScreen';

const Stack = createStackNavigator();

const HomeScreen = () => {
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
      <Stack.Screen
        name='States'
        component={StatesScreen}
        options={{
          title: 'States'
        }}
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
        options={({ route }) => {
          const { titleName } = route.params;
          return {
            title: titleName
          };
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeScreen;
