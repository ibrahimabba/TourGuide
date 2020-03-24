import React from 'react';
import {
  StyleSheet,
  View,
  FlatList} from 'react-native';
import { useSelector } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import RenderedDestinations from '../components/RenderedDestinations';


const Stack = createStackNavigator();


const Favorites = ({ navigation }) => {
  const places = useSelector(state => state.placesreducer.places);
  const favoritePlaces = useSelector(state => state.placesreducer.favoritePlaces)

  let favorites = [...favoritePlaces]
  favorites.filter(fav => fav.favorite == true)
  


  return (
    <View style={styles.container}>
      <FlatList
        data={favorites}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => (
          <RenderedDestinations navigation={navigation} destination={item} />
        )}
      />
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
  text: {
    fontSize: 30
  }
});

export default FavoriteNav;
