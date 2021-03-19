<?php

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
    $list = '';
    if ($result = $conn->query("SELECT * FROM temp_friends_phone")) {
      while ($row = $result->fetch_assoc()) {
        $list .= '<li>'. $row['f_phone'] . ' ' . $row['f_status'] . '</li>';
      }
      echo '<ul>';
//      echo $list;
      echo'</ul>';

      ?>
      <h1>Добавить телефон</h1>
      <form action="../add/addPhone.php" method="post">
        <p>Пароль: <input type="text" name="password" /></p>
        <p>Телефон: <input type="text" name="phone" /></p>
        <p><input type="submit" /></p>
      </form>
      <?php
    }
  }