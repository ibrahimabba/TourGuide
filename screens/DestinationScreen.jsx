import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';

const DestinationScreen = ({ route, navigation }) => {
  const { destination } = route.params;

  return (
    <ScrollView>
      <View>
        <ScrollView horizontal={true}>
          {destination.destinationImages &&
            destination.destinationImages.map((imageUri, index) => (
              <Image
                key={index}
                style={{
                  height: 250,
                  width: 350,
                  borderRadius: 0,
                  margin: 5
                }}
                source={imageUri}
              />
            ))}
        </ScrollView>
      </View>
      <View>
        <Text>{destination.description}</Text>
      </View>
    </ScrollView>
  );
};

export default DestinationScreen;
