import express from "express";
const router = express.Router();
import orderRouter from "./Api/Routes/order";
import devRouter from "./Dev/router";

router.use("/cart", orderRouter);
router.use("/dev", devRouter);

export default router;
