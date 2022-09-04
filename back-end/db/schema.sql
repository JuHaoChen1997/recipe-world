-- step 1 incase there is a database already, drop it
DROP DATABASE IF EXISTS recipe_world;

--step 2 create the db
CREATE DATABASE recipe_world; 

--step 3 connect to the db
\c recipe_world; 

--step 4 create the tables
--create the recipes table
DROP TABLE IF EXISTS recipes;
CREATE TABLE recipes (
    recipe_id SERIAL PRIMARY KEY,
    recipe_name TEXT NOT NULL,
    time_to_prepare INT,
    time_to_cook INT,
    author CHAR(100),
    picture_link TEXT,
    ingredients TEXT,
    directions TEXT
);

--create the reveiws table
DROP TABLE IF EXISTS reviews;
CREATE TABLE reviews(
    review_id SERIAL PRIMARY KEY,
    reviewer TEXT,
    content TEXT,
    rating NUMERIC,
    CHECK (rating >= 0 AND rating <= 5),
    id_of_recipe INTEGER REFERENCES recipes (recipe_id)
    ON DELETE CASCADE
)
