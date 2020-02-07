import React from 'react';
import './App.css';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { bikesReducer as reducer } from './reducers/bikesReducer';

import BikeForm from "./components/BikeForm";
import BikesList from './components/BikesList';

const store = createStore(reducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>City Bikes in the World!</h1>
        <BikeForm />
        <BikesList />
      </div>
    </Provider>
  );
}

export default App;
