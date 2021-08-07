import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import DATA from '../../data/placesDummyData';
import PlacesRenderItem from '../../components/PlacesRenderItem';
import { fetchPlaces } from '../../store/actions/googlelPlacesActions';
import { useDispatch, useSelector } from 'react-redux';
import * as Location from 'expo-location';

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

  return (
    <View style={styles.container}>
      <View style={styles.textInputView}>
        <AntDesign name="search1" size={24} color="black" />
        <TextInput style={styles.searchText} placeholder="Search Places" />
      </View>

      <View style={styles.flatListsView}>
        <View style={styles.flatList}>
          <Text style={styles.flatListHeaderText}>Nearby Resturants</Text>
          <View style={styles.flatListCont}>
            <FlatList showsHorizontalScrollIndicator={false} horizontal={true} data={googlePlacesReducer.places} renderItem={PlacesRenderItem} keyExtractor={(item) => item.place_id} />
          </View>
        </View>
        <View style={styles.flatList}>
          <Text style={styles.flatListHeaderText}>Nearby Hotels and Establishments</Text>
          <View style={styles.flatListCont}>
            <FlatList showsHorizontalScrollIndicator={false} horizontal={true} data={googlePlacesReducer.places} renderItem={PlacesRenderItem} keyExtractor={(item) => item.place_id} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
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
    //backgroundColor: 'orange',
  },
  itemCard: {
    //height: '100%',
    //width: '40%',
    margin: 10,
  },
});

export default Places;
