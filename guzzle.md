## Install
```bash
composer require guzzlehttp/guzzle
```

## Use
```php
$client = new \GuzzleHttp\Client([
    'verify' => false
]);
$shop = $shop ? $shop : Shop::get();
$response = $client->request('GET', "https://{$shop['domain']}/admin/api/2020-04/products.json", [
    'headers' => [
        'Content-Type' => 'application/json',
        'X-Shopify-Access-Token' => $shop['access_token'],
    ],
]);
$response = (array)json_decode($response->getBody()->getContents(), true);
dd($response['products’]);
```