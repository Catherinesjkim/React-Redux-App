import { FETCH_DATA, UPDATE_BIKES, SET_ERROR } from '../actions';

const initialState = {
  bikes: [],
  isFetchingData: false,
  error: ""
};

export const bikesReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_DATA:
      return {
        ...state, 
        isFetchingData: true,
        missions: []
      };
    case UPDATE_BIKES:
      return {
        ...state,
        bikes: action.payload,
        isFetchingData: false
      };
    case SET_ERROR:
      return {
        ...state,
        isFetchingData: false, 
        error: action.payload
      };
    default: 
      return state; 
  }
};
