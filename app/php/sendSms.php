<?php
$_POST = json_decode(file_get_contents('php://input'), true);

$url = 'https://lcab.sms-uslugi.ru/json/v1.0/sms/send/text';
$token = 'y54n53qkrcr8z99grcj7ctiinyllkzb4lr2dve0qjk6tbjt1gn4yeb1n2rbotsge';

if ($_GET['friendPhone']) $_POST['friendPhone'] = $_GET['friendPhone'];


if (isset($_POST['friendPhone'])) {
//$ch = curl_init();
//curl_setopt_array($ch, [
//  CURLOPT_URL => $url,
////  CURLOPT_URL => "https://lcab.sms-uslugi.ru/json/v1.0/voice/status",
//  CURLOPT_POST => true,
//  CURLOPT_HTTPHEADER => [
//    "X-Token: $token",
//    "Content-Type: application/json"
//  ],
//  CURLOPT_POSTFIELDS => json_encode([
//    "id_1"
//  ]),
//  CURLOPT_RETURNTRANSFER => true
//]);

//$ar = [
//  'messages' => [
//    'recipient' => '79262096108',
//    'recipientType' => 'recipient',
//    'id' => 'string',
//    'timeout' => 3600,
//    'shortenUrl' => true,
//    'text' => 'New Star Camp Friends, код активации : TEST'
//  ],
//  'validate' => 'true'
//];

  $message = '{
  "messages": [
    {
      "recipient": "79262096108",
      "recipientType": "recipient",
      "id": "string",
      "source": "nswpay.ru",
      "timeout": 3600,
      "shortenUrl": true,
      "text": "Благодарим за регистрацию! Ваш пароль: ТЕСТ"
    }
  ],
  "validate": false,
  "tags": [
    "2021",
    "Регистрация"
  ],
  "startDateTime": "2021-02-25 00:32:42",
  "timeRange": {
    "start": "00:00:00",
    "stop": "23:59:59"
  },
  "timeZone": "Europe/Moscow",
  "opsosDisallowed": [
    "string"
  ],
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
  var_dump(json_decode($result, true));

} else {
  echo 'POST empty';
}