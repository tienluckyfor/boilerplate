# log laravel
```
\Illuminate\Support\Facades\Log::channel('single')->info('$1$', []);
\Illuminate\Support\Facades\Log::channel('single')->info('$1$', [$1$]);
```
# log migrate
```
app/Providers/AppServiceProvider.php
public function boot(){
    DB::listen(function($query) {
        \Illuminate\Support\Facades\Log::channel('daily')->info(
            $query->sql,
            $query->bindings,
            $query->time
        );
    });
}
```
# view log laravel
```
ls -lh storage/logs
```
