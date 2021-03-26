import express from "express";
const router = express.Router();
import orderRouter from "./Api/Routes/order";
import categoryRouter from "./Api/Routes/category";
import productRouter from "./Api/Routes/product";
import devRouter from "./Dev/router";

router.use("/cart", orderRouter);
router.use("/category", categoryRouter);
router.use("/product", productRouter);
router.use("/dev", devRouter);
router.use("/product", productRouter);

export default router;
