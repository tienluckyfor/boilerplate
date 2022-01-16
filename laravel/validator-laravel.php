<?php 
// $valid to string
$valid = Validator::make($request->all(), [
    'use_seo' => 'required|boolean',
    'include_variant' => ['required', Rule::in(array_keys(config('social_shop.include_variant')))],
    'import_unpublished' => 'required|boolean',
]);
if ($valid->fails()) {
    $message = '';
    foreach ($valid->errors()->getMessages() as $val) {
        $message .= implode(' ', $val);
    }
    return ['status' => false, 'message' => $message];
}

// validate
$request->validate([
    'type' => 'required|string',
    'type_id' => 'required|integer|min:0',
]);

// function 
$request->validate([
    'current_pin_security' => [
        'required',
        function ($attribute, $value, $fail) use ($user) {
            $parent_id = empty($user['parent_id']) ? $user['id'] : $user['parent_id'];
            if (!User::whereRaw("pin_security = '{$value}' AND id = {$parent_id}")->first()) {
                $fail(__("pin_security is wrong"));
            }
    }],
]);

// array
$valid = Validator::make($request->all(), [
    'ss_feed_id' => 'required',
    'collection_categories' => 'required',
    'collection_categories.*.internal_id' => 'required',
    'collection_categories.*.google_product_category' => 'required',
    'collection_categories.*.type' => 'required',
]);