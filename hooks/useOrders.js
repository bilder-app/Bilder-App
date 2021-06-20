import { useQuery } from "react-query";
import { getAllOrders } from "../api";
import { ALL_ORDERS_KEY } from "./reactQueryKeys";
import { remap } from "../ramdaHelperFns";

const STATES = {
  PREPARING: "preparing",
  READY: "ready",
  SENT: "sent"
};

export function useOrders() {
  return useQuery(ALL_ORDERS_KEY, getAllOrders);
}

// ----- helper functions -----

/**
 * Array Order -> Array Order
 */
export function getPreparingAndPendingOrders(orders) {
  return orders.filter((orderData) => {
    if (orderData.shipping.state === STATES.SENT) return false;
    return true;
  });
}

/**
 * Array Order -> Array Order
 */
export function getConfirmedOrders(orders) {
  return orders.filter((orderData) => {
    if (orderData.shipping.state !== STATES.SENT) return false;
    return true;
  });
}

/**
 * Order -> ShippingData
 */
export function getOrderCardsData(order) {
  return remap(
    {
      orderId: ["shipping", "id"],
      state: ["shipping", "state"],
      createdAt: ["shipping", "createdAt"]
    },
    order
  );
}
