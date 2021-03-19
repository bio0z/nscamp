<?php
$_POST = json_decode(file_get_contents('php://input'), true);

if ($_GET['phone']) $_POST['phone'] = $_GET['phone'];
if ($_REQUEST['phone']) $_POST['phone'] = $_REQUEST['phone'];
if ($_REQUEST['password']) $_POST['password'] = $_REQUEST['password'];

if (isset($_POST) && $_POST['password'] == '0109') {

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

  if ($conn->connect_error) {

    die("Connection failed: " . $conn->connect_error);

  } else {

    $phone = preg_replace('/[^0-9]/', '', $_POST["phone"]);
    if ($phone[0] == '7') {
      $phone = substr_replace( $phone,'8', 0, 1);
      echo $phone;
    }

    $result = $conn->query('SELECT * FROM temp_friends_phone WHERE f_phone = ' . $phone);

    if (!$result->num_rows) {

      $date = gmdate('Y-m-d H:i:s',time());
      echo 'Время ' . $date  . '  <br>';

      $query = "INSERT INTO temp_friends_phone (f_dateadd,f_phone,f_status) VALUES('" . $date . "'," . $phone . ",0)";

      if ($conn->query($query) === TRUE) {

        echo 'Телефон добавлен  <br>';
//        http_redirect('/add/');

      } else {
        echo 'Произошла ошибка  <br>';
        echo "Error: <br>" . $conn->error;
        echo '<br>  ' . $query  .'  <br>';

      }


    } else {

      echo 'Данный номер телефона ' . $_POST['phone'] . ' уже добавлен в список.';

    }
  }
} else {
  echo 'POST is empty';
}