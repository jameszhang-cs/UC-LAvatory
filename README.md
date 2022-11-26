# UC-LAvatory

MySQL Installation instructions in https://www.javatpoint.com/how-to-install-mysql
Once installed, open MySQL Workbench
Run the following commands in a Query tab:
CREATE DATABASE project;
USE project;
CREATE TABLE reviews (id INT AUTO_INCREMENT, revLocation VARCHAR(255), revRating VARCHAR(255), revBody VARCHAR(255), PRIMARY KEY(id));

This will create a database named project, a table named reviews in project, allowing data to be sent there by the server
Names subject to change

Required packages for react and how to install them:

'npm install leaflet'
'npm install react-router-dom'
'npm install axios'