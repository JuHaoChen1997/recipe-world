\c da1i55ng3boheo;  --we'll need to lookup our heroku pg database name to connect to here

-- create the tables
DROP TABLE IF EXISTS recipes;

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