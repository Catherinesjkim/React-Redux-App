export const GET_DATA = "GET_DATA";

// no need of payload since not passing in anything 
// click, get data from the internet, trigger the getting of data. Not effecting anything. 
export const getData = () => {
  return {
    type: GET_DATA
  };
};