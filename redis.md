
# access redis  
// docker
docker-compose exec redis bash

# redis cli 
// clear redis
redis-cli flushall

// get keys redis
redis-cli --scan --pattern '*' | grep social_shop
redis-cli --scan --pattern '*' | grep "" -c
redis-cli --scan --pattern '*' | grep "social_shop" -c

// check memory redis
redis-cli info | grep memory
redis-cli --bigkeys

# redis php
// set redis
Redis::hSet(config('social_shop.type_action.spf_webhook_product_delete'), $shopName . ':' . $data['id'] , json_encode($data));
Redis::set('ss.webhook_create.product_ids', 'value);

// get all
$product_ids = Redis::get('*');

// get redis
$product_ids = Redis::get('ss.webhook_create.product_ids');

// delete redis
Redis::del('ss.webhook_create.product_ids');

# redis laravel tinker
php artisan tinker
$redis = new Redis();
$redis->connect('sh-redis-tunnel.redis-system.svc.cluster.local', 6379);
$allKeys = $redis->keys('F');

