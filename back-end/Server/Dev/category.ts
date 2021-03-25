import express from "express";
const router = express.Router();
import Category from "../Models/Category";
import { getRandomNames } from "./utils";

router.post("/:amount", async (req, res) => {
  const { amount } = req.params;
  const names = await getRandomNames(+amount);
  await Category.bulkCreate(
    names.map((name) => ({
      name: name.first_name,
    }))
  );
  res.sendStatus(200);
});

export default router;
