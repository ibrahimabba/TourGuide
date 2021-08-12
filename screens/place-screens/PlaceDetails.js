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

  const PlaceRenderItem = (item) => {
    return (
      <View style={styles.flatListItemView}>
        <Image
          style={{ width: 344, height: 215, marginHorizontal: 5, borderRadius: 5 }}
          source={{
            uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${item.item.photo_reference}&key=${env.googleApiKey}`,
          }}
        />
      </View>
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.flatListView}>{place.photos ? <FlatList showsHorizontalScrollIndicator={false} horizontal={true} data={place.photos} renderItem={PlaceRenderItem} keyExtractor={(item) => item.photo_reference} /> : <Text>No photos</Text>}</View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    padding: '2%',
    height: '100%',
  },
  flatListView: {
    height: '40%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flatListItemView: {
    // backgroundColor: 'orange',
    // height: '50%',
    // width: '50%',
  },
});

export default PlaceDetails;
