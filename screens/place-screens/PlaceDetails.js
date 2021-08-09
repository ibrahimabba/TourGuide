import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, KeyboardAvoidingView, FlatList, ActivityIndicator, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Card from '../../components/Card';
import env from '../../env';
import StarRating from 'react-native-star-rating';
import { fetchPlaces } from '../../store/actions/googlelPlacesActions';
import NoPhoto from '../../assets/Placeholder-small.png';
import { useDispatch, useSelector } from 'react-redux';

const PlaceDetails = ({ navigation }) => {
  const googlePlacesReducer = useSelector((state) => state.googlePlacesReducer);

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
