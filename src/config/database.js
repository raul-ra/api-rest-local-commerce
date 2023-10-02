import { Sequelize } from 'sequelize';
import { username, password, database, host, dialect } from './config.js';


// const { username, password, database, host, dialect } = config[env];

export const sequelize = new Sequelize(database, username, password, {
    host,
    dialect
});

export default sequelize;
