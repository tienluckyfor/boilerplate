
-- update random
update ss_feed_products set app_errors = case 
when floor(random() * 2 + 1) = 1 then '{"max_length":["Title max character limit is 150", "Description max character limit is 5000", "Description max character limit is 5000"]}'::jsonb
when floor(random() * 2 + 1) = 2 then '{"weight":["Shipping Weight must be Weight format lb, oz, g, kg"], "max_length":["Title max character limit is 150"]}'::jsonb
else null end
where ss_feed_id = 3;

-- update jsonb
update "ss_feeds"
set "collection_categories" = jsonb_set(coalesce(collection_categories,'{}'), '{208404250778}', '"11 Animals & Pet Supplies"')
where id = 2;

-- array_values postgresql
WITH subquery AS (
	SELECT id, concat('[', regexp_replace(collection_ids::text, '\{|\}|"\d+"\:', '', 'g'), ']') as collection_ids1
	from ss_products where shop_id BETWEEN 7000 and 7100 and collection_ids::text ilike '%"%'
)
UPDATE ss_products
SET collection_ids = subquery.collection_ids1::jsonb
FROM subquery
WHERE ss_products.id = subquery.id;