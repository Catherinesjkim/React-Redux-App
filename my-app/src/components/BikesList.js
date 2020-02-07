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
        <div>
          <h1>{bike.name}</h1>
          <div>{bike.location.city}</div>
          <p>{bike.location.country}</p>
        </div>
      )))}
    </>
  );
};

export default BikesList;