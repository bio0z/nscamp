<?php
$_POST = json_decode(file_get_contents('php://input'), true);

if ($_GET['friendCode']) $_POST['friendCode'] = $_GET['friendCode'];
if ($_GET['friendPhone']) $_POST['friendPhone'] = $_GET['friendPhone'];

$code = $_POST['friendCode'];
$phone =  preg_replace('/[^0-9]/', '', $_POST['friendPhone']);


if ($code && $phone) {
  $len = (int)strlen($code)-1;
  $res = substr($code,0, $len);
  $codeToCheck = (string) octdec($res);
  $phoneToChek = (string) substr($phone,7,4);
  if ($codeToCheck === $phoneToChek){
    echo true;
  } else {
    echo 'false';
  }
} else {
  echo 'POST empty';
}