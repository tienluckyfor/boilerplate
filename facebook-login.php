# setup facebook login php
// composer require facebook/graph-sdk

<?php
require_once __DIR__ . '/vendor/autoload.php'; 

$scope = [
  "manage_business_extension",
  "catalog_management",
  "business_management",
  // "ads_management",
  // "ads_read",
];

$extras = [
  "setup" => [
      "external_business_id" => "utanimitemporev-5f8815f53d927",
      "timezone" => "Etc/GMT+0",
      "currency" => "VND",
      "business_vertical" => "ECOMMERCE"
  ],
  "business_config" => [
      "business" => [
          "name" => "Ut animi tempore v"
      ]
  ],
  "repeat" => false
];

$params = [
  "client_id" => "674003023129411",
  "redirect_uri" => "https://4cc44ca2931b.ngrok.io/fbe",
  "state" => "http://test_wordpress.test/?wc-api=wc_facebook_connect&external_business_id=utanimitemporev-5f8815f53d927&nonce=91aba17f2a",
  "display" => "page",
  "response_type" => "code",
  "scope" => implode(',', $scope),
  "extras" => json_encode($extras),
];

$url = "https://facebook.com/dialog/oauth?".http_build_query($params);
echo "<a href='$url' target='_blank'>facebook login</a>";