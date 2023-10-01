/*Important: to run unit testing go first to .env*/

-- Create the database if it does not exist
CREATE DATABASE IF NOT EXISTS local_commerce_fake;
USE local_commerce_fake;

-- Create the table of brands
CREATE TABLE IF NOT EXISTS brands (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

-- Create the table of products
CREATE TABLE IF NOT EXISTS products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    stock INT NOT NULL,
    brand_id INT,
    FOREIGN KEY (brand_id) REFERENCES brands (id)
);
