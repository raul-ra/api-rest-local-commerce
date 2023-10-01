import express from 'express';
import * as productControllers from '../controllers/productControllers.js';
import { body, validationResult } from 'express-validator';

const router = express.Router();
router.get('/', productControllers.getAllProducts);
router.get('/:id', productControllers.getProductById);
router.post('/',
    body('name').isString(), 
    body('price').isNumeric(),
    body('stock').isInt(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
    productControllers.addProduct
);
router.put('/:id', productControllers.updateProduct);
router.delete('/:id', productControllers.deleteProduct);

export default router;
