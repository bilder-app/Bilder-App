// import {}
import { useQuery } from "react-query";
import { getAllCartProducts } from "../api";
import { CART_ITEMS_KEY } from "./reactQueryKeys";

export function useCart() {
  return useQuery(CART_ITEMS_KEY, getAllCartProducts);
}
