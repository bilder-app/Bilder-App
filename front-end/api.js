import axios from "axios";

const axiosLink = axios.create({
  // baseURL: "http://localhost:3001",
  baseURL: process.env.MY_IP,
  withCredentials: true
});
// axios.defaults.baseURL = process.env.MY_IP;


export function searchProducts(name, page, limit = 10) {
  return axiosLink
    .get(`/product/search?name=${name}&page=${page}&limit=${limit}`)
    .then((resp) => resp.data);
}

export function putProductInCart({ productId, amount }) {
  return axiosLink
    .put(`/cart/product/${productId}`, { amount })
    .then((resp) => resp.data);
}

export function getAllCartProducts() {
  return axiosLink.get("/cart/").then((resp) => resp.data);
}

export function getCartAmount() {
  return axiosLink.get("/cart/amount/").then((resp) => resp.data);
}

export function clearAllCartItems() {
  return axiosLink.put("/cart/clear");
}

export function postProductToFavorites(productId) {
  return axiosLink.post(`/favorite/${productId}`);
}

export function deleteProductFromFavorites(productId) {
  return axiosLink.delete(`/favorite/${productId}`);
}

export function getFavoriteProducts() {
  return axiosLink.get(`/favorite`).then((resp) => resp.data);
}

export function getProductsByCategories(categories) {
  return axiosLink
    .get(`/product/category?names=${categories.join(",")}`)
    .then((resp) => resp.data);
}

export function removeProductFromCart (productId) {
  return axiosLink
  .delete(`/cart/product/${productId}`)
  .then((resp) => resp.data);
}

export function logIn({ email, password }) {
  console.log(process.env.MY_IP)
  return axiosLink.post("/auth/login", { email, password });
}
