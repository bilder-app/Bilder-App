import express from "express";
const router = express.Router();

import { getAllProducts } from "../Controllers/productController";

router.get("/", (req, res) =>
 getAllProducts().then((resp) => {
    console.log(resp) 
    res.json(resp)})
);

export default router;
