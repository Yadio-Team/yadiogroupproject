INSERT INTO reviews
(name, rating, review_text, user_name, date_created)
VALUES
($1, $2, $3, $4, $5)
RETURNING *