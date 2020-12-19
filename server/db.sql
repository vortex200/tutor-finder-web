CREATE TABLE listings (
    id SERIAL NOT NULL PRIMARY KEY,
    user_id VARCHAR(50) NOT NULL,
    title VARCHAR(150) NOT NULL,
    description VARCHAR(500) NOT NULL,
    city VARCHAR(20) NOT NULL,
    category VARCHAR(20) NOT NULL
);

CREATE TABLE users (
    id SERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    password VARCHAR(100) NOT NULL,
    avatar VARCHAR(100) DEFAULT 'https://res.cloudinary.com/de3fvokkj/image/upload/v1607862347/avatar_lkbabg.jpg'
);

CREATE TABLE tutors (
    id SERIAL NOT NULL PRIMARY KEY,
    user_id VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    description VARCHAR(100) NOT NULL,
    UNIQUE(user_id)
);

-- test data;
INSERT INTO listings(name, title, description, city, category)
VALUES ('Petras K.', 'Matematikos mokytojas', 'Geras korepetitorius','Alytus', 'Matematika'); 

INSERT INTO users(name, email, password)
VALUES ('Petras Petraitis', 'email@gmail.com', 'slaptazodis'); 

INSERT INTO tutors(user_id, email, phone, description)
VALUES (6, 'asmeninis@tutor.com', '862292832', 'Padesiu atlikti namų darbus, nuodugniai išaiškindami mokykloje dėstomas temas.'); 