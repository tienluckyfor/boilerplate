# composer install error
composer install --ignore-platform-reqs
composer update codeby/laravel-api --ignore-platform-reqs
composer require codeby/laravel-api dev-master#c4247a9 --ignore-platform-reqs


# install on Ubuntu 18.04
sudo apt update
apt install composer

# update version 
"sohead/core": "^1.0" -> delete
composer update
composer require sohead/core


composer update
composer self-update --snapshot
php -d memory_limit=-1 /usr/local/bin/composer update
php -d memory_limit=-1 /usr/bin/composer update


composer dump-autoload
