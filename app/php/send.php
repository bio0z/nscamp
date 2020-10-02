<?php
require '../vendor/autoload.php';

use Dompdf\Dompdf;
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//if ($_GET['num']) $_POST['tourNumber'] = $_GET['num'];

//if(isset($_POST['tourNumber'])) {
if (isset($_GET['num'])){

  $host = $_SERVER['HTTP_HOST'];

  $tourNumber = $_GET['num'];
	$file = '../sent/voucher_num_' . $tourNumber . '.json';
	$json = file_get_contents($file);
	if ($json) {
		$ar = json_decode($json,true);

    if ($host == 'nswpay.ru') {
      $emailFrom = 'send@nswpay.ru';
      $emailTo = $ar['email'];
      $passwrd = 'RvEiWiXBvX';
    } else {
      $emailFrom = 'pool@awsd.cc';
      $emailTo = 'bio@awsd.cc';
      $passwrd = 'uS3BwxOGqA';
    }

	  $emailCopy = 'test@awsd.cc';

    if ($ar['passname'] == 'VIP TOUR') {
      $pass = 'VIP';
    } elseif ($ar['passname'] == 'STANDARD TOUR'){
      $pass = 'STANDARD';
    }

    $body = file_get_contents('../html/mail.html');
    $body = preg_replace("/#HTTP_HOST#/",'http://'.$_SERVER["HTTP_HOST"],$body);

	  $voucher = file_get_contents('../html/voucher2.html');

	  $voucher = preg_replace("/#FIO#/",$ar['name'],$voucher);
	  $voucher = preg_replace("/#HTTP_HOST#/",'http://'.$_SERVER["HTTP_HOST"],$voucher);
	  $voucher = preg_replace("/#PHONE#/",$ar['phone'],$voucher);
	  $voucher = preg_replace("/#EMAIL#/",$ar['email'],$voucher);
	  $voucher = preg_replace("/#VOUCHER_NUMBER#/",$ar['tourID'],$voucher);
	  $voucher = preg_replace("/#PASS_NAME#/",$pass,$voucher);
	  $voucher = preg_replace("/#PASS#/",$pass,$voucher);
	  $voucher = preg_replace("/#GUEST1#/",$ar['guest1'],$voucher);
    if ($ar['guest2'] == 'null') $ar['guest2'] = '';
    $voucher = preg_replace("/#GUEST2#/",$ar['guest2'],$voucher);
	  $voucher = preg_replace("/#ROOM#/",$ar['room'],$voucher);
	  $voucher = preg_replace("/#BREAKFAST#/",$ar['hotelBreakfast'],$voucher); #todo breakfast text
	  $voucher = preg_replace("/#HOTEL#/",$ar['hotel'],$voucher);
	  $voucher = preg_replace("/#ADDRESS#/",$ar['address'],$voucher);
    if ($pass == 'VIP') $vipZona = '— Зона VIP на вечеринках';
	  $voucher = preg_replace("/#VIP_ZONA#/",$vipZona,$voucher);
	  $voucher = preg_replace("/#TOUR_NUMBER#/",$ar['tourNumber'],$voucher);
	  $voucher = preg_replace("/#TOUR_DAYS#/",$ar['tourDays'],$voucher);
	  $voucher = preg_replace("/#DATEFROM#/",$ar['dateFrom'],$voucher);
	  $voucher = preg_replace("/#DATETILL#/",$ar['dateTill'],$voucher);
	  $voucher = preg_replace("/#ADULTS#/",$ar['dateTill'],$voucher);

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
      // $mail->addCC($emailCopy);
      $mail->addBCC('pool@awsd.cc');

      $mail->AddAttachment( $filename );

      // $mail->Send();

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
