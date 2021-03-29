import {
  ADD_PRODUCT,
  GET_PRODUCTS,
  SET_MODAL,
} from '../types.js'


const initialState = {
  products: [], 
  modal: {
    isVisible: false,
    product: {}
  },
}



export default function productsList(state = initialState, action) {
  switch (action.type) {

    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload]
      }
    
    case GET_PRODUCTS: 
      return {
        ...state,
        products: action.payload
      }

    case SET_MODAL: 
      return {
        ...state,
        modal: {
          isVisible: action.payload.visible,
          product: action.payload.product
        }
      }


    default:
      return state;
  }
}
