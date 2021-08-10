import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, KeyboardAvoidingView, FlatList, ActivityIndicator } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Card from '../../components/Card';
import env from '../../env';
import StarRating from 'react-native-star-rating';
//import PlacesRenderItem from '../../components/PlacesRenderItem';
import { fetchPlaces, placeDetails } from '../../store/actions/googlelPlacesActions';
import NoPhoto from '../../assets/Placeholder-small.png';
import { useDispatch, useSelector } from 'react-redux';
import * as Location from 'expo-location';
import PlaceSearchComponent from '../../components/PlaceSearchComponent';

const Places = ({ navigation }) => {
  const googlePlacesReducer = useSelector((state) => state.googlePlacesReducer);
  const [errorMsg, setErrorMsg] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});

      dispatch(fetchPlaces({ longitude: location.coords.longitude.toString(), latitude: location.coords.latitude.toString() }));
    })();
  }, []);

  const PlacesRenderItem = ({ item }) => {
    return (
      <Card style={styles.itemCard}>
        <TouchableOpacity
          onPress={() => {
            dispatch(placeDetails({ place_id: item.place_id, types: item.types }));
            navigation.navigate('PlaceDetails', {
              titleName: `${item.name.slice(0, 29)}`,
              place_id: item.place_id,
              types: item.types,
            });
          }}
        >
          <View
            style={{
              borderRadius: 10,
              overflow: 'hidden',
            }}
          >
            <Image
              style={{ width: 140, height: 100 }}
              source={
                item.photos
                  ? {
                      uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${item.photos[0].photo_reference}&key=${env.googleApiKey}`,
                    }
                  : NoPhoto
              }
            />

            <View style={styles.cardInfo}>
              <Text style={styles.name}>{item.name.slice(0, 29)}</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <StarRating disabled={true} emptyStar={'ios-star-outline'} fullStar={'ios-star'} halfStar={'ios-star-half'} iconSet={'Ionicons'} starSize={10} maxStars={5} rating={item.rating} fullStarColor={'orange'} />
                <Text style={styles.ratingStyles}>{item.rating}</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </Card>
    );
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <PlaceSearchComponent />
      <View style={styles.flatListsView}>
        <View style={styles.flatList}>
          <Text style={styles.flatListHeaderText}>Nearby Hotels and Establishments</Text>

          <View style={styles.flatListCont}>
            {googlePlacesReducer.isLoading ? <ActivityIndicator color={'#F2F2F2'} size={'large'} /> : <FlatList showsHorizontalScrollIndicator={false} horizontal={true} data={googlePlacesReducer.hotelsAndEstablishments} renderItem={PlacesRenderItem} keyExtractor={(item) => item.place_id} />}
          </View>
        </View>
        <View style={styles.flatList}>
          <Text style={styles.flatListHeaderText}>Nearby Resturants and Cafes</Text>
          <View style={styles.flatListCont}>
            {googlePlacesReducer.isLoading ? <ActivityIndicator color={'#F2F2F2'} size={'large'} /> : <FlatList showsHorizontalScrollIndicator={false} horizontal={true} data={googlePlacesReducer.resturants} renderItem={PlacesRenderItem} keyExtractor={(item) => item.place_id} />}
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F2F2F2',
    alignItems: 'center',
    padding: '5%',
  },
  textInputView: {
    backgroundColor: '#F2F2F2',
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
  flatListsView: {
    marginTop: '10%',
    width: '100%',
    //backgroundColor: 'red',
    height: '90%',
  },
  flatListHeaderText: {
    marginBottom: '3%',
  },
  flatList: {
    width: '100%',
    height: '50%',
    //backgroundColor: 'blue',
  },
  flatListCont: {
    width: '100%',
    height: '86.7%',
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor: 'orange',
  },
  itemCard: {
    //height: '100%',
    //width: '40%',
    margin: 10,
  },
  cardInfo: {
    marginHorizontal: 7,
    marginTop: 0,
  },
  ratingStyles: {
    color: 'orange',
    marginLeft: 2,
  },
  name: {
    width: 110,
  },
});

export default Places;
