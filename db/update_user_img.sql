UPDATE users
SET image_url = $2
WHERE user_id = $1;

SELECT image_url 
FROM users
WHERE user_id = $1;