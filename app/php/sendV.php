<?php
require '../vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$name_of_uploaded_file = basename($_FILES['uploaded_file']['name']);

$type_of_uploaded_file = substr($name_of_uploaded_file, strrpos($name_of_uploaded_file, '.') + 1);
$size_of_uploaded_file = $_FILES["uploaded_file"]["size"] / 1024;

$path_of_uploaded_file = "../sent/v/" . $name_of_uploaded_file;
$tmp_path = $_FILES["uploaded_file"]["tmp_name"];

$host = $_SERVER['HTTP_HOST'];

if(is_uploaded_file($tmp_path))
{
  if(!copy($tmp_path,$path_of_uploaded_file))
  {
    echo '\n error while copying the uploaded file';
  }
}

if (isset($_POST['subject']) && isset($_POST['email'])) {

  if ($host == 'nswpay.ru') {
    $Username = 'sendmail@nswpay.ru';
    $emailFrom = 'sendmail@nswpay.ru';
    $emailTo = $_POST['email'];
    $passwrd = 't2tuUEVC4e';
    $emailCopy = 'info@newstarcamp.ru';
    $emailCopy2 = 'pool@awsd.cc';
  } else {
    $Username = 'pool@awsd.cc';
    $emailFrom = 'pool@awsd.cc';
    $emailTo = 'bezs@mail.ru'; // $ar['email'];
    $passwrd = 'uS3BwxOGqA';
    $emailCopy = 'pool@awsd.cc';
  }

  $body = file_get_contents('../html/mailV.html');
  $body = preg_replace("/#HTTP_HOST#/", 'http://' . $_SERVER["HTTP_HOST"], $body);

  $mail = new PHPMailer();

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
    $mail->Subject = 'New Star Camp 2021 Ski-pass voucher';
    // $mail->Subject = "=?UTF-8?B?".base64_encode('Ваш ваучер на NewStarCamp')."?=";
    $mail->Body = $body;
    $mail->AltBody = 'Ваш Ski-pass ваучер на New Star Camp 2021';

    $mail->SetFrom($emailFrom, 'New Star Camp');
    $mail->AddAddress($emailTo);
    $mail->addReplyTo('info@newstarcamp.ru', 'New Star Camp');
    $mail->addBCC($emailCopy);
    $mail->addBCC($emailCopy2);

    $mail->AddAttachment($path_of_uploaded_file);

    $mail->Send();

    echo "path_of_uploaded_file " . $path_of_uploaded_file . '<br>';
    echo $host . " sended to " . $emailTo;

    $mail->ClearAddresses();
    $mail->ClearAttachments();

  } catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
  }
} else {
  echo 'Mail not sent, POST empty';
}
