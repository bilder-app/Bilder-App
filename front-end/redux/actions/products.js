import {
  ADD_PRODUCT,
  GET_PRODUCTS,
} from '../types.js'



export const addProduct = (product) => {
  return function(dispatch) {
    return dispatch({
        type: ADD_PRODUCT,
        payload: product
    })
  }
}

export const getProducts = () => {
  return function(dispatch) {
    return fetch('http://localhost:5000/product')
    .then(data => {
      return dispatch({ type: GET_PRODUCTS, payload: data }) 
    })
  }
}