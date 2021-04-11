<?php
?>
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>New Star Camp 2021</title>
  <meta name="description" content="">

  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, shrink-to-fit=no">

  <!-- Template Basic Images Start -->
  <meta property="og:image" content="<?= $path ?>/images/meta-image.jpg">
  <meta
      content="Фестиваль New Star Camp пройдет 26 марта - 4 апреля 2021 года на всесезонном горном курорте «Роза Хутор» (Сочи)."
      property="description">
  <meta content="New Star Camp 2021" property="og:site_name">
  <meta content="New Star Camp 2021" property="og:title">

  <link rel="icon" href="<?= $path ?>images/favicon.ico">
  <link rel="apple-touch-icon" sizes="140x140" href="<?= $path ?>images/apple-touch-icon.png">

  <meta name="theme-color" content="#000">

  <link rel="stylesheet" href="../css/app.min.css?rev=1616174071">
  <link href="https://fonts.googleapis.com/css?family=Roboto+Mono|Roboto:300,400,500,700&amp;subset=latin-ext"
        rel="stylesheet">
  <title></title>
</head>
<body>
<main class="row">
  <div class="col">
    <section>
      <div class="row">
        <div class="col m-4 p-4">
          <h3>Отправка письма New Star Camp 2021 Ski-pass voucher</h3>
          <form action="../php/sendV.php" method="post" enctype="multipart/form-data">
            Тема письма:
            <input class="p-2 m-1 col" type="text" name="subject" value="New Star Camp 2021 Ski-pass voucher">
            E-mail:
            <input class="p-2 m-1 col" type="email" name="email">
            <!--    Номер телефона:-->
            <!--    <input type="text" name="phone">-->

            <label class="p-2 m-1 col" for='uploaded_file'>Прикрепить файл</label>
            <input class="p-2 m-1 col" type="file" name="uploaded_file" id="uploaded_file">

            <input class="p-2 m-1 col nsc-button" type="submit" value="Отправить сообщение">
          </form>
        </div>
      </div>
    </section>
  </div>
</main>
</body>
</html>
