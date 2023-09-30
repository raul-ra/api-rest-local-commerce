import { Product, Brand } from '../src/models/product.js';

describe('Product Model', () => {
    let brand;

    beforeAll(async () => {
        await Product.sync({ force: true }); 
        brand = await Brand.create({ name: 'Example Brand' });
    });

    it('should create a product', async () => {
        const product = await Product.create({
            name: 'Example Product',
            price: 100.50,
            stock: 10,
            brand_id: brand.id,
        });
        expect(product.id).toBeDefined();
        expect(product.name).toBe('Example Product');
        expect(product.price).toBe('100.50'); 
        expect(product.stock).toBe(10);
        expect(product.brand_id).toBe(brand.id);
    });

    it('should get a product', async () => {
        const product = await Product.findOne({ where: { name: 'Example Product' } });
        expect(product).toBeDefined();
        expect(product.name).toBe('Example Product');
    });

    it('should update a product', async () => {
        const newName = 'Updated Product';
        await Product.update({ name: newName }, { where: { name: 'Example Product' } });
        const updatedProduct = await Product.findOne({ where: { name: newName } });
        expect(updatedProduct).toBeDefined();
        expect(updatedProduct.name).toBe(newName);
    });

    it('should delete a product', async () => {
        await Product.destroy({ where: { name: 'Updated Product' } });
        const deletedProduct = await Product.findOne({ where: { name: 'Updated Product' } });
        expect(deletedProduct).toBeNull();
    });
});
