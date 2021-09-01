<?php
$_POST = json_decode(file_get_contents('php://input'), true);

if ($_GET['tourDays']) $_POST['tourDays'] = $_GET['tourDays'];

if (isset($_POST)) {
  $_POST['pass'] ? $pass = $_POST['pass'] : $pass = null;

  $host = $_SERVER['HTTP_HOST'];
  $servername = "localhost";
  if ($host == 'nsc-crm.awsd.cc') {
    $username = "host1817609_crm";
    $password = "RtYyvvrI7O";
    $database = 'host1817609_crm';
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
    $result = $conn->query("SELECT price FROM crm_pass WHERE code = ".$pass);

    if ($result) {
      echo json_encode($result);
    }
  }
} else {
  echo 'POST is empty';
}
