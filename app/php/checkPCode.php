<?php
$arPromoVIP100 = [
  'ISLZR5',	'Z8AII8',	'WN0YZG',	'7CNE0O',	'JDGLMW',	'18DPKH',	'RQFFIC',	'SPASG5',	'MSJFGH',	'V62QFK',	'WTHGG7',	'5K8O6T',	'5UGTK4',	'9ITHCZ',	'5IGCI3',	'RO7LBA',	'GK3D1B',	'JX56NS',	'NBZ4ET',	'D7S2LL',
  ];
$arPromoSTD50 = [
  'ZC2JTH',	'2Z7Z6B',	'IDIWI6',	'F7Z71V',	'QEZS5W',	'5FBV52',	'ECS9TU',	'CDL4F1',	'M1VOVD',	'6BHG0A',	'H5BRJL',	'6LRUKO',	'DRX688',	'VVNO5S',	'CM9WT8',	'SX20BO',	'KL2CNP',	'4WFF8A',	'SZ7Q32',	'SGKPHC',
];
$arPromoSTD100 = [
  'I2Y023',	'OPSQ5Q',	'PNWBE9',	'8FL5FA',	'CNNE9T',	'BU73YB',	'CG77G2',	'7BH9AK',	'8O6HEP',	'1N9G17',	'ZGRHIO',	'R4BQMW',	'2VNIC0',	'MLOX9A',	'4N02R1',	'NVT2ED',	'QYYBU6',	'N8LFYR',	'F5VCGX',	'7OO6QD',
];

$_POST = json_decode(file_get_contents('php://input'), true);

// var_dump($_POST['promocode']);

if(isset($_POST['promocode']) && isset($_POST['tourPass'])) {
  if ($_POST['tourPass'] == 'V' && in_array($_POST['promocode'],$arPromoVIP100)) {
    $response = json_encode(100);
  }
  else if ($_POST['tourPass'] == 'S' && in_array($_POST['promocode'],$arPromoSTD50)) {
    $response =  json_encode(50);
  }
  else if ($_POST['tourPass'] == 'S' && in_array($_POST['promocode'],$arPromoSTD100)) {
    $response =  json_encode(100);
  } else {
    $response =  json_encode(false);
  }
} else {
  $response =  json_encode(false);
}

echo $response;