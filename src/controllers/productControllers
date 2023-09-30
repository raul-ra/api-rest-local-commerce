import Product from '../models/product.js';

export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.findAll();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export const getProductById = async (req, res) => {
    try {
        const product = await Product.findByPk(req.params.id);
        if (product) res.status(200).json(product);
        else res.status(404).send('Product with the specified ID does not exist');
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export const addProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json(product);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export const updateProduct = async (req, res) => {
    try {
        const product = await Product.findByPk(req.params.id);
        if (product) {
            await product.update(req.body);
            res.status(200).json(product);
        } else {
            res.status(404).send('Product with the specified ID does not exist');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByPk(req.params.id);
        if (product) {
            await product.destroy();
            res.status(200).send('Product deleted');
        } else {
            res.status(404).send('Product with the specified ID does not exist');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};
