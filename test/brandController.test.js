import request from 'supertest';
import app from '../app.js'

describe('Brand Routes', () => {
    it('should fetch all brands', async () => {
        const res = await request(app).get('/brands');
        expect(res.statusCode).toEqual(200);
        expect(Array.isArray(res.body)).toBe(true);
    });

    it('should create a new brand', async () => {
        const res = await request(app)
            .post('/brands')
            .send({ name: 'New Brand' });
        expect(res.statusCode).toEqual(201);
        expect(res.body.name).toEqual('New Brand');
    });

    it('should update a brand', async () => {
        const res = await request(app)
            .put('/brands/1')
            .send({ name: 'Updated Brand' });
        expect(res.statusCode).toEqual(200);
        expect(res.body.name).toEqual('Updated Brand');
    });

    it('should delete a brand', async () => {
        const res = await request(app).delete('/brands/1');
        expect(res.statusCode).toEqual(200);
        expect(res.text).toEqual('Brand deleted');
    });
});
