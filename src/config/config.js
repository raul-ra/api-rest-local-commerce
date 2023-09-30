import dotenv from 'dotenv';

dotenv.config();

export default {
    development: {
        username: process.env.DB_USERNAME || 'root',
        password: process.env.DB_PASSWORD || 'password',
        database: process.env.DB_NAME || 'miapi',
        host: process.env.DB_HOST || '127.0.0.1',
        dialect: process.env.DB_DIALECT || 'mysql'
    }
    // ... Puedes añadir configuraciones para otros entornos si lo necesitas, como test o production.
}
