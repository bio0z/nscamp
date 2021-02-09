<?php
$_POST = json_decode(file_get_contents('php://input'), true);

if ($_GET['hotelCode']) $_POST['hotelCode'] = $_GET['hotelCode'];
if ($_GET['roomCode']) $_POST['roomCode'] = $_GET['roomCode'];

if (isset($_POST)) {

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

  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  } else {
    $hotelCode = $conn->real_escape_string(trim($_POST['hotelCode']));
    $roomCode = $conn->real_escape_string(trim($_POST['roomCode']));

    $result = $conn->query('SELECT * FROM temp_rooms_quota WHERE hotelCode = "' . $hotelCode . '" AND roomCode = "' . $roomCode .'"');
    if ($result) {
      $conn->query("UPDATE temp_rooms_quota 
                        SET quota = quota-1
                        WHERE hotelCode = '" . $hotelCode . "' 
                          AND roomCode = '" . $roomCode."'");
      echo 'Updated.';
    } else {
      echo 'Incorrest Hotel or Room !' . '<br>';
      echo "Error: " . $result . "<br>" . $conn->error;
    }
  }
} else {
  echo 'POST is empty!';
}
