// My actions
import axios from "axios";

export const FETCH_DATA = "FETCH_DATA";
export const UPDATE_BIKES = "GET_BIKES";
export const SET_ERROR = 'SET_ERROR';

// no need of payload since not passing in anything 
// click, get data from the internet, trigger the getting of data. Not effecting anything. 
// thunk is going to do sth. special. Thunk is reluing on us to call that dispatch. 
// Redux would error out saying actions cannot be a function. 
// res is the object and there's a key called data on inspect dev tool on firefox console.
export const getData = () => dispatch => {
  dispatch({ type: FETCH_DATA });

    setTimeout(() => {
      axios
        .get("http://api.citybik.es/v2/networks")
        .then(response => {
          console.log('API INFO HERE', response.data.networks);
          dispatch({ type: UPDATE_BIKES, payload: response.data.networks });
        })
        .catch(err => {
          console.log('error fetching data from api. err: ', err);
          dispatch({ type: SET_ERROR, payload: 'Error fetching data from API!' })
      });
    }, []);
  }
