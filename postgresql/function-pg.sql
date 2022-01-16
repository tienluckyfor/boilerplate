
-- count_estimate
DROP FUNCTION IF EXISTS count_estimate(text);
CREATE FUNCTION count_estimate(query text) RETURNS integer AS $$
DECLARE
  rec   record;
  rows  integer;
BEGIN
  FOR rec IN EXECUTE 'EXPLAIN ' || query LOOP
    rows := substring(rec."QUERY PLAN" FROM ' rows=([[:digit:]]+)');
    EXIT WHEN rows IS NOT NULL;
  END LOOP;
  RETURN rows;
END;
$$ LANGUAGE plpgsql VOLATILE STRICT;
SELECT count_estimate('SELECT 1 FROM ss_feed_products WHERE other_fields IS NOT NULL');
select count(*) from ss_feed_products where other_fields is not null;