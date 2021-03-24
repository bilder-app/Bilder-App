import express from "express";
const router = express.Router();
import { paginatedSearchProducts } from "../Controllers/productController";

router.get("/search", ({ query: { name, limit, page } }, res) => {
  if (!name) return res.sendStatus(400);
  paginatedSearchProducts({
    name: name as string,
    page: +page!,
    limit: +limit!
  })
    .catch((err) => {
      console.log(err);
      res.sendStatus(400);
    })
    .then((resp) => res.json(resp));
});

export default router;
