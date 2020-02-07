import { GET_DATA, UPDATE_BIKES } from '../actions';

const initialState = {
  bikes: [],
  isFetchingData: false
};

export const bikesReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_DATA:
      return {
        ...state, 
        isFetchingData: true
      };
    case UPDATE_BIKES:
      return {
        ...state,
        bikes: action.payload
      };
    default: 
      return state; 
  }
};
