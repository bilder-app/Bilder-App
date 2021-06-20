import {
  ADDED_TO_CART,
  ADDING_TO_CART,
  ADDING_TO_CART_ERROR,
  REMOVED_ITEM_FROM_CART,
  REMOVING_ITEM_FROM_CART,
  REMOVING_ITEM_FROM_CART_ERROR,
  EDITED_ITEM_FROM_CART,
  EDITING_ITEM_FROM_CART,
  EDITING_ITEM_FROM_CART_ERROR,
  CLEARED_CART_ITEMS,
  CLEARING_CART_ITEMS,
  CLEARING_CART_ITEMS_ERROR
} from "../types.js";

import {
  postProductToCart,
  updateProductInCart,
  deleteProductInCart,
  getAllCartProducts,
  clearAllCartItems
} from "../../api";

export const addToCart = (productId) => (dispatch) => {
  dispatch({ type: ADDING_TO_CART });
  postProductToCart(productId)
    .then((resp) => {
      dispatch({ type: ADDED_TO_CART, payload: resp.data });
    })
    .catch((e) => dispatch({ type: ADDING_TO_CART_ERROR, payload: e }));
};

export const editItemFromCart = (productId, amount) => (dispatch) => {
  dispatch({ type: EDITING_ITEM_FROM_CART });
  updateProductInCart(productId, amount)
    .then((resp) => {
      dispatch({ type: EDITED_ITEM_FROM_CART, payload: resp });
    })
    .catch((e) => dispatch({ type: EDITING_ITEM_FROM_CART_ERROR, payload: e }));
};

export const removeItemFromCart = (productId) => (dispatch) => {
  dispatch({ type: REMOVING_ITEM_FROM_CART });
  deleteProductInCart(productId)
    .then(() => {
      dispatch({ type: REMOVED_ITEM_FROM_CART, payload: productId });
    })
    .catch((e) =>
      dispatch({ type: REMOVING_ITEM_FROM_CART_ERROR, payload: e })
    );
};

export const clearCartItems = () => (dispatch) => {
  dispatch({ type: CLEARING_CART_ITEMS });
  clearAllCartItems()
    .then(() => dispatch({ type: CLEARED_CART_ITEMS }))
    .catch((e) => dispatch({ type: CLEARING_CART_ITEMS_ERROR, payload: e }));
};
