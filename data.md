## all countries, provinces, cities
https://datahub.io/core/world-cities

```php 
//country
composer require umpirsky/country-list
$data['country_list'] = require(__DIR__.'/../../../vendor/umpirsky/country-list/data/en/country.php');

//language
composer require umpirsky/language-list
$data['language_list'] = require(__DIR__.'/../../../vendor/umpirsky/language-list/data/en/country.php');
```