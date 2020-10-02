<?php

if(isset($_POST)) {

  $ar['tourNumber'] = $_POST['tourNumber'];
  $ar['tourName'] = $_POST['tourName'];
  $ar['name'] = $_POST['name'] . ' ' . $_POST['lastname'];
  $ar['phone'] = $_POST['phone'];
  $ar['email'] = $_POST['email'];
  $ar['tourNumber'] = $_POST['tourNumber'];
  $ar['tourID'] = $_POST['tourID'];
  $ar['passname'] = $_POST['passname'] == 'S' ? 'STANDARD TOUR' : 'VIP TOUR';
  $ar['guest1'] = $_POST['name'] . ' ' . $_POST['lastname'];
  $ar['guest2'] = $_POST['gname'] . ' ' . $_POST['glastname'];
  $ar['hotel'] = $_POST['hotel'];
//  $ar['dateFrom'] = date("d-m-Y", $_POST['dateFrom']);
  $ar['dateFrom'] = $_POST['dateFrom'];
//  $ar['dateTill'] = date("d-m-Y", $_POST['dateTill']);
  $ar['dateTill'] = $_POST['dateTill'];
  $ar['adults'] = $_POST['adults'];
  $ar['kids'] = $_POST['kids'];
  $ar['hotelName'] = $_POST['hotelName'];
  $ar['hotelBreakfast'] = $_POST['hotelBreakfast'];
  $ar['hotelPrices'] = $_POST['hotelPrices'];
  $ar['address'] = $_POST['address'];
  $ar['room'] = $_POST['room'];
  $ar['tourPrice'] = $_POST['tourPrice'];
  $ar['tourDays'] = $_POST['tourDays'];

  $voucher = json_encode($ar);

  try {
    file_put_contents('../sent/voucher_num_' . $ar['tourNumber'] . '.json',$voucher);
  } catch (Exception $e) {
    echo 'Exception: ',  $e->getMessage(), "\n";
  }

} else {
  return 'POST is epmty';
}
