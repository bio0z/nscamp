<?php
require '../../vendor/autoload.php';

use Dompdf\Dompdf;
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

if ($_GET['num']) $_POST['tourNumber'] = $_GET['num'];

if (isset($_POST['tourNumber'])) {

  $host = $_SERVER['HTTP_HOST'];

  $tourNumber = $_POST['tourNumber'];
  $voucher = '../sent/pdf/voucher_' . $tourNumber . '.pdf';

  if (!file_exists($voucher)) {

    $file = '../sent/voucher_num_' . $tourNumber . '.json';
    $json = file_get_contents($file);

    if ($json) {

      $ar = json_decode($json, true);

      if ($host == 'nswpay.ru') {
        $Username = 'sendmail@nswpay.ru';
        $emailFrom = 'sendmail@nswpay.ru';
        $emailTo = $ar['email'];
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

      if ($ar['passcode'] == 'V') {
        $pass = 'VIP';
        $backColor = '#F2D046';
      } elseif ($ar['passcode'] == 'S') {
        $pass = 'STANDARD';
        $backColor = '#DB9EA7';
      } elseif ($ar['passcode'] == 'F') {
        $pass = 'FRIENDS';
        $backColor = '#F2D046';
      }

      $body = file_get_contents('../html/mail.html');
      $body = preg_replace("/#HTTP_HOST#/", 'http://' . $_SERVER["HTTP_HOST"], $body);

      if (strlen($_POST['tourNumber']) === 10) {
        $voucher = file_get_contents('../html/voucher2.html');
      } else if ($ar['passcode'] == 'P') {
        $voucher = file_get_contents('../html/voucherP.html');
        $skiPassDays = $ar['tourDays'] - 1;
        $tourDays = $ar['tourDays'] + 1;
      } else {
        $voucher = file_get_contents('../html/voucher3.html');
        $skiPassDays = $ar['tourDays'] - 1;
        $tourDays = $ar['tourDays'] + 1;
      }

      $voucher = preg_replace("/#FIO#/", $ar['name'], $voucher);
      $voucher = preg_replace("/#HTTP_HOST#/", 'http://' . $_SERVER["HTTP_HOST"], $voucher);
      $voucher = preg_replace("/#PHONE#/", $ar['phone'], $voucher);
      $voucher = preg_replace("/#EMAIL#/", $ar['email'], $voucher);
      $voucher = preg_replace("/#VOUCHER_NUMBER#/", $ar['tourNumber'], $voucher);
      $voucher = preg_replace("/#PASS_NAME#/", $pass, $voucher);
      $voucher = preg_replace("/#PASS#/", $ar['passcode'], $voucher);
      $voucher = preg_replace("/#GUEST1#/", $ar['guest1'], $voucher);
      if ($ar['guest2'] == 'null null') $ar['guest2'] = '';
      $voucher = preg_replace("/#GUEST2#/", $ar['guest2'], $voucher);
      if ($ar['guest3'] == 'null null') $ar['guest3'] = '';
      $voucher = preg_replace("/#GUEST3#/", $ar['guest3'], $voucher);
      if ($ar['guest4'] == 'null null') $ar['guest4'] = '';
      $voucher = preg_replace("/#GUEST4#/", $ar['guest4'], $voucher);
      if ($ar['guest5'] == 'null null') $ar['guest5'] = '';
      $voucher = preg_replace("/#GUEST5#/", $ar['guest5'], $voucher);
      if ($ar['guest6'] == 'null null') $ar['guest6'] = '';
      $voucher = preg_replace("/#GUEST6#/", $ar['guest6'], $voucher);
      $voucher = preg_replace("/#ROOM#/", $ar['roomName'], $voucher);
      $voucher = preg_replace("/#BREAKFAST#/", $ar['hotelBreakfast'], $voucher);
      $voucher = preg_replace("/#HOTEL#/", $ar['hotelName'], $voucher);
      $voucher = preg_replace("/#ADDRESS#/", $ar['address'], $voucher);
      $voucher = preg_replace("/#TOUR_NUMBER#/", $ar['tourNumber'], $voucher);
      $voucher = preg_replace("/#TOUR_DAYS#/", $ar['tourDays'], $voucher);
      $voucher = preg_replace("/#SKIPASS_DAYS#/", $tourDays, $voucher);
      $voucher = preg_replace("/#SKIPASS_DAYS2#/", $skiPassDays, $voucher);
      $voucher = preg_replace("/#DATEFROM#/", $ar['dateFrom'], $voucher);
      $voucher = preg_replace("/#DATETILL#/", $ar['dateTill'], $voucher);
      $voucher = preg_replace("/#ADULTS#/", $ar['adults'], $voucher);
      $voucher = preg_replace("/#BACKCOLOR#/", $backColor, $voucher);
      $voucher = preg_replace("/#BED#/", $ar['bed'], $voucher);

      $voucher = mb_convert_encoding($voucher, 'HTML-ENTITIES', "UTF-8");

      $dompdf = new Dompdf();

      $dompdf->set_option('isHtml5ParserEnabled', true);
      $dompdf->set_option('isRemoteEnabled', true);
      $dompdf->set_option('defaultFont', 'Verdana');

      $dompdf->load_html($voucher, 'UTF-8');
      $dompdf->setPaper('A4', 'portrait');
      $dompdf->render();
      // $dompdf->stream('voucher_'.$tourNumber.'.pdf',['Attachment' => 0]);
      try {
        $output = $dompdf->output();
        $filename = '../sent/pdf/voucher_' . $tourNumber . '.pdf';
        file_put_contents($filename, $output);
      } catch (Exception $e) {
        echo 'Exception $filename: ', $e->getMessage(), "\n";
      }

      try {
        file_put_contents('../sent/voucher_num_' . $ar['tourNumber'] . '_mail.html', $body);
      } catch (Exception $e) {
        echo 'Выброшено исключение: ', $e->getMessage(), "\n";
      }

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
        $mail->Subject = 'New Star Camp 2021 Voucher ' . $ar['tourNumber'];
        // $mail->Subject = "=?UTF-8?B?".base64_encode('Ваш ваучер на NewStarCamp')."?=";
        $mail->Body = $body;
        $mail->AltBody = 'Ваш ваучер на New Star Camp';

        $mail->SetFrom($emailFrom, 'New Star Camp');
        $mail->AddAddress($emailTo);
        $mail->addReplyTo('info@newstarcamp.ru', 'NewStarCamp');
        $mail->addBCC($emailCopy);
        $mail->addBCC($emailCopy2);

        $mail->AddAttachment($filename);
//        $mail->ConfirmReadingTo = $emailFrom;

        $mail->Send();

        $servername = "localhost";

        if ($host == 'nsc-new.awsd.cc') {
          $username = "host1817609";
          $password = "RtYyvvrI7O";
          $database = 'host1817609_nsctemp';
        } elseif ($host == 'nswpay.ru') {
          $username = "host1211741_nsctemp";
          $password = "5zN0t0AF";
          $database = 'host1211741_nsctemp';
        } else {
          $username = "root";
          $password = "root";
          $database = 'nscTemp';
        }

        $conn = new mysqli($servername, $username, $password, $database);

        if ($conn->connect_error) {
          die("Connection failed: " . $conn->connect_error);
        } else {
          $hotelCode = $conn->real_escape_string(trim($ar['hotel']));
          $roomCode = $conn->real_escape_string(trim($ar['room']));

          $result = $conn->query('SELECT * FROM temp_rooms_quota WHERE hotelCode = "' . $hotelCode . '" AND roomCode = "' . $roomCode . '"');
          if ($result) {
            $conn->query("UPDATE temp_rooms_quota 
                        SET quota = quota-1
                        WHERE hotelCode = '" . $hotelCode . "' 
                          AND roomCode = '" . $roomCode . "'");
            echo 'Updated.';
          } else {
            echo 'Incorrest Hotel or Room !' . '<br>';
            echo "Error: " . $result . "<br>" . $conn->error;
          }
        }

////        require_once '';
//        $myCurl = curl_init();
//        curl_setopt_array($myCurl, array(
//          CURLOPT_URL => 'https://' . $host . '/php/updateQuota.php',
//          CURLOPT_RETURNTRANSFER => true,
//          CURLOPT_POST => true,
//          CURLOPT_SSL_VERIFYPEER => false,
//          CURLOPT_SSL_VERIFYHOST => false,
////          CURLOPT_POSTFIELDS => http_build_query(array(
////            'hotelCode' => $ar['hotel'],
////            'roomCode' => $ar['room'],
////          ))
//          CURLOPT_POSTFIELDS => "hotelCode=" . $ar['hotel'] . "&roomCode=" . $ar['room']
//        ));
//
//        $response = curl_exec($myCurl);
//        curl_close($myCurl);
//
//        echo "POST: " . $ar['hotel'] . ' ' . $ar['room'] . '<br>';
//        echo "Ответ на запрос: " . $response . '<br>';
        echo "Sended to " . $emailTo;

        $mail->ClearAddresses();
        $mail->ClearAttachments();

      } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
      }
    } else {
      echo 'No json file' . $file;
    }
  } else {
    echo 'Mail for this voucher ' . $tourNumber . ' already sent';
  }
} else {
  echo 'Mail not sent, POST empty';
}
