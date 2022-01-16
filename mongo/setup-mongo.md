# docs
https://docs.mongodb.com/manual/meta/aggregation-quick-reference/#aggregation-expressions
https://docs.mongodb.com/manual/crud/

# version
db.version()
db.hostInfo()

# mongo with laradock
// .env
WORKSPACE_INSTALL_MONGO=false -> WORKSPACE_INSTALL_MONGO=true
PHP_FPM_INSTALL_MONGO=false -> PHP_FPM_INSTALL_MONGO=false
docker-compose build workspace php-fpm
docker-compose up -d mongo

laradock_mongo_1 exited with code 14 
-> .env
DATA_PATH_HOST=~/.laradock/data -> DATA_PATH_HOST=.laradock/data

# laravel
composer require jenssegers/mongodb
(2020-09 only work on laravel 6.*)

// .env
DB_CONNECTION=mongodb
DB_HOST=mongo
DB_PORT=27017
DB_DATABASE=test_db
DB_USERNAME=default
DB_PASSWORD=secret

// config/database.php
'connections' => [
    'mongodb' => [
        'driver'   => 'mongodb',
        'host'     => env('DB_HOST', 'localhost'),
        'port'     => env('DB_PORT', 27017),
        'database' => env('DB_DATABASE', 'database'),
        'username' => '',
        'password' => '',
        'options'  => [
            'database' => '',
        ]
    ],
	// ...
],