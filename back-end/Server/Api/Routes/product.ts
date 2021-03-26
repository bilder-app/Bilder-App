import express from "express";
const router = express.Router();
import {
  getProduct,
  paginatedSearchProducts,
  getAllProducts,
  addProduct
} from "../Controllers/productController";

//Devuelve todos los productos
router.get("/", (req, res) => getAllProducts().then((resp) => res.json(resp)));

//Devuelve un producto
router.get("/:id", (req, res) => {
  const { id } = req.params;
  getProduct(id)
    .then((resp) => res.json(resp))
    .catch((err) => {
      console.log(err);
      res.sendStatus(400);
    });
});

//Crea un producto
router.post("/", (req, res) => {
  const { nombre, descripcion, descripcionCorta, precio, stock } = req.body;
  addProduct(nombre, descripcion, descripcionCorta, precio, stock)
    .then((resp) => res.json(resp))
    .catch((err) => {
      console.log(err);
      res.sendStatus(400);
    });
});

//Devuelve resultados por query
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
