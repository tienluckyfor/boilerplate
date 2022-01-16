curl 'https://widget-api-dev.socialhead.dev/api/media-galleries/show-hidden' \
  -X 'PUT' \
  -H 'authority: widget-api-dev.socialhead.dev' \
  -H 'accept: application/json, text/plain, /' \
  -H 'language: en' \
  -H 'authorization: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MywibmFtZSI6Ik5ndXlcdTFlYzVuIFRoaVx1MDBlYW4gVFx1MDFiMFx1MWVkZG5nIiwiZW1haWwiOiJtaXNvbjIwMUBnbWFpbC5jb20iLCJ0b2tlbl9jcmVhdGVkX2F0IjoiMjAyMS0wMS0yOFQwMjozMToxMy4yMTk5MDRaIn0.6JPEnFj02oWa4O0RqE-x-NcPojSag2GUM0DbWzKt6ok' \
  -H 'shopid: 6' \
  -H 'user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.104 Safari/537.36' \
  -H 'content-type: application/json;charset=UTF-8' \
  -H 'origin: http://localhost:3200' \
  -H 'sec-fetch-site: cross-site' \
  -H 'sec-fetch-mode: cors' \
  -H 'sec-fetch-dest: empty' \
  -H 'referer: http://localhost:3200/' \
  -H 'accept-language: en-US,en;q=0.9,vi;q=0.8' \
  --data-raw '{"gallery_id":"4","source_media_ids":[216],"is_show":false}' \
  --compressed

# curl get response
curl 'https://aa341490e041.ngrok.io/api/social_shop/social/feeds_center' \
-X 'POST' \
-H 'Content-Type: application/json;charset=utf-8' \
-H 'Accept: application/json, text/plain, */*' \
-H 'Authorization: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6bnVsbCwiZW1haWwiOiJ0aWVubnZAZmlyZWFwcHMudm4iLCJzaG9wIjp7ImlkIjoxLCJpbnRlcm5hbF9pZCI6MjYxMTE3Mzc5NTIsInVzZXJfaWQiOjF9fQ.R0bhibMuP0l6sLUczRD4rzFt8hNCLVyEcAAddM551Ug' \
-H 'Accept-Language: en-us' \
-H 'Accept-Encoding: gzip, deflate, br' \
-H 'Host: aa341490e041.ngrok.io' \
-H 'Origin: http://localhost:3200' \
-H 'Connection: keep-alive' \
-H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Safari/605.1.15' \
-H 'Referer: http://localhost:3200/' \
-H 'Content-Length: 285' \
-H 'Language: en' \
--data-binary '{"internal_id":"242114110538555","account_center_id":"433862160405134","account_center_name":"HelloApps","center_id":"1080352059067422","center_name":"FBE Catalog","target_market":"fb","content_language":"fb","name":"ff1","social_type":"facebook","ss_feeds_social_type":"facebook_fbe"}'

# curl download file
curl -O -J http://static.shop.socialhead.io.s3-website-ap-southeast-1.amazonaws.com/facebook_feed/4363f14c8e54babb17770c2b4980ceed.xml

# curl get file size
curl -sI https://s3-ap-southeast-1.amazonaws.com/static-stag.socialhead.io/facebook_xml/e2c420d928d4bf8ce0ff2ec19b371514.xml | awk '/Content-Length/'
curl -sI https://s3-ap-southeast-1.amazonaws.com/static-stag.socialhead.io/facebook_xml/ec8ce6abb3e952a85b8551ba726a1227.xml | awk '/Content-Length/ { print $2 }'



```
curl -i https://api.github.com/user
curl -i https://api.github.com/user -H 'If-None-Match: "644b5b0155e6404a9cc4bd9d8b1ae730"'
curl -i https://api.github.com/user -H "If-Modified-Since: Thu, 05 Jul 2012 15:31:30 GMT"

curl -i https://api.github.com -H "Origin: http://example.com"
curl -i https://api.github.com -H "Origin: http://example.com" -X OPTIONS
curl https://api.github.com?callback=foo

curl -H "Time-Zone: Europe/Amsterdam" -X POST https://api.github.com/repos/github/linguist/contents/new_file.md

```
