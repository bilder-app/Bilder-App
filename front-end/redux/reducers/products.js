import {
  ADD_PRODUCT,
  GET_PRODUCTS,
  SET_MODAL,
  UNSHIFT_HISTORY,
  ADDED_TO_CART,
  ADDING_TO_CART,
  ADDING_TO_CART_ERROR
} from "../types.js";

const initialState = {
  products: [],
  modal: {
    isVisible: false,
    product: {}
  },
  history: [],
  cart: [],
  isAddingToCart: false,
  isAddingToCartError: null
};

export default function productsList(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload]
      };

    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload
      };

    case SET_MODAL:
      return {
        ...state,
        modal: {
          isVisible: action.payload.visible,
          product: action.payload.product
        }
      };

    case UNSHIFT_HISTORY:
      return {
        ...state,
        history: [action.payload, ...state.history]
      };

    case ADDING_TO_CART:
      return { ...state, isAddingToCart: true, isAddingToCartError: false };

    case ADDED_TO_CART:
      return {
        ...state,
        isAddingToCart: false,
        isAddingToCartError: false,
        cart: [...state.cart, action.payload]
      };

    case ADDING_TO_CART_ERROR:
      return {
        ...state,
        isAddingToCart: false,
        isAddingToCartError: action.payload
      };

    default:
      return state;
  }
}
