import React from 'react';
import './App.css';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { bikesReducer as reducer } from "./reducers/bikesReducer";

import BikeForm from "./components/BikeForm";

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>City Bikes in the World!</h1>
        <BikeForm />
      </div>
    </Provider>
  );
}

export default App;
