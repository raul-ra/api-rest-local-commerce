/*Important: to run unit testing go first to .env*/

import { Brand } from '../../src/models/brand.js';

describe('Brand Model', () => {
    beforeAll(async () => {
        await Brand.sync({ force: true }); 
    });

    it('should create a brand', async () => {
        const brand = await Brand.create({ name: 'Example Brand' });
        expect(brand.id).toBeDefined();
        expect(brand.name).toBe('Example Brand');
    });

    it('should get a brand', async () => {
        const brand = await Brand.findOne({ where: { name: 'Example Brand' } });
        expect(brand).toBeDefined();
        expect(brand.name).toBe('Example Brand');
    });

    it('should update a brand', async () => {
        const newName = 'Updated Brand';
        await Brand.update({ name: newName }, { where: { name: 'Example Brand' } });
        const updatedBrand = await Brand.findOne({ where: { name: newName } });
        expect(updatedBrand).toBeDefined();
        expect(updatedBrand.name).toBe(newName);
    });

    it('should delete a brand', async () => {
        await Brand.destroy({ where: { name: 'Updated Brand' } });
        const deletedBrand = await Brand.findOne({ where: { name: 'Updated Brand' } });
        expect(deletedBrand).toBeNull();
    });
});
