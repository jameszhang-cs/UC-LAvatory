CREATE DATABASE IF NOT EXISTS uclavatory;
USE uclavatory;
CREATE TABLE reviews (
	id INT AUTO_INCREMENT, 
	revLocation VARCHAR(255), 
	revTime VARCHAR(255), 
	revGender VARCHAR(255), 
	revFloor VARCHAR(255), 
	revRating VARCHAR(255), 
	revBody VARCHAR(255), 
	PRIMARY KEY(id)
);
CREATE TABLE pageviews (
	id INT AUTO_INCREMENT, 
	location VARCHAR(255), 
	views VARCHAR(255), 
	PRIMARY KEY(id)
);
SET SQL_SAFE_UPDATES=0;
CREATE EVENT clear_views
	on SCHEDULE
		EVERY 5 minute
	DO
		UPDATE pageviews SET views=0;
INSERT INTO pageviews (location, views) VALUES ("Boelter Hall","0");
INSERT INTO pageviews (location, views) VALUES ("Engineering IV","0");
INSERT INTO pageviews (location, views) VALUES ("Engineering V","0");
INSERT INTO pageviews (location, views) VALUES ("Engineering VI","0");
INSERT INTO pageviews (location, views) VALUES ("Geology","0");
INSERT INTO pageviews (location, views) VALUES ("Mathematical Sciences","0");
INSERT INTO pageviews (location, views) VALUES ("Pritzker Hall","0");
INSERT INTO pageviews (location, views) VALUES ("Schoenberg Hall","0");
INSERT INTO pageviews (location, views) VALUES ("Young Hall","0");
