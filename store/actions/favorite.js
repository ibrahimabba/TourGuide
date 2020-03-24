export const ADD_FAVORITE = 'ADD_FAVORITE'

export const addFavorite = (id) => {
    return { type: ADD_FAVORITE, favId: id}
}