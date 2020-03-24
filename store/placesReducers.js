import nigerianStates from '../data/dummyData';
import { ADD_FAVORITE } from './actions/favorite';

const initialState = {
  places: nigerianStates,
  favoritePlaces: nigerianStates.destinations
};

const placesReducer = (state = initialState, action) => {
  switch(action.type){
    case ADD_FAVORITE:
      let favPlace = [...state.favoritePlaces]
      favPlace.filter(fav => fav.favorite == true)

      
        return {
          ...state, favoritePlaces: state.favoritePlaces
        }
      default:
        return state
  }
};

export default placesReducer;
