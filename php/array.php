<?php

//reset keys
$val = array_values($val);

//arr -> query
http_build_query($arr);

//convert json-> arr
(array) json_decode($response->getBody(), true);

//explode, implode 
$str = "Hello world. It's a beautiful day.";
explode(" ",$str);
implode(" ",$arr);

//remove by value
$v = array_diff( $v, ['created_at', 'updated_at'] );
//remove by key
$v = array_diff_key( $v, array_flip(['created_at', 'updated_at']));
// array_diff_assoc boolean
array_diff_assoc($array1, $array2);
$array_diff = array_map('unserialize', array_diff(array_map('serialize', $payload), array_map('serialize', $shopSetting)));

//in_array
in_array($column->Field, ['created_at', 'updated_at']);

//json file to arr
$googleClient = file_get_contents('/../oauth-credentials.json');
$googleClient = (array) json_decode($googleClient, true);

// Parse multiple dimension -> only one
// PHP 5.6+
$options = array_merge([], ...$options);
// PHP 7.4+
$options = array_merge(...$options);

// sort if
$this->version = config('sohead.social.facebook.graph_version') ?? 'v5.0';

// pluck array
$ID_Orders = array_column($orders, 'ID_Order');

// get elements 
$order['details'] = array_filter(
    $order_details,
    function ($e) use (&$ID_Order) {
        return $e['ID_Order'] == $ID_Order;
    }
);

// implode where in
$a1 = array("1","2","3");
echo "a1 is: '".implode("','",$a1)."'<br>";

// get array item by value two dimentions array php
$key = array_search('100', array_column($userdb, 'uid'));
$userdb[$key];

// get array values by keys
array_intersect_key(['a' => 1, 'b' => 3, 'c' => 5], array_flip(['a', 'c']));

// sort 
usort($myArray, function($a, $b) {
    return $a['order'] <=> $b['order'];
});

// insert to array by position
$original = array( 'a', 'b', 'c', 'd', 'e' );
$inserted = array( 'x' ); 
array_splice( $original, 3, 0, $inserted ); 

// array map
array_map(function ($item) use ($req, $medias) {
    $item = Storage::url("widget_dns/$item");
    return $item;
}, $list ?? []);

// array filter
array_filter($cons, function ($item, $key) {
    return $key != 'parent_id' && $item;
}, ARRAY_FILTER_USE_BOTH);