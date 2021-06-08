import axios from "axios";

axios.defaults.baseURL = process.env.MY_IP || "http://192.168.0.12:7000";

export function logIn({ email, password }) {
  return axios.post("/auth/login", { email, password });
}

export function getMyUser() {
  return axios.get("/user/me").then((res) => res.data);
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

/**
 * @typedef ProductInCart
 * @property {string} amount
 * @property {string} createdAt
 * @property {number} personId
 * @property {number} productId
 * @property {string} updatedAt
 */

/**
 * @typedef Product
 * @type {object}
 * @property {ProductInCart} ProductInCart
 * @property {string} brand
 * @property {string} businessId
 * @property {string} content
 * @property {string} contentType
 * @property {string} createdAt
 * @property {string} description
 * @property {string} id
 * @property {string[]} images
 * @property {string} model
 * @property {string} name
 * @property {string} price
 * @property {string} stock
 * @property {string} updatedAt
 */

/**
 * @returns {Promise<Product[]>}
 */
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
  return axios.delete(`/user/cart/${productId}`);
}

export function editProductInCart({ amount, productId }) {
  return axios.put(`/user/cart/${productId}`, { amount });
}
