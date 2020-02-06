import { GET_DATA } from '../actions';

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
    default: 
      return state; 
  }
};
