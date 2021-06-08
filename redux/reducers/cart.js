import {
  ADDED_TO_CART,
  ADDING_TO_CART,
  ADDING_TO_CART_ERROR,
  REMOVING_ITEM_FROM_CART,
  REMOVED_ITEM_FROM_CART,
  REMOVING_ITEM_FROM_CART_ERROR,
  EDITED_ITEM_FROM_CART,
  EDITING_ITEM_FROM_CART,
  EDITING_ITEM_FROM_CART_ERROR,
  FETCHING_CART_ITEMS,
  FETCHED_CART_ITEMS,
  FETCHING_CART_ITEMS_ERROR,
  CLEARED_CART_ITEMS,
  CLEARING_CART_ITEMS,
  CLEARING_CART_ITEMS_ERROR,
} from "../types.js";


const initialState = {
  cart: [],
  isAddingToCart: false,
  isAddingToCartError: null,
  isFetchingCartItems: false,
  isFetchingCartItemsError: null,
  isRemovingFromCart: false,
  isRemovingFromCartError: null,
  isEditingFromCart: false,
  isEditingFromCartError: null,
  isClearingCartItems: false,
  isClearingCartItemsError: null,

};


export default function CartReducer(state = initialState, action) {
  switch (action.type) {
    case ADDING_TO_CART:
      return {
        ...state,
        isAddingToCart: true,
        isAddingToCartError: false
      };

    case ADDED_TO_CART:
      return {
        ...state,
        isAddingToCart: false,
        isAddingToCartError: false,
        cart: [action.payload, ...state.cart],
      };

    case ADDING_TO_CART_ERROR:
      return {
        ...state,
        isAddingToCart: false,
        isAddingToCartError: action.payload,
      };

    case REMOVING_ITEM_FROM_CART:
      return {
        ...state,
        isRemovingItemFromCart: true,
        isRemovingItemFromCartError: false,
      };

    case REMOVED_ITEM_FROM_CART:
      return {
        ...state,
        isRemovingItemFromCart: false,
        isRemovingItemFromCartError: false,
        cart: [...state.cart.filter( product => product.id !== action.payload )],
      };

    case REMOVING_ITEM_FROM_CART_ERROR:
      return {
        ...state,
        isRemovingItemFromCart: false,
        isRemovingItemFromCartError: action.payload,
      };
    
    case EDITING_ITEM_FROM_CART:
      return {
        ...state,
        isEditingItemFromCart: true,
        isEditingItemFromCartError: false,
      };

    case EDITED_ITEM_FROM_CART:
      return {
        ...state,
        isEditingItemFromCart: false,
        isEditingItemFromCartError: false,
        cart: [...state.cart.map((item) => item.productId === action.payload.productId ? action.payload.ProductInCart : item)],
      };

    case EDITING_ITEM_FROM_CART_ERROR:
      return {
        ...state,
        isEditingItemFromCart: false,
        isEditingItemFromCartError: action.payload,
      };

    case FETCHING_CART_ITEMS:
      return {
        ...state,
        isFetchingCartItems: true,
        isFetchingCartItemsError: false,
      };

    case FETCHED_CART_ITEMS:
      return {
        ...state,
        isFetchingCartItems: false,
        isFetchingCartItemsError: false,
        cart: action.payload,
      };

    case FETCHING_CART_ITEMS_ERROR:
      return {
        ...state,
        isFetchingCartItems: false,
        isFetchingCartItemsError: action.payload,
      };

    case CLEARING_CART_ITEMS:
      return {
        ...state,
        isClearingCartItems: true,
        isClearingCartItemsError: false,
      };

    case CLEARED_CART_ITEMS:
      return {
        ...state,
        isClearingCartItems: false,
        isClearingCartItemsError: false,
        cart: [],
      };

    case CLEARING_CART_ITEMS_ERROR:
      return {
        ...state,
        isClearingCartItems: false,
        isClearingCartItemsError: action.payload,
      };

    default:
      return state;
  }
}
