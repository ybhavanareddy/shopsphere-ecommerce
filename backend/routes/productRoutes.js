import express from 'express';
import { getProducts ,getProductsById} from '../controllers/productController.js';

const router = express.Router();

// GET all products -> api/products
router.get("/", getProducts);

// GET single product -> api/products/:id
router.get("/:id", getProductsById);

export default router;