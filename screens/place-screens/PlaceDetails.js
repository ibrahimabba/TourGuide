import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, KeyboardAvoidingView, FlatList, ActivityIndicator, ScrollView } from 'react-native';
import env from '../../env';
import StarRating from 'react-native-star-rating';
import { fetchPlaces } from '../../store/actions/googlelPlacesActions';
import NoPhoto from '../../assets/Placeholder-small.png';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../../components/Card';

const PlaceDetails = ({ navigation, route }) => {
  const { place_id, types } = route.params;
  const googlePlacesReducer = useSelector((state) => state.googlePlacesReducer);

  let place = googlePlacesReducer.placeDetails;

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

  if (googlePlacesReducer.isLoading) {
    return (
      <View style={{ flex: 1, backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <View style={styles.flatListView}>{place.photos ? <FlatList showsHorizontalScrollIndicator={false} horizontal={true} data={place.photos} renderItem={PlaceRenderItem} keyExtractor={(item, i) => i.toString()} /> : <Text>No photos</Text>}</View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Map', {
              long: place?.location?.lng,
              lat: place?.location?.lat,
            });
          }}
        >
          <Image
            style={{ width: 340, height: 215, marginHorizontal: 5, borderRadius: 5, marginTop: '5%' }}
            source={{
              uri: `https://maps.googleapis.com/maps/api/staticmap?center=${place?.location?.lat},${place?.location?.lng}&zoom=16&size=1200x800&maptype=roadmap
            &markers=color:blue%7Clabel:S%7C${place?.location?.lat},${place?.location?.lng}&markers=color:green%7Clabel:G%7C${place?.location?.lat},${place?.location?.lng}
            &markers=color:red%7Clabel:C%7C${place?.location?.lat},${place?.location?.lng}
            &key=${env.googleApiKey}`,
            }}
          />
        </TouchableOpacity>
      </View>
      <View style={{ marginVertical: '10%', width: '100%', paddingHorizontal: '5%' }}>
        <Text style={{ fontFamily: 'open-sans-bold' }}>Reviews</Text>
      </View>

      {place.reviews &&
        place.reviews.length !== 0 &&
        place.reviews.map((rev, i) => (
          <Card key={i} style={{ width: '95%', padding: '5%', alignItems: 'flex-start', marginVertical: '2%' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%' }}>
              <Image
                style={{ width: 40, height: 40, borderRadius: 20 }}
                source={{
                  uri: rev.profile_photo_url,
                }}
              />
              <Text style={{ marginLeft: '5%', fontFamily: 'open-sans-bold' }}>{rev.author_name}</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', marginTop: '3%' }}>
              <StarRating disabled={true} emptyStar={'ios-star-outline'} fullStar={'ios-star'} halfStar={'ios-star-half'} iconSet={'Ionicons'} starSize={10} maxStars={5} rating={rev.rating} fullStarColor={'orange'} />
              <Text style={{ marginLeft: '2%', fontSize: 10 }}>{new Date(rev.time).toLocaleDateString()}</Text>
            </View>
            <Text style={{ marginTop: '5%', fontFamily: 'open-sans' }}>{rev.text}</Text>
          </Card>
        ))}

      {!place.reviews && (
        <View style={{ marginBottom: '20%' }}>
          <Text style={{ fontSize: 10, fontFamily: 'open-sans' }}>No any review at this time</Text>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    padding: '2%',
    // height: '100%',
    // flex: 1,
  },
  flatListView: {
    //height: '40%',
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
