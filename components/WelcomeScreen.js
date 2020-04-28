import React from 'react';
import { StyleSheet, View, Text, Button, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Image = require('../assets/cropped/bgimg.png');
const WelcomeScreen = (props) => {
  return (
    <ImageBackground source={Image} style={styles.image}>
      <View style={styles.container}>
        <View style={styles.textContent}>
          <View style={styles.mainText}>
            <Text
              style={{
                fontSize: 40,
                marginLeft: 0,
                color: '#71cd3c',
                fontFamily: 'open-sans-bold',
              }}
            >
              Tour Nija
            </Text>
          </View>
          <View style={styles.text}>
            <Text
              style={{ color: '#fff', fontSize: 18, fontFamily: 'open-sans' }}
            >
              Welcome to Nigeria's number one Tourist Destinations{' '}
            </Text>
          </View>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('Places');
            }}
          >
            <View style={styles.button}>
              <Text style={styles.buttonText}>Lets get Started</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#71cd3c',
    padding: 5,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'open-sans',
  },
  textContent: {
    flex: 1,
  },
  mainText: {
    padding: 50,
  },
  text: {
    padding: 20,
    marginTop: 45,
  },
  text2: {
    padding: 4,
    marginBottom: 5,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
});

export default WelcomeScreen;
