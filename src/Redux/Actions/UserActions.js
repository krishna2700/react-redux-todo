export const updateUserData = (data) => {
  return {
    type: "UPDATE_USER_DATA",
    data: data,
  };
};
export const deleteUserData = (data) => {
  return {
    type: "DELETE_USER_DATA",
    data: data,
  };
};

// call an action with this type.

// dispatch -> updateUserData()
