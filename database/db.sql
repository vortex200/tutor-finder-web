CREATE TABLE listings (
    id int(11) NOT NULL PRIMARY KEY;
    name VARCHAR(50) NOT NULL,
    title VARCHAR(150) NOT NULL,
    description VARCHAR(200) NOT NULL,
    city VARCHAR(20) NOT NULL


);
CREATE TABLE users (
 id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
 username varchar(50) NOT NULL,
 email varchar(50) NOT NULL,
 password varchar(50) NOT NULL,
);
-- test data;
INSERT INTO listings(id, name, title, description, city) values (001, 'Petras K.', 'Matkes mokytojas', 'Alytus');