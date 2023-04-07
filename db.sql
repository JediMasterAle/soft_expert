CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  types_id INT NOT NULL REFERENCES types(id),
  name VARCHAR(255) NOT NULL,
  code VARCHAR(255) NOT NULL,
  value DECIMAL(10,2) NOT NULL
);

CREATE TABLE products_has_sales (
  id SERIAL PRIMARY KEY,
  products_id INT NOT NULL REFERENCES products(id),
  sales_id INT NOT NULL REFERENCES sales(id),
  qty INT NOT NULL,
  unit_value DECIMAL(10,2) NOT NULL,
  unit_value_without_tax DECIMAL(10,2) NOT NULL
);

CREATE TABLE sales (
  id SERIAL PRIMARY KEY,
  date DATE
);

CREATE TABLE types (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  tax DECIMAL(10,2) NOT NULL
);

ALTER TABLE products
  ADD CONSTRAINT fk_products_types FOREIGN KEY (types_id) REFERENCES types (id) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE products_has_sales
  ADD CONSTRAINT fk_products_has_sales_products1 FOREIGN KEY (products_id) REFERENCES products (id) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT fk_products_has_sales_sales1 FOREIGN KEY (sales_id) REFERENCES sales (id) ON DELETE CASCADE ON UPDATE NO ACTION;
