CREATE TABLE user_yadio (
user_id SERIAL PRIMARY KEY,
user_name VARCHAR(100),
password VARCHAR(100)
);



CREATE TABLE reviews (
review_id SERIAL PRIMARY KEY,
title VARCHAR(250)
rating INTEGER,
review_text TEXT,
user_name VARCHAR REFRENCES user_yadio(user_name)
);

