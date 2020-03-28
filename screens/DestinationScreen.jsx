import React, { useLayoutEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableWithoutFeedback
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { favoriteToggle } from '../store/favoriteActions';
import { Ionicons } from '@expo/vector-icons';

const DestinationScreen = ({ route, navigation }) => {
  const { destination, stateId, destinationId } = route.params;

  const places = useSelector(state => state.placesreducer.places);

  const stateIndex = places.findIndex(place => place.id == stateId);
  const destIndex = places[stateIndex].destinations.findIndex(
    dest => dest.id == destinationId
  );

  const isFav = places[stateIndex].destinations[destIndex].favorite;

  const dispatch = useDispatch();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableWithoutFeedback
          onPress={() => dispatch(favoriteToggle(stateId, destinationId))}
        >
          <View style={{ paddingRight: 15 }}>
            <Ionicons
              name={isFav ? 'ios-heart' : 'ios-heart-empty'}
              size={30}
              color='orange'
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
  }
});
export default DestinationScreen;
