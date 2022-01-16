# DEV
```
https://dev.gokulegend.com/

ssh root@139.180.191.6 -p 23
VanTien123!@#
cd /var/www/html/dev.gokulegend.com/public_html/; git pull
chmod -R 777 storage/; mkdir -p public/files/images; mkdir -p public/files/tmp; chmod -R 777 public/files/

mysqldump haydzo_db | mysql dev_haydzo_db

cp -r /var/www/html/gokulegend.com/public_html/public/files/images/* /var/www/html/dev.gokulegend.com/public_html/public/files/images/

mkdir -m 777 public/files/thumb_images
php artisan migrate
use dev_haydzo_db;
ALTER TABLE `users` ADD `game_turn` INT AFTER `username`;
update users set game_turn=0 where id != 0;

ALTER TABLE `notifies` ADD `status` VARCHAR(225) AFTER `content`;
ALTER TABLE `games` ADD `item_left` INT(11) AFTER `name`;
ALTER TABLE `games` ADD `item_left` INT(11) AFTER `name`;
UPDATE `games` SET `type` = 'normal' WHERE `games`.`id` != 0;


select count, zalo_id, username from (SELECT count(*) as count, json_extract(content, '$.sell_user_id') as content_user_id FROM `logs` WHERE type='lap' group by content_user_id) as t1 inner join users on users.id = t1.content_user_id where zalo_id REGEXP '^[0]' order by count desc limit 1000

SELECT id, zalo_id, username from users where zalo_id REGEXP '^[0]' order by id desc limit 1000

```
# LIVE
```
https://gokulegend.com/
.env
DB_CONNECTION=mysql
DB_HOST=localhost
DB_PORT=3306
DB_DATABASE=haydzo_db
DB_USERNAME=testuser
DB_PASSWORD=password
 
ssh root@139.180.191.6 -p 23
VanTien123!@#
cd /var/www/html/gokulegend.com/public_html/; git pull

git clone https://tien-luckyfor@bitbucket.org/tien-luckyfor/haydzo.git public_html/
G9XsNmaDVqCgEBsqMfeH
```

# backup
```
mysqldump -u root -p haydzo_db > /var/www/html/gokulegend.com/public_html/public/haydzo_db.sql
https://gokulegend.com/haydzo_db.sql
```

# mysql
```
use haydzo_db;
select pin_security,id,username,type,status,referred_id, phone_number from users;

-- check ticket_number
select id, username, referred_id, ticket_number, reward_point from users order by ticket_number  asc limit 10;

-- fix ticket_number

```