import React from 'react';
import './App.css';
import IMG from './image/paris-150-01.jpg';

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
        <a href="https://www.freepik.com/free-photos-vectors/watercolor">Paris Mon Amour</a>
        <img src={IMG} alt="img" />
        <BikeForm />
        <BikesList />
      </div>
    </Provider>
  );
}

/* <Image publicId="family_bench.jpg">
  <Transformation width="250" height="250" gravity="faces" crop="fill" />
</Image>; */


export default App;
