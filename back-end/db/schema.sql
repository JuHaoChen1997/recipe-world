-- step 1 incase there is a database already, drop it
DROP DATABASE IF EXISTS recipe_world;

--step 2 create the db
CREATE DATABASE recipe_world; 

--step 3 connect to the db
\c recipe_world; 

--step 4 create the tables
CREATE TABLE recipes (
    recipe_id SERIAL PRIMARY KEY,
    recipe_name TEXT NOT NULL,
    time_to_prepare INT,
    time_to_cook INT,
    author TEXT,
    picture_link TEXT,
    ingredients TEXT,
    directions TEXT
)