<?php
require '../vendor/autoload.php';

use Dompdf\Dompdf;
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

if ($_GET['num']) $_POST['tourNumber'] = $_GET['num'];

if(isset($_POST['tourNumber'])) {

  $host = $_SERVER['HTTP_HOST'];

  $tourNumber = $_POST['tourNumber'];
	$file = '../sent/voucher_num_' . $tourNumber . '.json';
	$json = file_get_contents($file);
	if ($json) {
		$ar = json_decode($json,true);

    if ($host == 'nswpay.ru') {
      $emailFrom = 'send@nswpay.ru';
      $emailTo = $ar['email'];
      $passwrd = 'RvEiWiXBvX';
      $emailCopy = 'info@newstarcamp.ru';
      $emailCopy2 = 'pool@awsd.cc';
    } else {
      $emailFrom = 'pool@awsd.cc';
      $emailTo = 'bezs@mail.ru'; // $ar['email'];
      $passwrd = 'uS3BwxOGqA';
      $emailCopy = 'pool@awsd.cc';
    }

    if ($ar['passcode'] == 'V') {
      $pass = 'VIP';
      $backColor = '#F2D046';
    } elseif ($ar['passcode'] == 'S'){
      $pass = 'STANDARD';
      $backColor = '#DB9EA7';
    }

    $body = file_get_contents('../html/mail.html');
    $body = preg_replace("/#HTTP_HOST#/",'http://'.$_SERVER["HTTP_HOST"],$body);

	  $voucher = file_get_contents('../html/voucher2.html');

	  $voucher = preg_replace("/#FIO#/",$ar['name'],$voucher);
	  $voucher = preg_replace("/#HTTP_HOST#/",'http://'.$_SERVER["HTTP_HOST"],$voucher);
	  $voucher = preg_replace("/#PHONE#/",$ar['phone'],$voucher);
	  $voucher = preg_replace("/#EMAIL#/",$ar['email'],$voucher);
	  $voucher = preg_replace("/#VOUCHER_NUMBER#/",$ar['tourNumber'],$voucher);
	  $voucher = preg_replace("/#PASS_NAME#/",$pass,$voucher);
	  $voucher = preg_replace("/#PASS#/",$ar['passcode'],$voucher);
	  $voucher = preg_replace("/#GUEST1#/",$ar['guest1'],$voucher);
    if ($ar['guest2'] == 'null null') $ar['guest2'] = '';
    $voucher = preg_replace("/#GUEST2#/",$ar['guest2'],$voucher);
    if ($ar['guest3'] == 'null null') $ar['guest3'] = '';
    $voucher = preg_replace("/#GUEST3#/",$ar['guest3'],$voucher);
    if ($ar['guest4'] == 'null null') $ar['guest4'] = '';
    $voucher = preg_replace("/#GUEST4#/",$ar['guest4'],$voucher);
	  $voucher = preg_replace("/#ROOM#/",$ar['roomName'],$voucher);
	  $voucher = preg_replace("/#BREAKFAST#/",$ar['hotelBreakfast'],$voucher);
	  $voucher = preg_replace("/#HOTEL#/",$ar['hotelName'],$voucher);
	  $voucher = preg_replace("/#ADDRESS#/",$ar['address'],$voucher);
	  $voucher = preg_replace("/#TOUR_NUMBER#/",$ar['tourNumber'],$voucher);
	  $voucher = preg_replace("/#TOUR_DAYS#/",$ar['tourDays'],$voucher);
	  $voucher = preg_replace("/#DATEFROM#/",$ar['dateFrom'],$voucher);
	  $voucher = preg_replace("/#DATETILL#/",$ar['dateTill'],$voucher);
	  $voucher = preg_replace("/#ADULTS#/",$ar['adults'],$voucher);
    $voucher = preg_replace("/#BACKCOLOR#/",$backColor,$voucher);

    $voucher = mb_convert_encoding($voucher, 'HTML-ENTITIES', "UTF-8");

    $dompdf = new Dompdf();

    $dompdf->set_option('isHtml5ParserEnabled', true);
    $dompdf->set_option('isRemoteEnabled', true);
    $dompdf->set_option('defaultFont', 'Verdana');

    $dompdf->load_html($voucher,'UTF-8');
    $dompdf->setPaper('A4', 'portrait');
    $dompdf->render();
    // $dompdf->stream('voucher_'.$tourNumber.'.pdf',['Attachment' => 0]);
      try {
        $output = $dompdf->output();
        $filename = '../sent/pdf/voucher_'.$tourNumber.'.pdf';
        file_put_contents($filename,$output);
      } catch (Exception $e) {
        echo 'Exception $filename: ',  $e->getMessage(), "\n";
      }

    try {
      file_put_contents('../sent/voucher_num_' . $ar['tourNumber'] . '_mail.html',$body);
    } catch (Exception $e) {
      echo 'Выброшено исключение: ',  $e->getMessage(), "\n";
    }

    $mail = new PHPMailer();

    try {
      // $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      // Enable verbose debug output
      $mail->isSMTP();                                            // Send using SMTP
      $mail->Host       = 'mail.hostland.ru';                    // Set the SMTP server to send through
      $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
      $mail->Username   = $emailFrom;                     // SMTP username
      $mail->Password   = $passwrd;                               // SMTP password
      $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
      $mail->Port       = 587;

      $mail->isHTML(true);
      $mail->charSet = "UTF-8";
      $mail->setLanguage('ru');
      // $mail->Encoding = 'base64';
      // $mail->addCustomHeader('Content-Type', 'text/html;charset=UTF-8');
      $mail->Subject = 'New Star Camp 2021 Voucher';
      // $mail->Subject = "=?UTF-8?B?".base64_encode('Ваш ваучер на NewStarCamp')."?=";
      $mail->Body      = $body;
      $mail->AltBody = 'Ваш ваучер на New Star Camp';

      $mail->SetFrom($emailFrom, 'New Star Camp');
      $mail->AddAddress($emailTo);
      $mail->addReplyTo('info@newstarcamp.ru', 'Information');
      $mail->addBCC($emailCopy);
      $mail->addBCC($emailCopy2);

      $mail->AddAttachment($filename);

      $mail->Send();

      echo "Sended to " . $emailTo;

		} catch (Exception $e) {
			echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
		}
	} else {
		echo 'No json file' . $file;
	}
} else {
	echo 'Mail not sent, POST empty';
}
