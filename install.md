# install
```
composer global require laravel/installer
// v7
composer create-project --prefer-dist laravel/laravel [name]
// v6
composer create-project --prefer-dist laravel/laravel [name] "6.*"
```

# version 
```
php artisan --version
```

# http://localhost:8081/server_databases.php?server=1
```
mysql
root
root
```

# .env
```
DB_CONNECTION=mysql
DB_HOST=mysql
DB_PORT=3306
DB_DATABASE=default
DB_USERNAME=root
DB_PASSWORD=root
```

# migrate
```
php artisan migrate
php artisan migrate:refresh
```

# route list
```
php artisan route:list
```