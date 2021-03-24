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
//    'bezs@mail.ru',
//    'yo.dasha@gmail.com',
//    'Mitay-kaskai@mail.ru',
//    'lanastasiia111@gmail.com',
//    'dmitrybersan@gmail.com',
//    'whoistheg97@gmail.com',
//    'nikita.ab51@mail.ru',
//    'kyznecoffyar@gmail.com',
//    'smelov113@gmail.com',
//    'yar21mx@mail.ru',
//    'daniil.ayfovich@gmail.com',
//    'a0002a22@gmail.com',
//    'yumakovb@gmail.com',
//    'saniabelsner@icloud.com',
//    'iridermatvey@gmail.com',
//    'g.code@yandex.ru',
//    'juslivvv@gmail.com',
//    'airjordan1@mail.ru',
//    's.peresvet02@gmail.com',
//    'peonster@mail.ru',
//    'mr.tarakanovigor@mail.ru',
//    'tarakan_sk8@mail.ru',
//    'stepanowdanill@yandex.ru',
//    'iriderksenia@gmail.com',
//    'feosnb@gmail.com',
//    'streammari@mail.ru',
//    'lenkakostenko@gmail.com',
//    'egorchiba@gmail.com',
//    'konstantin_m51@mail.ru',
//    'dasha_belikova00@mail.ru',
//    'gorsheninanastia@yandex.ru',
//    'snowliza2000@lenta.ru',
//    'go_homee@mail.ru',
//    'asus1998@yandex.ru',
//    'Lebedka994@gmail.com',
//    'eshmurikov@mail.ru',
//    'igorky9@gmail.com',
//    'gamzikoffegor@mail.ru',
//    'avtaneev.nikita@yandex.ru',
//    'pavel_bekirov@mail.ru',
//    'trustoneseven@gmail.com',
//    'arkadiikazakov@gmail.com',
//    'kirillrymosevskij@gmail.com',
//    'romavar.1@yandex.ru',
//    'mamay66@icloud.com',
//    'bobryshev93@mail.ru',
//    'mashatretyakovaaa@gmail.com',
//    'smeshlivaya13@gmail.com',
//    'nabik1996@yandex.ru',
//    'vadim@resortunited.com',
//    'khadarin.vlad@gmail.com',
//    'tatalina01@mail.ru',
//    'mitsybissi98@mail.ru',
//    'kabalyukvasil@mail.ru',
//    'mylendeev@yandex.ru',
//    'jackmcgurn@yandex.ru',
//    'artyo.ushako@yandex.ru',
//    'm-s71@mail.ru',
//    'luca.pichler@hotmail.com',
//    's.eseniya04@gmail.com',
//    'metro-1965@mail.ru',
//    'snowydanni@gmail.com',
//    'osmakova.n@yandex.ru',
//    'mitay-kaskai@mail.ru',
//    'aniperayna@mail.ru',
//    'selfnsk333@gmail.com',
//    'viluha1999@mail.ru',
//    'daniilpudov@bk.ru',
//    'grifon_spns@mail.ru',
//    'prusakova_lan@mail.ru',
//    'Vadimotaran@gmail.com',
//    'mishadh@mail.ru',
//    'bilbiotv@gmail.con',
//    'tichinski@mail.ru',
//    'fomchenko.m.d@yandex.ru',
//    'sukhomesovv@mail.ru',
//    'shemchuk.gleb@bk.ru',
//    'kristall2010@bk.ru',
//    'max-1999.9@mail.ru',
//    'bagdi280102@icloud.com',
//    'zhora.vinokurov.2002@mail.ru',
//    'volkavolk@rambler.ru',
//    'randompeaceee@gmail.com',
//    'goglov13@gmail.com',
//    'jane.gldmn@gmail.com',
//    'gomonvladislaw@gmail.com',
//    'olegguch@mail.ru',
//    'nikoerokhin@gmail.com',
//    'tamara.zabudko@gmail.com',
//    'ostapz@icloud.com',
//    'leshazinov92@gmail.com',
//    'sloup-stail@mail.ru',
//    'sakenkagarov@mail.ru',
//    'nkashevnik@gmail.com',
//    'arturkurgak@mail.ru',
//    'sk8_la@mail.ru',
//    'egor.mezrin00@mail.ru',
//    'keramzitvermekylit@gmail.com',
//    'Sambo70921550@yandex.ru',
//    'rozovvv@bk.ru',
//    'nikitaseh@bk.ru',
//    'Lelik_nsk@mail.ru',
//    'hermanfetisov@gmail.com',
//    'ysnus@yandex.ru',
//    'alexey.khukhra@gmail.com',
//    'yura_chemodurov@mail.ru',
//    'originalbraz@gmail.com',
//    'gshadilov007@mail.ru',
//    'ponchic1999@mail.ru',
//    'adeliasharipova343@gmail.com',
//    'Rich300.bx@mail.ru',
//  'nkorchmit@mail.ru',
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

    } catch (Exception $e) {
      echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
  }

} else {
  echo 'Письмо не отправлено!';
}
