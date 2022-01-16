-- where number
SELECT * FROM myTable WHERE col1 REGEXP '^[0-9]+$';

-- json attribute
SELECT count(*) as count, json_extract(content, '$.sell_user_id') as content_user_id 
FROM `logs` WHERE type='lap' group by content_user_id order by count asc

-- where diff
SELECT * FROM theuser WHERE active IS NULL OR active != 1

-- last group by 
SELECT * FROM comments WHERE id IN 
(SELECT MAX(id) FROM comments WHERE deleted_at IS NULL GROUP BY unique_id)
ORDER BY id DESC;