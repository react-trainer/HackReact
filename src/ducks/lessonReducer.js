import axios from "axios";

//ACTION TYPES
const GET_IMAGES = "GET_IMAGES";

//INITIAL STATE

const initialState = {
  imageURL: [],
  isLoading: false
};

//ACTION CREATORS
export const getImages = () => {
  return {
    type: GET_IMAGES,
    payload: axios.get("/api/images")
  };
};

//REDUCER
export default function lessonReducer(state = initialState, action) {
  console.log(action.type);
  switch (action.type) {
    case `${GET_IMAGES}_PENDING`:
      return {
        ...state,
        isLoading: true
      };
    case `${GET_IMAGES}_FULFILLED`:
      console.log(action.payload);
      return {
        ...state,
        isLoading: false,
        imageURL: action.payload.data
      };
    case `${GET_IMAGES}_REJECTED`:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
}
