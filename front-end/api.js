import axios from "axios";

axios.defaults.baseURL = "http://192.168.0.12:5000";

export function getAllProducts() {
  return axios.get("/product").then((resp) => resp.data);
}

export function searchProducts(name, page, limit = 5) {
  return axios
    .get(`/product/search?name=${name}&page=${page}&limit=${limit}`)
    .then((resp) => resp.data);
}
