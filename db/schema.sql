-- DROP DATABASE
drop database if exists ecommerce_db;

-- CREATE DATABASE
create database ecommerce_db;

-- use ecommerce_db;
-- 
-- create table categories(
--     id int not null AUTO_INCREMENT,
--     primary key (id),
--     category_name varchar(30) not null
-- );
-- 
-- create table products(
--     id int not null AUTO_INCREMENT,
--     primary key (id),
--     product_name varchar(30) not null,
--     price decimal not null,
--     CONSTRAINT Price_Is_Not_Negative CHECK (price > 0),
--     stock int not null default 10,
--     CONSTRAINT Stock_Is_Not_Negative CHECK (stock > 0)
-- );
-- 
-- create table tags(
--     id int not null AUTO_INCREMENT,
--     primary key (id),
--     tag_name varchar(30)
-- );
-- 
-- create table product_tags(
--     id int not null AUTO_INCREMENT,
--     primary key (id),
--     product_id int,
--     foreign key references products(id),
--     tag_id int,
--     foreign key references tags(id)
-- );