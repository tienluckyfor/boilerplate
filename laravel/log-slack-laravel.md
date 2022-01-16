# get key
https://fireappshq.slack.com/apps/new/A0F7XDUAZ-incoming-webhooks
copy: 
https://hooks.slack.com/services/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

# config/logging.php
```
    'channels' => [
        'stack' => [
            'driver' => 'stack',
            'channels' => ['single'],
            'ignore_exceptions' => false,
        ],
==>
    'channels' => [
        'stack' => [
            'driver' => 'stack',
            'channels' => ['daily', 'slack','stderr'],
            'ignore_exceptions' => false,
        ],
```
# php artisan config:cache
# web.php
Route::get('/1', function () {
    \Illuminate\Support\Facades\Log::debug('33333');
 });