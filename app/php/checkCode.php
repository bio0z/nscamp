<?php
$_POST = json_decode(file_get_contents('php://input'), true);

if ($_GET['friendCode']) $_POST['friendCode'] = $_GET['friendCode'];
if ($_GET['friendPhone']) $_POST['friendPhone'] = $_GET['friendPhone'];

$code = $_POST['friendCode'];
$phone =  preg_replace('/[^0-9]/', '', $_POST['friendPhone']);

if ($code && $phone) {
  $host = $_SERVER['HTTP_HOST'];
  $servername = "localhost";
  if ($host === 'nsc-new.awsd.cc') {
    $username = "host1817609";
    $password = "RtYyvvrI7O";
    $database = 'host1817609_nsctemp';
  } elseif ($host === 'nswpay.ru'){
    $username = "host1211741_nsctemp";
    $password = "5zN0t0AF";
    $database = 'host1211741_nsctemp';
  } else {
    $username = "root";
    $password = "root";
    $database = 'nscTemp';
  }
  $conn = new mysqli($servername, $username, $password, $database);
  $correctCode = null;

  $query = "SELECT f_code as code FROM temp_friends_phone WHERE f_phone = '".$phone ."' ";
  $result = $conn->query($query);

  if ($result->num_rows) {
    while ($row = $result->fetch_assoc()) {
      $correctCode = $row['code'];
    }
    if ((int)$code === (int)$correctCode) {
      echo true;
    } else {
      echo 'code incorrect';
    }
  } else {
    echo 'query fails';
  }
} else {
  echo 'POST empty';
}
/*
if ($code && $phone) {
  $len = (int)strlen($code)-1;
  $res = substr($code,0, $len);
  $codeToCheck = (string) octdec($res);
  $phoneToChek = (string) substr($phone,7,4);
  if ($codeToCheck === $phoneToChek){
    echo true;
  } else {
    echo 'false' . $codeToCheck . ' ' . $phoneToChek;
  }
} else {
  echo 'POST empty';
}
*/