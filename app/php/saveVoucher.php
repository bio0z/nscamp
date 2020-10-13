<?php

if(isset($_POST)) {

  $ar['dateCreate'] = date('d M Y H:i:s', $_POST['tourNumber']);
  $ar['tourNumber'] = $_POST['tourNumber'];
  $ar['tourName'] = $_POST['tourName'];
  $ar['name'] = $_POST['name'] . ' ' . $_POST['lastname'];
  $ar['phone'] = $_POST['phone'];
  $ar['email'] = $_POST['email'];
  $ar['tourNumber'] = $_POST['tourNumber'];
  $ar['tourID'] = $_POST['tourID'];
  $ar['passcode'] = $_POST['passname'];
  $ar['passname'] = $_POST['passname'] == 'S' ? 'STANDARD TOUR' : 'VIP TOUR';
  $ar['guest1'] = $_POST['name'] . ' ' . $_POST['lastname'];
  $ar['guest2'] = $_POST['gname'] . ' ' . $_POST['glastname'];
  $ar['hotel'] = $_POST['hotel'];
  $ar['dateFrom'] = $_POST['dateFrom'];
  $ar['dateTill'] = $_POST['dateTill'];
  $ar['adults'] = $_POST['adults'];
  $ar['kids'] = $_POST['kids'];
  $ar['hotelName'] = $_POST['hotelName'];
  $ar['hotelBreakfast'] = $_POST['hotelBreakfast'];
  $ar['tourPrice'] = $_POST['tourPrice'];
  $ar['address'] = $_POST['address'];
  $ar['room'] = $_POST['room'];
  $ar['roomName'] = $_POST['roomName'];
  $ar['hotelPrice'] = $_POST['hotelPrice'];
  $ar['skipassPrice'] = $_POST['skipassPrice'];
  $ar['breakfastPrice'] = $_POST['breakfastPrice'];
  $ar['tourDays'] = $_POST['tourDays'];
  $ar['gphone'] = $_POST['gphone'];
  $ar['gemail'] = $_POST['gemail'];

  $voucher = json_encode($ar);

  try {
    file_put_contents('../sent/voucher_num_' . $ar['tourNumber'] . '.json',$voucher);
  } catch (Exception $e) {
    echo 'Exception: ',  $e->getMessage(), "\n";
  }

} else {
  return 'POST is epmty';
}
