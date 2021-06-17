import { useQuery } from "react-query";
import { getAllCartProducts } from "../api";
import { CART_ITEMS_KEY } from "./reactQueryKeys";

/**
 * @param {import("react-query").UseQueryOptions} options
 */
export function useCart(options = {}) {
  return useQuery(CART_ITEMS_KEY, getAllCartProducts, options);
}

// -- public cart helper functions --

/**
 * Array -> Number
 */
export function getTotalPrice(cartProducts) {
  return cartProducts.reduce(
    (prev, next) => next.price * next.amount + prev,
    0
  );
}
