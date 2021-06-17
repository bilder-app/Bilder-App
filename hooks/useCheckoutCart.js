import { useQuery } from "react-query";
import { getCheckoutCartProducts } from "../api";

export function useCheckoutCart() {
  return useQuery("checkout cart products", getCheckoutCartProducts);
}

export function getTotalProducts(checkoutCart) {
  return checkoutCart.reduce((acc, { products }) => products.length + acc, 0);
}
