import express from 'express';
import brandRoutes from './src/routes/brandRoutes.js';
import productRoutes from './src/routes/productRoutes.js';
import sequelize from './src/config/database.js';

const app = express();
app.use(express.json());

app.use('/brands', brandRoutes);
app.use('/products', productRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);
    await sequelize.authenticate();
    console.log('Database Connected!');
});

