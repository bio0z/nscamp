<?php
$_POST = json_decode(file_get_contents('php://input'), true);

if ($_GET['phoneToCheck']) $_POST['phoneToCheck'] = $_GET['phoneToCheck'];

if (isset($_POST)) {

  (string)$phoneToCheck = preg_replace('/[^0-9]/', '', $_POST['phoneToCheck']);

  $arFriendsPhones = [
    '89110106919',
    '89262096108',
    '89269748191',
    '89643809419',
    '89216509673',
    '89112101738',
    '89857844280',
    '89163216088',
    '89197727108',
    '89163086699',
    '89262173401',
    '89160182102',
    '89252268926',
    '89094488785'
  ];

  if (in_array($phoneToCheck, $arFriendsPhones)) {
    $response = json_encode($phoneToCheck);
  } else {
//    $response = json_encode($arFriendsPhones);
    $response = null;
  }
  echo $response;
} else {
  echo 'POST is empty';
}
