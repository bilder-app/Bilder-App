import express from "express";
const router = express.Router();
import Product from "../Models/Product";
import { getRandomNames } from "./utils";

router.post("/:amount", async (req, res) => {
  const { amount } = req.params;
  const names = await getRandomNames(+amount);
  await Product.bulkCreate(
    names.map((name) => ({
      name: name.first_name,
      shortDescription: name.middle_name,
      description: name.four_word_name,
      price: 1,
      stock: 1,
      images: ["a", "b"]
    }))
  );
  res.sendStatus(200);
});

export default router;
