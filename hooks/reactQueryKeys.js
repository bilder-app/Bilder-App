export const ORDERS = "orders";
export const ALL_ORDERS_KEY = ORDERS;
export const PENDING_ORDERS_KEY = [ORDERS, "pending"];
export const COMPLETED_ORDERS_KEY = [ORDERS, "completed"];

export const CART_ITEMS_KEY = "cart";
export const CHECKOUT_CART_KEY = "checkout cart products";

export function specificOrderKey(orderId) {
  return [ORDERS, orderId + ""]; // ["orders", "1"]
}
