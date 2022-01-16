# passport
php artisan passport:install

# jobs
php artisan make:command [Name]
php artisan make:job [Name]Job
php artisan make:job [Name]Job --sync

# model, migration, controller, resource
php artisan make:model [Name] --migration --controller --resource
// web.php
Route::resource('users', 'UserController');

# controller, model
php artisan make:controller [Name]Controller
php artisan make:controller [Name]Controller --resource
php artisan make:model [Name]
php artisan make:controller [Name]Controller --resource --model=Photo

# request
php artisan make:request [request_Name]

# test
php artisan make:test UserTest --unit

# provider
php artisan make:provider RiakServiceProvider

# migration
php artisan make:migration create_[name]s_table
php artisan make:migration modify_cols-[name1]_[name2]s_table
php artisan make:migration add_cols-[name1]_[name2]s_table
php artisan make:migration add_cols-storage_general_infos_table

# change port
sudo php artisan serve --port=80 --host=192.168.2.101

php artisan tinker
