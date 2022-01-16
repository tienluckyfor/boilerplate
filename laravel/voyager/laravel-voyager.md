# setup voyager
composer require tcg/voyager

# .env
APP_URL=http://diamond.test

DB_CONNECTION=mysql
DB_HOST=mariadb
DB_PORT=3306
DB_DATABASE=mockapi_db
DB_USERNAME=root
DB_PASSWORD=root

# dummy data
php artisan voyager:install --with-dummy

# admin page
http://mockapi_be.test/admin
admin@admin.com/password

# image error
rm -rf public/storage; php artisan storage:link
php artisan config:cache; php artisan config:clear

# image thumb & hasMany
[app/Album.php](app/Album.php)
http://diamond.codeby.com/admin/bread/albums/edit
[image.json](image.json)
foreach($AlbumMedia as $key => $item){
    dd($item->thumb);
}

# widgets
[storage/widgets/albums.jpg](albums.jpg)
[app/Widgets/Albums.php](Albums.php)
config/voyager.php:146
'widgets' => [
    'TCG\\Voyager\\Widgets\\UserDimmer',
    'App\\Widgets\\Albums',
];

