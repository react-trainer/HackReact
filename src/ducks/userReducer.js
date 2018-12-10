import axios from "axios";

//ACTION TYPES
const GET_USER = "GET_USER";

//INITIAL STATE
const initialState = {
  user: [],
  loggedIn: false
};

//ACTION CREATORS
export const getUser = () => {
  return {
    type: GET_USER,
    payload: axios.get("/api/user")
  };
};

//REDUCER
export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case `${GET_USER}_PENDING`:
      return {
        ...state,
        loggedIn: false
      };
    case GET_USER + "_FULFILLED":
      console.log(action.payload);
      return {
        ...state,
        loggedIn: true,
        user: action.payload.data
      };
    case `${GET_USER}_REJECTED`:
      return {
        ...state,
        loggedIn: false
      };
    default:
      return state;
  }
}
