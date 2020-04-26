import { fetchRatings, setRatings, updateRatings } from '../../database/db';

export const RATINGS_ARRAY = 'RATINGS_ARRAY';

export const getRatings = () => {
  return async (dispatch) => {
    const dbdata_3 = await fetchRatings();
    const array = dbdata_3.rows._array;

    dispatch({ type: RATINGS_ARRAY, payload: array });
  };
};

export const modifyRatings = (destinationId, rating) => {
  return async (dispatch) => {
    try {
      await updateRatings(destinationId, rating);
    } catch (error) {
      console.log(error);
    }
  };
};

export const createRatings = (destinationTitle, rating) => {
  return async (dispatch) => {
    try {
      await setRatings(destinationTitle, rating);
    } catch (error) {
      console.log(error);
    }
  };
};
