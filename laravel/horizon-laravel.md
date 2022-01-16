
# install horizon
// .env
QUEUE_CONNECTION=sync -> QUEUE_CONNECTION=redis
-> REDIS_CLIENT=predis

composer require laravel/horizon
php artisan horizon:install
composer require predis/predis

php artisan horizon:publish

# install horizon ubuntu 18.4
sudo apt-get install redis -y
sudo apt-get install supervisor

# setup code command, job
php artisan make:command Buyer
php artisan make:job BuyerJob

// app/Console/Commands/Buyer.php:14
    protected $signature = 'command:buyer';
// app/Console/Commands/Buyer.php:39
    \App\Jobs\BuyerJob::dispatch()->onQueue('default');
// app/Console/Kernel.php:15
    protected $commands = [
        Commands\Buyer::class
    ];
    protected function schedule(Schedule $schedule)
    {
        $schedule->command('command:buyer')->everyMinute();
    }
php artisan horizon
// app/Providers/HorizonServiceProvider.php:16
    Horizon::auth(function ($request) {
        return true;
    });
// config/horizon.php:178
'queue' => ['default'],
'processes' => 1,


# vi /etc/supervisor/conf.d/kingthi.com-horizon.conf
```
[program:horizon_tamquoc]
process_name=%(program_name)s_%(process_num)02d
command=php /var/www/html/tamquoc/artisan horizon
autostart=true
autorestart=true
user=root
numprocs=8
redirect_stderr=true
stdout_logfile=/var/www/html/horizon.log
stopwaitsecs=3600
```

# setup crontab (maybe not)
```
crontab -e
* * * * * cd /var/www/fireapps/sohead_shop && php artisan schedule:run >> /dev/null 2>&1
```

# running
```
sudo supervisorctl reread
sudo supervisorctl update
sudo supervisorctl start horizon
sudo supervisorctl restart all
```