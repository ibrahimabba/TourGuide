import React from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';

const Map = ({ route }) => {
  const { long, lat } = route.params;

  return (
    <View style={styles.container}>
      <MapView
        region={{
          latitude: +lat,
          longitude: +long,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
        style={styles.mapStyle}
      >
        <Marker
          title='Picked Location'
          coordinate={{ latitude: +lat, longitude: +long }}
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  }
});

export default Map;