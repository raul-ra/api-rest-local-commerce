/*Important: to run unit testing go first to .env*/

import request from 'supertest';
import express from 'express';
import brandRoutes from './src/routes/brandRoutes.js';
import productRoutes from './src/routes/productRoutes.js';
import sequelize from './src/config/database.js';

const app = express();
app.use(express.json());

app.use('/brands', brandRoutes);
app.use('/products', productRoutes);

describe('App Test', () => {
    beforeAll(async () => {
        await sequelize.sync({ force: true });
    });

    it('should respond with 200 on a GET to /brands', async () => {
        const response = await request(app).get('/brands');
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });

    it('should respond with 200 on a GET to /products', async () => {
        const response = await request(app).get('/products');
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });

    it('should create a new brand on a POST to /brands', async () => {
        const newBrand = { name: 'Test Brand' };
        const response = await request(app)
            .post('/brands')
            .send(newBrand);

        expect(response.status).toBe(201);
        expect(response.body.name).toBe(newBrand.name);
    });

});
