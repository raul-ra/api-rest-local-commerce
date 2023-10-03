/*Important: to run unit testing go first to .env*/

CREATE DATABASE IF NOT EXISTS local_commerce_fake;
USE local_commerce_fake;


CREATE TABLE IF NOT EXISTS brands (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    stock INT NOT NULL,
    brand_id INT,
    FOREIGN KEY (brand_id) REFERENCES brands (id)
);

USE local_commerce_fake;

ALTER TABLE brands 
MODIFY updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;

INSERT INTO brands (name) VALUES 
('4ECO'), 
('A.VOGEL'), 
('ABBOT KINNEY`S'), 
('ACORELLE'), 
('AGRECO'), 
('AH TABLE'), 
('ALB-GOLD'), 
('ALCE NERO'), 
('ALGA MARIS'), 
('ALGAMAR'), 
('ALIÑO'), 
('ALLOS'), 
('ALMENDRINA'), 
('ALONSO DE LA TORRE'), 
('ALTERNATIVA3'), 
('AMAIZIN'), 
('AMANDIN'), 
('AMAPOLA BIOCOSMETICS');


DESCRIBE products;

ALTER TABLE products
ADD FOREIGN KEY (brand_id) REFERENCES brands(id);


ALTER TABLE products 
MODIFY createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP;

ALTER TABLE products 
MODIFY updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;

INSERT INTO products (name, price, stock, brand_id) VALUES 
('Spaghetti 4ECO', 10.00, 20, 1), 
('Arroz 4ECO', 12.00, 25, 1), 
('Lentejas 4ECO', 8.00, 30, 1), 
('Garbanzos 4ECO', 9.00, 15, 1), 
('Fideos 4ECO', 11.00, 10, 1);

INSERT INTO products (name, price, stock, brand_id) VALUES 
('Muesli A.VOGEL', 15.00, 30, 2), 
('Jugo Aloe Vera A.VOGEL', 20.00, 20, 2), 
('Echinacea A.VOGEL', 25.00, 15, 2), 
('Aceite de Coco A.VOGEL', 22.00, 10, 2), 
('Té Verde A.VOGEL', 18.00, 25, 2);


INSERT INTO products (name, price, stock, brand_id) VALUES 
('Yogurt ABBOT KINNEY`S', 20.00, 10, 3), 
('Leche de Almendra ABBOT KINNEY`S', 15.00, 20, 3), 
('Smoothie ABBOT KINNEY`S', 12.00, 25, 3), 
('Helado ABBOT KINNEY`S', 10.00, 30, 3), 
('Tofu ABBOT KINNEY`S', 18.00, 15, 3);


INSERT INTO products (name, price, stock, brand_id) VALUES 
('Perfume ACORELLE', 30.00, 10, 4), 
('Desodorante ACORELLE', 20.00, 20, 4), 
('Crema ACORELLE', 25.00, 15, 4), 
('Aceite Esencial ACORELLE', 35.00, 5, 4), 
('Loción ACORELLE', 28.00, 12, 4);


INSERT INTO products (name, price, stock, brand_id) VALUES 
('Aceite de Oliva AGRECO', 15.00, 20, 5), 
('Vinagre AGRECO', 10.00, 30, 5), 
('Tomate Frito AGRECO', 8.00, 25, 5), 
('Miel AGRECO', 12.00, 15, 5), 
('Mermelada AGRECO', 9.00, 20, 5);

INSERT INTO products (name, price, stock, brand_id) VALUES 
('Servilletas AH TABLE', 5.00, 50, 6), 
('Vasos AH TABLE', 10.00, 30, 6), 
('Platos AH TABLE', 15.00, 20, 6), 
('Cubiertos AH TABLE', 12.00, 25, 6), 
('Mantel AH TABLE', 20.00, 10, 6);


INSERT INTO products (name, price, stock, brand_id) VALUES 
('Macarrones ALB-GOLD', 10.00, 20, 7), 
('Espaguetis ALB-GOLD', 11.00, 25, 7), 
('Fusilli ALB-GOLD', 12.00, 30, 7), 
('Penne ALB-GOLD', 13.00, 15, 7), 
('Farfalle ALB-GOLD', 14.00, 10, 7);


INSERT INTO products (name, price, stock, brand_id) VALUES 
('Miel ALCE NERO', 20.00, 15, 8), 
('Pasta ALCE NERO', 15.00, 20, 8), 
('Arroz ALCE NERO', 18.00, 25, 8), 
('Galletas ALCE NERO', 10.00, 30, 8), 
('Jugo ALCE NERO', 12.00, 20, 8);

INSERT INTO products (name, price, stock, brand_id) VALUES 
('Protector Solar ALGA MARIS', 25.00, 20, 9), 
('After Sun ALGA MARIS', 20.00, 30, 9), 
('Champú ALGA MARIS', 15.00, 25, 9), 
('Gel de Ducha ALGA MARIS', 12.00, 35, 9), 
('Loción Corporal ALGA MARIS', 18.00, 15, 9);


INSERT INTO products (name, price, stock, brand_id) VALUES 
('Algas Wakame ALGAMAR', 10.00, 20, 10), 
('Algas Nori ALGAMAR', 12.00, 25, 10), 
('Algas Kombu ALGAMAR', 15.00, 30, 10), 
('Algas Dulse ALGAMAR', 14.00, 15, 10), 
('Algas Espagueti de Mar ALGAMAR', 16.00, 10, 10);


INSERT INTO products (name, price, stock, brand_id) VALUES 
('Vinagre de Manzana ALIÑO', 5.00, 30, 11), 
('Vinagre de Vino ALIÑO', 6.00, 25, 11), 
('Aceite de Oliva Virgen Extra ALIÑO', 10.00, 20, 11), 
('Sal Marina ALIÑO', 3.00, 40, 11), 
('Pimienta Negra ALIÑO', 4.00, 20, 11);


INSERT INTO products (name, price, stock, brand_id) VALUES 
('Barrita de Cereal ALLOS', 2.00, 50, 12), 
('Mermelada de Fresa ALLOS', 4.00, 30, 12), 
('Miel de Flores ALLOS', 7.00, 20, 12), 
('Zumo de Manzana ALLOS', 3.00, 40, 12), 
('Galletas de Avena ALLOS', 5.00, 25, 12);

INSERT INTO products (name, price, stock, brand_id) VALUES 
('Leche de Almendra ALMENDRINA', 3.00, 30, 13), 
('Crema de Almendra ALMENDRINA', 5.00, 20, 13), 
('Harina de Almendra ALMENDRINA', 6.00, 15, 13), 
('Almendra Tostada ALMENDRINA', 8.00, 20, 13), 
('Almendra Cruda ALMENDRINA', 7.00, 25, 13);


INSERT INTO products (name, price, stock, brand_id) VALUES 
('Jamón Ibérico ALONSO DE LA TORRE', 50.00, 10, 14), 
('Queso Curado ALONSO DE LA TORRE', 20.00, 20, 14), 
('Chorizo Ibérico ALONSO DE LA TORRE', 15.00, 25, 14), 
('Lomo Ibérico ALONSO DE LA TORRE', 30.00, 15, 14), 
('Salchichón Ibérico ALONSO DE LA TORRE', 12.00, 30, 14);

INSERT INTO products (name, price, stock, brand_id) VALUES 
('Café ALTERNATIVA3', 10.00, 20, 15), 
('Chocolate ALTERNATIVA3', 5.00, 30, 15), 
('Azúcar ALTERNATIVA3', 3.00, 40, 15), 
('Té ALTERNATIVA3', 7.00, 25, 15), 
('Cacao ALTERNATIVA3', 8.00, 15, 15);

INSERT INTO products (name, price, stock, brand_id) VALUES 
('Maíz Dulce AMAIZIN', 4.00, 20, 16), 
('Leche de Coco AMAIZIN', 6.00, 25, 16), 
('Sopa de Tomate AMAIZIN', 5.00, 30, 16), 
('Tortillas AMAIZIN', 8.00, 15, 16), 
('Salsa de Tomate AMAIZIN', 3.00, 20, 16);

INSERT INTO products (name, price, stock, brand_id) VALUES 
('Bebida de Avena AMANDIN', 3.00, 20, 17), 
('Crema de Cacao AMANDIN', 5.00, 25, 17), 
('Caldo Vegetal AMANDIN', 2.00, 30, 17), 
('Sopa de Miso AMANDIN', 4.00, 15, 17), 
('Turrón AMANDIN', 6.00, 20, 17);

INSERT INTO products (name, price, stock, brand_id) VALUES 
('Crema Hidratante AMAPOLA BIOCOSMETICS', 20.00, 20, 18), 
('Aceite Esencial AMAPOLA BIOCOSMETICS', 15.00, 25, 18), 
('Jabón Natural AMAPOLA BIOCOSMETICS', 10.00, 30, 18), 
('Champú Sólido AMAPOLA BIOCOSMETICS', 12.00, 15, 18), 
('Mascarilla Facial AMAPOLA BIOCOSMETICS', 18.00, 20, 18);




