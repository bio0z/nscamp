<?php
$_POST = json_decode(file_get_contents('php://input'), true);

if ($_GET['admin']) $_POST['admin'] = $_GET['admin'];

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

// Check connection
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  } else {
    $list = '';
    if ($result = $conn->query("SELECT * FROM temp_friends_phone")) {
      while ($row = $result->fetch_assoc()) {
        $list .= '<li>'. $row['f_phone'] . ' ' . $row['f_status'] . '</li>';
      }
      echo '<ul>';
      echo $list;
      echo'</ul>';

      ?>
      <form>

      </form>
      <?php
    }
  }
} else {
  echo 'POST is empty';
}