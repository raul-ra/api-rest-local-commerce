import Brand from '../models/brand.js';

export const getAllBrands = async (req, res) => {
    try {
        const brands = await Brand.findAll();
        res.status(200).json(brands);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export const getBrandById = async (req, res) => {
    try {
        const brand = await Brand.findByPk(req.params.id);
        if (brand) res.status(200).json(brand);
        else res.status(404).send('Brand with the specified ID does not exist');
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export const addBrand = async (req, res) => {
    try {
        const brand = await Brand.create(req.body);
        res.status(201).json(brand);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export const updateBrand = async (req, res) => {
    try {
        const brand = await Brand.findByPk(req.params.id);
        if (brand) {
            await brand.update(req.body);
            res.status(200).json(brand);
        } else {
            res.status(404).send('Brand with the specified ID does not exist');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export const deleteBrand = async (req, res) => {
    try {
        const brand = await Brand.findByPk(req.params.id);
        if (brand) {
            await brand.destroy();
            res.status(200).send('Brand deleted');
        } else {
            res.status(404).send('Brand with the specified ID does not exist');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};
