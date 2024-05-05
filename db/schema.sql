-- DROP DATABASE
drop database if exists ecommerce_db;

-- CREATE DATABASE
create database ecommerce_db;

use ecommerce_db;

create table categories(
    id int not null AUTO_INCREMENT,
    primary key (id),
    category_name varchar(30) not null
);

create table products(
    id int not null AUTO_INCREMENT,
    primary key (id),
    product_name varchar(30) not null,
    price decimal not null
);