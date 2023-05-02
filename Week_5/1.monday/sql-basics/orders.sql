/* Orders table */

-- Q1
CREATE TABLE orders (
  order_id SERIAL PRIMARY KEY,
  person_id INT,
  product_name VARCHAR(30),
  quantity FLOAT
);

--Q2
INSERT INTO orders (person_id, product_name, product_price, quantity)
VALUES (1, 'Product A', 10.99, 2),
       (1, 'Product B', 19.99, 1),
       (2, 'Product A', 15.99, 3),
       (3, 'Product C', 7.99, 5),
       (3, 'Product D', 12.99, 1);

--Q3
SELECT *
FROM orders;

--Q4
SELECT SUM(quantity)
FROM orders;

--Q5
SELECT SUM(product_price * quantity)
FROM orders;

--Q6
SELECT person_id, SUM(product_price * quantity)
FROM orders
GROUP BY person_id;






