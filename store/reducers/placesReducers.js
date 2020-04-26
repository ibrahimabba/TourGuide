import nigerianStates from '../../data/dummyData';
import { ADD_FAVORITE } from '../actions/favorite';
const initialState = {
  places: nigerianStates,
};

const placesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      const stateIndex = state.places.findIndex(
        (pl) => pl.id == action.stateId
      );

      const favDest = () => {
        let list = [];
        for (let i = 0; i < state.places.length; i++) {
          list.push(...state.places[i].destinations);
        }
        return list;
      };

      const lists = favDest();
      const fav = lists.find((list) => list.id == action.destinationId);
      const destIndex = lists.findIndex(
        (list) => list.id == action.destinationId
      );
      //below i copied old places into delState
      const delState = [...state.places];
      // below i deleted the old city state using splice
      delState.splice(stateIndex, 1);
      const newState = { ...state.places[stateIndex] };
      //below i copied the old city destination into delDest
      const delDest = [...state.places[stateIndex].destinations];
      // below i deleted the old city destination using splice
      delDest.splice(destIndex, 1);
      const newDest = { ...state.places[stateIndex].destinations[destIndex] };

      if (fav.favorite == true) {
        return {
          places: [
            {
              ...newState,
              destinations: [{ ...newDest, favorite: false }, ...delDest],
            },
            ...delState,
          ],
        };
      } else {
        return {
          places: [
            {
              ...newState,
              destinations: [
                { ...newDest, favorite: true, stateId: action.stateId },
                ...delDest,
              ],
            },
            ...delState,
          ],
        };
      }

    default:
      return state;
  }
};

export default placesReducer;
