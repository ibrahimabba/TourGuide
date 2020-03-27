import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
  Platform
} from 'react-native';
import Constants from 'expo-constants';
import { useSelector } from 'react-redux';

const RenderdStates = ({ item, navigation }) => {
  return (
    <View style={styles.card}>
      <View
        style={{
          borderRadius: 10,
          overflow: 'hidden'
        }}
      >
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('StatesDetails', {
              titleName: `${item.title}`,
              itemId: item.id
            })
          }
        >
          <ImageBackground
            source={item.image}
            style={{
              width: '100%',
              height: '100%',
              borderRadius: 10,
              justifyContent: 'flex-end'
            }}
          >
            <Text style={styles.title}>{item.title}</Text>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const StatesScreen = ({ navigation }) => {
  const places = useSelector(state => state.placesreducer.places);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={places}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => (
          <RenderdStates navigation={navigation} item={item} />
        )}
        numColumns={2}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight
  },
  card: {
    shadowColor: 'black',
    //shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    //shadowOpacity: 0.26,
    elevation: 6,
    backgroundColor: 'white',
    borderRadius: 10,
    width: 150,
    height: 150,
    padding: 3,
    margin: 10
  },
  title: {
    color: 'white',
    fontSize: 20,
    padding: 6
  }
});

export default StatesScreen;
