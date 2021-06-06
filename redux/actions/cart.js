import {
  ADDED_TO_CART,
  ADDING_TO_CART,
  ADDING_TO_CART_ERROR,
  REMOVED_ITEM_FROM_CART,
  REMOVING_ITEM_FROM_CART,
  REMOVING_ITEM_FROM_CART_ERROR,
  FETCHED_CART_ITEMS,
  FETCHING_CART_ITEMS,
  FETCHING_CART_ITEMS_ERROR,
  CLEARED_CART_ITEMS,
  CLEARING_CART_ITEMS,
  CLEARING_CART_ITEMS_ERROR,
} from "../types.js";

import {
  postProductToCart,
  updateProductInCart,
  deleteProductInCart,
  getAllCartProducts,
  clearAllCartItems,
} from "../../api";


export const addToCart = (productId) => (dispatch) => {
  dispatch({ type: ADDING_TO_CART });
  postProductToCart(productId)
    .then((resp) => {
      dispatch({ type: ADDED_TO_CART, payload: resp });
    })
    .catch((e) => dispatch({ type: ADDING_TO_CART_ERROR, payload: e }));
};

export const editItemFromCart = (productId, amount) => (dispatch) => {
  dispatch({ type: ADDING_TO_CART });
  updateProductInCart(productId, amount)
    .then((resp) => {
      console.log(resp, "editItemFromCart")
      dispatch({ type: ADDED_TO_CART, payload: resp });
    })
    .catch((e) => dispatch({ type: ADDING_TO_CART_ERROR, payload: e }));
};

export const removeItemFromCart = (productId) => (dispatch) => {
  dispatch({ type: REMOVING_ITEM_FROM_CART });
  deleteProductInCart(productId)
    .then((resp) => {
      console.log(resp.data, "removeItemFromCart")
      dispatch({ type: REMOVED_ITEM_FROM_CART, payload: productId })
    })
    .catch((e) => dispatch({ type: REMOVING_ITEM_FROM_CART_ERROR, payload: e }));
};

export const getCartItems = () => (dispatch) => {
  dispatch({ type: FETCHING_CART_ITEMS });
  getAllCartProducts()
    .then((resp) => dispatch({ type: FETCHED_CART_ITEMS, payload: resp }))
    .catch((e) => dispatch({ type: FETCHING_CART_ITEMS_ERROR, payload: e }));
};

export const clearCartItems = () => (dispatch) => {
  dispatch({ type: CLEARING_CART_ITEMS });
  clearAllCartItems()
    .then(() => dispatch({ type: CLEARED_CART_ITEMS }))
    .catch((e) => dispatch({ type: CLEARING_CART_ITEMS_ERROR, payload: e }));
};
