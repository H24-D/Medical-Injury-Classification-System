CREATE DATABASE injury_db; 
USE injury_db; 
CREATE TABLE injury_dictionary ( 
id VARCHAR(36) PRIMARY KEY, 
term VARCHAR(255) NOT NULL, 
category VARCHAR(100) NOT NULL, 
field VARCHAR(100) NOT NULL 
); 