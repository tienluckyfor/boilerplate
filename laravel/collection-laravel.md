# map use
$data['product_counts'] = $product_counts->map(function($item) use ($shops){
    $item->shop = $shops[$item->shop_id];
    return $item;
});

# get ids by list
$products = Product::select('*')
    ->orderBy('id', 'desc')
    ->get()
    ->toArray();
$user_ids = collect($data['products'])->pluck('user_id');

# get ids 
SsProduct::select('id')
    ->whereRaw("user_id = {$userId} and collection_ids::text ilike '%{$collectionId}%'")
    ->limit($limit)
    ->get()
    ->pluck('id')
    ->toArray()