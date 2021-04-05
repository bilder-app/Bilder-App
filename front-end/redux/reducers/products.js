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
  FETCHING_CART_ITEMS_ERROR,
  CLEARED_CART_ITEMS,
  CLEARING_CART_ITEMS,
  CLEARING_CART_ITEMS_ERROR,
  ADDED_ITEM_TO_FAVORITES,
  ADDING_ITEM_TO_FAVORITES,
  ADDING_ITEM_TO_FAVORITES_ERROR,
  FETCHED_FAVORITE_ITEMS,
  FETCHING_FAVORITE_ITEMS,
  FETCHING_FAVORITE_ITEMS_ERROR,
  REMOVED_ITEM_FROM_FAVORITES,
  REMOVING_ITEM_FROM_FAVORITES,
  REMOVING_ITEM_FROM_FAVORITES_ERROR,
} from "../types.js";

const initialState = {
  products: [],
  amount: 0,
  modal: {
    isVisible: false,
    product: {},
  },
  history: [],
  cart: [],
  isAddingToCart: false,
  isAddingToCartError: null,
  isFetchingCartItems: false,
  isFetchingCartItemsError: null,
  isClearingCartItems: false,
  isClearingCartItemsError: null,
  favoriteProducts: [],
  isAddingItemToFavorites: false,
  isAddingItemToFavoritesError: null,
  isRemovingItemFromFavorites: false,
  isRemovingItemFromFavoritesError: null,
  isFetchingFavoriteItems: false,
  isFetchingFavoriteItemsError: null,
};

export default function productsList(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };

    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };

    case SET_MODAL:
      return {
        ...state,
        modal: {
          isVisible: action.payload.visible,
          product: action.payload.product,
        },
      };

    case UNSHIFT_HISTORY:
      return {
        ...state,
        history: [action.payload, ...state.history],
      };

    case ADDING_TO_CART:
      return { ...state, isAddingToCart: true, isAddingToCartError: false };

    case ADDED_TO_CART:
      return {
        ...state,
        isAddingToCart: false,
        isAddingToCartError: false,
      };
    case GET_CART_AMOUNT:
      return {
        ...state,
        amount: action.payload,
      };

    case ADDING_TO_CART_ERROR:
      return {
        ...state,
        isAddingToCart: false,
        isAddingToCartError: action.payload,
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

    case ADDING_ITEM_TO_FAVORITES:
      return {
        ...state,
        isAddingItemToFavorites: true,
        isAddingItemToFavoritesError: false,
      };

    case ADDED_ITEM_TO_FAVORITES:
      return {
        ...state,
        isAddingItemToFavorites: false,
        isAddingItemToFavoritesError: false,
      };

    case ADDING_ITEM_TO_FAVORITES_ERROR:
      return {
        ...state,
        isAddingItemToFavorites: false,
        isAddingItemToFavoritesError: action.payload,
      };

    case FETCHING_FAVORITE_ITEMS:
      return {
        ...state,
        isFetchingFavoriteItems: true,
        isFetchingFavoriteItemsError: false,
      };

    case FETCHED_FAVORITE_ITEMS:
      return {
        ...state,
        isFetchingFavoriteItems: false,
        isFetchingFavoriteItemsError: false,
        favoriteProducts: action.payload,
      };

    case FETCHING_FAVORITE_ITEMS_ERROR:
      return {
        ...state,
        isFetchingFavoriteItems: false,
        isFetchingFavoriteItemsError: action.payload,
      };

    case REMOVING_ITEM_FROM_FAVORITES:
      return {
        ...state,
        isRemovingItemFromFavorites: true,
        isRemovingItemFromFavoritesError: false,
      };

    case REMOVED_ITEM_FROM_FAVORITES:
      return {
        ...state,
        isRemovingItemFromFavorites: false,
        isRemovingItemFromFavoritesError: false,
      };

    case REMOVING_ITEM_FROM_FAVORITES_ERROR:
      return {
        ...state,
        isRemovingItemFromFavorites: false,
        isRemovingItemFromFavoritesError: action.payload,
      };

    default:
      return state;
  }
}
