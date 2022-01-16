-- duplicate table
create table dupe_users as (select * from users);
create table dupe_users as (select * from users) with no data;

-- rename table
ALTER TABLE table_name RENAME TO new_table_name;

-- table size
SELECT
   relname AS objectname,
   relkind AS objecttype,
   reltuples AS "#entries", pg_size_pretty(relpages::bigint*8*1024) AS size
   FROM pg_class
   WHERE relpages >= 8
   ORDER BY relpages DESC;


-- list table
\d+ -- list table with size
\dt
SELECT * FROM pg_catalog.pg_tables WHERE schemaname != 'pg_catalog' AND schemaname != 'information_schema' AND tablename ILIKE '%products%';
SELECT * FROM pg_catalog.pg_tables WHERE tablename ILIKE '%products%';

-- create table with random data
CREATE TABLE items AS
  SELECT
    (random()*1000000)::integer AS n,
    md5(random()::text) AS s
  FROM
    generate_series(1,1000000);