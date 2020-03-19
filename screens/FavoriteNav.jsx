import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity
} from 'react-native';
import { useSelector } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const Favorites = ({ route, navigation }) => {
  const places = useSelector(state => state.placesreducer.places);
  console.log();

  return (
    <View>
      <Text>Favarites</Text>
    </View>
  );
};

const FavoriteNav = () => {
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
      <Stack.Screen name='Favorites' component={Favorites} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  card: {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    backgroundColor: 'white',
    padding: 10,
    margin: 5,
    borderRadius: 10,
    height: 400,
    width: 350
  },
  textview: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  text: {
    fontSize: 30
  }
});

export default FavoriteNav;
