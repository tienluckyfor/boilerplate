# cors
composer remove fruitcake/laravel-cors
composer require fruitcake/laravel-cors
php artisan vendor:publish --tag="cors"
// app/Http/Kernel.php
protected $middleware = [
  \Fruitcake\Cors\HandleCors::class,
    // ...
];

# install passport
composer require laravel/passport
php artisan migrate
php artisan passport:install

https://www.itsolutionstuff.com/post/laravel-6-rest-api-with-passport-tutorialexample.html