# insert array laravel
```
$dataSets = [];
foreach (config('social_shop.product_mapping_default_shopify') as $productMapping) {
    $productMapping['shop_id'] = $shopId;
    $productMapping['user_id'] = $userId;
    $productMapping['is_show'] = isset($productMapping['is_show']) ? $productMapping['is_show']: true;
    $dataSets[] = $productMapping;
}
$ssProductMapping = SsProductMapping::where('shop_id', @$dataSets[0]['shop_id'])
    ->where('field_key', @$dataSets[0]['field_key'])
    ->where('field_name', @$dataSets[0]['field_name'])
    ->first();
if(!$ssProductMapping){
    return SsProductMapping::insert($dataSets);
}
```
# insert/update confilit laravel
```
public function updateMappings($dataSets){
    $keys = ['id', 'field_name', 'field_key', 'assigned_fields', 'ss_feed_id'];
    $values = '';
    foreach ($dataSets as $dataSet) {
        $dataSet = array_intersect_key($dataSet, array_flip($keys));
        $tmp = (empty($values) ? "" : ","). "('".implode("','", $dataSet)."')";
        $values .= $tmp;
    }
    $sql = "INSERT INTO ss_feed_product_mappings(".implode(',', $keys).")
        VALUES {$values}
        ON CONFLICT (id) DO UPDATE SET
        ss_feed_id = EXCLUDED.ss_feed_id,
        field_name = EXCLUDED.field_name,
        field_key = EXCLUDED.field_key,
        assigned_fields = EXCLUDED.assigned_fields";
    return DB::connection()->getPdo()->exec($sql);
}
```

# updateOrCreate laravel
```
$flight = App\Flight::updateOrCreate(
    ['departure' => 'Oakland', 'destination' => 'San Diego'],
    ['price' => 99, 'discounted' => 1]
);
```