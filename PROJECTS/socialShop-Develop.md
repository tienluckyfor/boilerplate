select f.social_type,f.error_code, f.* from ss_feeds f 
inner join ss_social_accounts a on f.ss_social_account_id = a.id
where f.user_id = 191

select f.error_code, a.internal_id, * from ss_feeds f 
inner join ss_social_accounts a on f.ss_social_account_id = a.id
where f.user_id = 191

# laradock
docker-compose up -d nginx postgres pgadmin redis workspace mariadb phpmyadmin mongo

docker-compose exec workspace bash
cd /var/www/fireapps/sohead_shop-master; php artisan horizon

docker-compose exec redis bash
redis-cli flushall

# postgres
docker ps -a | grep postgres
docker exec -it 87db67a9f188 psql -U socialhead

# log
cd /data/sources/sohead_shop/storage/logs

# FE Server
https://shopdev.socialhead.io/auth/login

ssh root@157.245.147.82
cd /data/sources/sohead_shop_fe
deploy shopfe

# BE Server
https://shopdev-api-new.socialhead.io/

ssh root@157.245.147.82
cd /data/sources/sohead_shop
deploy shopbe; chmod -R 777 /data/sources/sohead_shop/storage/
// php service
docker ps -a | grep shopbe-php
docker exec -it 42616e85b95d bash
rm composer.lock; composer install --ignore-platform-reqs

// sohead
composer require sohead/core
php -d memory_limit=-1 /usr/local/bin/composer require sohead/core
// permison
chmod -R 777 /data/sources/sohead_shop/storage/

# BE .env
APP_URL=157.245.147.82 -> APP_URL=https://shopdev-api-new.socialhead.io/

# Install
git clone -b develop https://github.com/YoungWorldTechnology/sohead_shop.git

> [.env file] (.env)
# create databases
social_shop
sohead_core
# composer
docker-compose up -d nginx postgres pgadmin redis workspace laravel-horizon
docker-compose exec workspace bash
composer update
php artisan migrate
php artisan migrate:refresh
php artisan horizon



SPF_API_KEY=387e8a6afc07eb67b261e5b365afc3d4
SPF_SECRET_KEY=ca70e39dda1a706addf196df68b63e81

SPF_API_KEY=da5e7c8d4737504032b3eff4d7c931c2
SPF_SECRET_KEY=fba8e41a676e33285e304ae3e8aa3c50
SHOPIFY_API_KEY=da5e7c8d4737504032b3eff4d7c931c2
SHOPIFY_API_SECRET=fba8e41a676e33285e304ae3e8aa3c50
