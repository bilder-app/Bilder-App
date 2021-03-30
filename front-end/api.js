import axios from "axios";

axios.defaults.baseURL = process.env.MY_IP;

console.log(process.env.MY_IP);

export function getAllProducts() {
  return axios.get("/product").then((resp) => resp.data);
}

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
