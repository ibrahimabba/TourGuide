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
import { favoriteToggle } from '../store/actions/favorite';
import { Ionicons } from '@expo/vector-icons';
//import MapView from 'react-native-maps';

const DestinationScreen = ({ route, navigation }) => {
  const staticMapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=600x300&maptype=roadmap
  &markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318
  &markers=color:red%7Clabel:C%7C40.718217,-73.998284
  &key=AIzaSyAoSoEbh6gl5LFvsYweufdbeblBCC89qFI`;

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
              color='white'
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
