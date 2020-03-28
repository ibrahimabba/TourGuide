export const ADD_FAVORITE = 'ADD_FAVORITE';

export const favoriteToggle = (stateId, destinationId) => {
  return { type: ADD_FAVORITE, stateId: stateId, destinationId: destinationId };
};
