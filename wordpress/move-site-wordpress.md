# update database
```
UPDATE thietkeweb76_options SET option_value = replace(option_value, 'https://tochucsukienquangngai.com', 'http://nhacsong.test') WHERE option_name = 'home' OR option_name = 'siteurl';
UPDATE thietkeweb76_posts SET guid = replace(guid, 'https://tochucsukienquangngai.com','http://nhacsong.test');
UPDATE thietkeweb76_posts SET post_content = replace(post_content, 'https://tochucsukienquangngai.com', 'http://nhacsong.test');
UPDATE thietkeweb76_postmeta SET meta_value = replace(meta_value,'https://tochucsukienquangngai.com','http://nhacsong.test');


UPDATE thietkeweb76_options SET option_value = replace(option_value, 'http://nhacsong.test', 'https://tochucsukienquangngai.com') WHERE option_name = 'home' OR option_name = 'siteurl';
UPDATE thietkeweb76_posts SET guid = replace(guid, 'http://nhacsong.test', 'https://tochucsukienquangngai.com');
UPDATE thietkeweb76_posts SET post_content = replace(post_content, 'http://nhacsong.test', 'https://tochucsukienquangngai.com');
UPDATE thietkeweb76_postmeta SET meta_value = replace(meta_value, 'http://nhacsong.test', 'https://tochucsukienquangngai.com');
```