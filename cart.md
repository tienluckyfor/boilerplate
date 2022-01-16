## passing php to attribute html
```html
<button type="button" data-add_cart="<?php echo htmlspecialchars(json_encode($items[$i-1]), ENT_QUOTES, 'UTF-8'); ?>">
    addcart
</button>
```
## add to cart
```js
var add_carts = localStorage.getItem("add_carts");
    add_carts = add_carts ? JSON.parse(add_carts) : {};
    $('[data-add_cart]').click(function(){
        let sanpham = $(this).closest('.sanpham');
        let quantity = parseInt(sanpham.find('[name="Amount"]').val());
        quantity = quantity ? quantity : 0;
        let add_cart = $(this).data('add_cart');
        add_cart.quantity = quantity;
        add_carts[add_cart.id_sanpham] = add_cart;
        localStorage.setItem("add_carts", JSON.stringify(add_carts));
        location.assign("/addcart/");
        return false;
    });
    $.each(add_carts, function( index, items ) {
        let sanpham = $(`[name="idsp"][value="${index}"]`).closest('div');
        sanpham.find('[name="Amount"]').val(items.quantity);
    });
```
## total price
```js
var add_carts = localStorage.getItem("add_carts");
    add_carts = add_carts ? JSON.parse(add_carts) : {};
    
    function render_html(){
        var html = ``;
        $.each(add_carts, function( index, items ) {
          html += `<tr>
    				<td>`;
    	  if(items['hinhanh_sanpham']){
    	      html += `<a><img src="/upload/thread/${items['hinhanh_sanpham']}" width="80%" height="auto"></a>`;
    	  }
    	  html += `</td>
    				<td><a>${items['ten_sanpham']}</a></td>
    				<td><a>${numberWithCommas(items['giasi_sanpham'])}</a></td>
    				<td><input id="Amount" name="Amount" type="number" class="form-control" value="${items['quantity']}"></td>
    				<td>
    				    <a href="javascript:void(0)" onclick="change_cart(this, ${index})"><i class="fa fa-pencil fa-lg"></i></a>
				    </td>
    				<td>
    				    <a href="javascript:void(0)" onclick="delete_cart(this, ${index})"><i class="fa fa-trash-o fa-lg"></i></a>
				    </td>
    			</tr>`;
        });
        $('#dataTables-example tbody').html(html);
    }
    render_html();
    
    function delete_cart(thiss, id){
        delete add_carts[id];
        render_html();
        cal_total();
        localStorage.setItem("add_carts", JSON.stringify(add_carts));
        return false;
    }
    
    function change_cart(thiss, id){
        let sanpham = $(thiss).closest('tr');
        let quantity = parseInt(sanpham.find('[name="Amount"]').val());
        quantity = quantity ? quantity : 0;
        add_carts[id].quantity = quantity;
        render_html();
        cal_total();
        localStorage.setItem("add_carts", JSON.stringify(add_carts));
        return false;
    }
    
    function cal_total(){
        let tmp_price = 0;
        let total_price = 0;
        $.each(add_carts, function( index, items ) {
            tmp_price += items['quantity'] * items['giasi_sanpham'];
        });
        total_price = tmp_price;
        $('[data-tmp_price]').html(numberWithCommas(tmp_price));
        $('[data-total_price]').html(numberWithCommas(total_price));
    }
    cal_total();
    
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
```