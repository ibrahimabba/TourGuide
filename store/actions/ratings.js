import { fetchRatings, setRatings } from '../../database/db';

export const RATINGS_ARRAY = 'RATINGS_ARRAY';

export const getRatings = () => {
  return async (dispatch) => {
    const dbdata_3 = await fetchRatings();
    const array = dbdata_3.rows._array;
    //console.log(array);
    dispatch({ type: RATINGS_ARRAY, payload: array });
  };
};
