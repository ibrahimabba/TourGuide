import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView, Image, KeyboardAvoidingView, FlatList, ActivityIndicator } from 'react-native';
import PlacesRenderItem from '../../components/PlacesRenderItem';
import { fetchPlaces } from '../../store/actions/googlelPlacesActions';
import { useDispatch, useSelector } from 'react-redux';
import * as Location from 'expo-location';
import PlaceSearchComponent from '../../components/PlaceSearchComponent';

const Places = ({ navigation }) => {
  const googlePlacesReducer = useSelector((state) => state.googlePlacesReducer);
  const [errorMsg, setErrorMsg] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});

      dispatch(fetchPlaces({ longitude: location.coords.longitude.toString(), latitude: location.coords.latitude.toString() }));
    })();
  }, []);

  return (
    <KeyboardAvoidingView style={styles.container}>
      <PlaceSearchComponent />
      <View style={styles.flatListsView}>
        {googlePlacesReducer.isLoading ? (
          <View style={{ marginTop: '67%' }}>
            <ActivityIndicator color={'black'} size="large" />
          </View>
        ) : (
          <>
            <View style={styles.flatList}>
              <Text style={styles.flatListHeaderText}>Nearby Hotels and Establishments</Text>
              <View style={styles.flatListCont}>
                <FlatList showsHorizontalScrollIndicator={false} horizontal={true} data={googlePlacesReducer.hotelsAndEstablishments} renderItem={(item) => <PlacesRenderItem dispatch={dispatch} element={item} navigation={navigation} />} keyExtractor={(item) => item.place_id} />
              </View>
            </View>
            <View style={styles.flatList}>
              <Text style={styles.flatListHeaderText}>Nearby Resturants and Cafes</Text>
              <View style={styles.flatListCont}>
                <FlatList showsHorizontalScrollIndicator={false} horizontal={true} data={googlePlacesReducer.resturants} renderItem={(item) => <PlacesRenderItem dispatch={dispatch} element={item} navigation={navigation} />} keyExtractor={(item) => item.place_id} />
              </View>
            </View>
          </>
        )}
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F2F2F2',
    alignItems: 'center',
    padding: '2%',
    flex: 1,
    //height: '150%',
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
    marginTop: '5%',
    width: '100%',
    //backgroundColor: 'red',
    height: '90%',
  },
  flatListHeaderText: {
    marginBottom: '3%',
    fontFamily: 'open-sans-bold',
    marginLeft: '3%',
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
});

export default Places;
