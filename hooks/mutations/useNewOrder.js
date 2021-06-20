import { newOrder } from "../../api";
import { useMutation, useQueryClient } from "react-query";
import { CART_ITEMS_KEY, ALL_ORDERS_KEY } from "../reactQueryKeys";

export function useNewOrder() {
  const queryClient = useQueryClient();
  return useMutation((variables) => newOrder(variables), {
    onSuccess() {
      queryClient.invalidateQueries(CART_ITEMS_KEY);
      queryClient.invalidateQueries(ALL_ORDERS_KEY);
    }
  });
}
