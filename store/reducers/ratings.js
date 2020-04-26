import { RATINGS_ARRAY } from '../actions/ratings';

const initialState = {
  ratingsArray: [],
};

const ratings = (state = initialState, action) => {
  switch (action.type) {
    case RATINGS_ARRAY:
      return {
        ratingsArray: action.payload,
      };
    default:
      return state;
  }
};

export default ratings;
