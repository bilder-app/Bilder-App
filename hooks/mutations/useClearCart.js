import { clearAllCartItems } from "../../api";
import { useMutation, useQueryClient } from "react-query";
import { CART_ITEMS_KEY } from "../reactQueryKeys";

export function useClearCart() {
  const queryClient = useQueryClient();
  return useMutation(clearAllCartItems, {
    onSuccess() {
      queryClient.invalidateQueries(CART_ITEMS_KEY);
    }
  });
}
