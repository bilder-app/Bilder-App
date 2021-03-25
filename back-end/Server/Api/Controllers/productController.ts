import { Request, Response } from "express";
import Product from "../../Models/Product";


export async function getAllProducts() {
  return Product.findAll()
}