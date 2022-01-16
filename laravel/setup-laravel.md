# refactoring
https://laracasts.com/series/how-to-be-awesome-in-phpstorm/episodes/9

# install laravel
php artisan passport:install
composer global require laravel/installer
// v8
composer create-project --prefer-dist laravel/laravel [name]
// v7
composer create-project --prefer-dist laravel/laravel [name] "7.*"
// v6
composer create-project --prefer-dist laravel/laravel [name] "6.*"

# permission denied
chmod -R 777 storage/; mkdir -p public/files/images; mkdir -p public/files/tmp; chmod -R 777 public/files/

# check version 
php artisan --version

# http://localhost:8081/server_databases.php?server=1
mysql
root
root

# .env
DB_CONNECTION=mysql
DB_HOST=mysql
DB_PORT=3306
DB_DATABASE=default
DB_USERNAME=root
DB_PASSWORD=root

# migrate
php artisan migrate
php artisan migrate:refresh

# route list
php artisan route:list

# timezone
app/Providers/AppServiceProvider.php:26
date_default_timezone_set('Asia/Ho_Chi_Minh');
