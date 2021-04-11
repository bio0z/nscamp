<?php
require '../vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$host = $_SERVER['HTTP_HOST'];

if (!empty($_GET['go'])) {

  if ($host == 'nswpay.ru') {
    $Username = 'sendmail@nswpay.ru';
    $emailFrom = 'sendmail@nswpay.ru';
//    $emailTo = 'Luchebu@gmail.com'; //$_POST['email'];
//    $emailTo = 'bezsnow@gmail.com';
    $passwrd = 't2tuUEVC4e';
//    $emailCopy = 'info@newstarcamp.ru';
//    $emailCopy = 'bezs@mail.ru';
    $emailCopy2 = 'pool@awsd.cc';
  } else {
    $Username = 'pool@awsd.cc';
    $emailFrom = 'pool@awsd.cc';
    $emailTo = 'bezs@mail.ru'; // $ar['email'];
    $passwrd = 'uS3BwxOGqA';
    $emailCopy = 'pool@awsd.cc';
  }

  $body = file_get_contents('../html/mail_Riders.html');
  $body = preg_replace("/#HTTP_HOST#/", 'http://' . $_SERVER["HTTP_HOST"], $body);

  $mail = new PHPMailer();

  $arRiders = [
//    'kyznecoffyar@gmail.com',
//    'daniil.ayfovich@gmail.com',
//    'a0002a22@gmail.com',
//    'juslivvv@gmail.com',
//    'konstantin_m51@mail.ru',
//    'dasha_belikova00@mail.ru',
//    'Lebedka994@gmail.com',
//    'eshmurikov@mail.ru',
//    'avtaneev.nikita@yandex.ru',
//    'trustoneseven@gmail.com',
//    'romavar.1@yandex.ru',
//    'smeshlivaya13@gmail.com',
//    'vadim@resortunited.com',
//    'khadarin.vlad@gmail.com',
//    'tatalina01@mail.ru',
//    'mitsybissi98@mail.ru',
//    'kabalyukvasil@mail.ru',
//    'mylendeev@yandex.ru',
//    'jackmcgurn@yandex.ru',
//    'm-s71@mail.ru',
//    'Janeshishanova@gmail.com',
//    's.eseniya04@gmail.com',
//    'metro-1965@mail.ru',
//    'alexeymaglov@gmail.com',
//    'osmakova.n@yandex.ru',
//    'selfnsk333@gmail.com',
//    'viluha1999@mail.ru',
//    'daniilpudov@bk.ru',
//    'grifon_spns@mail.ru',
//    'prusakova_lan@mail.ru',
//    'mishadh@mail.ru',
//    'tichinski@mail.ru',
//    'fomchenko.m.d@yandex.ru',
//    'sukhomesovv@mail.ru',
//    'shemchuk.gleb@bk.ru',
//    'bagdi280102@icloud.com',
//    'zhora.vinokurov.2002@mail.ru',
//    'goglov13@gmail.com',
    'jane.gldmn@gmail.com',
//    'gomonvladislaw@gmail.com',
//    'olegguch@mail.ru',
//    'nikoerokhin@gmail.com',
//    'oszakarian@mail.ru',
//    'leshazinov92@gmail.com',
//    'sloup-stail@mail.ru',
//    'sakenkagarov@mail.ru',
//    'arturkurgak@mail.ru',
//    'keramzitvermekylit@gmail.com',
//    'Sambo70921550@yandex.ru',
//    'rozovvv@bk.ru',
//    'Lelik_nsk@mail.ru',
//    'timofey.strukov@icloud.com',
    'hermanfetisov@gmail.com',
//    'ysnus@yandex.ru',
//    'a.khomchenko@yandex.ru',
//    'alexey.khukhra@gmail.com',
//    'arsek.che@gmail.com',
//    'yura_chemodurov@mail.ru',
//    'notstap@mail.ru',
//    'p8e8t8e8s8h8e8l@gmail.com',
//    'originalbraz@gmail.com',
//    'gshadilov007@mail.ru',
//    'slavaegle@mail.ru',
//    'ponchic1999@mail.ru',
//    'adeliasharipova343@gmail.com',
//    'hekto7702@gmail.com',
//  'adelasaripova19@gmail.com',
  ];

  foreach ($arRiders as $email) {

    $emailTo = $email;

    try {
      // $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      // Enable verbose debug output
      $mail->isSMTP();                                            // Send using SMTP
      $mail->isHTML(true);
      $mail->CharSet = "utf-8";
      $mail->Host = 'mail.hostland.ru';                    // Set the SMTP server to send through
      $mail->SMTPAuth = true;                                   // Enable SMTP authentication
      $mail->Username = $Username;                     // SMTP username
      $mail->Password = $passwrd;                               // SMTP password
      $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
      $mail->Port = 587;
//      $mail->setLanguage('ru');
//      $mail->Encoding = 'base64';
//      $mail->addCustomHeader('Content-Type', 'text/html;charset=UTF-8');
      $mail->Subject = 'New Star Camp 2021 - Приглашение';
      // $mail->Subject = "=?UTF-8?B?".base64_encode('Ваш ваучер на NewStarCamp')."?=";
      $mail->Body = $body;
      $mail->AltBody = 'New Star Camp 2021 - Riders Invite';

      $mail->SetFrom($emailFrom, 'New Star Camp');
      $mail->AddAddress($emailTo);
      $mail->addReplyTo('rider@newstarcamp.ru', 'New Star Camp Riders');
//      $mail->addBCC($emailCopy);
      $mail->addBCC($emailCopy2);

      $mail->Send();

      $mail->ClearAddresses();
      $mail->ClearAttachments();

      echo 'Письмо отправлено ' . $emailTo;

    } catch (Exception $e) {
      echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
  }

} else {
  echo 'Письмо не отправлено!';
}
