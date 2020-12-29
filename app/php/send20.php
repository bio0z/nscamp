<?php
require '../vendor/autoload.php';

use Dompdf\Dompdf;
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

if ($_GET['send']) $_POST['send'] = $_GET['send'];

if(isset($_POST['send'])) {

  $host = $_SERVER['HTTP_HOST'];

  $arVouchers = [
      367913,
      368025,
      370265,
      371980,
      372534,
      372799,
      373540,
      375109,
      375281,
      375572,
      375596,
      375654,
      376836,
      381787,
      381970,
      413392,
      419721,
      428392
    ];

     foreach ($arVouchers as $voucher){

       $file = '../sent/voucher_num_' . $voucher . '.json';
       $json = file_get_contents($file);

       if ($json) {
         $ar = json_decode($json, true);

         if ($host == 'nswpay.ru') {
           $Username = 'sendmail@nswpay.ru';
           $emailFrom = 'sendmail@nswpay.ru';
           $emailTo = $ar['email'];
           $passwrd = 't2tuUEVC4e';
           $emailCopy = 'info@newstarcamp.ru';
         } else {
           $Username = 'pool@awsd.cc';
           $emailFrom = 'pool@awsd.cc';
           $emailTo = 'bezs@mail.ru';
           $passwrd = 'uS3BwxOGqA';
           $emailCopy = 'Alexander@weareinsports.ru';
         }

         $body = file_get_contents('../html/mail20.html');
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
           $mail->Subject = 'Quiksilver New Star Camp 2021';
           // $mail->Subject = "=?UTF-8?B?".base64_encode('Ваш ваучер на NewStarCamp')."?=";
           $mail->Body = $body;
           $mail->AltBody = 'Quiksilver New Star Camp 2021';

           $mail->SetFrom($emailFrom, 'Quiksilver New Star Camp 2021');
           $mail->AddAddress($emailTo);
           $mail->addReplyTo('info@newstarcamp.ru', 'NewStarCamp');
           $mail->addBCC($emailCopy);
           //        $mail->ConfirmReadingTo = $emailFrom;

           $mail->Send();

           echo "Sended to " . $emailTo;

           $mail->ClearAddresses();

         } catch (Exception $e) {
           echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
         }
       } else {
         echo 'No json file' . $file;
       }
     }
} else {
	echo 'Mail not sent, POST empty';
}
