CREATE TABLE users(
user_id SERIAL PRIMARY KEY,
username VARCHAR(20),
password VARCHAR(20),
profile_pic TEXT);

CREATE TABLE posts(
post_id SERIAL PRIMARY KEY,
title VARCHAR(45),
img TEXT,
content TEXT,
author_id INT REFERENCES users(user_id));

ALTER TABLE users
ALTER COLUMN password TEXT;
