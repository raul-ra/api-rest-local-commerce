/*Important: to run unit testing go first to .env*/

import request from 'supertest';
import app from '../app.js'; 

describe('Product Routes', () => {
    it('should fetch all products', async () => {
        const res = await request(app).get('/products');
        expect(res.statusCode).toEqual(200);
        expect(Array.isArray(res.body)).toBe(true);
    });

    it('should create a new product', async () => {
        const res = await request(app)
            .post('/products')
            .send({ name: 'New Product', brandId: 1 });
        expect(res.statusCode).toEqual(201);
        expect(res.body.name).toEqual('New Product');
    });

    it('should update a product', async () => {
        const res = await request(app)
            .put('/products/1')
            .send({ name: 'Updated Product' });
        expect(res.statusCode).toEqual(200);
        expect(res.body.name).toEqual('Updated Product');
    });

    it('should delete a product', async () => {
        const res = await request(app).delete('/products/1');
        expect(res.statusCode).toEqual(200);
        expect(res.text).toEqual('Product deleted');
    });
});
