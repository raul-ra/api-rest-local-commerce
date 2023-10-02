import express from 'express';
import brandRoutes from './src/routes/brandRoutes.js';
import productRoutes from './src/routes/productRoutes.js';
import sequelize from './src/config/database.js';

const app = express();
app.use(express.json());

app.use('/brands', brandRoutes);
app.use('/products', productRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);
    await sequelize.authenticate();
    console.log('Database Connected!');
});

await sequelize.sync({ alter: true });
console.log('All models were synchronized successfully.');

export default app