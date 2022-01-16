<?php
$d1 = new DateTime("2018-01-10 00:00:00");
echo date('Y-m-d H:i:s', strtotime($d1));

$d1 = new DateTime("2018-01-10 00:00:00");
echo date('Y-m-d H:i:s', strtotime('-1 day', strtotime($d1)));

$d1 = new DateTime("2018-01-10 00:00:00");
$d2 = new DateTime("2019-05-18 01:23:45");
$interval = $d1->diff($d2);
echo "{$interval->y} years {$interval->m} months {$interval->d} days";
echo "{$interval->h} hours {$interval->i} minutes {$interval->s} seconds";

date('Y-m-d', strtotime(date('Y-m-1')));

// today
$Today=date('Y-m-d H:i:s');
// add 3 days to date
$NewDate=Date('Y-m-d H:i:s', strtotime('+3 days'));
// subtract 3 days from date
$NewDate=Date('Y-m-d H:i:s', strtotime('-3 days'));
// PHP returns last sunday's date
$NewDate=Date('Y-m-d H:i:s', strtotime('Last Sunday'));
// One week from last sunday
$NewDate=Date('Y-m-d H:i:s', strtotime('+7 days Last Sunday'));