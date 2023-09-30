import { Sequelize } from 'sequelize';
import config from './config.js';

const env = process.env.NODE_ENV || 'development';
const { username, password, database, host, dialect } = config[env];

const sequelize = new Sequelize(database, username, password, {
    host,
    dialect
});

export default sequelize;
