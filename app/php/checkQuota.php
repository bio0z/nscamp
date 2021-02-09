<?php
$_POST = json_decode(file_get_contents('php://input'), true);

if ($_GET['hotelCode']) $_POST['hotelCode'] = $_GET['hotelCode'];

if (isset($_POST)) {
  $_POST['hotelCode'] ? $hotel = $_POST['hotelCode'] : $hotel = 'AYSD';

  $host = $_SERVER['HTTP_HOST'];
  $servername = "localhost";
  if ($host == 'nsc-new.awsd.cc') {
    $username = "host1817609";
    $password = "RtYyvvrI7O";
    $database = 'host1817609_nsctemp';
  } elseif ($host == 'nswpay.ru'){
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
    if ($result = $conn->query("SELECT * FROM temp_rooms_quota")) {
      while ($row = $result->fetch_assoc()) {
        if ($row['quota'] > 0 && $row['hotelCode'] == $hotel) {
          $arRooms[] = $row['roomCode'];
        }
      }
      echo json_encode($arRooms);
    }
  }
} else {
  echo 'POST is empty';
}
