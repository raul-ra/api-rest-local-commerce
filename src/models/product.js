import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import Brand from './brand.js';

const Product = sequelize.define('Product', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

Product.belongsTo(Brand);
Brand.hasMany(Product);

export default Product;
