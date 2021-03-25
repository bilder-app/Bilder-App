import axios from "axios";

axios.defaults.baseURL = "http://192.168.0.12:5000";

export function searchProducts() {
  return axios.get("/product").then((resp) => resp.data);
}
