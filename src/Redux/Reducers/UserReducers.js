const initialState = {
  userData: {
    name: "Krishna",
  },
  isOkFine: "true",
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "STORE_USER_DATA":
      return {
        ...state,
        userData: action.data,
      };
    case "UPDATE_USER_DATA":
      return {
        ...state,
        userData: {
          ...state.userData,
          ...action.data,
        },
      };
    case "LOG_OUT":
      return {
        ...state,
        userData: {},
      };
    default:
      return state;
  }
};
