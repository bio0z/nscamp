<?php
$_POST = json_decode(file_get_contents('php://input'), true);

if ($_GET['phoneToCheck']) $_POST['phoneToCheck'] = $_GET['phoneToCheck'];

if (isset($_POST)) {

  (string)$phoneToCheck = preg_replace('/[^0-9]/', '', $_POST['phoneToCheck']);

//  $arFriendsPhones = [
//    '89110106919',
//    '89262096108',
//    '89269748191',
//    '89643809419',
//    '89216509673',
//    '89112101738',
//    '89857844280',
//    '89163216088',
//    '89197727108',
//    '89163086699',
//    '89262173401',
//    '89160182102',
//    '89252268926',
//    '89094488785'
//  ];

  $host = $_SERVER['HTTP_HOST'];
  $servername = "localhost";

  if ($host == 'nsc-new.awsd.cc') {
    $username = "host1817609";
    $password = "RtYyvvrI7O";
    $database = 'host1817609_nsctemp';
  } elseif ($host == 'nswpay.ru') {
    $username = "host1211741_nsctemp";
    $password = "5zN0t0AF";
    $database = 'host1211741_nsctemp';
  } else {
    $username = "root";
    $password = "root";
    $database = 'nscTemp';
  }

  $conn = new mysqli($servername, $username, $password, $database);

// Check connection
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  } else {
    if ($result = $conn->query("SELECT f_phone FROM temp_friends_phone")) {
      while ($row = $result->fetch_assoc()) {
        $arFriendsPhones[] = $row['f_phone'];
      }
    }
  }

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
