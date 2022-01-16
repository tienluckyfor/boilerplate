<?php // run: php php/csv.php
// fputcsv
print_r("-- fputcsv\n");
$list = [
    ["Peter", "Griffin"],
    ["Glenn", "Quagmire"]
];
$fp = fopen(__DIR__."/csv.csv", "w");
foreach ($list as $line) {
    fputcsv($fp, $line);
}
fclose($fp);
print_r($list);

// fgets
print_r("-- fgets\n");
$fp = fopen(__DIR__."/csv.csv", "r");
while(! feof($fp)) {
    $fget = fgets($fp);
    print_r($fget);
}
fclose($fp);

// stream csv
header("Content-Type: text/csv");
header("Content-Disposition: attachment; filename=file.csv");
function outputCSV($data) {
  $output = fopen("php://output", "wb");
  foreach ($data as $row)
    fputcsv($output, $row); 
  fclose($output);
}
outputCSV(array(
  array("name 1", "age 1", "city 1"),
  array("name 2", "age 2", "city 2"),
  array("name 3", "age 3", "city 3")
));