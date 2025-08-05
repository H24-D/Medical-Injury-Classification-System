# Medical Injury Classification System

A full-stack web application to manage, search, and perform CRUD operations on medical injury terms like *Abrasion, **Gunshot Wound*, etc.

## Features

- View all injuries

- Search by name

- Perform Create, Read, Update, and Delete operations

##  Tech Stack


 Frontend  - React.js          

 Backend   - Node.js + Express 
 
 Database  - MySQL             

 IDE       - Visual Studio Code 

 Version Control - Git 

## Installation & Setup
1. Clone the Repository
-git clone 

-cd Personal Book Tracker

2.Create MySQL Database and Table
-Open MySQL Workbench

-Connect to your local MySQL server

Run this SQL to Create the Database and Table
CREATE DATABASE tracker_db;

use tracker_db;

CREATE TABLE book_tracker(

id VARCHAR(36) PRIMARY KEY,

title VARCHAR(255) NOT NULL,

author VARCHAR(255) NOT NULL,

status ENUM('read','reading','to-read') NOT NULL,

review TEXT

);

3. Setup Backend
-cd backend

-npm install express mysql2 cors dotenv uuid

-npm start

-run on:http://localhost:5000

3. Setup Frontend
-cd../frontend

-npm install axios react-router-dom

-npm start

-run on:http://localhost:3000
