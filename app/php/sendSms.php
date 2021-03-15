<?php
$_POST = json_decode(file_get_contents('php://input'), true);
$host = $_SERVER['HTTP_HOST'];

$url = 'https://lcab.sms-uslugi.ru/json/v1.0/sms/send/text';
$token = 'y54n53qkrcr8z99grcj7ctiinyllkzb4lr2dve0qjk6tbjt1gn4yeb1n2rbotsge';

if ($_GET['friendPhone']) $_POST['friendPhone'] = $_GET['friendPhone'];

$phone =  preg_replace('/[^0-9]/', '', $_POST['friendPhone']);
//$code = decoct((string) substr($phone,7,4)) . mt_rand(1,9);

$newCode = substr(time(),-4);

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

$servername = "localhost";
$conn = new mysqli($servername, $username, $password, $database);
$updated = false;
$date = gmdate('Y-m-d H:i:s',time());
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
} else {
  $query = "UPDATE temp_friends_phone SET f_code = '" . $newCode . "', f_datechange =  '" . $date . "' WHERE f_phone = " . $phone ;
  if ($conn->query($query) === TRUE) {
    $updated = true;
  } else {
    echo 'update fails';
  }
}

if (isset($_POST['friendPhone']) && $updated) {

  if ($host == 'nswpay.ru') {
    $message = '{
  "messages": [
    {
      "recipient": "'. $_POST["friendPhone"] . '",
      "recipientType": "recipient",
      "id": "111",
      "source": "nswpay.ru",
      "timeout": 3600,
      "shortenUrl": true,
      "text": "New Star Camp Friends. код авторизации: ' . $newCode . '"
    }
  ],
  "validate": false,
  "tags": [
    "2021",
    "Регистрация"
  ],
  "startDateTime": "'. date('Y-m-d H:i:s') .'",
  "timeZone": "Europe/Moscow",
  "channel": 0,
  "transliterate": false
}';

    $ch = curl_init();
    curl_setopt_array($ch, [
      CURLOPT_URL => $url,
      CURLOPT_POST => true,
      CURLOPT_HTTPHEADER => [
        "X-Token: $token",
        "Content-Type: application/json"
      ],
      CURLOPT_POSTFIELDS => $message,
      CURLOPT_RETURNTRANSFER => true
    ]);

    $result = curl_exec($ch);

    echo $result;
  } else {
    $result = [
      'success' => true
    ];
    echo json_encode($result);
  }

} else {
  echo 'POST empty';
}