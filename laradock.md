# run 
// bash
docker-compose exec workspace bash

// all
docker-compose up -d nginx postgres pgadmin redis workspace mysql phpmyadmin
docker-compose up -d nginx postgres pgadmin redis workspace mariadb phpmyadmin mongo
docker-compose up -d nginx redis workspace mariadb phpmyadmin 


// laravel
docker-compose up -d nginx postgres pgadmin redis workspace

// codeigniter
docker-compose up -d mysql nginx phpmyadmin redis workspace
docker-compose up -d mysql apache2 phpmyadmin redis

// wordpress
docker-compose up -d mysql nginx phpmyadmin redis workspace

# install
git clone https://github.com/Laradock/laradock.git

* laradock
* project-a
* project-b

sudo vi /etc/hosts
127.0.0.1 project-a.test

cp laradock/nginx/sites/default.conf laradock/nginx/sites/project-a.conf
listen 80 default_server; -> listen 80;
listen [::]:80 default_server ipv6only=on; -> listen [::]:80;
server_name localhost; -> server_name project-a.test;
root /var/www/public; -> root /var/www/project-a/public;

cp laradock/env-example laradock/.env
-> APP_CODE_PATH_HOST=../
-> MYSQL_VERSION=latest -> MYSQL_VERSION=5.7
-> rm -rf ~/.laradock/data/mysql
-> docker-compose build --no-cache mysql

# administration tool
// phpmyadmin
http://localhost:5050/
mysql/root/root

// pgadmin
http://localhost:5050/
pgsql/pgadmin4@pgadmin.org/admin

# settup
// laravel
cp .env-example .env
-> DB_HOST=127.0.0.1 -> DB_HOST=mysql
docker-compose exec workspace bash
composer install
php artisan migrate
php artisan horizon

// codeigniter
laradock/nginx/sites/codeigniter.conf
root /var/www/public; -> root /var/www;
system/application/config/database.php
$db['default']['hostname'] = "mysql";
$db['default']['username'] = "root";
$db['default']['password'] = "";
$db['default']['database'] = "havismart_sub";

// wordpress
laradock/nginx/sites/wordpress.conf
root /var/www/public; -> root /var/www;
wp-config.php
define( 'DB_NAME', 'nhacsong_db' );
define( 'DB_USER', 'root' );
define( 'DB_PASSWORD', 'root' );
define( 'DB_HOST', 'mysql' );

# php version
// .env
PHP_VERSION=7.3 -> PHP_VERSION=5.6
docker-compose build php-fpm
docker-compose build workspace

# 10.1.19-MariaDB
PMA_DB_ENGINE=mysql -> PMA_DB_ENGINE=mariadb
MARIADB_VERSION=latest -> MARIADB_VERSION=10.4.13
docker-compose up -d mariadb nginx phpmyadmin redis workspace

# bugs
// error handle ocramius/package-versions 1.5.0 requires php ^7.3.0 -> your PHP version (7.2.17)
Delete file composer.lock
compose update

// Service 'nginx' failed to build: The command '/bin/sh -c apk update
FROM nginx:alpine -> FROM nginx:1.15.12-alpine

// Bind for 0.0.0.0:8080 failed: port is already allocated
PMA_PORT=8080 -> PMA_PORT=8084

// Change mysql version
MYSQL_VERSION=latest -> MYSQL_VERSION=5.7
rm -rf ~/.laradock/data/mysql
docker-compose build --no-cache mysql

# publish horizon
http://localhost/horizon
php artisan vendor:publish --provider="Laravel\Horizon\HorizonServiceProvider"

# memory limit
php-fpm/laravel.ini
docker-compose build --no-cache php-fpm

