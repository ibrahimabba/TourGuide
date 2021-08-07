export const FETCH_PLACES = 'FETCH_PLACES';
import env from '../../env';

export const fetchPlaces = (data) => {
  return async (dispatch) => {
    try {
      const response = await fetch('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + data.latitude + ',' + data.longitude + '&radius=1500&key=' + env.googleApiKey);
      const respData = await response.json();

      const formmatedPlaces = [];

      respData.results.forEach((result) => {
        formmatedPlaces.push({
          place_id: result.place_id,
          name: result.name,
          types: result.types,
          user_ratings_total: result.user_ratings_total,
          rating: result.rating,
          vicinity: result.vicinity,
          reference: result.reference,
          opening_hours: result.opening_hours,
          photos: result.photos,
        });
      });

      dispatch({ type: FETCH_PLACES, payload: formmatedPlaces });
    } catch (error) {}
  };
};
