import axios from "axios";

axios.defaults.baseURL = process.env.MY_IP;

export function searchProducts(name, page, limit = 10) {
  return axios
    .get(`/product/search?name=${name}&page=${page}&limit=${limit}`)
    .then((resp) => resp.data);
}

export function putProductInCart({ productId, amount }) {
  return axios
    .put(`/cart/product/${productId}`, { amount })
    .then((resp) => resp.data);
}

export function getAllCartProducts() {
  return axios.get("/cart/").then((resp) => resp.data);
}

export function getCartAmount() {
  return axios.get("/cart/amount/").then((resp) => resp.data);
}

export function clearAllCartItems() {
  return axios.put("/cart/clear");
}

export function postProductToFavorites(productId) {
  return axios.post(`/favorite/${productId}`);
}

export function deleteProductFromFavorites(productId) {
  return axios.delete(`/favorite/${productId}`);
}

export function getFavoriteProducts() {
  return axios.get(`/favorite`).then((resp) => resp.data);
}

export function getProductsByCategories(categories) {
  return axios
    .get(`/product/category?names=${categories.join(",")}`)
    .then((resp) => resp.data);
}
