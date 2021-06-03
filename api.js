import axios from "axios";

const axiosInst = axios.create({
  // baseURL: "http://localhost:3001",
  baseURL: process.env.MY_IP,
  withCredentials: true
});
// axios.defaults.baseURL = process.env.MY_IP;


export function searchProducts(name, page, limit = 10) {
  return axiosInst
    .get(`/product/search?name=${name}&page=${page}&limit=${limit}`)
    .then((resp) => resp.data);
}

export function putProductInCart({ productId, amount }) {
  return axiosInst
    .put(`/cart/product/${productId}`, { amount })
    .then((resp) => resp.data);
}

export function getAllCartProducts() {
  return axiosInst.get("/cart/").then((resp) => resp.data);
}

export function getCartAmount() {
  return axiosInst.get("/cart/amount/").then((resp) => resp.data);
}

export function clearAllCartItems() {
  return axiosInst.put("/cart/clear");
}

export function postProductToFavorites(productId) {
  return axiosInst.post(`/favorite/${productId}`);
}

export function deleteProductFromFavorites(productId) {
  return axiosInst.delete(`/favorite/${productId}`);
}

export function getFavoriteProducts() {
  return axiosInst.get(`/favorite`).then((resp) => resp.data);
}

export function getProductsByCategories(categories) {
  return axiosInst
    .get(`/product/category?names=${categories.join(",")}`)
    .then((resp) => resp.data);
}

export function removeProductFromCart (productId) {
  return axiosInst
  .delete(`/cart/product/${productId}`)
  .then((resp) => resp.data);
}

export function logIn({ email, password }) {
  return axiosInst.post("/auth/login", { email, password });
}

export function getMyUser() {
  return axiosInst.get("/user/me").then((res) => res.data);
}
