<?php
require '../vendor/autoload.php';

use Dompdf\Dompdf;
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;


?>
 <form>
	 <input name="email" type="email"/>
	 <input name="checknum" type="number"/>
 </form>
<?
if (isset($_POST['email']) && $_POST['checknum'] == 2021 ) {

		$emailCopy = 'test@awsd.cc';
		$emailTo = $_POST['email'];

		$body = file_get_contents('../html/mail.html');
		$body = preg_replace("/#HTTP_HOST#/", 'http://' . $_SERVER["HTTP_HOST"], $body);

		$vaucher = file_get_contents('../html/vaucher.html');

		$vaucher = preg_replace("/#FIO#/", 'Иван Иванов', $vaucher);
		$vaucher = preg_replace("/#HTTP_HOST#/", 'http://' . $_SERVER["HTTP_HOST"], $vaucher);
		$vaucher = preg_replace("/#PHONE#/", '+7 (999) 999-99-99', $vaucher);
		$vaucher = preg_replace("/#EMAIL#/", $emailTo, $vaucher);
		$vaucher = preg_replace("/#VAUCHER_NUMBER#/", '335404', $vaucher);
		$vaucher = preg_replace("/#PASS_NAME#/", 'Standard tour', $vaucher);
		$vaucher = preg_replace("/#PASS#/", 'STANDARD', $vaucher);
		$vaucher = preg_replace("/#GUEST1#/", 'Иван Иванов', $vaucher);
		$vaucher = preg_replace("/#GUEST2#/", 'Зинаида Иванова', $vaucher);
		$vaucher = preg_replace("/#ROOM#/", 'Эконом, 2 места', $vaucher);
		$vaucher = preg_replace("/#HOTEL#/", 'Riders Lodge', $vaucher);
		$vaucher = preg_replace("/#ADDRESS#/", 'Круглогодичный курорт «Роза Хутор»,  Олимпийская деревня, ул. Медовея, д. 4', $vaucher);
		$vaucher = preg_replace("/#VIP_ZONA#/", '', $vaucher);

		$vaucher = mb_convert_encoding($vaucher, 'HTML-ENTITIES', "UTF-8");

		$dompdf = new Dompdf();

		$dompdf->set_option('isHtml5ParserEnabled', true);
		$dompdf->set_option('isRemoteEnabled', true);
		$dompdf->set_option('defaultFont', 'Verdana');

		$dompdf->load_html($vaucher, 'UTF-8');
		$dompdf->setPaper('A4', 'portrait');
		$dompdf->render();
		try {
			$output = $dompdf->output();
			$filename = '../sent/pdf/vaucher_' . $tourNumber . '.pdf';
			file_put_contents($filename, $output);
		} catch (Exception $e) {
			echo 'Exception $filename: ', $e->getMessage(), "\n";
		}

		try {
			file_put_contents('../sent/vaucher_num_' . '335404' . '_mail.html', $body);
		} catch (Exception $e) {
			echo 'Выброшено исключение: ', $e->getMessage(), "\n";
		}

		$mail = new PHPMailer();
		$emailFrom = 'pool@awsd.cc';

		try {
			// $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      // Enable verbose debug output
			$mail->isSMTP();                                            // Send using SMTP
			$mail->Host = 'mail.hostland.ru';                    // Set the SMTP server to send through
			$mail->SMTPAuth = true;                                   // Enable SMTP authentication
			$mail->Username = $emailFrom;                     // SMTP username
			$mail->Password = 'uS3BwxOGqA';                               // SMTP password
			$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
			$mail->Port = 587;

			$mail->isHTML(true);
			$mail->charSet = "UTF-8";
			$mail->setLanguage('ru');
			// $mail->Encoding = 'base64';
			// $mail->addCustomHeader('Content-Type', 'text/html;charset=UTF-8');
			$mail->Subject = 'NewStar Camp vaucher';
			// $mail->Subject = "=?UTF-8?B?".base64_encode('Ваш ваучер на NewStarWeekend')."?=";
			$mail->Body = $body;
			$mail->AltBody = 'Ваш ваучер на NewStar Camp';

			$mail->SetFrom($emailFrom, 'New Star Camp');
			$mail->AddAddress($emailTo);
			$mail->addReplyTo('info@newstarcamp.ru', 'Information');
			// $mail->addCC($emailCopy);
			$mail->addBCC('bezsnow@gmail.com');
			$mail->AddAttachment($filename);

			$mail->Send();

		} catch (Exception $e) {
			echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
		}
} else {
	echo 'Mail not sent, POST empty';
}
