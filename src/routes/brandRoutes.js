// brandRoutes.js
import express from 'express';
import * as brandControllers from '../controllers/brandControllers.js';
import { body, validationResult } from 'express-validator'; 

const router = express.Router();
router.get('/', brandControllers.getAllBrands);
router.get('/:id', brandControllers.getBrandById);
router.post('/',
    body('name').isString().withMessage('Name must be a string'), 
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
    brandControllers.addBrand 
);
router.put('/:id', brandControllers.updateBrand);
router.delete('/:id', brandControllers.deleteBrand);

export default router;

