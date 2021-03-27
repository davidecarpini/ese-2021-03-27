import { defaultStore, SET_COMPANIES, SET_CARS, SET_USERS } from "./constants";

const reducer = (state = defaultStore, action) => {
  switch (action.type) {
    case SET_COMPANIES:
      return {
        ...state,
        companies: action.payload,
      };
    case SET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case SET_CARS:
      return {
        ...state,
        cars: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
