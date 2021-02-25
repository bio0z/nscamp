<?php
$_POST = json_decode(file_get_contents('php://input'), true);

$url = 'https://lcab.sms-uslugi.ru/json/v1.0/sms/send/text';
$token = 'y54n53qkrcr8z99grcj7ctiinyllkzb4lr2dve0qjk6tbjt1gn4yeb1n2rbotsge';

if ($_GET['friendPhone']) $_POST['friendPhone'] = $_GET['friendPhone'];

$phone =  preg_replace('/[^0-9]/', '', $_POST['friendPhone']);
$code = decoct((string) substr($phone,7,4)) . mt_rand(1,9);

if (isset($_POST['friendPhone'])) {

  $message = '{
  "messages": [
    {
      "recipient": "'. $_POST["friendPhone"] . '",
      "recipientType": "recipient",
      "id": "111",
      "source": "nswpay.ru",
      "timeout": 3600,
      "shortenUrl": true,
      "text": "New Star Camp Friends. код авторизации: ' . $code . '"
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
//  $res = json_decode($result, true);

  echo $result;

} else {
  echo 'POST empty';
}