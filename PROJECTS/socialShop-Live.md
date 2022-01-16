# v1.7
alter table app_install add is_rating boolean;
-- ss_feeds
alter table ss_feeds add shop_ids json;
alter table ss_feeds add rules jsonb;
-- ss_products
alter table ss_products add user_id integer;
update ss_products set user_id = 3 where id != '';
-- ss_shop_settings
alter table ss_shop_settings add rules jsonb;
alter table ss_shop_settings add timezone varchar(20);

# routes
```
https://shop-api.socialhead.io/debug/facebook_s3?ssFeedId=0&step=delete-product-catalog&token=kSjVg3gmfpCygrZa
https://shop-api.socialhead.io/debug/facebook_s3?ssFeedId=0&step=4&token=kSjVg3gmfpCygrZa&resultDirectUploadID=731735417459096
https://shop-api.socialhead.io/debug/facebook_s3?ssFeedId=0&step=3&token=kSjVg3gmfpCygrZa
https://shop-api.socialhead.io/debug/facebook_s3?ssFeedId=0&step=3&token=kSjVg3gmfpCygrZa&overwrite=true
https://shop-api.socialhead.io/debug/facebook_csv?ssFeedId=0&per_page=5000&current_page=1&token=kSjVg3gmfpCygrZa
https://shop-api.socialhead.io/debug/facebook_csv_file?ssFeedId=0&per_page=5000&current_page=1&token=kSjVg3gmfpCygrZa
https://shop-api.socialhead.io/debug/facebook_sync?ssFeedId=0&per_page=5000&current_page=1&token=kSjVg3gmfpCygrZa
https://shop-api.socialhead.io/debug/facebook_submit?ssFeedId=0&per_page=5000&current_page=1&token=kSjVg3gmfpCygrZa
https://shop-api.socialhead.io/debug/facebook_submit?ssFeedId=0&per_page=5000&current_page=1&status=ERROR&token=kSjVg3gmfpCygrZa
https://shop-api.socialhead.io/debug/facebook_sync?ssFeedId=0&rest_id=0&token=kSjVg3gmfpCygrZa
https://shop-api.socialhead.io/debug/facebook_submit?ssFeedId=3529&offer_id=ssh_32152064983084&token=kSjVg3gmfpCygrZa
https://shop-api.socialhead.io/debug/re_sync_product_spf/1684
https://shop-api.socialhead.io/debug/init_app/1684

https://shop-api.socialhead.io/re_sync_product_spf/[shop_id]
https://shop-api.socialhead.io/access_store/social_shop/[shop_name]
```

# fix raw domain
```
select other_fields->'link', * from ss_feed_products where ss_feed_id = 3078 and other_fields->>'link' ilike '%myshopify%';
select other_fields->'link', * from ss_feed_products where ss_feed_id = 3078 and other_fields->>'link' not ilike '%myshopify%';

UPDATE ss_products SET product_url = replace(product_url, 'https://decor-redefined.myshopify.com', 'https://decorredefined.com')
where shop_id = 10222;

select array_to_string(array(
	select concat('''', ss_product_id, '''') from ss_feed_products where ss_feed_id = 3078 and other_fields->>'link' ilike '%myshopify%'
), ', ');

select product_url, * from ss_products where id in (

);
```


# postgresql
```
-- fbe 
select count(*) from ss_feeds where social_type = 'facebook_fbe'
select count(*) from ss_feeds f inner join ss_social_accounts s on f.ss_social_account_id = s.id where f.social_type = 'facebook_fbe'
select f.account_center_id, f.center_id, s.fbe_ids->'pages'->0 as page_id, s.fbe_ids->'catalog_id' as catalog_id
, s.fbe_ids->'pixel_id' as pixel_id, s.fbe_ids->'external_business_id' as external_business_id, 
s.fbe_ids->'business_manager_id' as business_manager_id
from ss_feeds f 
inner join ss_social_accounts s on f.ss_social_account_id = s.id
where f.social_type = 'facebook_fbe'

-- check bulk_operation_id
select bulk_operation_id, s.* from ss_shop_settings s inner join ss_feeds f on s.shop_id = f.shop_id
where f.id = 10028;

-- get access_token
select s.raw_domain, a.access_token, a.shop_id, * from shops s inner join app_install a on s.id = a.shop_id 
where app_id = 'social_shop' and s.raw_domain ilike '%tien%';

-- log tracking command
SELECT pid, now() - query_start as "runtime", usename, datname, state, query FROM pg_stat_activity WHERE state != 'idle' ORDER BY runtime DESC;
SELECT pg_terminate_backend(6739);

-- list social
select count(*), social_type from ss_social_accounts group by social_type;

-- follow check feed_products & product_feeds
select * from shops where raw_domain ilike '%tiennv%';
select * from app_install where shop_id = 7802;
select * from ss_feeds where shop_id = 7802;
select title, * from ss_products where shop_id = 7802;
select title, * from ss_feed_products where ss_feed_id = 1849;
select ss_feeds.* from ss_social_accounts inner join ss_feeds on ss_social_accounts.id = ss_feeds.ss_social_account_id where ss_feeds.id=4399;
select ss_social_accounts.* from ss_social_accounts inner join ss_feeds on ss_social_accounts.id = ss_feeds.ss_social_account_id where ss_feeds.id=4399;

-- delete shops
delete from shops where id = 2791;
delete from app_install where shop_id = 2791;

-- get feed, social_type
select f.id as ss_feed_id, s.social_type, f.name, * from ss_feeds f 
inner join ss_social_accounts s on f.ss_social_account_id = s.id
where f.shop_id = 14456;

-- delete feeds
delete from ss_feeds where id = 2431;
delete from ss_feed_product_mappings where ss_feed_id = 2431;
delete from ss_feed_products where ss_feed_id = 2431;

-- newest login shop
select count(*) from shops where updated_at > now() - INTERVAL '1 day';

-- statistical register by week
SELECT date_trunc('week', created_at::date) AS weekly, social_type, COUNT(*) FROM ss_social_accounts
GROUP BY weekly, social_type
ORDER BY weekly DESC;

```
# postgresql feed
```
-- copy ss_products -> ss_feed_products
update ss_feeds set auto_refresh_submit_run_time = auto_refresh_submit_run_time - INTERVAL '15 day' where id = 1510

-- submit to google, facebook
update ss_feeds set auto_refresh_submit_run_time = auto_refresh_submit_run_time - INTERVAL '2 day' where id = 2480;
update ss_feed_products set is_submit = true where ss_feed_id = 2480;

-- submit check 
select auto_refresh_submit_run_time, * from ss_feeds where id = 2480;
select is_submit, * from ss_feed_products where ss_feed_id = 2480;

-- fetch from google, facebook
update ss_feeds
set auto_refresh_fetch_run_time = auto_refresh_fetch_run_time - INTERVAL '2 day'
where id in (select id from ss_feeds where auto_refresh_submit_run_time is not null order by auto_refresh_submit_run_time DESC limit 20);

```

# core DB
```
-- core: select app_version

-- core: select collections when delete shops
select * from collections where shop_id not in (select id from shops);

-- core: delete shops 
select * from shops where raw_domain ilike '%tiennv%';
DO $$
    DECLARE var_shop_id integer = 2755; 
    BEGIN
        delete from shops where id = var_shop_id;
        delete from app_install where shop_id = var_shop_id;
        delete from collections where shop_id = var_shop_id;
    END;
$$;
```