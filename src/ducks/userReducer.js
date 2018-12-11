import axios from "axios";

//ACTION TYPES
const GET_USER = "GET_USER";
const GET_DRILLS = "GET_DRILLS";
const UPDATE_INPUT = "UPDATE_INPUT";

//INITIAL STATE
const initialState = {
  user: [],
  drills: [],
  searchDrillsInput: "",
  loggedIn: false,
  isLoading: false
};

//ACTION CREATORS
//GET

export const getUser = () => {
  return {
    type: GET_USER,
    payload: axios.get("/api/user")
  };
};

export const getDrills = () => {
  return {
    type: GET_DRILLS,
    payload: axios.get("/api/drills")
  };
};
//UPDATE
export const updateInput = input => {
  return {
    type: UPDATE_INPUT,
    payload: input
  };
};

//REDUCER
export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_INPUT:
      console.log(
        "passing reducer...",
        action.payload.target.name,
        action.payload.target.value
      );
      return {
        ...state,
        [action.payload.target.name]: action.payload.target.value.toLowerCase()
      };
    case `${GET_DRILLS}_PENDING`:
      return {
        ...state,
        isLoading: true
      };
    case `${GET_DRILLS}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        drills: action.payload.data
      };
    case `${GET_DRILLS}_REJECTED`:
      return {
        ...state,
        isLoading: false
      };
    case `${GET_USER}_PENDING`:
      return {
        ...state,
        loggedIn: false
      };
    case `${GET_USER}_FULFILLED`:
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
