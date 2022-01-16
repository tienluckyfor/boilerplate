
-- clear 
\! clear

-- connect from from docker
docker ps | grep postgres
docker exec -it fa85b32b2e18 psql -U default

-- connect db
\c social_local

-- list db
\l
SELECT datname FROM pg_database;

-- db size
SELECT pg_size_pretty( pg_database_size('social_local') );
SELECT
    pg_database.datname,
    pg_size_pretty(pg_database_size(pg_database.datname)) AS size
    FROM pg_database;


-- optimaze db
-- https://pgtune.leopard.in.ua/#/
ALTER SYSTEM SET max_connections = '120';
docker ps
docker restart id-laradock_postgres

select *, min_val, max_val from pg_settings where name='max_connections';

-- export db DataGrip
social_shop > tables > SQL Scripts > Generate DDL to Query Console