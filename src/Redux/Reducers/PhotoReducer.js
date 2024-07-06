import { ADD_PHOTO, DELETE_PHOTO } from "../Types/PhotoApiTypes";

const initialState = {
  photos: [],
};

// Spreading is copying all the elements in an array or objects

export const PhotoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PHOTO:
      return {
        ...state,
        photos: action.data,
      };
    case DELETE_PHOTO:
      return {
        ...state,
        photos: state.photos.filter((item) => item.id !== action.data),
      };
    default:
      return state;
  }
};
