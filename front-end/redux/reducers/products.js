import {
  ADD_PRODUCT,
  GET_PRODUCTS,
} from '../types.js'


const initialState = {
  products: [],  
}



export default function productsList(state = initialState, action) {
  switch (action.type) {

    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload.product]
      }
    
    case GET_PRODUCTS: 
      return {
        ...state,
        products: action.payload
      }

    default:
      return state;
  }
}
