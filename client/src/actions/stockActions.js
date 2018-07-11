import * as types from '../constants/ActionTypes';
const apiUrl = 'http://localhost:3001/api';

const receiveProducts = (products) => ({
  type: types.RECEIVE_PRODUCTS,
  products,
})

export const getAllProducts = () => {
  return (dispatch) => {
    return fetch(apiUrl)
      .then(response => {
        return response.json();
      })
      .then((data) => {
        dispatch(receiveProducts(data.products));
      })
  }
}
