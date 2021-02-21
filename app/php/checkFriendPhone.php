<?php
$_POST = json_decode(file_get_contents('php://input'), true);

if ($_GET['friendPhone']) $_POST['friendPhone'] = $_GET['friendPhone'];

if (isset($_POST)) {

  $phoneToCheck = preg_replace('/[^0-9]/', '', $_POST['friendPhone']);

  $arFriendsPhones = [
    '89110106919',
    '89262096108',
  ];

  echo '$phoneToCheck = ' . $phoneToCheck;
  echo '$arFriendsPhones';
  var_dump($arFriendsPhones);

  if (in_array($phoneToCheck, $arFriendsPhones)) {
    $response = json_encode(true);
  } else {
//    $response = json_encode($arFriendsPhones);
    $response = json_encode(false);
  }

  echo $response;
} else {
  echo 'POST is empty';
}
