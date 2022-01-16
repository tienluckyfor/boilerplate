// raw update laravel
$update = \Illuminate\Support\Facades\DB::update("UPDATE ss_feed_products SET status = 'ACTIVATED', errors = null WHERE ss_feed_id='{$ssFeed['id']}'");
