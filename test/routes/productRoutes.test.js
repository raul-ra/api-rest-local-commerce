// productRoutes.test.js
import request from 'supertest';
import app from '../../app.js'; 

describe('Products API', () => {

    let productId;

    it('should create a new product', async () => {
        const res = await request(app)
            .post('/products')
            .send({
                name: 'Example Product',
                price: 50.0,
                stock: 20,
                brand_id: 1
            });
        expect(res.statusCode).toEqual(201);
        expect(res.body.name).toBe('Example Product');
        productId = res.body.id;
    });

    it('should fetch all products', async () => {
        const res = await request(app).get('/products');
        expect(res.statusCode).toEqual(200);
        expect(Array.isArray(res.body)).toBeTruthy();
        expect(res.body).toHaveLength(1);
    });

    it('should fetch a product by id', async () => {
        const res = await request(app).get(`/products/${productId}`);
        expect(res.statusCode).toEqual(200);
        expect(res.body.name).toBe('Example Product');
    });

    it('should update a product by id', async () => {
        const res = await request(app)
            .put(`/products/${productId}`)
            .send({
                name: 'Updated Product',
            });
        expect(res.statusCode).toEqual(200);
        expect(res.body.name).toBe('Updated Product');
    });

    it('should delete a product by id', async () => {
        const res = await request(app).delete(`/products/${productId}`);
        expect(res.statusCode).toEqual(204);
    });

    it('should return 404 when product is not found', async () => {
        const res = await request(app).get(`/products/${productId}`);
        expect(res.statusCode).toEqual(404);
    });

});
