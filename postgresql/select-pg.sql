-- show settings
SELECT version();
SELECT * FROM pg_settings;

-- optimize select
SELECT * FROM ss_products where shop_id = 1 OFFSET 0 ROWS FETCH FIRST 1000 ROWS ONLY

-- array to string
-- one column to string
select array_to_string(array(
    select shop_id from app_install where status = true
), ', ');

select string_agg(format('''%s''', a.id), ',') shop_ids, count(s.id)
from app_install a inner join shops s on s.id = a.shop_id

-- all column values into one
select translate(string_to_array(r::text, ',')::text, '()', '')::text[] 
from ss_products AS r limit 1

-- tables size
SELECT relname AS "relation", pg_size_pretty ( pg_total_relation_size (C .oid) ) AS "total_size" 
FROM pg_class C LEFT JOIN pg_namespace N ON (N.oid = C .relnamespace) 
WHERE nspname NOT IN ( 'pg_catalog', 'information_schema' ) AND C .relkind <> 'i' AND nspname !~ '^pg_toast' 
ORDER BY pg_total_relation_size (C .oid) DESC LIMIT 5; 

-- select array object attribute
select variants, to_json(array(select jsonb_array_elements(s.variants) ->> 'sku'))::jsonb
from ss_products s
where shop_id = 18036 limit 10;

-- select pretty
select jsonb_pretty();


SELECT * FROM dblink('dbname=sohead_core_widget user=default password=secret hostaddr=127.0.0.1',
    'select 1 as value') AS t1(value integer);