import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, ScrollView } from 'react-native';
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
        <AntDesign name="search1" size={24} color="black" />
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
          <ScrollView showsVerticalScrollIndicator={false}>
            {googlePlacesReducer.placesAutoComplete.map((item, i) => (
              <TouchableOpacity
                key={i}
                style={styles.autoSearch}
                onPress={() => {
                  handleSelectPlace(item.description);
                }}
              >
                <Text style={{ marginBottom: 15 }}>{item.description}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
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
    marginTop: '20%',
    zIndex: 1,
  },
  autoSearch: {
    backgroundColor: '#FFFFFF',
    height: '14%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginVertical: 5,
    borderBottomColor: '#F2F2F2',
    borderBottomWidth: 2,
  },
});

export default PlaceSearchComponent;
