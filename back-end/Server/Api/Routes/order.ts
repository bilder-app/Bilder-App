import express from "express";
const router = express.Router();
import {
  removeProductFromOrder,
  addProductToCart,
  getAllCartProducts
} from "../Controllers/orderController";

router.get("/", (req, res) =>
  getAllCartProducts().then((resp) => res.json(resp?.products))
);

router.put("/product/:productId", async (req, res) =>
  addProductToCart(+req.params.productId, req.body.amount).then((resp) =>
    res.sendStatus(200)
  )
);

router.delete("/product/:productId", (req, res) =>
  removeProductFromOrder(+req.params.productId).then((resp) =>
    res.sendStatus(200)
  )
);

export default router;
