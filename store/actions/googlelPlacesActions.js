export const FETCH_PLACES = 'FETCH_PLACES';
export const AUTOCOMPLETE = 'AUTOCOMPLETE';
export const START_LOADING = 'START_LOADING';
export const STOP_LOADING = 'STOP_LOADING';
export const ERORR = 'ERROR';
export const AUTO_ERORR = 'AUTO_ERROR';

import env from '../../env';

export const fetchPlaces = (data) => {
  return async (dispatch) => {
    try {
      dispatch({ type: START_LOADING });
      const response = await fetch('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + data.latitude + ',' + data.longitude + '&radius=3000&key=' + env.googleApiKey);
      const respData = await response.json();

      const hotelsAndEstablishments = [];
      const resturants = [];

      respData.results.forEach((result) => {
        if (result.types.includes('restaurant') || result.types.includes('food') || result.types.includes('cafe') || result.types.includes('bar') || result.types.includes('liquor_store')) {
          resturants.push({
            place_id: result.place_id,
            name: result.name,
            user_ratings_total: result.user_ratings_total,
            rating: result.rating,
            vicinity: result.vicinity,
            reference: result.reference,
            opening_hours: result.opening_hours,
            photos: result.photos,
          });
        } else {
          hotelsAndEstablishments.push({
            place_id: result.place_id,
            name: result.name,
            user_ratings_total: result.user_ratings_total,
            rating: result.rating,
            vicinity: result.vicinity,
            reference: result.reference,
            opening_hours: result.opening_hours,
            photos: result.photos,
          });
        }
      });

      dispatch({ type: FETCH_PLACES, payload: { hotelsAndEstablishments, resturants } });
      dispatch({ type: STOP_LOADING });
    } catch (error) {
      dispatch({ type: ERORR });
    }
  };
};

export const autoComplete = (data) => {
  return async (dispatch) => {
    try {
      const response = await fetch('https://maps.googleapis.com/maps/api/place/autocomplete/json?input=' + data.text + '&key=' + env.googleApiKey);
      const respData = await response.json();

      const formmatedAutoPlaces = [];
      respData.predictions.forEach((pre) => {
        formmatedAutoPlaces.push({ description: pre.description, place_id: pre.place_id });
      });
      dispatch({ type: AUTOCOMPLETE, payload: formmatedAutoPlaces });
    } catch (error) {
      dispatch({ type: AUTO_ERORR });
    }
  };
};
