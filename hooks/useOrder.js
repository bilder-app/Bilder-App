import { useQuery } from "react-query";
import { getOrder } from "../api";
import { remap } from "../ramdaHelperFns";
import { specificOrderKey } from "./reactQueryKeys";

export function useOrder(orderId) {
  return useQuery(specificOrderKey(orderId), () => getOrder(orderId));
}

// ---- helper functions ----

/**
 * Order -> Array Product
 */
export function getProducts(order) {
  return order.products.map((prod) =>
    remap(
      {
        id: ["id"],
        images: ["images"],
        name: ["name"],
        price: ["price"],
        units: ["ProductInOrder", "amount"]
      },
      prod
    )
  );
}
