import express from 'express';
import { addToCart } from '../controllers/cartController.js';

import protect from '../middlewares/authMiddleware.js';

const router = express.Router();

//POST add to cart -> api/cart/add 

router.post("/",protect,addToCart);

export default router;