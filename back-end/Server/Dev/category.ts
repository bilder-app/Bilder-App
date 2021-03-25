import express from "express";
import Category from "../Models/Category";

const router = express.Router();

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
