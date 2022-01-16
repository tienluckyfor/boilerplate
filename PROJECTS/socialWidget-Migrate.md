https://widget-api-v2-uat.socialhead.dev/api/debug/migrate_data?step=sw_images&per_page=1000&current_page=1&act=info
https://widget-api-v2-uat.socialhead.dev/access_horizon/jobs/pending
http://pg-stag.fireapps.io/login?next=%2Fbrowser%2F

-- old db
select count(*) from sw_images

-- new db
select count(*) from sw_source_media
select count(*) from log_migration_dbs
select count(*), status from log_migration_dbs group by status

-- truncate
truncate sw_source_media;
truncate log_migration_dbs;

-- view log 
select * from log_migration_dbs where status = false
select * from log_migration_dbs where "table" like '%test%'


# fake sw_images
do $$
	declare
		id1 integer := 1; 
	begin
	for r in 1..100000 loop
		id1 := id1 + 1;
		INSERT INTO 
		sw_images (id, internal_id, media_type, media_url, media_carousel, media_video, permalink, timestamp, username, sw_gallery_id, caption, status, is_delete, is_show_product_tag, product_tag, created_at, updated_at) 
		VALUES (id1, id1, 'IMAGE', id1, '[{"id":"17883473623004992","media_url":"https:\/\/scontent-sin6-3.cdninstagram.com\/v\/t51.2885-15\/18812860_1855898908010503_4718845504002195456_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=WTbEjPxp_6EAX-TwtRk&_nc_ht=scontent-sin6-3.cdninstagram.com&oh=903b0d2f98d509de2177feddeefc8813&oe=606F709D","permalink":"https:\/\/www.instagram.com\/p\/BU7nZYzgnQW\/","timestamp":"2017-06-04T20:43:34+0000","username":"lukepmonday"},{"id":"17883147994055178","media_url":"https:\/\/scontent-sin6-1.cdninstagram.com\/v\/t51.2885-15\/18878997_1896235440593546_2185578298518536192_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=J00pg8difOwAX_81NGD&_nc_ht=scontent-sin6-1.cdninstagram.com&oh=f23b36c674a9358e07772871c16edd8c&oe=606D9301","permalink":"https:\/\/www.instagram.com\/p\/BU7nZsFgFp7\/","timestamp":"2017-06-04T20:43:37+0000","username":"lukepmonday"},{"id":"17869775131120543","media_url":"https:\/\/scontent-sin6-2.cdninstagram.com\/v\/t51.2885-15\/18888771_436772376700212_7894851593214885888_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=JQCo39jLAUQAX805XW1&_nc_oc=AQngaBLhmF4ayMyCAAd3bacAd2-TPRY_-ZblYC2Q9A9smysqym4e0zs7jFEVVCJyIWQ&_nc_ht=scontent-sin6-2.cdninstagram.com&oh=0130ff5334dabcb47906d18305fca06f&oe=606CC666","permalink":"https:\/\/www.instagram.com\/p\/BU7nZtsgl1h\/","timestamp":"2017-06-04T20:43:37+0000","username":"lukepmonday"}]', '485', '485', '2021-02-03 03:23:16', '485', 485, '485', true, true, true, '[{"id":"41948fbe39b80d957834bf22627f6cca","x":538.875,"y":416.25,"product_id":"6031933964454","product_url":"https:\/\/thenaturewood.myshopify.com\/products\/flow-for-men"}]', '2021-02-03 03:23:16', '2021-02-03 03:23:19');
	end loop;
end; $$;