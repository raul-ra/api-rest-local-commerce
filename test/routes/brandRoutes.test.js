import request from "supertest";
import app from "../../app.js"; 

describe("Brands API", () => {
    let brandId; 

    it("should create a new brand", async () => {
        const res = await request(app).post("/brands").send({
            name: "Example Brand",
        });
        expect(res.statusCode).toEqual(201);
        expect(res.body.name).toBe("Example Brand");
        brandId = res.body.id;
    });

    it("should fetch all brands", async () => {
        const res = await request(app).get("/brands");
        expect(res.statusCode).toEqual(200);
        expect(Array.isArray(res.body)).toBeTruthy();
        expect(res.body).toHaveLength(1);
    });

    it("should fetch a brand by id", async () => {
        const res = await request(app).get(`/brands/${brandId}`);
        expect(res.statusCode).toEqual(200);
        expect(res.body.name).toBe("Example Brand");
    });

    it("should update a brand by id", async () => {
        const res = await request(app).put(`/brands/${brandId}`).send({
            name: "Updated Brand",
        });
        expect(res.statusCode).toEqual(200);
        expect(res.body.name).toBe("Updated Brand");
    });

    it("should delete a brand by id", async () => {
        const res = await request(app).delete(`/brands/${brandId}`);
        expect(res.statusCode).toEqual(204);
    });

    it("should return 404 when brand is not found", async () => {
        const res = await request(app).get(`/brands/${brandId}`);
        expect(res.statusCode).toEqual(404);
    });
});
