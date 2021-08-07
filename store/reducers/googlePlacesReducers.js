import { FETCH_PLACES } from '../actions/googlelPlacesActions';

const initialState = {
  places: [],
};

const placesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PLACES:
      return { ...state, places: action.payload };

    default:
      return state;
  }
};

export default placesReducer;
