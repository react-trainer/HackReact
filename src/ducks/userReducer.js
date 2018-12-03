import axios from "axios";

//action types
const GET_USER = "GET_USER";

//initial state

const initialState = {
  user: []
};

//action creators
export const getUser = () => {
  return {
    type: GET_USER,
    payload: axios.get("/api/user")
  };
};

//reducer

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case `${GET_USER}_PENDING`:
      return {
        ...state
      };
    case `${GET_USER}_FULFILLED`:
      return {
        ...state,
        user: action.payload.data
      };
    case `${GET_USER}_REJECTED`:
      return {
        ...state
      };
    default:
      return state;
  }
}
