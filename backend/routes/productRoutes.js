import express from 'express';
import { getProducts ,getProductsById, createProduct} from '../controllers/productController.js';

const router = express.Router();

// GET all products -> api/products
router.get("/", getProducts);

// GET single product -> api/products/:id
router.get("/:id", getProductsById);

//POST product 
router.post("/",createProduct)

export default router;