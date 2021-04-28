INSERT INTO user_yadio 
(user_name, password)
VALUES
($1, $2)
RETURNING *