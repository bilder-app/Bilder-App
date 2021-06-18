import { useQuery } from "react-query";
import { getCheckoutCartProducts } from "../api";
import { CHECKOUT_CART_KEY } from "./reactQueryKeys";

export function useCheckoutCart() {
  return useQuery(CHECKOUT_CART_KEY, getCheckoutCartProducts);
}

export function getTotalProducts(checkoutCart) {
  return checkoutCart.reduce((acc, { products }) => products.length + acc, 0);
}
