import nigerianStates from '../data/dummyData';
import { ADD_FAVORITE } from './actions/favorite';

const initialState = {
  places: nigerianStates,
};


const placesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      const favDest = () => {
        let list = [];
        for (let i = 0; i < state.places.length; i++) {
          list.push(...state.places[i].destinations); // for all destinations
        }
        return list;
      };
      
      const lists = favDest(); // all destinations
      const favorites = lists.filter(list => list.favorite == true); // returns a new array with only favorites that are true

      //if there is a favorite in the array and it is true, remove it from the array
      const existingFavorite = lists.findIndex(index => index.id === action.favId)
      if (existingFavorite >= 0) {
        const updated = [...favorites]
        updated.splice(existingFavorite, 1)
        return { ...state, places: updated }
      }else{  // add it to the favorites array
        fav = lists.find(listId => listId.id === action.favId)
      }
      return {
        ...state, places: state.favorites.concat(fav)
      }
    default:
      return state
  }
};

export default placesReducer;
