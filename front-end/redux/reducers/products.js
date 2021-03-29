import {
  ADD_PRODUCT,
  GET_PRODUCTS,
  SET_MODAL,
  UNSHIFT_HISTORY,
} from '../types.js'


const initialState = {
  products: [], 
  modal: {
    isVisible: false,
    product: {}
  },
  history: [],
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

    case UNSHIFT_HISTORY:
      return {
        ...state,
        history: [action.payload, ...state.history]
      }
    
    default:
      return state;
  }
}
