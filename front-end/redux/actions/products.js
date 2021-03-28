import {
  ADD_PRODUCT,
  GET_PRODUCTS,
} from '../types.js'
import axios from 'axios'


export const addProduct = (product) => {
  return function(dispatch) {
    return dispatch({
        type: ADD_PRODUCT,
        payload: product
    })
  }
}

// export const getProducts = () => {
//   return function(dispatch) {
//     return fetch('http://localhost:5000/product')
//     .then(data => {
//       console.log(data)
//       return dispatch({ type: GET_PRODUCTS, payload: data }) 
//     })
//   }
// }

// export const getProducts = async dispatch => {
//   try{
//     const data = await axios.get('http://localhost:5000/product')
//     dispatch( {
//       type: GET_PRODUCTS,
//       payload: data
//     })
//   }
//   catch(e){
//     dispatch( {
//         type: USERS_ERROR,
//         payload: console.log(e),
//     })
//   }
// }


export const getProducts = () => {
  return dispatch => {
    return axios.get('http://192.168.0.15:5000/product/')
    .then(res => {
      return dispatch({
        type: GET_PRODUCTS,
        payload: res.data
      })
    })
    .catch(err => {
      console.log(err)
    })
  }
}