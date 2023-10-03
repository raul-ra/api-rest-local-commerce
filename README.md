# Local Commerce REST API

This project is a REST API for a local commerce developed with Node.js, leveraging Sequelize as an ORM, and Jest alongside Supertest for testing.

## Technologies Used

- Node.js

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" width="100px"/>

- Sequelize (ORM)

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original-wordmark.svg" width="100px"/>

- MySQL (Database)

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" width="100px"/>

- Jest (Unit Testing)


<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" width="100px"/>


- Supertest (Endpoint Testing)

## Pre-requisites

- Node.js
- MySQL

## Initial Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/raul-ra/api-rest-local-commerce.git
   cd api-rest-local-commerce
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Install Sequelize, Jest, Supertest, and MySQL**:
   - Sequelize: `npm install sequelize sequelize-cli`
   - Jest: `npm install jest`
   - Supertest: `npm install supertest`
   - MySQL: `npm install mysql2`

4. **Database Setup**:
   - Ensure MySQL is running.
   - Import the databases from `schema.sql` for the development environment and `schema_test.sql` for testing:
     ```bash
     mysql -u [YOUR_MYSQL_USERNAME] -p < schema.sql
     mysql -u [YOUR_MYSQL_USERNAME] -p < schema_test.sql
     ```

**Flow Diagram**:

https://dbdiagram.io/d/api-rest-local-commerce-6511626fffbf5169f06f89f9

5. **.env File Setup**:
   - Create a `.env` file in the project root.
   - Add the following environment variables:
     ```
     DB_USERNAME=[YOUR_MYSQL_USERNAME]
     DB_PASSWORD=[YOUR_MYSQL_PASSWORD]
     DB_NAME=local_commerce
     DB_HOST=127.0.0.1
     DB_DIALECT=mysql
     ```

6. **.gitignore File**:
   Ensure `.gitignore` contains at least the following entries to prevent uploading sensitive or unnecessary files to the repository:
   ```
   node_modules/
   .env
   ```

## Execution

To start the API in development mode:
```bash
npm start
```

The API should be running at `http://localhost:3000`.

## Testing

To run unit tests:
```bash
npm test
```

## Testing with Postman

1. **Install Postman**: If you don't have Postman yet, you can download it from [here](https://www.postman.com/downloads/).

2. **Endpoints**:
   - **Brands**:
     - Get all brands: GET `http://localhost:3000/brands`
     - Get a brand by ID: GET `http://localhost:3000/brands/:id`
     - Create a new brand: POST `http://localhost:3000/brands`
     - Update a brand: PUT `http://localhost:3000/brands/:id`
     - Delete a brand: DELETE `http://localhost:3000/brands/:id`
   
   - **Products**:
     - Get all products: GET `http://localhost:3000/products`
     - Get a product by ID: GET `http://localhost:3000/products/:id`
     - Create a new product: POST `http://localhost:3000/products`
     - Update a product: PUT `http://localhost:3000/products/:id`
     - Delete a product: DELETE `http://localhost:3000/products/:id`

3. Postman Usage Examples

### Brands

1. **Get all brands**:
   - Method: `GET`
   - URL: `http://localhost:3000/brands`

2. **Get a brand by ID**:
   - Method: `GET`
   - URL: `http://localhost:3000/brands/1`
   - Note: Replace `1` with the ID of the brand you wish to retrieve.

3. **Create a new brand**:
   - Method: `POST`
   - URL: `http://localhost:3000/brands`
   - Body:
     ```json
     {
       "name": "Sample Brand"
     }
     ```

4. **Update a brand**:
   - Method: `PUT`
   - URL: `http://localhost:3000/brands/1`
   - Body:
     ```json
     {
       "name": "Updated Brand"
     }
     ```
   - Note: Replace `1` with the ID of the brand you wish to update.

5. **Delete a brand**:
   - Method: `DELETE`
   - URL: `http://localhost:3000/brands/1`
   - Note: Replace `1` with the ID of the brand you wish to delete.

### Products

1. **Get all products**:
   - Method: `GET`
   - URL: `http://localhost:3000/products`

2. **Get a product by ID**:
   - Method: `GET`
   - URL: `http://localhost:3000/products/1`
   - Note: Replace `1` with the ID of the product you wish to retrieve.

3. **Create a new product**:
   - Method: `POST`
   - URL: `http://localhost:3000/products`
   - Body:
     ```json
     {
       "name": "Sample Product",
       "price": 50.0,
       "stock": 20,
       "brand_id": 1
     }
     ```
   - Note: Ensure the `brand_id` corresponds to an existing brand.

4. **Update a product**:
   - Method: `PUT`
   - URL: `http://localhost:3000/products/1`
   - Body:
     ```json
     {
       "name": "Updated Product",
       "price": 55.0
     }
     ```
   - Note: Replace `1` with the ID of the product you wish to update.

5. **Delete a product**:
   - Method: `DELETE`
   - URL: `http://localhost:3000/products/1`
   - Note: Replace `1` with the ID of the product you wish to delete.

I hope these instructions are helpful to you.