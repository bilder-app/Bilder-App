import {
  ADD_PRODUCT,
  GET_PRODUCTS,
  SET_MODAL,
  UNSHIFT_HISTORY,
  ADDED_TO_CART,
  ADDING_TO_CART,
  ADDING_TO_CART_ERROR,
  FETCHED_CART_ITEMS,
  FETCHING_CART_ITEMS,
  FETCHING_CART_ITEMS_ERROR,
} from "../types.js";

import axios from "axios";
import { putProductInCart, getAllCartProducts } from "../../api";

export const addProduct = (product) => {
  return function (dispatch) {
    return dispatch({
      type: ADD_PRODUCT,
      payload: product,
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
          payload: res.data,
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
        visible: true,
      },
    });
  };
};

export const hideModal = () => {
  return function (dispatch) {
    return dispatch({
      type: SET_MODAL,
      payload: {},
      visible: false,
    });
  };
};

export const unshiftHistory = (input) => {
  return function (dispatch) {
    return dispatch({
      type: UNSHIFT_HISTORY,
      payload: input,
    });
  };
};

export const addToCart = (productId, amount) => (dispatch) => {
  dispatch({ type: ADDING_TO_CART });
  putProductInCart({ productId, amount })
    .then((resp) => {
      dispatch({ type: ADDED_TO_CART, payload: resp });
    })
    .catch((e) => dispatch({ type: ADDING_TO_CART_ERROR, payload: e }));
};

export const getCartItems = () => (dispatch) => {
  dispatch({ type: FETCHING_CART_ITEMS });
  getAllCartProducts()
    .then((resp) => {
      dispatch({ type: FETCHED_CART_ITEMS, payload: resp });
    })
    .catch((e) => dispatch({ type: FETCHING_CART_ITEMS_ERROR, payload: e }));
};
