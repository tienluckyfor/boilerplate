# FE Server
https://dev.socialhead.dev/socialwidget/

ssh root@157.245.147.82
cd /data/sources/sohead_shop_fe
deploy shopfe

# BE Server
https://widget-api-dev.socialhead.dev/

ssh root@157.245.147.82
cd /data/sources/sohead_widget
deploy widgetbe; chmod -R 777 /data/sources/sohead_widget/storage/
// php service
docker exec -it widgetbe-php bash
// postgres
docker ps -a | grep postgres
docker exec -it bb758f9fcc8a psql -U postgres

# fake data
do $$
	declare
		id1 integer := 20; 
	begin
	for r in 20..100 loop
		id1 := id1 + 1;
		INSERT INTO 
		sw_sources (id, shop_id, social_account_id, name, type, source_graph, "limit", filter, crawl_username, crawl_user_id, auto_update, update_period, last_sync, next_sync, is_notify, email_notify, keep_media_status, created_at, updated_at, notify_status) 
		VALUES (id1, 619, 3, concat('Media source đầu tiên của Hải ', id1::text), 'profile_self', 'tiena.lucky', null, null, null, null, true, 'daily', '2021-02-03 03:23:19', '2021-02-04 03:23:19', false, null, 1, '2021-02-03 03:23:16', '2021-02-03 03:23:19', null);
	end loop;
end; $$;