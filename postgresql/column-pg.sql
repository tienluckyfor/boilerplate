
-- drop column postgresql
ALTER TABLE employee_audits DROP COLUMN IF EXISTS type;

-- add column postgresql
ALTER TABLE employee_audits ADD COLUMN type varchar(255);

-- change type of column
alter table tableName alter column columnName type varchar(64);
ALTER TABLE the_table ALTER COLUMN col_name TYPE integer USING (trim(col_name)::integer);

-- primary key
ALTER TABLE ss_feed_products_dup ADD PRIMARY KEY (id);

-- list column
SELECT * FROM information_schema.columns WHERE table_catalog = 'social_local' AND table_name = 'ss_feed_products';
SELECT table_catalog, table_name, column_name, data_type, character_maximum_length FROM information_schema.columns 
WHERE table_name='ss_products';