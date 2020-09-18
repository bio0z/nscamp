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
  $ar['room'] = $_POST['room'] == 'S' ? 'Single,  1 гость' : 'Double, 2 гостя';
  $ar['hotel'] = $_POST['hotel'];
  $ar['address'] = $_POST['address'];

  $vaucher = json_encode($ar);

  try {
    file_put_contents('../sent/vaucher_num_' . $ar['tourNumber'] . '.json',$vaucher);
  } catch (Exception $e) {
    echo 'Exception: ',  $e->getMessage(), "\n";
  }

} else {
  return 'POST is epmty';
}
