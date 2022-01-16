
-- copy csv
COPY ss_products_unlogged
(brand,collection_ids,created_at,description,id,image_url,internal_id,is_override_feed_product,product_type,product_url,published_at,rest_id,seo_description,seo_title,shop_id,title,type_action,updated_at,variants)
FROM PROGRAM 'wget -q -O - "$@" "https://d5e13c35b424.ngrok.io/shop/tiennv-3.myshopify.com-1592282652.csv"'

-- insert 1 milion rows
do $$
	declare
		id integer := 0; 
	begin
	for r in 1..1000000 loop
		id := id + 1;
		insert into 
		ss_feed_products(id, ss_feed_id, ss_product_id, rest_id, offer_id, title, description, other_fields, warnings, errors, app_errors, destination_statuses, item_level_issues, is_submit, is_fetch, status_deleted, type_action, status, is_deleted_copy, last_fetch, created_at, updated_at) 
		values(concat(i::text, '2:2:5310488608925:34780128280733'), '2', '2:5310488608925', 'vi:VN:ssh_34780128280733', 'ssh_34780128280733', 'NVT 20kg Big Load Smart RC Mecanum Wheel Robot Car Chassis Kit Omni ', 'Power Source: electricAge Range: 14 Years &amp; upAge Range: GrownupsTheme: TransportationModel Number: MBS-187Warning: none', '{ "mpn": "36275852-1-set-rc-robot-china", "link": "https://tiennv-3.myshopify.com/products/20kg-big-load-smart-rc-mecanum-wheel-robot-car-chassis-kit-omni-platform-with-ps2-mega2560-controller-for-arduino-project?variant=34780128280733", "brand": "tiennv-3", "price": { "value": "270", "currency": "VND" }, "condition": "new", "image_link": "https://cdn.shopify.com/s/files/1/0409/1808/9885/products/product-image-1380476956.jpg?v=1592969241", "sale_price": null, "availability": "in stock", "item_group_id": "5310488608925" } '::jsonb, null, null, null, null, null, false, true, null, 'FETCH_652775306', 'ACTIVATED', true, '2020-07-07 06:34:07', null, null);
	end loop;
end; $$;

-- insert random
INSERT INTO items
SELECT
    (random()*1000000)::integer AS n,
    md5(random()::text) AS s
  FROM
    generate_series(1, 10);

-- insert
INSERT INTO TABLE_NAME (column1, column2)
VALUES (value1, value2);

-- insert/select CONFLICT 
INSERT INTO ss_feed_products (SELECT *
	FROM ss_feed_products_unlogged
	WHERE ss_feed_id = ? AND type_action = ?)
ON CONFLICT(id) DO NOTHING;

-- insert/update CONFLICT
INSERT INTO tabelname(id, col2, col3, col4)
VALUES
    (1, 1, 1, 'text for col4'),
    (DEFAULT,1,4,'another text for col4')
ON CONFLICT (id) DO UPDATE SET
    col2 = EXCLUDED.col2,
    col3 = EXCLUDED.col3,
    col4 = EXCLUDED.col4