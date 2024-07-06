import { ADD_PHOTO, DELETE_PHOTO } from "../Types/PhotoApiTypes";

export const addPhotoAction = (data) => {
  return {
    type: ADD_PHOTO,
    data: data,
  };
};
export const deletePhotoAction = (data) => {
  return {
    type: DELETE_PHOTO,
    data: data,
  };
};
