import express from "express";
const router = express.Router();
import orderRouter from "./Api/Routes/order";
import categoryRouter from "./Api/Routes/category";
import devRouter from "./Dev/router";

router.use("/cart", orderRouter);
router.use("/category", categoryRouter);
router.use("/product", categoryRouter);
router.use("/dev", devRouter);

export default router;