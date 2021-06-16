// import {}
import { useQuery } from "react-query";
import { getAllCartProducts } from "../api";

export function useCart() {
  return useQuery("cart items", getAllCartProducts);
}
