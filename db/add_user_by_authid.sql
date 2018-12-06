INSERT INTO users
    (auth_id, first_name, last_name, email)
VALUES($1 , $2, $3, $4);

SELECT *
FROM users
WHERE auth_id = $1;