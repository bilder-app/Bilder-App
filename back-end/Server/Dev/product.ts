import express from "express";
const router = express.Router();
import Product from "../Models/Product";
import faker from "faker";

router.post("/:amount", async (req, res) => {
  const { amount } = req.params;
  const products: any = [];

  for (let i = 0; i < +amount; i++) {
    const productName = faker.commerce.product();
    const images = [];
    for (let i = 0; i < ~~(Math.random() * 4) + 1; i++) {
      images.push(faker.image.technics(600, 600));
    }
    products.push({
      name: productName,
      price: +faker.commerce.price(1, 100),
      stock: ~~(Math.random() * 150),
      description: faker.commerce.productDescription(),
      shortDescription: faker.commerce.productAdjective(),
      images: images
    });
  }

  await Product.bulkCreate(products);
  res.sendStatus(200);
});

export default router;
