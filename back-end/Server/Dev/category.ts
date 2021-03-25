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

router.post("/", function (req, res) {
    const { name } = req.body;
    Category.findOrCreate({
      where: {
        name: name
      }
    })
      .then((resp) => res.send(resp))
      .catch((err) => res.status(400).json(err));
  });

export default router;
