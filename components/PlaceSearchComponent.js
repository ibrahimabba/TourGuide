import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { autoComplete, fetchPlaces } from '../store/actions/googlelPlacesActions';
import env from '../env';
import { useDispatch, useSelector } from 'react-redux';

const PlaceSearchComponent = ({ navigation }) => {
  const googlePlacesReducer = useSelector((state) => state.googlePlacesReducer);
  const [focus, setFocus] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState();

  const dispatch = useDispatch();

  const handleFetchAutoComplete = (text) => {
    setSelectedAddress();
    dispatch(autoComplete({ text }));
  };
  const handleSelectPlace = async (address) => {
    setSelectedAddress(address);
    setFocus(false);
    try {
      const response = await fetch('https://maps.googleapis.com/maps/api/geocode/json?address=' + address + '&key=' + env.googleApiKey);
      const respData = await response.json();
      const geoData = {};
      if (respData.results.length > 0) {
        geoData['latitude'] = respData.results[0].geometry.location.lat;
        geoData['longitude'] = respData.results[0].geometry.location.lng;
      }

      dispatch(fetchPlaces({ longitude: geoData.longitude.toString(), latitude: geoData.latitude.toString() }));
    } catch (error) {}
  };

  return (
    <>
      <View style={styles.textInputView}>
        <AntDesign name="search1" size={20} color="grey" />
        <TextInput
          onFocus={() => {
            setFocus((prevState) => !prevState);
          }}
          style={styles.searchText}
          placeholder="Search Places"
          value={selectedAddress}
          onChangeText={handleFetchAutoComplete}
        />
      </View>
      {googlePlacesReducer.placesAutoComplete.length > 0 && focus && (
        <View style={styles.resultsView}>
          <FlatList
            data={googlePlacesReducer.placesAutoComplete}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  style={styles.autoSearch}
                  onPress={() => {
                    handleSelectPlace(item.description);
                  }}
                >
                  <Text style={{ fontFamily: 'open-sans' }}>{item.description}</Text>
                </TouchableOpacity>
              );
            }}
            keyExtractor={(item, i) => i.toString()}
            ItemSeparatorComponent={() => <View style={{ height: '1%', width: '100%', backgroundColor: 'grey' }}></View>}
            showsVerticalScrollIndicator={false}
          />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  textInputView: {
    backgroundColor: '#FFFFFF',
    height: '8%',
    width: '85%',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '10%',
    //position: 'absolute',
  },

  searchText: {
    marginLeft: '10%',
  },
  resultsView: {
    backgroundColor: '#FFFFFF',
    height: '40%',
    width: '85%',
    borderRadius: 5,
    position: 'absolute',
    marginTop: '15%',
    zIndex: 1,
  },
  autoSearch: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
});

export default PlaceSearchComponent;
