import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import RenderedDestinations from '../components/RederedDest';

const StatesDetailScreen = ({ route, navigation }) => {
  const { itemId } = route.params;
  const states = useSelector((state) =>
    state.placesreducer.places.find((place) => place.id == itemId)
  );

  const destinations = states.destinations.sort((a, b) =>
    a.id > b.id ? 1 : -1
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={destinations}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <RenderedDestinations
            navigation={navigation}
            stateId={itemId}
            destination={item}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
    width: 350,
  },
  textview: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 30,
  },
});

export default StatesDetailScreen;
