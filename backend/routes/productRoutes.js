import express from 'express';

import protect from '../middlewares/authMiddleware.js';

import { getProducts ,
    getProductsById, 
    createProduct,
    updateProduct,
    deleteProduct
} from '../controllers/productController.js';

const router = express.Router();

/* ======= public routes ======= */

// GET all products -> api/products
router.get("/", getProducts);

// GET single product -> api/products/:id
router.get("/:id", getProductsById);


/* ======= protected routes ======= */
//POST product 
router.post("/", protect, createProduct)


//PUT update product
router.put("/:id", protect, updateProduct)


//DELETE product
router.delete("/:id", protect, deleteProduct)

export default router;