import express from "express";
const router = express.Router();
import Order from "../../Models/Order";
import Product from "../../Models/Product";
import ProductInCart from "../../Models/ProductInCart";

// For testing
const userId = 1;

router.get("/", (req, res) => {
  Order.findOne({
    where: { userId: userId, state: "pending" },
    include: [{ model: Product, through: { attributes: [] } }]
  }).then((resp) => res.json(resp?.products));
});

router.put("/product/:productId", async (req, res) => {
  const { productId } = req.params;
  const order = await Order.findOne({
    where: { userId: userId, state: "pending" }
  });
  const product = await Product.findByPk(productId);
  await ProductInCart.findOrCreate({
    where: {
      orderId: order!.id,
      productId
    },
    defaults: {
      amount: 1,
      price: product!.price
    }
  });
  res.sendStatus(200);
});

export default router;
