import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Card from './Card';
import env from '../env';
import StarRating from 'react-native-star-rating';
import NoPhoto from '../assets/Placeholder-small.png';
import { placeDetails } from '../store/actions/googlelPlacesActions';

const PlacesRenderItem = ({ element, navigation, dispatch }) => {
  const item = element.item;

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

export default React.memo(PlacesRenderItem);
