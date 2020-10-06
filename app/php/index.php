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
$timestamp = 1601479956;
echo date('d M Y H:i:s', $timestamp);
/*
    $files1 = '../sent/vaucher_num_1601568580.json';
    $json1 = file_get_contents($files1);

    $ar1 = json_decode($json1,true);

    foreach ($ar1 as $prop1){
      echo '<p>'. $prop1 . '</p>';
    }

    $files2 = '../sent/vaucher_num_1601569321.json';
    $json2 = file_get_contents($files2);

    $ar2 = json_decode($json2,true);

    foreach ($ar2 as $prop2){
      echo '<p>'. $prop2 . '</p>';
    }

    $files3 = '../sent/vaucher_num_1601570524.json';
    $json3 = file_get_contents($files3);
    $ar3 = json_decode($json3,true);

    foreach ($ar3 as $prop3){
      echo '<p>'. $prop3 . '</p>';
    }

    $files4 = '../sent/vaucher_num_1601571918.json';
    $json4 = file_get_contents($files4);

    $ar4 = json_decode($json4,true);

    foreach ($ar4 as $prop4){
      echo '<p>'. $prop4 . '</p>';
    }

    $files5 = '../sent/vaucher_num_1601573338.json';
    $json5 = file_get_contents($files5);

    $ar5 = json_decode($json5,true);

    foreach ($ar5 as $prop5){
      echo '<p>'. $prop5 . '</p>';
    }

*/



//} else {
//	echo 'Mail not sent, POST empty';
//}
