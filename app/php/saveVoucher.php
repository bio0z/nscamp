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
  $ar['passname'] = 'FRIENDS TOUR';
  $ar['guest1'] = $_POST['name'] . ' ' . $_POST['lastname'];
  $ar['guest2'] = $_POST['g2fname'] . ' ' . $_POST['g2sname'];
  $ar['guest3'] = $_POST['g3fname'] . ' ' . $_POST['g3sname'];
  $ar['guest4'] = $_POST['g4fname'] . ' ' . $_POST['g4sname'];
  $ar['guest5'] = $_POST['g5fname'] . ' ' . $_POST['g5sname'];
  $ar['guest6'] = $_POST['g6fname'] . ' ' . $_POST['g6sname'];
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
  $ar['passDiscount'] = $_POST['passDiscount'];
  $ar['promocode'] = $_POST['promocode'];
  $ar['bed'] = $_POST['bed'];

  $voucher = json_encode($ar);

  try {
    file_put_contents('../sent/voucher_num_' . $ar['tourNumber'] . '.json',$voucher);
  } catch (Exception $e) {
    echo 'Exception: ',  $e->getMessage(), "\n";
  }

} else {
  return 'POST is empty';
}
