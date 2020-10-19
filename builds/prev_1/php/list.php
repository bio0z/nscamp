<?php
//require '../vendor/autoload.php';

//if ($_GET['admin'] == 000000 ) {

//    $files = '../sent/vaucher_num_1601479956.json';
//    $json = file_get_contents($files);
//
//    $ar = json_decode($json,true);
//
//    foreach ($ar as $prop){
//      echo '<p>'. $prop . '</p>';
//    }


$files6 = '../sent/voucher_num_1602089181.json';
$json6 = file_get_contents($files6);

$ar6 = json_decode($json6,true);

foreach ($ar6 as $key6 => $prop6){
  echo '<p>'. $key6 .' '. $prop6 . '</p>';
}




//} else {
//	echo 'Mail not sent, POST empty';
//}
