import express from 'express';
import * as productControllers from '../controllers/productControllers.js';

const router = express.Router();

router.get('/', productControllers.getAllProducts);
router.get('/:id', productControllers.getProductById);
router.post('/', productControllers.addProduct);
router.put('/:id', productControllers.updateProduct);
router.delete('/:id', productControllers.deleteProduct);

export default router;
