import axios from "axios";

axios.defaults.baseURL = process.env.MY_IP || "http://192.168.0.12:7000";

export function logIn({ email, password }) {
  return axios.post("/auth/login", { email, password });
}

export function getMyUser() {
  return axios.get("/user/me").then((res) => res.data);
}

export function updateMyUser(data) {
  return axios.put("/user/me", data).then((res) => res.data);
}

export function getProducts() {
  return axios.get(`/products`);
}

export function searchProducts(name, page, limit = 10) {
  return axios
    .get(`/product/search?name=${name}&page=${page}&limit=${limit}`)
    .then((resp) => resp.data);
}

export function postProductToCart(productId) {
  return axios.post(`/user/cart/${productId}`);
}

export function updateProductInCart(productId, amount) {
  return axios
    .put(`/user/cart/${productId}`, { amount })
    .then((resp) => resp.data);
}

export function deleteProductInCart(productId) {
  return axios.delete(`/user/cart/${productId}`);
}

export function getAllCartProducts() {
  return axios.get("/user/cart/").then((resp) => resp.data);
}

export function clearAllCartItems() {
  return axios.put("/user/cart/clear");
}

// export function getCartAmount() {
//   return axios.get("/user/cart/amount/").then((resp) => resp.data);
// }

export function postProductToFavorites(productId) {
  return axios.post(`/favorite/${productId}`);
}

export function deleteProductFromFavorites(productId) {
  return axios.delete(`/favorite/${productId}`);
}

export function getFavoriteProducts() {
  return axios.get(`/user/favorites`).then((resp) => resp.data);
}

export function getProductsByCategories(categories) {
  return axios
    .get(`/product/category?names=${categories.join(",")}`)
    .then((resp) => resp.data);
}

export function removeProductFromCart(productId) {
  return axios.delete(`/cart/product/${productId}`).then((resp) => resp.data);
}
