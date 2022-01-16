# custom_admin_js
```
// functions.php
<?php
function custom_admin_js() {
    ?>
    <!-- cdn jquery  -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script>
        $('[id="titlediv"]').hide();
        $('[id="postdivrich"]').hide();
        var post_content = $('[name="content"]').val();
    </script>
    <?php
}
?>
add_action('admin_footer', 'custom_admin_js');
```
# register_related_posts_api_field
```
// functions.php

function register_related_posts_api_field()
{
    register_rest_field('loinhac_thucong', 'related-posts',
        array(
            'get_callback' => 'get_related_posts_api_field',
            'schema' => null,
        )
    );
}
add_action('rest_api_init', 'register_related_posts_api_field');
function get_related_posts_api_field($post)
{
    $data = [];
    $data['ten_bai_hat'] = get_field('ten_bai_hat', $post['id']);
    $data['dieu'] = get_field('dieu', $post['id']);
    $data['tong'] = get_field('tong', $post['id']);
    $data['trinh_bay'] = get_field('trinh_bay', $post['id']);
    return $data;
}
```