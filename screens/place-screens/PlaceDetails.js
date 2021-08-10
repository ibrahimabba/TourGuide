import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, KeyboardAvoidingView, FlatList, ActivityIndicator, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Card from '../../components/Card';
import env from '../../env';
import StarRating from 'react-native-star-rating';
import { fetchPlaces } from '../../store/actions/googlelPlacesActions';
import NoPhoto from '../../assets/Placeholder-small.png';
import { useDispatch, useSelector } from 'react-redux';

const PlaceDetails = ({ navigation, route }) => {
  const { place_id, types } = route.params;
  const googlePlacesReducer = useSelector((state) => state.googlePlacesReducer);

  let place;

  if (!googlePlacesReducer.isLoading) {
    if (types.includes('restaurant') || types.includes('food') || types.includes('cafe') || types.includes('bar') || types.includes('liquor_store')) {
      place = googlePlacesReducer.resturants.find((res) => res.place_id === place_id);
    } else {
      place = googlePlacesReducer.hotelsAndEstablishments.find((pl) => pl.place_id === place_id);
    }
  }


  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <Text>Place Details</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '5%',
    height: '100%',
  },
});

export default PlaceDetails;
