import React, { useLayoutEffect, useState } from 'react';
import { StyleSheet, View, Text, Image, FlatList, ScrollView, ImageBackground } from 'react-native';
import cloudy from '../../assets/images/day-cloudy.jpg';
import * as Location from 'expo-location';
import { Fontisto, Ionicons, MaterialCommunityIcons, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import env from '../../env';

const WeatherHome = ({ navigation }) => {
  const [currentWeather, setCurrentWeather] = useState(null);

  const MainIcon = () => {
    console.log(currentWeather);
    switch (currentWeather?.weather[0].main) {
      case 'Clouds':
        return <FontAwesome5 name="cloud" size={100} color="white" />;
      case 'Rain':
        return <Fontisto name="rains" size={100} color="white" />;
      case 'Thunderstorm':
        return <Ionicons name="ios-thunderstorm" size={100} color="white" />;
      case 'Fog':
        return <MaterialCommunityIcons name="weather-fog" size={100} color="white" />;
      case 'Dust':
        return <Ionicons name="ios-cloud-outline" size={100} color="white" />;
      case 'Smoke':
        return <FontAwesome5 name="smog" size={100} color="white" />;
      case 'Ash':
        return <FontAwesome5 name="smog" size={100} color="white" />;
      default:
        return <FontAwesome5 name="cloud" size={100} color="white" />;
    }
  };

  useLayoutEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});

      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${location.coords.latitude.toString()}&lon=${location.coords.longitude.toString()}&APPID=98c066a6ed4ad2118bb5c53c3f93e1cf`);
      const resData = await res.json();
      if (!currentWeather) setCurrentWeather(resData);
      navigation.setOptions({
        title: resData.name,
      });
    })();
  });
  return (
    <ImageBackground source={cloudy} style={styles.container}>
      <View style={styles.weatherMain}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View>
            <MainIcon />
            <Text style={styles.textDesc}>{currentWeather?.weather[0].description.charAt(0).toUpperCase() + currentWeather?.weather[0].description.slice(1)}</Text>
          </View>
          <View style={{ marginTop: '10%' }}>
            <View>
              <Text style={{ color: '#FFFFFF', fontSize: 40, position: 'absolute', left: '50%' }}>{currentWeather?.main.temp}</Text>
              <Text style={{ color: '#FFFFFF', position: 'absolute', left: '97%', top: '15%', fontSize: 15 }}>o</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: '60%' }}>
              <Text style={{ color: '#FFFFFF', fontSize: 15, marginTop: '7%' }}>Feels like</Text>
              <View style={{ marginLeft: '2%' }}>
                <Text style={{ color: '#FFFFFF', fontSize: 15, marginTop: '18%' }}>{currentWeather?.main.feels_like}</Text>
                <Text style={{ color: '#FFFFFF', position: 'absolute', left: '98%', top: '4%', fontSize: 10 }}>o</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={{ backgroundColor: 'white', height: '20%', width: '100%', borderRadius: 7.5, marginTop: '10%', opacity: 0.5, padding: '5%', flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={{ alignItems: 'center' }}>
          <MaterialCommunityIcons name="weather-windy" size={24} color="black" />
          <Text>Wind</Text>
          <Text>{currentWeather?.wind.speed} m/h</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Fontisto name="blood-drop" size={24} color="black" />
          <Text>Humidity</Text>
          <Text>{currentWeather?.main.humidity} %</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <MaterialIcons name="wb-sunny" size={24} color="black" />
          <Text>Visibility</Text>
          <Text>{currentWeather?.visibility / 100} %</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#FFFFFF',
    alignItems: 'center',
    //justifyContent: 'center',
    resizeMode: 'cover',
    padding: '5%',
  },
  weatherMain: {
    width: '100%',
    height: '50%',
    backgroundColor: '#14213d',
    borderRadius: 7.5,
    opacity: 0.6,
    padding: '5%',
    //alignItems: 'center',
  },
  textDesc: {
    color: '#FFFFFF',
    fontSize: 18,
  },
});

export default WeatherHome;
