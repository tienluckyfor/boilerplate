<?php
// get memory_limit
echo ini_get('memory_limit');
php -i | grep "memory_limit"
php -r "echo ini_get('memory_limit');"

// memory tracking
$start_memory = memory_get_usage();
// TODO
$usage_memory = memory_get_usage() - $start_memory;
\Illuminate\Support\Facades\Log::channel('single')->info('$usage_memory', [$this->formatBytes($usage_memory)]);

protected function formatBytes($size, $precision = 2)
{
    $base = log($size, 1024);
    $suffixes = array('', 'K', 'M', 'G', 'T');

    return round(pow(1024, $base - floor($base)), $precision) .' '. $suffixes[floor($base)];
}


// time tracking
$start = microtime(TRUE);
// TODO
$end = microtime(TRUE);
\Illuminate\Support\Facades\Log::channel('single')->info('time', ["The code took " . ($end - $start) . " seconds to complete."]);

// get cpu_usage
function get_server_cpu_usage(){
	$load = sys_getloadavg();
	return $load[0];
}

// get memory_usage
function get_server_memory_usage(){
	$free = shell_exec('free');
	$free = (string)trim($free);
	$free_arr = explode("\n", $free);
	$mem = explode(" ", $free_arr[1]);
	$mem = array_filter($mem);
	$mem = array_merge($mem);
	$memory_usage = $mem[2]/$mem[1]*100;
	return $memory_usage;
}

// isMobileDevice
function isMobileDevice() { 
	return preg_match("/(android|avantgo|blackberry|bolt|boost|cricket|docomo 
|fone|hiptop|mini|mobi|palm|phone|pie|tablet|up\.browser|up\.link|webos|wos)/i" 
, $_SERVER["HTTP_USER_AGENT"]); 
} 

if(isMobileDevice()){ 
	echo "Mobile Browser Detected"; 
} 
else { 
	echo "Mobile Browser Not Detected"; 
} 

// download file
$path = storage_path().'/app/public/';
$jsonlFile = $path.'1.jsonl';
$downloadFile = file_put_contents($jsonlFile, file_get_contents($url));
