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
