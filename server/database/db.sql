CREATE TABLE listings (
    id SERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    title VARCHAR(150) NOT NULL,
    description VARCHAR(200) NOT NULL,
    city VARCHAR(20) NOT NULL,
    category VARCHAR(20) NOT NULL
);

CREATE TABLE users (
    id SERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    password VARCHAR(100) NOT NULL,
    isTutor BOOLEAN DEFAULT false,
    avatar VARCHAR(50)
);

-- test data;
INSERT INTO listings(name, title, description, city, category)
VALUES ('Petras K.', 'Matematikos mokytojas', 'Geras korepetitorius','Alytus', 'Matematika'); 

INSERT INTO users(name, email, password)
VALUES ('Petras Petraitis', 'email@gmail.com', 'slaptazodis'); 