import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Card from './Card';
import env from '../env';
import StarRating from 'react-native-star-rating';

const PlacesRenderItem = ({ item }) => {
  return (
    <Card style={styles.itemCard}>
      <TouchableOpacity onPress={() => {}}>
        <View
          style={{
            borderRadius: 10,
            overflow: 'hidden',
          }}
        >
          {/* <Image
            style={{ width: 140, height: 100 }}
            source={{
              uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${item.photos[0].photo_reference}&key=${env.googleApiKey}`,
            }}
          /> */}
          <Image
            style={{ width: 140, height: 100 }}
            source={{
              uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=Aap_uECMmCO1LdM9VtnnnI8Asl8g7g9tSHzDDTf9HMHypLGSuq_x73gJoqg5deBlE20XE9SGWl5oku_gRRCxoiy4UVU-FrEsV5N3fzJbGejn3XNzYoQd-OY3BS04Q61xxXhT48Bqnr3Ogb8Acodm66TnSqfSMJ1nzGi5n6rJHwt7bhtdfdxn&key=${env.googleApiKey}`,
            }}
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

const styles = StyleSheet.create({
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

export default PlacesRenderItem;
