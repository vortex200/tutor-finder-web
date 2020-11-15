CREATE TABLE listings (
    id SERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    title VARCHAR(150) NOT NULL,
    description VARCHAR(200) NOT NULL,
    city VARCHAR(20) NOT NULL,
    category VARCHAR(20) NOT NULL
);

CREATE TABLE users (
    id NOT NULL PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL,
);

-- test data;
INSERT INTO listings(id, name, title, description, city)
VALUES (001, 'Petras K.', 'Matematikos mokytojas', 'Alytus', 'Matematika'); 