CREATE TABLE view_info  (
"id" SERIAL PRIMARY KEY, 
"label" VARCHAR(20),
"description" VARCHAR(200), 
"category" VARCHAR(25), 
"image_desc" VARCHAR(100), 
"image_desc2" VARCHAR(100),
"image_desc3" VARCHAR(100),
"image_desc4" VARCHAR(100)
);

CREATE TABLE images (
"id" SERIAL PRIMARY KEY, 
"image_path" VARCHAR(200),
"image_path2" VARCHAR(200),
"image_path3" VARCHAR(200),
"image_path4" VARCHAR(200) 
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

INSERT INTO view_info ("label", "description", "category") 
VALUES ('1', 'One Lion', 'numbers'), ('2', 'Two Koalas', 'numbers'), ('3', 'Three Otters', 'numbers'), 
('4', 'Four Cats', 'numbers'), ('5', 'Five Monkeys', 'numbers'), ('6', 'Six Turtles', 'numbers'), 
('7', 'Seven Animals', 'numbers'), ('8', 'Eight Sharks', 'numbers'), ('9', 'Nine Crocodiles', 'numbers'),
('10', 'Ten Elephants', 'numbers');

INSERT INTO view_info ("label", "description", "category", "image_desc", "image_desc2", "image_desc3", "image_desc4") 
VALUES ('RED', 'Things that are Red', 'colors', 'Stop Sign', 'Fire Truck', 'Red Crayon', 'Apple'),
('ORANGE', 'Things that are Orange', 'colors', 'Orange', 'Pumpkin', 'Orange Crayon', 'Carrot'),
('YELLOW', 'Things that are Yellow', 'colors', 'School Bus', 'Sun', 'Yellow Crayon', 'Banana'),
('GREEN', 'Things that are Green', 'colors', 'Frog', 'Peas', 'Green Crayon', 'Tree'),
('BLUE', 'Things that are Blue', 'colors', 'Laygo', 'Whale', 'Blue Crayon', 'Sky'),
('PURPLE', 'Things that are Purple', 'colors', 'Grape Soda', 'Grapes', 'Purple Crayon', 'Balloon'),
('PINK', 'Things that are Pink', 'colors', 'Cotton Candy', 'Pink Lemonade', 'Pink Crayon', 'Heart'),
('GRAY', 'Things that are Gray', 'colors', 'Cat', 'Rocks', 'Gray Crayon', 'Clouds'),
('BLACK', 'Things that are black', 'colors', 'Panther', 'Tires', 'Black Crayon', 'Bear');

INSERT INTO view_info ("label", "description", "category", "image_desc") 
VALUES ('TRIANGLE', 'Triangles have three sides', 'shapes', 'watermelon slice'),
('CIRCLE', 'Cirlces have round sides', 'shapes', 'clock'),
('Rectangle', 'Rectangles have four sides', 'shapes', 'Flag'),
('HEART', 'Hearts have a point at the bottom', 'shapes', 'Heart shaped leaf'),
('Square', 'Squares have four sides', 'shapes', 'bread'),
('OVAL', 'Ovals have round sides', 'shapes', 'Dinosaur egg'),
('STAR', 'Stars have five pointed edges', 'shapes', 'Starfish'),
('Diamond', 'Diamonds have four sides', 'shapes', 'kite');

INSERT INTO view_info ("label", "description", "category") 
VALUES ('GameA', 'Can you pair all of the Animals?', 'game');

INSERT INTO images ("image_path") 
VALUES('images/aligator.png'), ('images/bear.jpg'), ('images/cat.jpg'), ('images/dog.png'), 
('images/elephant.jpg'), ('images/fox.png'), ('images/giraffe.png'), ('images/horse.jpg'), 
('images/iguana.png'), ('images/jaguar.jpg'), ('images/koala.png'), ('images/lion.png'), 
('images/monkey.png'), ('images/narwhal.jpg'), ('images/otters.png'), ('images/panda.jpg'), 
('images/quetzal.gif'), ('images/rabbit.jpg'), ('images/sheep.jpg'), ('images/tiger.jpg'), 
('images/unicorn.png'), ('images/vulture.png'), ('images/whale.jpg'),('images/x-ray-fish.png'), 
('images/yak.png'), ('images/zebra.png');

INSERT INTO images ("image_path") 
VALUES ('images/lion.png'), ('images/2-koalas.png'),('images/otters.png'),('images/4-cats.jpg'),
('images/5-monkeys.jpg'),('images/6-turtles.png'),('images/7-animals.png'),('images/8-sharks.png'),
('images/9-crocodiles.png'),('images/10-elephants.png');

INSERT INTO images ("image_path", "image_path2", "image_path3", "image_path4") 
VALUES ('images/stopsign.png', 'images/firetruck.jpg', 'images/redcrayon.png', 'images/apple.jpeg'),
('images/orange.jpg', 'images/pumpkin.jpeg', 'images/orangecrayon.png', 'images/carrot.png'),
('images/schoolbut.jpg', 'images/sun.jpg', 'images/yellowcrayon.png', 'images/banana.png'),
('images/frog.jpg', 'images/peas.jpeg', 'images/greencrayon.png', 'images/tree.png'),
('images/lego.png', 'images/bluewhale.jpg', 'images/bluecrayon.png', 'images/bluesky.jpg'),
('images/grape soda.png', 'images/grapes.jpg', 'images/purplecrayon.jpeg', 'images/balloon.jpeg'),
('images/cottoncandy.png', 'images/pinklemonade.jpg', 'images/pinkcrayon.png', 'images/heart.jpg'),
('images/graycat.gif', 'images/rocks.png', 'images/graycrayon.png', 'images/clouds.png'),
('images/panther.jpg', 'images/tire.jpg', 'images/blackcrayon.jpg', 'images/blackbear.jpeg');

INSERT INTO images ("image_path", "image_path2") 
VALUES ('images/triangle.png', 'images/watermelon.png'),('images/Circle.png', 'images/clock.jpg'),
('images/rectangle.png', 'images/flag.jpg'),('images/heart.png', 'images/leaf.jpg'),
('images/square.jpg', 'images/bread.png'),('images/oval.jpg', 'images/egg.jpg'),
('images/star.png', 'images/starfish.jpg'),('images/diamond.jpg', 'images/kite.png');

INSERT INTO images ("image_path") 
VALUES ('images/game.elephant.jpg'), ('images/game.panda.jpg'), ('images/game.zebra.png'), 
('images/game.tiger.jpg'), ('images/game.zebra.png'), ('images/game.tiger.jpg'), 
('images/game.elephant.jpg'), ('images/game.panda.jpg');

/* RUN THESE QUERIES LAST AS THEY ARE FOR A CONJUNCTION TABLE REFERENCING OTHER DATA */
INSERT INTO view_images ("image_id", "view_id", "type") 
VALUES (1, 1, 'letter'), (2, 2, 'letter'), (3, 3, 'letter'), (4, 4, 'letter'), (5, 5, 'letter'), 
(6, 6, 'letter'), (7, 7, 'letter'), (8, 8, 'letter'), (9, 9, 'letter'), (10, 10, 'letter'), 
(11, 11, 'letter'), (12, 12, 'letter'), (13, 13, 'letter'), (14, 14, 'letter'), (15, 15, 'letter'), 
(16, 16, 'letter'), (17, 17, 'letter'), (18, 18, 'letter'), (19, 19, 'letter'), (20, 20, 'letter'), 
(21, 21, 'letter'), (22, 22, 'letter'), (23, 23, 'letter'),(24, 24, 'letter'), (25, 25, 'letter'), 
(26, 26, 'letter');

INSERT INTO view_images("image_id", "view_id", "type") 
VALUES (27, 27, 'number'), (28, 28, 'number'), (29, 29, 'number'), (30, 30, 'number'), (31, 31, 'number'),
(32, 32, 'number'), (33, 33, 'number'), (34, 34, 'number'), (35, 35, 'number'), (36, 36, 'number');

INSERT INTO view_images("image_id", "view_id", "type") 
VALUES (37, 37, 'color'),(38, 38, 'color'),(39, 39, 'color'),(40, 40, 'color'),(41, 41, 'color'),
(42, 42, 'color'),(43, 43, 'color'),(44, 44, 'color'),(45, 45, 'color');

INSERT INTO view_images("image_id", "view_id", "type") 
VALUES (46, 46, 'shape'),(47, 47, 'shape'),(48, 48, 'shape'),(49, 49, 'shape'),(50, 50, 'shape'),
(51, 51, 'shape'),(52, 52, 'shape'),(53, 53, 'shape');

INSERT INTO view_images("image_id", "view_id", "type") 
VALUES (54, 54, 'gameA'), (55, 54, 'gameA'), (56, 54, 'gameA'), (57, 54, 'gameA'), (58, 54, 'gameA'),
 (59, 54, 'gameA'), (60, 54, 'gameA'), (61, 54, 'gameA');