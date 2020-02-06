import React from 'react';
import { connect } from 'react-redux';

// rest state for get data
const BikeForm = props => {
  return (
    <>
      {props.isFetchingData ? (
        <div>we are fetching data</div> 
      ) : (
          <button>get data</button>
      )}
    </>
  );
};

const mapStateToProps = state => {
  return {
    isFetchingData: state.isFetchingData
  };
};

export default connect(
  mapStateToProps, 
  {}
)(BikeForm);