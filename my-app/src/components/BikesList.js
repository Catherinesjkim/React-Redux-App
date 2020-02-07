import React from 'react';

// We need redux store
import { useSelector } from 'react-redux';


const BikesList = () => {
  const bikes = useSelector (state => state.bikes)

  return (
    <>
      {bikes.map(bike => (
        <div>
          <h1>{bike.name}</h1>
          <div>{bike.location.city}</div>
          <p>{bike.location.country}</p>
        </div>
      ))}
    </>
  );
};

export default BikesList;