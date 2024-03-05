CREATE DATABASE user_db;
USE user_db;

CREATE TABLE users (
    id integer PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(20) NOT NULL
);

INSERT INTO users (username, password)
VALUES
('admin', 'admin')
('test_user', 'pass123');