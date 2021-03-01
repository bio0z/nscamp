<?php
$arPromoVIP100 = [
  'ISLZR5',	'Z8AII8',	'WN0YZG',	'7CNE0O',	'JDGLMW',	'18DPKH',	'RQFFIC',	'SPASG5',	'MSJFGH',	'V62QFK',	'WTHGG7',	'5K8O6T',	'5UGTK4',	'9ITHCZ',	'5IGCI3',	'RO7LBA',	'GK3D1B',	'JX56NS',	'NBZ4ET',	'D7S2LL',
  'CM91KW',	'RLUOYD',	'T5AVOH',	'MVADIM',	'7T8YQ9',	'KVBHFT',	'JJVBM3',	'Q4BSH7',	'2YLWK1',	'2G6NZ6',	'BQKSJ6',	'H8SECQ',	'6V4Z8P',	'JMH018',	'1KSCU5',	'K560YS',	'5CPYN5',	'UXJ0TG',	'PXRNX4',	'CAS87L',
  ];
$arPromoSTD50 = [
  'ZC2JTH',	'2Z7Z6B',	'IDIWI6',	'F7Z71V',	'QEZS5W',	'5FBV52',	'ECS9TU',	'CDL4F1',	'M1VOVD',	'6BHG0A',	'H5BRJL',	'6LRUKO',	'DRX688',	'VVNO5S',	'CM9WT8',	'SX20BO',	'KL2CNP',	'4WFF8A',	'SZ7Q32',	'SGKPHC',
  '3FDBDK',	'0IEOF1',	'EZSZZH',	'830QKX',	'5E5UQ2',	'N3TWHK',	'LHMCBE',	'D1CBAT',	'EI8EOG',	'VEJKPK',	'O8PD9M',	'5KTZE3',	'VHZIE4',	'DYQPIP',	'B4DTAC',	'CLL56K',	'X19MAW',	'K7JQRZ',	'4HN5N6',	'TSMJJ0',
];
$arPromoSTD100 = [
  'I2Y023',	'OPSQ5Q',	'PNWBE9',	'8FL5FA',	'CNNE9T',	'BU73YB',	'CG77G2',	'7BH9AK',	'8O6HEP',	'1N9G17',	'ZGRHIO',	'R4BQMW',	'2VNIC0',	'MLOX9A',	'4N02R1',	'NVT2ED',	'QYYBU6',	'N8LFYR',	'F5VCGX',	'7OO6QD',
  'CD2GYE',	'JVPLDO',	'9SPDXB',	'TRT227',	'0F7284',	'I9D6X2',	'MRKB3X',	'EE87GA',	'G3Z0PK',	'E47J2A',	'1XD7XP',	'KO55AG',	'0T6GME',	'FXZ0VA',	'9A13IG',	'JYCKTE',	'V2LXIE',	'LOB8TS',	'MOXLVG',	'NK191N',
];

$_POST = json_decode(file_get_contents('php://input'), true);

// var_dump($_POST['promocode']);

if(isset($_POST['promocode']) && isset($_POST['tourPass'])) {
  if ($_POST['tourPass'] == 'V' && in_array($_POST['promocode'],$arPromoVIP100)) {
//    $response = json_encode(['status' => accept,'percent' => 0]);
    $response = json_encode(0);
  }
  else if ($_POST['tourPass'] == 'S' && in_array($_POST['promocode'],$arPromoSTD50)) {
//    $response =  json_encode(['status' => accept,'percent' => 0.5]);
    $response =  json_encode(0.5);
  }
  else if ($_POST['tourPass'] == 'S' && in_array($_POST['promocode'],$arPromoSTD100)) {
//    $response =  json_encode(['status' => accept,'percent' => 0]);
    $response =  json_encode(0);
  } else {
//    $response =  json_encode(['status' => reject]);
    $response =  json_encode(1);
  }
} else {
//  $response =  json_encode(['status' => reject]);
  $response =  json_encode(1);
}

echo $response;