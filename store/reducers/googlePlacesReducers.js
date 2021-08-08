import { FETCH_PLACES, START_LOADING, STOP_LOADING, ERORR, AUTO_ERORR, AUTOCOMPLETE } from '../actions/googlelPlacesActions';

const initialState = {
  resturants: [],
  hotelsAndEstablishments: [],
  placesAutoComplete: [],
  isLoading: false,
  error: null,
  autoError: null,
};

const placesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PLACES:
      return { ...state, resturants: action.payload.resturants, hotelsAndEstablishments: action.payload.hotelsAndEstablishments };

    case AUTOCOMPLETE:
      return { ...state, placesAutoComplete: action.payload };

    case START_LOADING:
      return { ...state, isLoading: true };
    case STOP_LOADING:
      return { ...state, isLoading: false };
    case ERORR:
      return { ...state, error: action.payload };
    case AUTO_ERORR:
      return { ...state, autoError: action.payload };

    default:
      return state;
  }
};

export default placesReducer;
