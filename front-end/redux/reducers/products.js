import {
  ADD_PRODUCT,
  GET_PRODUCTS,
  SET_MODAL,
  UNSHIFT_HISTORY,
  ADDED_TO_CART,
  ADDING_TO_CART,
  ADDING_TO_CART_ERROR,
  FETCHING_CART_ITEMS,
  FETCHED_CART_ITEMS,
  FETCHING_CART_ITEMS_ERROR
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
  isAddingToCartError: null,
  isFetchingCartItems: false,
  isFetchingCartItemsError: null
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
        isAddingToCartError: false
      };

    case ADDING_TO_CART_ERROR:
      return {
        ...state,
        isAddingToCart: false,
        isAddingToCartError: action.payload
      };

    case FETCHING_CART_ITEMS:
      return {
        ...state,
        isFetchingCartItems: true,
        isFetchingCartItemsError: false
      };

    case FETCHED_CART_ITEMS:
      return {
        ...state,
        isFetchingCartItems: false,
        isFetchingCartItemsError: false,
        cart: action.payload
      };

    case FETCHING_CART_ITEMS_ERROR:
      return {
        ...state,
        isFetchingCartItems: false,
        isFetchingCartItemsError: action.payload
      };

    default:
      return state;
  }
}
