# list command
php artisan list --raw

# setup command
```
php artisan make:command SendEmails
// app/Console/Commands/SendEmails.php
protected $signature = 'email:send {user}';
protected $description = 'Send drip e-mails to a user';
public function handle(DripEmailer $drip)
$drip->send(User::find($this->argument('user')));
```

