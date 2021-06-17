import { useQuery } from "react-query";
import { getCheckoutCartProducts } from "../api";

export function useCheckoutCart() {
  return useQuery("checkout cart products", getCheckoutCartProducts);
}
