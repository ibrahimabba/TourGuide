import React, { useState, useLayoutEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import StarRating from 'react-native-star-rating';

import {
  createRatings,
  modifyRatings,
  getRatings,
} from '../store/actions/ratings';

const RenderedDestinations = ({ navigation, stateId, destination }) => {
  const [count, setCount] = useState();
  const ratingArray = useSelector((state) => state.ratingReducer.ratingsArray);
  const ratedDestination = ratingArray.find(
    (dest) => dest.destination == destination.title
  );

  let rate;
  rate = ratedDestination ? ratedDestination.rate : 0;

  const dispatch = useDispatch();

  useLayoutEffect(() => {
    dispatch(getRatings());
  }, [dispatch, count]);

  return (
    <View style={styles.card}>
      <TouchableOpacity
        style={{ height: '90%', width: '100%' }}
        activeOpacity={0.9}
        onPress={() =>
          navigation.navigate('Destinations', {
            titleName: destination.title,
            destination: destination,
            stateId: stateId,
            destinationId: destination.id,
          })
        }
      >
        <Image
          source={destination.image}
          style={{
            height: '100%',
            width: '100%',
            borderRadius: 10,
          }}
        />
      </TouchableOpacity>
      <View style={styles.textview}>
        <Text style={{ marginVertical: 10, fontSize: 20 }}>
          {destination.title}
        </Text>
        <View style={{ flexDirection: 'row' }}>
          <StarRating
            disabled={false}
            emptyStar={'ios-star-outline'}
            fullStar={'ios-star'}
            // halfStar={'ios-star-half'}
            iconSet={'Ionicons'}
            starSize={25}
            maxStars={5}
            rating={rate}
            selectedStar={(rating) => {
              setCount(rating);
              ratedDestination
                ? dispatch(modifyRatings(ratedDestination.id, rating))
                : dispatch(createRatings(destination.title, rating));
            }}
            fullStarColor={'orange'}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    backgroundColor: 'white',
    padding: 10,
    margin: 5,
    borderRadius: 10,
    height: 400,
    width: 350,
  },
  textview: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default RenderedDestinations;
