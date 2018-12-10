UPDATE userz
SET image_url = $2
WHERE auth_id = $1;

-- SELECT image_url 
-- FROM userz
-- WHERE auth_id = $1;