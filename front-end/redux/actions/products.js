import {
  ADD_PRODUCT,
  GET_PRODUCTS,
  SET_MODAL,
  UNSHIFT_HISTORY,
} from "../types.js";

import axios from "axios";

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
