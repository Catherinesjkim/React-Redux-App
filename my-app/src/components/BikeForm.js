import React from 'react';

// Hooks for redux vs. maps/props
import { useSelector, useDispatch } from 'react-redux';

import { getData } from '../actions';

// rest state for get data
const BikeForm = () => {

  const isFetchingData = useSelector(state => state.isFetchingData);

  const dispatch =  useDispatch();

  return (
    <>
      {isFetchingData ? (
        <div className="message">**We are fetching data**</div> 
      ) : (
        <button onClick={() => dispatch(getData())}>Get Data</button>
      )}
    </>
  );
};

export default BikeForm;
