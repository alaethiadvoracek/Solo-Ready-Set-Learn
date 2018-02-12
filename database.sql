CREATE TABLE view_info  (
"id" SERIAL PRIMARY KEY, 
"label" VARCHAR(20),
"description" VARCHAR(200), 
"category" VARCHAR(25)
);

CREATE TABLE images (
"id" SERIAL PRIMARY KEY, 
"image_path" VARCHAR(200)
);

CREATE TABLE view_images (
"id" SERIAL PRIMARY KEY, 
"image_id" INT REFERENCES "images", 
"view_id" INT REFERENCES "view_info", 
"type" VARCHAR(20)
);

INSERT INTO view_info ("label", "description","category")
VALUES ('Aa', 'A is for Aligator', 'alphabet'), ('Bb', 'B is for Bear', 'alphabet'), 
('Cc', 'C is for Cat', 'alphabet'), ('Dd', 'D is for Dog', 'alphabet'), ('Ee', 'E is for Elephant', 'alphabet'), 
('Ff', 'F is for Fox', 'alphabet'), ('Gg', 'G is for Giraffe', 'alphabet'), ('Hh', 'H is for Horse', 'alphabet'), 
('Ii', 'I is for Iguana', 'alphabet'), ('Jj', 'J is for Jaguar', 'alphabet'), ('Kk', 'K is for Koala', 'alphabet'), 
('Ll', 'L is for Lion', 'alphabet'), ('Mm', 'M is for Monkey', 'alphabet'), ('Nn', 'N is for Narwhal', 'alphabet'), 
('Oo', 'O is for Otter', 'alphabet'), ('Pp', 'P is for Panda', 'alphabet'), ('Qq', 'Q is for Quetzal', 'alphabet'), 
('Rr', 'R is for Rabbit', 'alphabet'), ('Ss', 'S is for Sheep', 'alphabet'), ('Tt', 'T is for Tiger', 'alphabet'), 
('Uu', 'U is for Unicorn', 'alphabet'), ('Vv', 'V is for Vulture', 'alphabet'), ('Ww', 'W is for Whale', 'alphabet'), 
('Xx', 'X is for X-Ray Fish', 'alphabet'), ('Yy', 'Y is for Yak', 'alphabet'), ('Zz', 'Z is for Zebra', 'alphabet'); 

INSERT INTO images ("image_path") 
VALUES('images/aligator.png'), ('images/bear.png'), ('images/cat.jpg'), ('images/dog.png'), 
('images/elephant.jpg'), ('images/fox.png'), ('images/giraffe.jpg'), ('images/horse.png'), 
('images/iguana.png'), ('images/jaguar.jpg'), ('images/koala.jpg'), ('images/lion.png'), 
('images/monkey.png'), ('images/narwhal.jpg'), ('images/otters.png'), ('images/panda.png'), 
('images/quetzal.gif'), ('images/rabbit.jpg'), ('images/sheep.jpg'), ('images/tiger.jpg'), 
('images/unicorn.jpg'), ('images/vulture.png'), ('images/whale.jpg'),('images/x-ray-fish.png'), 
('images/yak.png'), ('images/zebra.png');

INSERT INTO view_images ("image_id", "view_id", "type") 
VALUES (1, 1, 'letter'), (2, 2, 'letter'), (3, 3, 'letter'), (4, 4, 'letter'), (5, 5, 'letter'), 
(6, 6, 'letter'), (7, 7, 'letter'), (8, 8, 'letter'), (9, 9, 'letter'), (10, 10, 'letter'), 
(11, 11, 'letter'), (12, 12, 'letter'), (13, 13, 'letter'), (14, 14, 'letter'), (15, 15, 'letter'), 
(16, 16, 'letter'), (17, 17, 'letter'), (18, 18, 'letter'), (19, 19, 'letter'), (20, 20, 'letter'), 
(21, 21, 'letter'), (22, 22, 'letter'), (23, 23, 'letter'),(24, 24, 'letter'), (25, 25, 'letter'), 
(26, 26, 'letter');