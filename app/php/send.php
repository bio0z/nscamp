<?php
require '../vendor/autoload.php';

use Dompdf\Dompdf;
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

if ($_GET['num']) $_POST['tourNumber'] = $_GET['num'];

//if(isset($_POST['tourNumber'])) {
if (isset($_GET['num'])){

  $host = $_SERVER['HTTP_HOST'];

  if ($host == 'nswpay.ru') {
    $emailFrom = 'send@nswpay.ru';
    $passwrd = 'RvEiWiXBvX';
  } else {
    $emailFrom = 'pool@awsd.cc';
    $passwrd = 'uS3BwxOGqA';
  }

  $tourNumber = $_POST['tourNumber'];
	$file = '../sent/vaucher_num_' . $tourNumber . '.json';
	$json = file_get_contents($file);
	if ($json) {
		$ar = json_decode($json,true);

	  $emailCopy = 'test@awsd.cc';
		$emailTo = $ar['email'];

    $body = file_get_contents('../html/mail.html');
    $body = preg_replace("/#HTTP_HOST#/",'http://'.$_SERVER["HTTP_HOST"],$body);

	  $vaucher = file_get_contents('../html/vaucher2.html');

	  $vaucher = preg_replace("/#FIO#/",$ar['name'],$vaucher);
	  $vaucher = preg_replace("/#HTTP_HOST#/",'http://'.$_SERVER["HTTP_HOST"],$vaucher);
	  $vaucher = preg_replace("/#PHONE#/",$ar['phone'],$vaucher);
	  $vaucher = preg_replace("/#EMAIL#/",$ar['email'],$vaucher);
	  $vaucher = preg_replace("/#VAUCHER_NUMBER#/",$ar['tourID'],$vaucher);
	  $vaucher = preg_replace("/#PASS_NAME#/",$ar['passname'],$vaucher);
	  $vaucher = preg_replace("/#PASS#/",$pass,$vaucher);
	  $vaucher = preg_replace("/#GUEST1#/",$ar['guest1'],$vaucher);
    if ($ar['guest2'] == 'null') $ar['guest2'] = '';
    $vaucher = preg_replace("/#GUEST2#/",$ar['guest2'],$vaucher);
	  $vaucher = preg_replace("/#ROOM#/",$ar['room'],$vaucher);
	  $vaucher = preg_replace("/#HOTEL#/",$ar['hotel'],$vaucher);
	  $vaucher = preg_replace("/#ADDRESS#/",$ar['address'],$vaucher);
    if ($pass == 'VIP') $vipZona = '— Зона VIP на вечеринках';
	  $vaucher = preg_replace("/#VIP_ZONA#/",$vipZona,$vaucher);

    $vaucher = mb_convert_encoding($vaucher, 'HTML-ENTITIES', "UTF-8");

    $dompdf = new Dompdf();

    $dompdf->set_option('isHtml5ParserEnabled', true);
    $dompdf->set_option('isRemoteEnabled', true);
    $dompdf->set_option('defaultFont', 'Verdana');

    $dompdf->load_html($vaucher,'UTF-8');
    $dompdf->setPaper('A4', 'portrait');
    $dompdf->render();
    // $dompdf->stream('vaucher_'.$tourNumber.'.pdf',['Attachment' => 0]);
      try {
        $output = $dompdf->output();
        $filename = '../sent/pdf/vaucher_'.$tourNumber.'.pdf';
        file_put_contents($filename,$output);
      } catch (Exception $e) {
        echo 'Exception $filename: ',  $e->getMessage(), "\n";
      }

    try {
      file_put_contents('../sent/vaucher_num_' . $ar['tourNumber'] . '_mail.html',$body);
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
      $mail->Subject = 'New Star Camp 2021 Vaucher';
      // $mail->Subject = "=?UTF-8?B?".base64_encode('Ваш ваучер на NewStarCamp')."?=";
      $mail->Body      = $body;
      $mail->AltBody = 'Ваш ваучер на New Star Camp';

      $mail->SetFrom($emailFrom, 'New Star Camp');
      $mail->AddAddress($emailTo);
      $mail->addReplyTo('info@newstarcamp.ru', 'Information');
      // $mail->addCC($emailCopy);
      $mail->addBCC('pool@awsd.cc');

      $mail->AddAttachment( $filename );

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
