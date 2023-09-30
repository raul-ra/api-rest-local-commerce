import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Brand = sequelize.define('Brand', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

export default Brand;
