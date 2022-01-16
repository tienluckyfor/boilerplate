<?php // run: php php/jsonlines.php
// put
print_r("-- fwrite\n");
$list = [
    ["Peter", "Griffin"],
    ["Glenn", "Quagmire"]
];
$fp = fopen(__DIR__.'/jsonlines.jsonl', 'a');
fwrite($fp, "\n".json_encode($list[0]));  
fwrite($fp, "\n".json_encode($list[1]));  
fclose($fp);  
print_r($list);
  
// get
print_r("-- get\n");
$fp = fopen(__DIR__.'/jsonlines.jsonl', 'r');
while(! feof($fp)) {
    $fget = fgets($fp);
    print_r($fget);
}
fclose($fp);
  