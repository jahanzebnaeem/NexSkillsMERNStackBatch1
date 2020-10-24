-- INSERT INTO customer VALUES (1, "Jahanzeb", "Naeem", 2);
-- INSERT INTO customer (id) VALUES (2);

-- SELECT * FROM customer;

-- UPDATE customer SET firstName = "Ali", lastName = "Butt", contactNumber = 345 WHERE id = 2;

-- DELETE FROM customer WHERE id = 2;

-- drop table orders;

-- insert into products values (1, "Pen", 15, 40);
-- insert into orders values (1, 1, 1, 1)

-- select * from customer;
-- select * from products;
-- select * from orders;

SELECT customer.firstName, customer.lastName, products.name, products.price
FROM customer INNER JOIN orders ON customer.id = orders.customer_id 
INNER JOIN products ON orders.product_id = products.id;