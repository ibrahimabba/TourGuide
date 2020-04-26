import React, { useLayoutEffect, useState, useRef } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableWithoutFeedback,
  Button,
  TouchableOpacity
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { favoriteToggle } from '../store/actions/favorite';
import { Ionicons } from '@expo/vector-icons';
import env from '../env';

const DestinationScreen = ({ route, navigation }) => {
  const { destination, stateId, destinationId } = route.params;

  const places = useSelector(state => state.placesreducer.places);

  const stateIndex = places.findIndex(place => place.id == stateId);
  const destIndex = places[stateIndex].destinations.findIndex(
    dest => dest.id == destinationId
  );

  const isFav = places[stateIndex].destinations[destIndex].favorite;

  const staticMap = `https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/url-https%3A%2F%2Fwww.mapbox.com%2Fimg%2Frocket.png(${destination.longitude},${destination.latitude})/${destination.longitude},${destination.latitude},15/800x800?access_token=pk.eyJ1IjoiYWhtYWRlZSIsImEiOiJjazkxbzQ0aGUwMW8yM2tvdGJtNHBkODJyIn0.eya_AgrdGy4SbagBpVliKQ`;
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableWithoutFeedback
          onPress={() => dispatch(favoriteToggle(stateId, destinationId))}
        >
          <View style={{ paddingRight: 30 }}>
            <Ionicons
              name={isFav ? 'ios-heart' : 'ios-heart-empty'}
              size={30}
              color={isFav ? 'white' : 'white'}
            />
          </View>
        </TouchableWithoutFeedback>
      )
    });
  }, [navigation, stateId, destinationId, isFav]);
  return (
    <ScrollView>
      <View>
        <ScrollView horizontal={true}>
          {destination.destinationImages &&
            destination.destinationImages.map((imageUri, index) => (
              <Image
                key={index}
                style={{
                  height: 250,
                  width: 350,
                  borderRadius: 0,
                  margin: 5
                }}
                source={imageUri}
              />
            ))}
        </ScrollView>
      </View>
      <View style={styles.card}>
        <Text style={{ fontSize: 20, marginVertical: 0 }}>Descriptions</Text>
        <Text>{destination.description}</Text>
      </View>

      <View style={styles.card2} activeOpacity={0.9}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Map', {
              long: destination.longitude,
              lat: destination.latitude
            })
          }
        >
          <Image
            style={{ width: 390, height: 300, borderRadius: 10 }}
            source={{
              uri: staticMap
            }}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  card: {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    backgroundColor: 'white',
    padding: 10,
    margin: 5,
    borderRadius: 10
  },
  card2: {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    backgroundColor: 'white',
    padding: 5,
    margin: 5,
    borderRadius: 10
  }
});
export default DestinationScreen;