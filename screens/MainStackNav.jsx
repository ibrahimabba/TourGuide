import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import StatesDetailScreen from './StatesDetailScreen';
import StatesScreen from './StatesScreen';
import DestinationScreen from './DestinationScreen';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/HeaderButton';
import Map from './Map';
import HomeScreen from './HomeScreen';
import Places from './place-screens/Places';
import PlaceDetails from './place-screens/PlaceDetails';
import WeatherHome from './weather/WeatherHome';

const Stack = createStackNavigator();

const MainStackNav = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#082032',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={({ route, navigation }) => ({
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
              <Item
                title="Menu"
                iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
                onPress={() => {
                  navigation.toggleDrawer();
                }}
              />
            </HeaderButtons>
          ),
          title: 'Welcome to TourGuide',
        })}
      />
      <Stack.Screen
        name="States"
        component={StatesScreen}
        options={({}) => ({
          title: 'States',
        })}
      />
      <Stack.Screen
        name="Places"
        component={Places}
        options={({}) => ({
          title: 'Places',
        })}
      />
      <Stack.Screen
        name="PlaceDetails"
        component={PlaceDetails}
        options={({ route }) => {
          const { titleName } = route.params;
          return { title: titleName };
        }}
      />
      <Stack.Screen
        name="StatesDetails"
        component={StatesDetailScreen}
        options={({ route }) => {
          const { titleName } = route.params;
          return { title: titleName };
        }}
      />
      <Stack.Screen
        name="Destinations"
        component={DestinationScreen}
        options={({ route }) => {
          const { titleName } = route.params;
          return {
            title: titleName,
          };
        }}
      />
      <Stack.Screen
        name="weather"
        component={WeatherHome}
        options={({}) => ({
          title: 'Weather',
        })}
      />
      <Stack.Screen name="Map" component={Map} />
    </Stack.Navigator>
  );
};

export default MainStackNav;
