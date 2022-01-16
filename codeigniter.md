## cache
```
// create cache folder
mkdir -m 777 system/application/cache

// system/application/config/config.php
$config['cache_path'] = APPPATH.'cache/';

// system/application/controllers/home/market.php
public function __construct() 
{
    parent::__construct();
    $this->load->driver('cache');
}
public function ecommerce($type)
{
    $data = $this->cache->file->get('ecommerce-data');
    if (!$data) {
        // Todo
        $data = [];
        $this->cache->file->save('ecommerce-data', $data, 360);
    }
}
```