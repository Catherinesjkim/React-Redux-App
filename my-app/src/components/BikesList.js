import React from 'react';
// We need redux store
import { useSelector } from 'react-redux';

const BikesList = () => {
  const bikes = useSelector (state => state.bikes);
  const error = useSelector(state=>state.error);

  return (
    <>
      { error ? (
        <div className="error">{error}</div>
      ) : (
      bikes.map(bike => (
        <ol> 
          <li className="station"><strong>{bike.name}</strong></li>
          <li>{bike.location.city}</li>
          <li>{bike.location.country}</li>
        </ol>
      )))}
    </>
  );
};

export default BikesList;