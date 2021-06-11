import {
  ADD_PRODUCT,
  GET_PRODUCTS,
  GET_CART_AMOUNT,
  SET_MODAL,
  ADDED_TO_CART,
  ADDING_TO_CART,
  ADDING_TO_CART_ERROR,
  CLEARED_CART_ITEMS,
  CLEARING_CART_ITEMS,
  CLEARING_CART_ITEMS_ERROR,
  ADDED_ITEM_TO_FAVORITES,
  ADDING_ITEM_TO_FAVORITES,
  ADDING_ITEM_TO_FAVORITES_ERROR,
  REMOVED_ITEM_FROM_FAVORITES,
  REMOVING_ITEM_FROM_FAVORITES,
  REMOVING_ITEM_FROM_FAVORITES_ERROR
} from "../types.js";

import axios from "axios";
import {
  getCartAmount,
  putProductInCart,
  getAllCartProducts,
  clearAllCartItems,
  postProductToFavorites,
  deleteProductFromFavorites
} from "../../api";

export const addProduct = (product) => {
  return function (dispatch) {
    return dispatch({
      type: ADD_PRODUCT,
      payload: product
    });
  };
};

export const getProducts = () => {
  return (dispatch) => {
    return axios
      .get("/product/")
      .then((res) => {
        return dispatch({
          type: GET_PRODUCTS,
          payload: res.data
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const showModal = (product) => {
  return function (dispatch) {
    return dispatch({
      type: SET_MODAL,
      payload: {
        product,
        visible: true
      }
    });
  };
};

export const hideModal = () => {
  return function (dispatch) {
    return dispatch({
      type: SET_MODAL,
      payload: {},
      visible: false
    });
  };
};

export const addToCart = (productId, amount) => (dispatch) => {
  dispatch({ type: ADDING_TO_CART });
  putProductInCart(productId, amount)
    .then((resp) => {
      dispatch({ type: ADDED_TO_CART, payload: resp });
    })
    .catch((e) => dispatch({ type: ADDING_TO_CART_ERROR, payload: e }));
};

export const removeToCart = (productId, amount) => (dispatch) => {
  dispatch({ type: ADDING_TO_CART });
  putProductInCart({ productId, amount })
    .then((resp) => dispatch({ type: ADDED_TO_CART, payload: resp }))
    .catch((e) => dispatch({ type: ADDING_TO_CART_ERROR, payload: e }));
};

export const clearCartItems = () => (dispatch) => {
  dispatch({ type: CLEARING_CART_ITEMS });
  clearAllCartItems()
    .then(() => dispatch({ type: CLEARED_CART_ITEMS }))
    .catch((e) => dispatch({ type: CLEARING_CART_ITEMS_ERROR, payload: e }));
};

export const addProductToFavorites = (productId) => (dispatch) => {
  dispatch({ type: ADDING_ITEM_TO_FAVORITES });
  return postProductToFavorites(productId)
    .then(() => dispatch({ type: ADDED_ITEM_TO_FAVORITES }))
    .catch((e) =>
      dispatch({ type: ADDING_ITEM_TO_FAVORITES_ERROR, payload: e })
    );
};

export const removeProductFromFavorites = (productId) => (dispatch) => {
  dispatch({ type: REMOVING_ITEM_FROM_FAVORITES });
  return deleteProductFromFavorites(productId)
    .then(() => dispatch({ type: REMOVED_ITEM_FROM_FAVORITES }))
    .catch((e) =>
      dispatch({ type: REMOVING_ITEM_FROM_FAVORITES_ERROR, payload: e })
    );
};
