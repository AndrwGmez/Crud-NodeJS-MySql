-- to create a new database
CREATE DATABASE db_custom;

-- to use database
use db_custom;

-- creating a new table
CREATE TABLE user_custom (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(50) NOT NULL,
  direccion VARCHAR(100) NOT NULL,
  telefono VARCHAR(15)
);

-- to show all tables
show tables;

-- to describe table
describe customer;