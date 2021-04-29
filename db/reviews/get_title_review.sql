SELECT * FROM reviews
WHERE title = $1
RETURNING *