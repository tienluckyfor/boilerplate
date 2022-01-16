
-- add other_fields column
ALTER TABLE ss_feed_products DROP COLUMN other_fields;
alter table ss_feed_products add other_fields jsonb default null;

-- fn_product_to_json
DROP FUNCTION IF EXISTS fn_product_to_json(varchar);
CREATE OR REPLACE FUNCTION fn_product_to_json(id varchar)
    RETURNS TABLE (data json) AS $$
        select (select json_strip_nulls(row_to_json(_))
                from (
                         select s.link,
                                s.image_link,
                                s.additional_image_links,
                                s.expiration_date,
                                s.adult,
                                s.age_group,
                                s.availability,
                                s.brand,
                                s.color,
                                s.google_product_category,
                                s.gtin,
                                s.item_group_id,
                                s.material,
                                s.mpn,
                                s.pattern,
                                s.price,
                                s.sale_price,
                                s.sale_price_effective_date,
                                s.shipping,
                                s.shipping_weight,
                                s.sizes,
                                s.taxes,
                                s.custom_attributes,
                                s.installment,
                                s.loyalty_points,
                                s.multipack,
                                s.custom_label_0,
                                s.custom_label_1,
                                s.custom_label_2,
                                s.custom_label_3,
                                s.custom_label_4,
                                s.is_bundle,
                                s.mobile_link,
                                s.availability_date,
                                s.shipping_label,
                                s.unit_pricing_measure,
                                s.unit_pricing_base_measure,
                                s.shipping_length,
                                s.shipping_width,
                                s.shipping_height,
                                s.display_ads_id,
                                s.display_ads_similar_ids,
                                s.display_ads_title,
                                s.display_ads_link,
                                s.display_ads_value,
                                s.sell_on_google_quantity,
                                s.promotion_ids,
                                s.max_handling_time,
                                s.min_handling_time,
                                s.cost_of_goods_sold,
                                s.included_destinations,
                                s.excluded_destinations,
                                s.ads_grouping,
                                s.ads_labels,
                                s.ads_redirect,
                                string_to_array(s.product_types, ','),
                                s.energy_efficiency_class,
                                s.identifier_exists,
                                s.size_system,
                                s.size_type,
                                s.min_energy_efficiency_class,
                                s.max_energy_efficiency_class,
                                s.source,
                                s.condition,
                                s.gender,
                                s.tax_category,
                                s.transit_time_label
                     ) as _) as data
        from ss_feed_products s
        where s.id = $1;
$$ LANGUAGE SQL;
select fn_product_to_json('2:227:4715696914518:Tien471569691451836567');

-- fn_products
DROP FUNCTION IF EXISTS fn_products();
CREATE OR REPLACE FUNCTION fn_products()
    RETURNS TABLE (id varchar) AS $$
    select id from ss_feed_products where other_fields is null limit 10000;
$$ LANGUAGE SQL;
select fn_products();

-- fn_migrate
DROP FUNCTION IF EXISTS fn_migrate();
CREATE OR REPLACE FUNCTION fn_migrate()
    RETURNS void AS $$
    declare
        _id varchar;
    BEGIN
    FOR _id IN select fn_products()
       LOOP
        update ss_feed_products s set other_fields = (select fn_product_to_json(s.id)) where s.id = _id;
    END LOOP;
    END
$$  LANGUAGE plpgsql;
select fn_migrate();
