<?php
$tourID = count(scandir('sent/')) + 1;
$host = $_SERVER['HTTP_HOST'];
$tourNumber = time();
?>

<html lang="ru">
<head>

	<meta charset="UTF-8">
	<base href="/">

  <title>New Star Camp 2021</title>
  <meta name="description" content="">

  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, shrink-to-fit=no">

  <!-- Template Basic Images Start -->
  <meta property="og:image" content="/images/meta-image.jpg">
  <meta
      content="Фестиваль New Star Camp пройдет 26 марта - 4 апреля 2021 года на всесезонном горном курорте «Роза Хутор» (Сочи)."
      property="description">
  <meta content="New Star Camp 2021" property="og:site_name">
  <meta content="New Star Camp 2021" property="og:title">

  <link rel="icon" href="images/favicon.ico">
  <link rel="apple-touch-icon" sizes="140x140" href="images/apple-touch-icon.png">
  <!-- Template Basic Images End -->

  <!-- Custom Browsers Color Start -->
  <meta name="theme-color" content="#000">
  <!-- Custom Browsers Color End -->

  <link rel="stylesheet" href="css/app.min.css?rev=4ef9cd2617a7765e7313af50d0ebbc31">
  <link href="https://fonts.googleapis.com/css?family=Roboto+Mono|Roboto:300,400,500,700&amp;subset=latin-ext"
        rel="stylesheet">
  <script type="text/x-template" id="modal-template">
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container m-2 p-2">

            <div class="modal-header">
              <slot name="header">
              </slot>
            </div>

            <div class="modal-body">
              <slot name="body">
              </slot>
            </div>

            <div class="modal-footer">
              <slot name="footer">
                <button class="btn modal-default-button rounded-0 nsc-button" @click.prevent="$emit('close')">
                  Согласен
                </button>
              </slot>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </script>
  <?php if ($host == 'nswpay.ru') { ?>
    <script type="text/javascript">
        (function (m, e, t, r, i, k, a) {
            m[i] = m[i] || function () {
                (m[i].a = m[i].a || []).push(arguments)
            };
            m[i].l = 1 * new Date();
            k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a)
        })
        (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

        ym(66145342, "init", {
            clickmap: true,
            trackLinks: true,
            accurateTrackBounce: true
        });
    </script>
    <noscript>
      <div><img src="https://mc.yandex.ru/watch/66145342" style="position:absolute; left:-9999px;" alt=""/></div>
    </noscript>
  <?php } ?>
</head>

<body>
<div id="orderForm" class="container">
  <header class="row mt-2">
    <div class="col"><h1>{{ translations.title[selectedLocale] }}</h1></div>
    <div class="col text-right nsc-logo">
      <a href="#">
        <img src="images/svg/nsc-logo.svg">
      </a>
    </div>
  </header>
  <main class="row">
    <div class="col">
      <form class="needs-validation">
        <ul class="row p-3" id="progressbar">
          <li v-for="curStep in steps" :key="curStep.id"
              :class="['step' + curStep.id, curStep.col , 'p-0' , 'f1' ,curStep.text, step === curStep.id ? 'active' : '']">
            <span v-html="curStep.name[selectedLocale]"></span>
          </li>
        </ul>
        <section v-if="step === 1">
          <div class="row">
            <div class="col-12 col-sm-12 col-md-3 col-lg-2">
              <div class="row step-num">
                <div class="col-2 d-flex align-items-start flex-column p-0 mr-3 nsc-step-num">
                  <svg width="50" height="50" viewBox="0 0 50 72" fill="none"
                       xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M48.0625 71V72H49.0625V71H48.0625ZM1.46875 71H0.46875V72H1.46875V71ZM1.46875 58.8125V57.8125H0.46875V58.8125H1.46875ZM16.1875 58.8125V59.8125H17.1875V58.8125H16.1875ZM16.1875 21.9219H17.1875V20.9219H16.1875V21.9219ZM1.46875 21.9219H0.46875V22.9219H1.46875V21.9219ZM1.46875 10.5312V9.53125H0.46875V10.5312H1.46875ZM7.9375 10.1562L8.05783 11.149L8.06523 11.1481L8.07261 11.1471L7.9375 10.1562ZM13.0938 8.75L13.5245 9.65248L13.527 9.65125L13.0938 8.75ZM18.1562 1.01562V0.015625H17.2207L17.1585 0.949106L18.1562 1.01562ZM33.6719 1.01562H34.6719V0.015625H33.6719V1.01562ZM33.6719 58.8125H32.6719V59.8125H33.6719V58.8125ZM48.0625 58.8125H49.0625V57.8125H48.0625V58.8125ZM48.0625 70H1.46875V72H48.0625V70ZM2.46875 71V58.8125H0.46875V71H2.46875ZM1.46875 59.8125H16.1875V57.8125H1.46875V59.8125ZM17.1875 58.8125V21.9219H15.1875V58.8125H17.1875ZM16.1875 20.9219H1.46875V22.9219H16.1875V20.9219ZM2.46875 21.9219V10.5312H0.46875V21.9219H2.46875ZM1.46875 11.5312C3.75569 11.5312 5.95228 11.4042 8.05783 11.149L7.81717 9.16352C5.79772 9.4083 3.68181 9.53125 1.46875 9.53125V11.5312ZM8.07261 11.1471C10.2028 10.8566 12.029 10.3663 13.5245 9.65248L12.663 7.84752C11.4085 8.44625 9.79717 8.8934 7.80239 9.16542L8.07261 11.1471ZM13.527 9.65125C15.2825 8.80729 16.657 7.6811 17.5884 6.24811L15.9116 5.15814C15.218 6.22515 14.155 7.13021 12.6605 7.84875L13.527 9.65125ZM17.5884 6.24811C18.5153 4.82218 19.0206 3.08399 19.154 1.08214L17.1585 0.949106C17.0419 2.69726 16.6097 4.08407 15.9116 5.15814L17.5884 6.24811ZM18.1562 2.01562H33.6719V0.015625H18.1562V2.01562ZM32.6719 1.01562V58.8125H34.6719V1.01562H32.6719ZM33.6719 59.8125H48.0625V57.8125H33.6719V59.8125ZM47.0625 58.8125V71H49.0625V58.8125H47.0625Z"
                        fill="#C4C4C4"/>
                  </svg>
                </div>
                <div class="col-6 col-sm-6 col-md-8 col-lg-8">
                  {{ translations.stepTour[selectedLocale] }}
                </div>
              </div>
            </div>
            <div class="col-12 col-sm-12 col-md-9 col-lg-10 mb-2 pl-0 pr-0">
              <div class="row justify-content-end">
                <div class="col-12 col-sm-6 col-md-6 col-lg-4 nsc-pass">
                  <label class="m-1 nsc-pass-label p-0"
                         v-bind:class="[!passSDetails ? 'nsc-pass-s' : 'nsc-pass-s-back']"
                         @click="setPassActive('S')"
                         ref="passSLabel">
                    <div class="col m-4 text-left">
                      <div class="row f1 pr-5 pass-detail" v-if="passSDetails"
                           v-html="translations.passSDetailsFull[selectedLocale]">
                      </div>
                      <p class="row m-1 pass-price"
                         v-bind:class="[passSDetails ? '' : 'padd']"
                         v-html="translations.passSDetails[selectedLocale]">
                      </p>
                    </div>
                    <input type="radio" class="form-control rounded-0"
                           v-model.trim="form.pass"
                           value="S"
                           hidden
                           required>
                  </label>
                  <div class="btn rounded-0 nsc-button btn-more"
                       @click="showPassSDetail()">{{ translations.passDetails[selectedLocale] }}
                  </div>
                </div>
                <div class="col-12 col-sm-6 col-md-6 col-lg-4 nsc-pass">
                  <label class="m-1 nsc-pass-label p-0"
                         v-bind:class="[!passVDetails ? 'nsc-pass-v' : 'nsc-pass-v-back']"
                         @click="setPassActive('V')"
                         ref="passVLabel">
                    <div class="col mr-4 ml-4 mt-4 mb-3 text-left">
                      <div class="row f1 pr-5 pass-detail"
                           v-if="passVDetails"
                           v-html="translations.passVDetailsFull[selectedLocale]">
                      </div>
                      <p class="row m-1 pass-price"
                         v-bind:class="[passVDetails ? '' : 'padd']"
                         v-html="translations.passVDetails[selectedLocale]">
                      </p>
                    </div>
                    <input type="radio" class="form-control rounded-0"
                           v-model.trim="form.pass"
                           value="V"
                           hidden
                           required>
                  </label>
                  <div class="btn rounded-0 nsc-button btn-more"
                       @click="showPassVDetail()">{{ translations.passDetails[selectedLocale] }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section v-if="step === 2">
          <div class="row">
            <div class="col-12 col-sm-12 col-md-4 col-lg-4">
              <div class="row step-num">
                <div class="col-2 d-flex align-items-start flex-column p-0 mr-3 nsc-step-num">
                  <svg width="58" height="50" viewBox="0 0 58 74" fill="none"
                       xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M56.4688 73V74H57.4688V73H56.4688ZM1.67188 73H0.671875V74H1.67188V73ZM1.67188 61.4688L1.0855 60.6587L0.671875 60.9581V61.4688H1.67188ZM14.2344 51.8125L13.6062 51.0344L13.6033 51.0367L14.2344 51.8125ZM24.3594 43L23.6642 42.2811L23.6612 42.2841L24.3594 43ZM31.7188 18.0156L31.066 18.7732L31.0723 18.7786L31.0786 18.7838L31.7188 18.0156ZM13.8125 17.1719L13.4634 16.2348L13.4604 16.2359L13.8125 17.1719ZM5 21.7188V22.7188H5.3071L5.56127 22.5464L5 21.7188ZM3.5 21.7188H2.5V22.7188H3.5V21.7188ZM3.5 6.20312L3.09986 5.28667L2.5 5.54858V6.20312H3.5ZM13.2969 3.29688L13.0792 2.32085L13.0777 2.32119L13.2969 3.29688ZM46.3438 7.375L45.7178 8.15484L45.721 8.15742L46.3438 7.375ZM49.9062 35.5L49.0334 35.012L49.0305 35.0173L49.9062 35.5ZM39.8281 47.7812L40.5064 48.5161L40.5095 48.5131L39.8281 47.7812ZM31.25 55.0469L31.8555 55.8427L31.861 55.8385L31.25 55.0469ZM25.1094 59.6406L24.5262 58.8283L22.0019 60.6406H25.1094V59.6406ZM56.4688 59.6406H57.4688V58.6406H56.4688V59.6406ZM56.4688 72H1.67188V74H56.4688V72ZM2.67188 73V61.4688H0.671875V73H2.67188ZM2.25825 62.2788C6.4616 59.2361 10.664 56.0058 14.8654 52.5883L13.6033 51.0367C9.42977 54.4317 5.25715 57.6389 1.0855 60.6587L2.25825 62.2788ZM14.8626 52.5906C19.0943 49.1738 22.4955 46.2147 25.0576 43.7159L23.6612 42.2841C21.1607 44.7228 17.812 47.6387 13.6062 51.0344L14.8626 52.5906ZM25.0545 43.7189C28.8637 40.0356 31.6245 36.7751 33.2846 33.9432L31.5592 32.9318C30.0318 35.5374 27.4175 38.6519 23.6643 42.2811L25.0545 43.7189ZM33.2846 33.9432C34.9514 31.0999 35.8125 28.2396 35.8125 25.375H33.8125C33.8125 27.8229 33.0799 30.3376 31.5592 32.9318L33.2846 33.9432ZM35.8125 25.375C35.8125 21.9522 34.6928 19.1923 32.3589 17.2474L31.0786 18.7838C32.8697 20.2765 33.8125 22.4228 33.8125 25.375H35.8125ZM32.3715 17.258C30.0939 15.2958 26.8873 14.3906 22.9062 14.3906V16.3906C26.6127 16.3906 29.2811 17.2355 31.066 18.7732L32.3715 17.258ZM22.9062 14.3906C19.8924 14.3906 16.7426 15.0131 13.4634 16.2348L14.1616 18.109C17.2574 16.9556 20.1701 16.3906 22.9062 16.3906V14.3906ZM13.4604 16.2359C10.2323 17.4504 7.2244 19.002 4.43873 20.8911L5.56127 22.5464C8.2131 20.748 11.0802 19.2683 14.1646 18.1078L13.4604 16.2359ZM5 20.7188H3.5V22.7188H5V20.7188ZM4.5 21.7188V6.20312H2.5V21.7188H4.5ZM3.90014 7.11958C6.03131 6.18907 9.22378 5.23677 13.5161 4.27256L13.0777 2.32119C8.74497 3.29448 5.40619 4.27968 3.09986 5.28667L3.90014 7.11958ZM13.5145 4.2729C17.7886 3.31969 22.0594 2.84375 26.3281 2.84375V0.84375C21.9094 0.84375 17.4927 1.33656 13.0792 2.32085L13.5145 4.2729ZM26.3281 2.84375C34.9568 2.84375 41.3697 4.66455 45.7178 8.15483L46.9697 6.59517C42.1303 2.71045 35.1995 0.84375 26.3281 0.84375V2.84375ZM45.721 8.15742C50.0401 11.5951 52.2344 16.4738 52.2344 22.9375H54.2344C54.2344 15.9637 51.8349 10.4674 46.9665 6.59258L45.721 8.15742ZM52.2344 22.9375C52.2344 27.1673 51.1715 31.1874 49.0334 35.012L50.7791 35.988C53.0785 31.8751 54.2344 27.5202 54.2344 22.9375H52.2344ZM49.0305 35.0173C46.909 38.8662 43.6267 42.8783 39.1467 47.0494L40.5095 48.5131C45.092 44.2467 48.5285 40.0713 50.782 35.9827L49.0305 35.0173ZM39.1498 47.0464C36.3263 49.6528 33.4893 52.0555 30.639 54.2552L31.861 55.8385C34.7607 53.6007 37.6425 51.1597 40.5064 48.5161L39.1498 47.0464ZM30.6445 54.251C27.7695 56.4385 25.7325 57.9622 24.5262 58.8283L25.6926 60.4529C26.9238 59.569 28.9805 58.0302 31.8555 55.8427L30.6445 54.251ZM25.1094 60.6406H56.4688V58.6406H25.1094V60.6406ZM55.4688 59.6406V73H57.4688V59.6406H55.4688Z"
                        fill="#C4C4C4"/>
                  </svg>
                </div>
                <div class="col-6 col-sm-6 col-md-8 col-lg-8">
                  {{ translations.stepDates[selectedLocale] }}
                </div>
              </div>
            </div>
            <div class="col-12 col-sm-12 col-md-8 col-lg-8 p-sm-2">
              <div class="row">
                <div class="col-12 col-sm-12 col-md-6 col-lg-6 pt-2 pb-2">
                  <input class="form-control rounded-0 nsc-select"
                         type="date" v-model="form.dateFrom"
                         :placeholder="translations.dateFrom[selectedLocale]"/>
                </div>
                <div class="col-12 col-sm-12 col-md-6 col-lg-6 pt-2 pb-2">
                  <input class="form-control rounded-0 nsc-select"
                        type="date" v-model="form.dateTill"
                        :placeholder="translations.dateTill[selectedLocale]"/>
                </div>
              </div>
              <div class="row">
                <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                </div>
                <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                  <div class="pt-2 pb-2 nsc-datesnote">
                    <span>{{ translations.dateNote[selectedLocale] }}</span>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                </div>
                <div class="col-12 col-sm-12 col-md-6 col-lg-6 pt-2 pb-2">
                  <input class="form-control custom-select rounded-0 nsc-select"
                         type="number" v-model="form.adults"
                         :placeholder="translations.tourAdults[selectedLocale]"/>
                </div>
              </div>
              <div class="row">
                <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                </div>
                <div class="col-12 col-sm-12 col-md-6 col-lg-6 pt-2 pb-2">
                  <input class="form-control custom-select rounded-0 nsc-select"
                         type="number" v-model="form.kids"
                         :placeholder="translations.tourKids[selectedLocale]"/>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section v-if="step === 3">
          <div class="row">
            <div class="col-12 col-sm-12 col-md-6 col-lg-4">
              <div class="row step-num">
                <div class="col-2 d-flex align-items-start flex-column p-0 mr-3 nsc-step-num">
                  <svg width="58" height="50" viewBox="0 0 58 74" fill="none"
                       xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M56.4688 73V74H57.4688V73H56.4688ZM1.67188 73H0.671875V74H1.67188V73ZM1.67188 61.4688L1.0855 60.6587L0.671875 60.9581V61.4688H1.67188ZM14.2344 51.8125L13.6062 51.0344L13.6033 51.0367L14.2344 51.8125ZM24.3594 43L23.6642 42.2811L23.6612 42.2841L24.3594 43ZM31.7188 18.0156L31.066 18.7732L31.0723 18.7786L31.0786 18.7838L31.7188 18.0156ZM13.8125 17.1719L13.4634 16.2348L13.4604 16.2359L13.8125 17.1719ZM5 21.7188V22.7188H5.3071L5.56127 22.5464L5 21.7188ZM3.5 21.7188H2.5V22.7188H3.5V21.7188ZM3.5 6.20312L3.09986 5.28667L2.5 5.54858V6.20312H3.5ZM13.2969 3.29688L13.0792 2.32085L13.0777 2.32119L13.2969 3.29688ZM46.3438 7.375L45.7178 8.15484L45.721 8.15742L46.3438 7.375ZM49.9062 35.5L49.0334 35.012L49.0305 35.0173L49.9062 35.5ZM39.8281 47.7812L40.5064 48.5161L40.5095 48.5131L39.8281 47.7812ZM31.25 55.0469L31.8555 55.8427L31.861 55.8385L31.25 55.0469ZM25.1094 59.6406L24.5262 58.8283L22.0019 60.6406H25.1094V59.6406ZM56.4688 59.6406H57.4688V58.6406H56.4688V59.6406ZM56.4688 72H1.67188V74H56.4688V72ZM2.67188 73V61.4688H0.671875V73H2.67188ZM2.25825 62.2788C6.4616 59.2361 10.664 56.0058 14.8654 52.5883L13.6033 51.0367C9.42977 54.4317 5.25715 57.6389 1.0855 60.6587L2.25825 62.2788ZM14.8626 52.5906C19.0943 49.1738 22.4955 46.2147 25.0576 43.7159L23.6612 42.2841C21.1607 44.7228 17.812 47.6387 13.6062 51.0344L14.8626 52.5906ZM25.0545 43.7189C28.8637 40.0356 31.6245 36.7751 33.2846 33.9432L31.5592 32.9318C30.0318 35.5374 27.4175 38.6519 23.6643 42.2811L25.0545 43.7189ZM33.2846 33.9432C34.9514 31.0999 35.8125 28.2396 35.8125 25.375H33.8125C33.8125 27.8229 33.0799 30.3376 31.5592 32.9318L33.2846 33.9432ZM35.8125 25.375C35.8125 21.9522 34.6928 19.1923 32.3589 17.2474L31.0786 18.7838C32.8697 20.2765 33.8125 22.4228 33.8125 25.375H35.8125ZM32.3715 17.258C30.0939 15.2958 26.8873 14.3906 22.9062 14.3906V16.3906C26.6127 16.3906 29.2811 17.2355 31.066 18.7732L32.3715 17.258ZM22.9062 14.3906C19.8924 14.3906 16.7426 15.0131 13.4634 16.2348L14.1616 18.109C17.2574 16.9556 20.1701 16.3906 22.9062 16.3906V14.3906ZM13.4604 16.2359C10.2323 17.4504 7.2244 19.002 4.43873 20.8911L5.56127 22.5464C8.2131 20.748 11.0802 19.2683 14.1646 18.1078L13.4604 16.2359ZM5 20.7188H3.5V22.7188H5V20.7188ZM4.5 21.7188V6.20312H2.5V21.7188H4.5ZM3.90014 7.11958C6.03131 6.18907 9.22378 5.23677 13.5161 4.27256L13.0777 2.32119C8.74497 3.29448 5.40619 4.27968 3.09986 5.28667L3.90014 7.11958ZM13.5145 4.2729C17.7886 3.31969 22.0594 2.84375 26.3281 2.84375V0.84375C21.9094 0.84375 17.4927 1.33656 13.0792 2.32085L13.5145 4.2729ZM26.3281 2.84375C34.9568 2.84375 41.3697 4.66455 45.7178 8.15483L46.9697 6.59517C42.1303 2.71045 35.1995 0.84375 26.3281 0.84375V2.84375ZM45.721 8.15742C50.0401 11.5951 52.2344 16.4738 52.2344 22.9375H54.2344C54.2344 15.9637 51.8349 10.4674 46.9665 6.59258L45.721 8.15742ZM52.2344 22.9375C52.2344 27.1673 51.1715 31.1874 49.0334 35.012L50.7791 35.988C53.0785 31.8751 54.2344 27.5202 54.2344 22.9375H52.2344ZM49.0305 35.0173C46.909 38.8662 43.6267 42.8783 39.1467 47.0494L40.5095 48.5131C45.092 44.2467 48.5285 40.0713 50.782 35.9827L49.0305 35.0173ZM39.1498 47.0464C36.3263 49.6528 33.4893 52.0555 30.639 54.2552L31.861 55.8385C34.7607 53.6007 37.6425 51.1597 40.5064 48.5161L39.1498 47.0464ZM30.6445 54.251C27.7695 56.4385 25.7325 57.9622 24.5262 58.8283L25.6926 60.4529C26.9238 59.569 28.9805 58.0302 31.8555 55.8427L30.6445 54.251ZM25.1094 60.6406H56.4688V58.6406H25.1094V60.6406ZM55.4688 59.6406V73H57.4688V59.6406H55.4688Z"
                        fill="#C4C4C4"/>
                  </svg>
                </div>
                <div class="col-6 col-sm-6 col-md-8 col-lg-8">
                  {{ translations.stepHotel[selectedLocale] }}
                </div>
              </div>
            </div>
            <div class="col-12 col-sm-12 col-md-6 col-lg-8 p-sm-2">
              <div class="row">
                <div class="col-12 col-sm-12 col-md-6 col-lg-6 pb-2 input-group">
                  <div class="btn-group input-group-prepend">
                    <select v-model.trim="form.hotel"
                            class="custom-select rounded-0 nsc-select"
                            required>
                      <option value="" disabled selected>{{ translations.hotelType[selectedLocale] }}</option>
                      <option v-for="hotel in hotels" v-if="hotel.active" :value=hotel.code>{{ hotel.name }}</option>
                    </select>
                  </div>
                </div>
                <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                  <div>
                    <select v-model.trim="form.room" class="custom-select rounded-0 nsc-select"
                            required>
                      <option value="" disabled selected>{{ translations.roomType[selectedLocale] }}</option>
                      <option v-for="room in rooms" v-if="room.active" :value=room.code>{{ room.name }}</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row mt-4 mb-4">
            <div class="col-12 col-sm-12 col-md-1 col-lg-1">
            </div>
            <div class="col-12 col-sm-12 col-md-11 col-lg-11">
              <div class="row hotel mainbg">
                <div class="col-12 col-sm-12 col-md-12 col-lg-6 p-4 order-12 order-lg-1">
                  <div v-if="form.hotel === 'RIL'">
                    <h3>{{ hotels[0].name }}</h3>
                    <p class="f1">{{ hotels[0].desc[selectedLocale] }}</p>
                  </div>
                  <div v-if="form.hotel === 'AYS'">
                    <h3>{{ hotels[1].name }}</h3>
                    <p class="f1">{{ hotels[1].desc[selectedLocale] }}</p>
                  </div>
                  <div v-if="form.hotel === 'GRF'">
                    <h3>{{ hotels[2].name }}</h3>
                    <p class="f1">{{ hotels[2].desc[selectedLocale] }}</p>
                  </div>
                  <div v-if="form.hotel === 'ROS'">
                    <h3>{{ hotels[3].name }}</h3>
                    <p class="f1">{{ hotels[3].desc[selectedLocale] }}</p>
                  </div>
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-6 p-0 text-right order-1 order-lg-12">
                  <button type="button" aria-label="Previous Photo" class="gallery previous" @click="previousPhoto()">
                    <
                  </button>
                  <div v-if="form.hotel === 'RIL'" hotel-id="0" ref="hotelDiv" class="hotel-gallery">
                    <img image-id='0' class="img-fluid active" ref="hotelImage"
                         :id="hotels[0].code" :src="hotels[0].gallery[0]" :alt="hotels[1].name" />
                  </div>
                  <div v-if="form.hotel === 'AYS'" hotel-id="1" ref="hotelDiv" class="hotel-gallery">
                    <img image-id='0' class="img-fluid active" ref="hotelImage"
                         :id="hotels[1].code" :src="hotels[1].gallery[0]" :alt="hotels[1].name" />
                  </div>
                  <div v-if="form.hotel === 'GRF'" hotel-id="2" ref="hotelDiv" class="hotel-gallery">
                    <img image-id='0' class="img-fluid active" ref="hotelImage"
                         :id="hotels[2].code" :src="hotels[2].gallery[0]" :alt="hotels[1].name" />
                  </div>
                  <div v-if="form.hotel === 'ROS'" hotel-id="3" ref="hotelDiv" class="hotel-gallery">
                    <img image-id='0' class="img-fluid active" ref="hotelImage"
                         :id="hotels[3].code" :src="hotels[3].gallery[0]" :alt="hotels[1].name" />
                  </div>
                  <button type="button" aria-label="Next Photo" class="gallery next" @click="nextPhoto()">
                    >
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section v-if="step === 4">
          <div class="row">
            <div class="col-12 col-sm-12 col-md-6 col-lg-3">
              <div class="row step-num">
                <div class="col-2 d-flex align-items-start flex-column p-0 mr-3 nsc-step-num">
                  <svg width="50" height="50" viewBox="0 0 58 76" fill="none"
                       xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M51.625 40.2812L52.2758 39.522L52.2731 39.5197L51.625 40.2812ZM54.6719 61.0469L53.7639 60.6278L53.7601 60.6361L54.6719 61.0469ZM48.7188 68.3594L49.3188 69.1594L49.3217 69.1571L48.7188 68.3594ZM39.4375 72.9062L39.7178 73.8662L39.7233 73.8645L39.4375 72.9062ZM11.6406 73.0938L11.426 74.0705L11.4276 74.0708L11.6406 73.0938ZM1.5625 70.0469H0.5625V70.7032L1.16458 70.9643L1.5625 70.0469ZM1.5625 54.7188V53.7188H0.5625V54.7188H1.5625ZM3.39062 54.7188L3.90804 53.863L3.66945 53.7188H3.39062V54.7188ZM13 58.9375L12.6958 59.8901L12.6981 59.8908L13 58.9375ZM29.1719 60.2969L29.3031 61.2882L29.3102 61.2873L29.3174 61.2862L29.1719 60.2969ZM34.5625 58.3281L34.0026 57.4995L33.9997 57.5015L34.5625 58.3281ZM37.3281 55.5156L38.1748 56.0478L38.1814 56.0371L37.3281 55.5156ZM36.9531 46L36.1848 46.6402L36.1939 46.6508L36.9531 46ZM33.25 43.6094L32.9396 44.56L32.9484 44.5629L32.9573 44.5656L33.25 43.6094ZM27.7188 42.8125L27.6898 43.8121L27.697 43.8123L27.7043 43.8124L27.7188 42.8125ZM17.875 42.7188H16.875V43.7188H17.875V42.7188ZM17.875 30.25V29.25H16.875V30.25H17.875ZM33.1094 28.9375L33.5033 29.8566L33.5058 29.8556L33.1094 28.9375ZM36.2031 26.5938L37.0186 27.1725L37.0229 27.1664L37.0272 27.1603L36.2031 26.5938ZM36.1562 18.8594L35.3835 19.4941L35.3892 19.501L35.395 19.5078L36.1562 18.8594ZM33.4375 16.7969L33.0184 17.7048L33.0217 17.7063L33.4375 16.7969ZM15.2969 16.9375L15.5762 17.8977L15.5842 17.8953L15.2969 16.9375ZM5.3125 21.2969V22.2969H5.5864L5.82207 22.1573L5.3125 21.2969ZM3.57812 21.2969H2.57812V22.2969H3.57812V21.2969ZM3.57812 6.15625L3.20478 5.22856L2.57812 5.48075V6.15625H3.57812ZM14.0312 3.20312L14.2394 4.18125L14.246 4.1798L14.0312 3.20312ZM39.0156 2.92188L38.7861 3.89521L38.7948 3.89719L39.0156 2.92188ZM47.2188 5.96875L47.7317 5.11033L47.7296 5.10907L47.2188 5.96875ZM51.2031 29.6406L51.9864 30.2624L51.9894 30.2584L51.2031 29.6406ZM41.6875 35.4531L41.478 34.4753L40.6875 34.6447V35.4531H41.6875ZM41.6875 36.1094H40.6875V36.9815L41.5515 37.1001L41.6875 36.1094ZM50.9742 41.0405C52.4102 42.2714 53.5475 43.7017 54.3933 45.3349L56.1692 44.4151C55.2025 42.5483 53.9023 40.9161 52.2758 39.522L50.9742 41.0405ZM54.3933 45.3349C55.1993 46.8913 55.6406 49.043 55.6406 51.8594H57.6406C57.6406 48.8633 57.1757 46.3587 56.1692 44.4151L54.3933 45.3349ZM55.6406 51.8594C55.6406 55.003 55.0129 57.9217 53.7639 60.6278L55.5798 61.4659C56.9559 58.4845 57.6406 55.2783 57.6406 51.8594H55.6406ZM53.7601 60.6361C52.5532 63.3149 50.6806 65.6231 48.1158 67.5616L49.3217 69.1571C52.1319 67.0331 54.228 64.4663 55.5836 61.4577L53.7601 60.6361ZM48.1188 67.5594C45.6 69.4484 42.6158 70.9148 39.1517 71.948L39.7233 73.8645C43.3842 72.7727 46.5875 71.2078 49.3187 69.1594L48.1188 67.5594ZM39.1572 71.9463C35.7439 72.9431 31.5474 73.4531 26.5469 73.4531V75.4531C31.6713 75.4531 36.0686 74.9319 39.7178 73.8662L39.1572 71.9463ZM26.5469 73.4531C20.8136 73.4531 15.9201 73.0034 11.8537 72.1167L11.4276 74.0708C15.6737 74.9966 20.7177 75.4531 26.5469 75.4531V73.4531ZM11.8552 72.117C7.76553 71.2186 4.47389 70.2196 1.96042 69.1295L1.16458 70.9643C3.83861 72.1241 7.26572 73.1564 11.426 74.0705L11.8552 72.117ZM2.5625 70.0469V54.7188H0.5625V70.0469H2.5625ZM1.5625 55.7188H3.39062V53.7188H1.5625V55.7188ZM2.87321 55.5745C5.64162 57.2484 8.91965 58.6843 12.6958 59.8901L13.3042 57.9849C9.64285 56.8157 6.51463 55.4391 3.90804 53.863L2.87321 55.5745ZM12.6981 59.8908C16.5206 61.1013 20.046 61.7188 23.2656 61.7188V59.7188C20.2977 59.7188 16.9794 59.1487 13.3019 57.9842L12.6981 59.8908ZM23.2656 61.7188C25.1291 61.7188 27.1422 61.5742 29.3031 61.2882L29.0407 59.3055C26.9516 59.582 25.0272 59.7188 23.2656 59.7188V61.7188ZM29.3174 61.2862C31.5612 60.9563 33.5081 60.2558 35.1253 59.1547L33.9997 57.5015C32.6794 58.4005 31.0325 59.0125 29.0264 59.3075L29.3174 61.2862ZM35.1224 59.1567C36.3844 58.304 37.4075 57.2684 38.1748 56.0478L36.4815 54.9835C35.8737 55.9504 35.0531 56.7898 34.0026 57.4995L35.1224 59.1567ZM38.1814 56.0371C39.0057 54.6882 39.3594 52.8669 39.3594 50.6875H37.3594C37.3594 52.6956 37.0255 54.093 36.4748 54.9942L38.1814 56.0371ZM39.3594 50.6875C39.3594 48.5144 38.8584 46.6862 37.7124 45.3492L36.1939 46.6508C36.9228 47.5013 37.3594 48.7981 37.3594 50.6875H39.3594ZM37.7213 45.3598C36.6478 44.0716 35.2417 43.1733 33.5427 42.6532L32.9573 44.5656C34.3208 44.983 35.3834 45.6784 36.1849 46.6402L37.7213 45.3598ZM33.5604 42.6588C31.9074 42.119 29.9583 41.8448 27.7332 41.8126L27.7043 43.8124C29.7917 43.8427 31.5301 44.0997 32.9396 44.56L33.5604 42.6588ZM27.7477 41.8129C25.5834 41.7502 23.5736 41.7188 21.7188 41.7188V43.7188C23.5514 43.7188 25.5416 43.7498 27.6898 43.8121L27.7477 41.8129ZM21.7188 41.7188H17.875V43.7188H21.7188V41.7188ZM18.875 42.7188V30.25H16.875V42.7188H18.875ZM17.875 31.25H21.8594V29.25H17.875V31.25ZM21.8594 31.25C24.317 31.25 26.5019 31.1713 28.4112 31.0122L28.2451 29.0191C26.4044 29.1725 24.2768 29.25 21.8594 29.25V31.25ZM28.4112 31.0122C30.3613 30.8497 32.0663 30.4725 33.5033 29.8566L32.7155 28.0184C31.5275 28.5275 30.0449 28.8691 28.2451 29.0191L28.4112 31.0122ZM33.5058 29.8556C35.0055 29.208 36.2008 28.3249 37.0186 27.1725L35.3876 26.015C34.8305 26.8001 33.9632 27.4795 32.7129 28.0194L33.5058 29.8556ZM37.0272 27.1603C37.8777 25.9232 38.2344 24.2362 38.2344 22.2344H36.2344C36.2344 24.045 35.9036 25.2643 35.3791 26.0272L37.0272 27.1603ZM38.2344 22.2344C38.2344 20.656 37.8281 19.2799 36.9175 18.2109L35.395 19.5078C35.9219 20.1263 36.2344 21.0002 36.2344 22.2344H38.2344ZM36.929 18.2246C36.1077 17.2249 35.0766 16.4466 33.8533 15.8874L33.0217 17.7063C33.9859 18.1471 34.7673 18.7439 35.3835 19.4941L36.929 18.2246ZM33.8566 15.8889C32.5207 15.2724 30.9753 14.875 29.2375 14.6782L29.0125 16.6655C30.5872 16.8438 31.9168 17.1964 33.0184 17.7048L33.8566 15.8889ZM29.2375 14.6782C27.5575 14.488 26.0961 14.3906 24.8594 14.3906V16.3906C25.9977 16.3906 27.38 16.4807 29.0125 16.6655L29.2375 14.6782ZM24.8594 14.3906C21.8058 14.3906 18.5204 14.9264 15.0095 15.9797L15.5842 17.8953C18.9484 16.8861 22.038 16.3906 24.8594 16.3906V14.3906ZM15.0175 15.9773C11.4959 17.0018 8.09068 18.4893 4.80293 20.4364L5.82207 22.1573C8.97182 20.2919 12.2229 18.8732 15.5762 17.8977L15.0175 15.9773ZM5.3125 20.2969H3.57812V22.2969H5.3125V20.2969ZM4.57812 21.2969V6.15625H2.57812V21.2969H4.57812ZM3.95147 7.08394C6.43773 6.08337 9.85906 5.11321 14.2394 4.18123L13.8231 2.22502C9.39094 3.16804 5.84352 4.16663 3.20478 5.22856L3.95147 7.08394ZM14.246 4.1798C18.5814 3.22662 22.9781 2.75 27.4375 2.75V0.75C22.8344 0.75 18.2936 1.24213 13.8165 2.22645L14.246 4.1798ZM27.4375 2.75C31.7878 2.75 35.5671 3.13597 38.7861 3.89517L39.2452 1.94858C35.8392 1.14528 31.8997 0.75 27.4375 0.75V2.75ZM38.7948 3.89719C42.0388 4.63168 44.6672 5.61583 46.7079 6.82843L47.7296 5.10907C45.4578 3.75917 42.6174 2.71207 39.2365 1.94656L38.7948 3.89719ZM46.7058 6.82717C49.148 8.28656 50.9191 10.0302 52.0693 12.043L53.8057 11.0507C52.4559 8.68851 50.4145 6.71344 47.7317 5.11033L46.7058 6.82717ZM52.0693 12.043C53.2195 14.056 53.8125 16.4418 53.8125 19.2344H55.8125C55.8125 16.152 55.1555 13.4128 53.8057 11.0507L52.0693 12.043ZM53.8125 19.2344C53.8125 22.8841 52.6854 26.1355 50.4168 29.0228L51.9894 30.2584C54.5334 27.0207 55.8125 23.3347 55.8125 19.2344H53.8125ZM50.4199 29.0189C48.164 31.8607 45.1987 33.678 41.478 34.4753L41.897 36.4309C46.0513 35.5407 49.4297 33.483 51.9864 30.2624L50.4199 29.0189ZM40.6875 35.4531V36.1094H42.6875V35.4531H40.6875ZM41.5515 37.1001C43.0622 37.3074 44.6791 37.7246 46.4043 38.3602L47.0957 36.4835C45.2584 35.8066 43.5003 35.3488 41.8235 35.1187L41.5515 37.1001ZM46.4043 38.3602C48.0733 38.9751 49.5963 39.8678 50.9769 41.0428L52.2731 39.5197C50.7162 38.1947 48.9892 37.1811 47.0957 36.4835L46.4043 38.3602Z"
                        fill="#C4C4C4"/>
                  </svg>
                </div>
                <div class="col-6 col-sm-6 col-md-8 col-lg-8">
                  {{ translations.stepThree[selectedLocale] }}
                </div>
              </div>
            </div>
            <div class="col-12 col-sm-12 col-md-6 col-lg-9 pt-sm-2" id="Guests">
              <div class="form-row">
                <h5>{{ translations.firstGuest[selectedLocale] }}</h5>
                <div class="col-md-12 mb-4">
                  <input v-model.trim="form.fname" name="fname" type="text"
                         class="form-control rounded-0"
                         :placeholder="translations.guestName[selectedLocale]"
                         required>
                </div>
                <div class="col-md-12 mb-4">
                  <input v-model.trim="form.sname" type="text"
                         class="form-control rounded-0"
                         :placeholder="translations.guestSurname[selectedLocale]"
                         required>
                </div>
                <div class="col-md-12 mb-4">
                  <input type="email" v-model.trim="form.email"
                         class="form-control rounded-0"
                         placeholder="E-Mail"
                         required>
                </div>
                <div class="col-md-12 mb-4">
                  <input type="phone"
                         v-model.trim="form.phone"
                         name="phone"
                         id="phone"
                         autocomplete="tel"
                         class="form-control rounded-0"
                         :placeholder="translations.guestPhone[selectedLocale]"
                         maxlength="17"
                         v-phone
                         pattern="\+7\s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}"
                         required>
                </div>
              </div>
              <div class="form-row" v-if="form.room === 'D'">
                <h5>{{ translations.secondGuest[selectedLocale] }}</h5>
                <div class="col-md-12 mb-4">
                  <input v-model.trim="form.gfname" name="gfname" type="text"
                         class="form-control rounded-0"
                         :placeholder="translations.guestName[selectedLocale]"
                         required>
                </div>
                <div class="col-md-12 mb-4">
                  <input v-model.trim="form.gsname" type="text"
                         class="form-control rounded-0"
                         :placeholder="translations.guestSurname[selectedLocale]"
                         required>
                </div>
                <div class="col-md-12 mb-4">
                  <input type="email" v-model.trim="form.gemail"
                         class="form-control rounded-0"
                         placeholder="E-Mail"
                         required>
                </div>
                <div class="col-md-12 mb-4">
                  <input type="phone" v-model.trim="form.gphone"
                         class="form-control rounded-0"
                         :placeholder="translations.guestPhone[selectedLocale]"
                         required>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section v-if="step === 5">
          <div class="row">
            <div class="col-12 col-sm-12 col-md-8 col-lg-5">
              <div class="row step-num">
                <div
                    class="col-2 col-sm-2 col-md-2 col-lg-2 d-flex align-items-start flex-column p-0 mr-3 nsc-step-num">
                  <svg width="50" height="50" viewBox="0 0 64 73" fill="none"
                       xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M62.4531 54.9219V55.9219H63.4531V54.9219H62.4531ZM52.9375 54.9219V53.9219H51.9375V54.9219H52.9375ZM52.9375 71.1875V72.1875H53.9375V71.1875H52.9375ZM35.7344 71.1875H34.7344V72.1875H35.7344V71.1875ZM35.7344 54.9219H36.7344V53.9219H35.7344V54.9219ZM1.9375 54.9219H0.9375V55.9219H1.9375V54.9219ZM1.9375 41.7031L1.15919 41.0752L0.9375 41.3501V41.7031H1.9375ZM34.6094 1.20312V0.203125H34.1313L33.8311 0.575249L34.6094 1.20312ZM52.9375 1.20312H53.9375V0.203125H52.9375V1.20312ZM52.9375 42.1719H51.9375V43.1719H52.9375V42.1719ZM62.4531 42.1719H63.4531V41.1719H62.4531V42.1719ZM35.7344 42.1719V43.1719H36.7344V42.1719H35.7344ZM35.7344 16.9531H36.7344V14.1157L34.9553 16.3261L35.7344 16.9531ZM15.4375 42.1719L14.6585 41.5449L13.349 43.1719H15.4375V42.1719ZM62.4531 53.9219H52.9375V55.9219H62.4531V53.9219ZM51.9375 54.9219V71.1875H53.9375V54.9219H51.9375ZM52.9375 70.1875H35.7344V72.1875H52.9375V70.1875ZM36.7344 71.1875V54.9219H34.7344V71.1875H36.7344ZM35.7344 53.9219H1.9375V55.9219H35.7344V53.9219ZM2.9375 54.9219V41.7031H0.9375V54.9219H2.9375ZM2.71581 42.331L35.3877 1.831L33.8311 0.575249L1.15919 41.0752L2.71581 42.331ZM34.6094 2.20312H52.9375V0.203125H34.6094V2.20312ZM51.9375 1.20312V42.1719H53.9375V1.20312H51.9375ZM52.9375 43.1719H62.4531V41.1719H52.9375V43.1719ZM61.4531 42.1719V54.9219H63.4531V42.1719H61.4531ZM36.7344 42.1719V16.9531H34.7344V42.1719H36.7344ZM34.9553 16.3261L14.6585 41.5449L16.2165 42.7989L36.5134 17.5801L34.9553 16.3261ZM15.4375 43.1719H35.7344V41.1719H15.4375V43.1719Z"
                        fill="#C4C4C4"/>
                  </svg>
                </div>
                <div class="col-9 col-sm-8 col-md-8 col-lg-9">
                  {{ translations.stepFour[selectedLocale] }}
                </div>
              </div>
            </div>
          </div>
          <div clas="row">
            <div class="row p-2">
              <div class="col-12 col-sm-12 col-md-1 col-lg-1"></div>
              <div class="col-12 col-sm-12 col-md-7 col-lg-5 mr-md-3 mr-5 m-sm-0 tour-final-v"
                   v-bind:class="[ form.pass === 'V' ? 'tour-final-v' : 'tour-final-s']">
                <div class="tour-final p-3">
                  <h5 v-if="form.pass === 'V'">VIP TOUR</h5>
                  <h5 v-if="form.pass === 'S'">STANDARD TOUR</h5>
                  <div class="row">
                    <label class="col-4" for="tourPersonName">{{ translations.guestName[selectedLocale] }}</label>
                    <input class="col-6 border-0" type="text" id="tourPersonName"
                           :value="userFIO" readonly></div>
                  <div class="row">
                    <label class="col-4" for="tourPersonEmail">E-mail</label>
                    <input class="col-6 border-0" type="email" class="tourClientEmail" id="tourPersonEmail"
                           :value="form.email" readonly></div>
                  <div class="row">
                    <label class="col-4" for="tourPersonPhone">{{ translations.guestPhone[selectedLocale] }}</label>
                    <input class="col-6 border-0" type="text" id="tourPersonPhone"
                           :value="form.phone" readonly></div>
                  <div class="row">
                    <label class="col-4" for="tourPersonHotel">{{ translations.guestHotel[selectedLocale] }}</label>
                    <input class="col-6 border-0" type="text" id="tourPersonHotel"
                           :value="form.hotelname" readonly>
                    <!--                                                <input v-for="(val, key) in hotels" v-if="key == form.hotel" :some-data="key" class="col-8 border-0" type="text" id="tourPersonHotel"-->
                    <!--                                                       :value="val" readonly>-->
                  </div>
                  <div class="row">
                    <label class="col-4" for="tourPersonRoom">Номер</label>
                    <input class="col-8 border-0" type="text" id="tourPersonRoom"
                           :value="roomName" readonly></div>
                </div>
              </div>
              <div class="col pt-3" v-html="translations.tourIncluded[selectedLocale]">
              </div>
            </div>
            <div class="row p-2">
              <div class="col-1"></div>
              <div class="col-12 col-sm-12 col-md-8 col-lg-5 p-0">
                <div class="col-12 col-sm-12 col-md-9 col-lg-9 p-0">
                  <input type="text" class="form-control rounded-0"
                         v-model.trim="form.promocode"
                         :placeholder="translations.guestPromoCode[selectedLocale]">
                </div>
              </div>
              <div class="col-4"></div>
            </div>
            <div class="row p-2">
              <div class="col-1"></div>
              <div class="col-12 col-sm-12 col-md-7 col-lg-5 form-check">
                <div class="row">
                  <label class="row">
                    <input v-model.trim="form.consent"
                           class="custom-control-input"
                           type="checkbox"
                           required>
                    <div class="border-0 mr-1 nsc-checkbox"
                         :class="[form.consent ? ' active' : '']"></div>
                    <div class="col" v-html="translations.guestAgreement[selectedLocale]"></div>
                  </label>
                </div>
              </div>
              <div class="col-4"></div>
            </div>
            <div class="row p-2">
              <div class="col-1"></div>
              <div class="col-12 col-sm-12 col-md-7 col-lg-5 form-check">
                <div class="row">
                  <label class="row">
                    <input v-model.trim="form.offer"
                           class="custom-control-input"
                           type="checkbox"
                           required>
                    <div class="border-0 mr-1 nsc-checkbox"
                         :class="[form.offer ? ' active' : '']"></div>
                    <div class="col" v-html="translations.guestOfferAccept[selectedLocale]">
                    </div>
                  </label>
                </div>
              </div>
              <div class="col-4"></div>
            </div>
          </div>
        </section>
        <section v-if="step === 6">
          <div class="row">
            <div class="col text-center">
              <div v-if="form.payed === 1">
                {{ translations.tourSuccess[selectedLocale] }}
              </div>
              <div v-if="form.payed !== 1">
                {{ translations.tourFail[selectedLocale] }}
              </div>
            </div>
          </div>
        </section>
        <div class="row col-12 d-flex pl-0 pr-0 ml-0 mr-0 mb-3 mt-sm-3 mt-3 mt-md-0 mt-lg-0 bg-nsc-grey">
          <button class="col-3 col-sm-3 col-md-2 col-lg-2 p-2 bd-highlight form-control col-2 rounded-0 nsc-button"
                  v-if="step !== 1"
                  @click.prevent="prevStep">{{ translations.stepPrevious[selectedLocale] }}
          </button>
          <div v-if="step > 1 && step < 5" class="row col-5 col-sm-7 col-lg-6 text-right nsc-tour-sum">
            <input type="text" class="nsw-tourid" value="<?= $tourID ?>" readonly hidden/>
            <input type="text" class="nsw-tournumber" value="<?= $tourNumber ?>" readonly hidden/>
            <input v-if="form.pass" type="text" class="nsw-tourname" :value="setTourName" readonly hidden/>
            <label for="toursum" class="col-8 col-sm-8 col-md-6 col-lg-8 align-middle">
              {{ translations.tourPriceText[selectedLocale] }}
            </label>
            <input class="col-4 border-0 nsw-toursum" type="text"
                   id="toursum"
                   name="toursum"
                   :value="calcTourPrice"
                   readonly/>
          </div>
          <button
              class="col-3 col-sm-3 col-md-2 col-lg-2 ml-auto p-2 bd-highlight form-control col-2 rounded-0 nsc-button"
              v-if="step !== totalsteps"
              @click.prevent="nextStep">{{ translations.stepNext[selectedLocale] }}
          </button>
          <?php $host == 'nswpay.ru' ? $token='qlsnf995gkvurbqpc3qm4nbvqs' : $token='5ul0u41eam2n3qpsuicfjim7fj' ?>
          <div
              class="col-4 col-sm-7 col-md-4 ml-auto p-2 bd-highlight form-control rounded-0 nsc-button"
              v-show="form.consent && form.offer"
              id="alfa-payment-button"
              data-token="<?= $token ?>"
              data-return-url="http://<?= $host ?>/?step=5&payed=1&tourNumber=<?= $tourNumber ?>"
              data-fail-url="http://<?= $host ?>/?step=5"
              data-language="ru"
              data-stages="1"
              data-amount-format="rubli"
              data-order-number-selector=".nsw-tournumber"
              data-amount-selector=".nsw-toursum"
              data-description-selector=".nsw-tourname"
              data-email-selector='.tourClientEmail'
              data-redirect=true
              :data-button-text="translations.buyTour[selectedLocale]"
              @click="saveVaucher(<?= $tourNumber ?>,<?= $tourID ?>)">
          </div>
        </div>
        <div class="invalid-feedback text-right" v-if="errors != null">{{ errors }}</div>
        <div class="row mb-3 ml-0 mr-0 footer">
          <div class="col-12 col-md-8 col-lg-8 order-12 order-md-1">
            <div class="row">
              <div class="col-1 p-0 text-center">
                <img src="images/svg/nsc-logo.svg" class="mb-2 nsc-logo">
                <p>ООО «НЬЮ СТАР»</p>
              </div>
              <div class="col-10 col-sm-6 col-md-6 col-lg-6">
                <p>ИНН 7842181512</p>
                <p>КПП 784201001</p>
                <p>Юридический адрес: 191040, Санкт-Петербург, </p>
                <p>Лиговский пр-кт, д. 50, строение Ф (корп.6), оф. 7</p>
                <p>Телефон 8 (812) 670-10-17</p>
              </div>
              <div class="col-12 col-sm-5 col-md-5 col-lg-5">
<!--                <p>{{ translations.newStarDesc[selectedLocale] }}</p>-->
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-12 col-md-4 col-lg-4 pr-0 text-md-right text-sm-left mb-3 order-1 order-md-12">
              <button id="externalButton" @click.prevent="showModal = true" class="btn btn-link p-0 link f1">
                <img src="images/svg/user-offer.svg" class="nsc-user-offer">{{ translations.userAgreement[selectedLocale] }}
              </button>
            <button class="btn btn-link p-0 link">
                <p v-for="(locale,code) in locales">
                  <a :data-lang-id="code" v-if="code!==selectedLocale" @click.prevent="setLocale(code)">{{ locale }}</a>
                </p>
            </button>
          </div>
        </div>
        <modal v-if="showModal" @close="showModal = false">
          <h3 slot="header">ПОЛЬЗОВАТЕЛЬСКОЕ СОГЛАШЕНИЕ.</h3>
          <div slot="body">
            <p><strong>1.Термины и определения </strong></p>
            <p>
              1.1 Настоящее Пользовательское соглашение (далее — «Соглашение») регламентирует отношения между ООО «Нью
              Стар Кэмп» (далее — Компания) — владельцем и обладателем всех прав в отношении Интернет-сервиса,
              расположенного в сети «Интернет» по адресу http://newstarcamp.ru (далее «Сайт») и физическим лицом (далее
              – Пользователь) по использованию сайта www.newstracamp.ru (далее – Сайт). Настоящее Соглашение является
              публичной офертой Компании. Используя Сайт, в том числе, путем просмотра страниц и материалов Сайта,
              Пользователь подтверждает, что он ознакомлен и согласен с Правовой информацией Сайта и настоящим
              Пользовательским соглашением и означает присоединение Пользователя к настоящему Соглашению и
              безоговорочное принятие его условий.
            </p>
            <p>
              <strong>2. Общие положения</strong>
            </p>
            <p>
              2.1. Использование сервисов и материалов Сайта регулируется нормами действующего законодательства
              Российской Федерации.
            </p>
            <p>
              2.2. Получая доступ к материалам Сайта, Пользователь считается присоединившимся к настоящему Соглашению.
              Настоящее Соглашение является публичной офертой.
            </p>
            <p>
              2.3. Администрация Сайта имеет право в любое время в одностороннем порядке изменять условия настоящего
              Соглашения. Изменения вступят в силу по истечении 3 (Трех) дней с момента публикации новой версии
              Соглашения на Сайте. При несогласии Пользователя с внесенными изменениями он обязан отказаться от доступа
              к Сайту, прекратить использование материалов и сервисов Сайта.
            </p>
            <p>
              <strong>3. Обязанности Пользователя </strong>
            </p>
            <p>
              3.1. Использование материалов Сайта, включая, но не ограничиваясь: тексты, статьи, публикации, новости,
              графические материалы, изображения, стилистические части дизайна Сайта или дизайн Сайта целиком без
              согласия правообладателей не допускается (статья 1270 Гражданского Кодекса РФ). Для правомерного
              использования материалов Сайта необходимо заключение лицензионных договоров (получение лицензий) от
              Правообладателей. Комментарии и иные записи Пользователя на Сайте не должны вступать в противоречие с
              требованиями законодательства Российской Федерации и общепринятых норм морали и нравственности.
            </p>
            <p>
              3.2. Пользователь Сайта обязуется не предпринимать действий, которые могут рассматриваться как
              нарушающие российское законодательство или нормы международного права, в том числе в сфере
              интеллектуальной собственности, авторских и/или смежных правах, а также любых действий, которые
              приводят или могут привести к нарушению нормальной работы Сайта и сервисов Сайта.
            </p>
            <p>
              3.3. При цитировании материалов Сайта, активная ссылка на Сайт обязательна (подпункт 1 пункта 1 статьи
              1274 Гражданского Кодекса РФ). Ссылка должна вести на страницу Сайта с цитируемым материалом.
            </p>
            <p>
              3.4. Пользователь предупрежден о том, что Администрация Сайта не несет ответственности за посещение и
              использование им внешних ресурсов, ссылки на которые могут содержаться на сайте.
            </p>
            <p>
              3.5. Пользователь согласен с тем, что Администрация Сайта не несет ответственности и не имеет прямых или
              косвенных обязательств перед Пользователем в связи с любыми возможными или возникшими потерями или
              убытками, связанными с любым содержанием Сайта, регистрацией авторских прав и сведениями о такой
              регистрации, товарами или услугами, доступными на или полученными через внешние сайты или ресурсы либо
              иные контакты Пользователя, в которые он вступил, используя размещенную на Сайте информацию или ссылки на
              внешние ресурсы.
            </p>
            <p>
              3.6. Пользователь обязуется не использовать без согласования с Компанией Сайт для привлечения внимания
              других Пользователей к товарам, работам или услугам, производимым, реализуемым, выполняемым или
              оказываемым Пользователем или иными лицами, не использовать Сайт для распространения рекламных материалов
              или материалов незаконной пропаганды.
            </p>
            <p>
              3.7. Пользователь осознает, что Сайт может содержать отдельные материалы, предназначенные только для
              Пользователей, достигших 18 лет.
            </p>
            <p>
              <strong>4. Ответственность Компании</strong>
            </p>
            <p>
              4.1 Компания не несет ответственность за содержание, достоверность и точность материалов, опубликованных
              Пользователями.
            </p>
            <p>
              4.2 Компания не несет ответственность за причинение вреда, ущерба, потерю информации или за причинение
              любых других убытков любым лицам, которые возникли при пользовании сервисом Сайта, в том числе с
              использованием мобильных средств связи и иных средств телекоммуникаций.
            </p>
            <p>
              4.3 Компания не несет ответственность за нарушение Пользователем авторских и иных прав третьих лиц путем
              опубликования материалов, не соответствующих действующему законодательству (в том числе авторскому),
              добавленных Пользователем на Сайт или переданных им Компании иным способом.
            </p>
            <p>
              <strong>5. Прочие условия и положения</strong>
            </p>
            <p>
              5.1. Все возможные споры, прямо или косвенно вытекающие из настоящего Соглашения или связанные с ним,
              подлежат разрешению в соответствии с действующим законодательством Российской Федерации.
            </p>
            <p>
              5.2. Ничто в Соглашении не может пониматься как установление между Пользователем и Администрации Сайта
              агентских отношений, отношений товарищества, отношений по совместной деятельности, отношений личного
              найма, либо каких-то иных отношений, прямо не предусмотренных Соглашением.
            </p>
            <p>
              5.3. Признание судом какого-либо положения Соглашения недействительным или не подлежащим принудительному
              исполнению не влечет недействительности иных положений Соглашения.
            </p>
            <p>
              5.4. Бездействие со стороны Администрации Сайта в случае нарушения кем-либо из Пользователей положений
              Соглашения не лишает Администрацию Сайта права предпринять позднее соответствующие действия в защиту
              своих интересов и защиту авторских прав на охраняемые в соответствии с законодательством материалы Сайта.
            </p>
            <p>
              Пользователь подтверждает, что ознакомлен со всеми пунктами настоящего Соглашения и безусловно принимает
              их.
            </p>
          </div>
        </modal>
        <modal v-if="showOffer" @close="showOffer = false">
          <h3 slot="header">Договор публичной оферты на оказание туристических услуг</h3>
          <div slot="body">
            <ol>
              <li><strong> Термины</strong></li>
              <li>Для целей настоящего Договора используются следующие термины:
                <ul>
                  <li>&laquo;<strong>Турист, туристский продукт, туристская путевка</strong>&raquo; &mdash; данные
                    термины толкуются в соответствии со ст.1 ФЗ 132-ФЗ от 24.11.1996 года &laquo;Об основах туристской
                    деятельности в Российской Федерации&raquo; с изменениями и дополнениями.
                  </li>
                  <li>&laquo;<strong>Турфирма</strong>&raquo; &mdash; ООО &laquo;Нью стар&raquo;, ИНН: 7842181512,
                    выступает в правоотношениях с конечным Пользователем или Туристом в качестве турагента.
                  </li>
                  <li>&laquo;<strong>Сайт</strong>&raquo; &mdash; вебсайт в сети Интернет, расположенный по адресу <a
                        href="http://www.nswpay.ru/">nswpay.ru</a>, права (в том числе право администрирования) на
                    которые в полном объеме принадлежат ООО &laquo;Нью стар&raquo;. Посещение (использование
                    инструментов) Сайта может производиться Пользователями как зарегистрированными на Сайте, так и
                    использующие Систему бронирования без такой регистрации.
                  </li>
                </ul>
              </li>
            </ol>
            <p>Сайт предоставляет Пользователю следующие виды сервисов:</p>
            <ol>
              <li>Доступ к каталогу (базе) туров с их описанием, с правом просмотра контента, не требующим регистрации
                на Сайте
              </li>
              <li>Доступ к средствам поиска и навигации Сайта</li>
              <li>Предоставление Пользователю возможности регистрации на Сайте (Личный кабинет, аккаунт), выбор и
                покупке тура
              </li>
              <li>Осуществление оплаты посредством банковских карт, Master Card, Visa</li>
              <li>Иные виды Сервисов, реализуемые на страницах Сайта
                <ul>
                  <li>&laquo;Содержание сайта&nbsp;(далее &mdash; Содержание)&raquo; &mdash; охраняемые результаты
                    интеллектуальной деятельности, включая тексты литературных произведений, их названия, предисловия,
                    аннотации, статьи, иллюстрации, обложки, музыкальные произведения с текстом или без текста,
                    графические, текстовые, фотографические, производные, составные и иные произведения,
                    пользовательские интерфейсы, визуальные интерфейсы, названия товарных знаков, логотипы, программы
                    для ЭВМ, базы данных, а также дизайн, структура, выбор, координация, внешний вид, общий стиль и
                    расположение данного Содержания,&nbsp;входящего в состав Сайта и другие объекты интеллектуальной
                    собственности все вместе и/или по отдельности, содержащиеся на сайте.
                  </li>
                  <li>&laquo;Пользователь&raquo;&nbsp;&mdash; физическое лицо, достигшее восемнадцати лет и заключившее
                    с Турфирмой настоящий Договор об использовании &laquo;Системы бронирования&raquo; для личного
                    бытового, семейного использования путем акцепта настоящей публичной оферты, выраженного в совершении
                    действий, выражающих его волю установить правоотношения, являющееся стороной по настоящему договору.
                  </li>
                  <li>&laquo;Турист&raquo; и &laquo;Пользователь&raquo; в процессе использования &laquo;Системы
                    бронирования&raquo; могут не совпадать в одном лице. В целях идентификации в качестве стороны по
                    Договору, которая приобретает права и обязанности как это понимается в ФЗ 132-ФЗ от 24.11.1996 года
                    &laquo;Об основах туристской деятельности в Российской Федерации&raquo;, Пользователь становится
                    Туристом при выполнении всех действий, требуемых &laquo;Системой бронирования&raquo; (свершении этих
                    действия, но не ограничиваясь ими: авторизация на сайте, выбор тура, ввод личных данных, оплата и
                    прочее).
                  </li>
                  <li>&laquo;Регистрация&raquo;&nbsp;&mdash; совокупность действий Пользователя, включая предоставление
                    Учетных данных и иной информации, совершаемых Пользователем с использованием специальной формы
                    пользовательского интерфейса Сайта в целях формирования Личного кабинета (аккаунта), получения
                    доступа к дополнительным сервисам Сайта.
                  </li>
                  <li>&laquo;Оферта (публичная оферта)&raquo; &mdash; реклама и иные предложения, адресованные
                    неопределенному кругу лиц, рассматриваются как приглашение делать оферты, если иное прямо не указано
                    в предложении, а так же содержащие все существенные условия договора предложение, из которого
                    усматривается воля лица, делающего предложение, заключить договор на указанных в предложении
                    условиях с любым, кто отзовется, признается офертой (публичной офертой).
                  </li>
                  <li>&laquo;Акцепт&raquo; &mdash; ответ лица, которому адресована оферта, о ее принятии. Ответ должен
                    быть полным и безоговорочным. Молчание не является акцептом, если иное не вытекает из закона, обычая
                    делового оборота или из прежних деловых отношений сторон. Совершение лицом, получившим оферту, в
                    срок, установленный для ее акцепта, действий по выполнению указанных в ней условий договора
                    (отгрузка товаров, предоставление услуг, выполнение работ, уплата соответствующей суммы и т.п.)
                    считается акцептом, если иное не предусмотрено законом, иными правовыми актами или не указано в
                    оферте.
                  </li>
                  <li>&laquo;Система бронирования&raquo; &mdash; предоставляет возможность Пользователю с помощью
                    сервисов Сайта искать и получать информацию о реализуемых третьими лицами туристических услугах.
                    Система бронирования позволяет осуществлять поиск и бронирование туров путем составления и передачи
                    по сети Интернет документов (Пользовательских распоряжений и уведомлений), подписываемых аналогом
                    собственноручной подписи. Организация работы Системы бронирования и оказание возмездных услуг по
                    учету взаимных обязательств сторон и валюты их выражения производится ООО &laquo;Нью стар&raquo;.
                  </li>
                  <li>&laquo;Пользовательский интерфейс&raquo; &mdash; часть Системы бронирования, доступная конкретному
                    Пользователю после его регистрации, идентификации и авторизации с использованием аналога
                    собственноручной подписи. Идентификационные и авторизационные данные для доступа к специальному
                    пользовательскому интерфейсу определены сторонами необходимыми и достаточными в виде пароля и
                    логина.
                  </li>
                  <li>&laquo;Туры&raquo; &mdash; услуги, описание которых содержится на Сайте, предлагаемые
                    Пользователям. В комплекс туристских услуг, составляющих туристский продукт, могут входить:
                  </li>
                </ul>
              </li>
              <li>Услуги по размещению</li>
              <li>Билет на фестиваль</li>
              <li>Иные услуги, указанные в Заявке на онлайн-бронирование</li>
            </ol>
            <p>&laquo;<strong>Платеж</strong>&raquo; &mdash; денежные средства, перечисленные Пользователем Турфирме для
              оплаты забронированных туров.</p>
            <p>&laquo;<strong>Авторизация</strong>&raquo; &mdash; процесс анализа на сервере Турфирмы введенных
              Пользователем идентификационных данных (информации, используемой для установления достоверности заявленной
              идентичности), по результатам которого определяется наличие у Пользователя права получить Услуги и/или
              использовать интерфейс пользователя.</p>
            <p>&laquo;<strong>Интернет эквайринг</strong>&raquo; &mdash; прием к оплате карт через Интернет с
              использованием специально разработанного web-интерфейса от банков или платежных систем, позволяющего
              провести расчёты в интернет-магазинах.</p>
            <p>В Договоре могут быть использованы термины, не определенные вышеперечисленными понятиями. В этом случае,
              толкование такого термина производится в соответствии с текстом Договора.</p>
            <p>&nbsp;</p>
            <ol>
              <li><strong> Предмет договора</strong></li>
            </ol>
            <p>1.1. Предметом настоящего договора является урегулирование правоотношений в сфере оказания услуг по
              бронированию и оплате туристского продукта посредством Системы бронирования, размещенной на Сайте.</p>
            <p>1.2. Туристский продукт, представленный в Системе бронирования на Сайте, формируется третьими лицами. В
              правоотношениях с Пользователями Турфирма выступает как агент.</p>
            <p>1.3. Турфирма предоставляет Пользователю (Туристу) достоверные сведения о составе и характеристиках
              услуг, входящих в туристский продукт. Услуги, входящие в туристский продукт, непосредственно оказываются
              Пользователю (Туристу) третьими лицами &mdash; отелем или иным средством размещения и прочими лицами,
              предоставляющими услуги, входящие в туристский продукт.</p>
            <p>&nbsp;</p>
            <ol start="2">
              <li><strong> Права и обязанности сторон</strong></li>
            </ol>
            <p>2.1. Взаимные права и обязанности Сторон по настоящему договору как это понимается в ФЗ 132-ФЗ от
              24.11.1996 года &laquo;Об основах туристской деятельности в Российской Федерации&raquo; возникают у
              Пользователя (Туриста) только после совершения действий по оплате туристского продукта (полностью или
              частично) согласно сервисам Системы бронирования.</p>
            <p>2.2. Турфирма обязуется:</p>
            <p>2.2.1.&nbsp; Предоставить Пользователю исправно работающую Систему бронирования, отвечающую целям, в
              которых данный договор заключается;</p>
            <p>2.2.2. Турфирма обязуется Предоставить Пользователю (Туристу) информацию о потребительских свойствах
              туристского продукта.</p>
            <p>Свое ознакомление с указанной информацией и получение соответствующих материалов (документов, которые
              допустимо предоставить в электронной форме) Пользователь (Турист) подтверждает путем проставления знака в
              соответствующем поле в Системе бронирования на Сайте.</p>
            <p>2.3. Турфирма не несет ответственности и не выплачивает никакого возмещения за расходы, понесенные
              Пользователем, если решением властей или ответственных лиц ему либо лицам, в интересах которых действует
              Пользователь, было отказано в возможности проживания в забронированной гостинице по следующим причинам:
              нарушение правопорядка, состояние алкогольного или наркотического опьянения, а также других нарушений, как
              например: хранение, провоз или распространение наркотиков, незаконное хранение или ношение оружия и прочие
              основания, предусмотренные действующим законодательством РФ.</p>
            <p>2.4. Турфирма не несет ответственности или не предлагает компенсацию в случаях изменения программы тура
              по причинам, находящимся вне сферы влияния Турфирмы, а именно: телесные повреждения, утрата вещей и
              документов, задержка и перенос рейсов, отмена полетных программ в страны туризма, технические поломки и
              механические повреждения самолетов, закрытие аэропортов, отмена автобусного и паромного сообщения,
              вызванные экстремальными погодными условиями, забастовками, войнами и т.д., т.е. событиями, имеющими
              характер непреодолимой силы (форс-мажорные обстоятельства), и другими независящими от Турфирмы
              причинами.</p>
            <p>2.5. Пользователь обязуется:</p>
            <p>2.5.1. Зарегистрироваться в Системе бронирования лично.</p>
            <p>2.5.2. Соблюдать Правила пользования Системой бронирования.</p>
            <p>2.5.3. Предоставлять достоверные и актуальные данные для регистрации и авторизации на сайте, а так же при
              заполнении полей, требующих внесения паспортных и иных личных данных, в целях получения услуг, являющихся
              предметом настоящего договора. Турфирма не несет ответственности за непредставление услуг по настоящему
              договору в случае предоставления Пользователем неверных (недостоверных) данных.</p>
            <p>Стороны соглашаются, что любое действие, совершенное из Личного кабинета Пользователя с использованием
              его учетных данных, считается действием, совершенным самим Пользователем лично или уполномоченным им лицом
              и устанавливает обязанности и ответственность для Пользователя в отношении таких действий, включая
              ответственность за нарушение настоящего договора, требований законодательства.</p>
            <p>2.5.4. Пользователь также обязуется:</p>
            <ol>
              <li>Не предпринимать никаких действий, которые могут привести к непропорционально большой нагрузке на
                инфраструктуру Сайта (Спам-атаки, рассылка вирусов, DdoS-атаки, хакерские атаки, иной
                несанкционированный доступ к Сайту и его Сервисам)
              </li>
              <li>Не&nbsp;копировать, не воспроизводить, не изменять, не распространять и не представлять общественности
                любую информацию, содержащуюся на Сайте (кроме Сведений, предоставленных самим Пользователем) без
                предварительного письменного разрешения Турфирмы любой третьей стороны
              </li>
              <li>Не&nbsp;препятствовать работе Сайта, а&nbsp;также не&nbsp;препятствовать действию автоматических
                систем или процессов, с&nbsp;целью заблокировать или ограничить доступ на Сайт
              </li>
            </ol>
            <p>&nbsp;</p>
            <ol start="3">
              <li><strong> Порядок заключения настоящего договора</strong></li>
            </ol>
            <p>3.1. Заключение Пользователем Договора с Турфирмой осуществляется акцептом публичной оферты путем
              последовательного совершения следующих действий, выражающих его волю установить правоотношение:</p>
            <p>- Ознакомление с условиями настоящего Договора об использовании Системы бронирования, приложениями и
              соглашениями к настоящему Договору, регулирующими взаимоотношения сторон и размещенными на Сайте</p>
            <p>- Регистрация на Сайте.</p>
            <p>&nbsp;</p>
            <p>3.2. Выполнение Пользователем действий, указанных в п. 3.1. означает заключение настоящего договора и
              влечет наступление правовых последствий. Заключение Договора означает, что Пользователь в необходимой для
              него степени ознакомился с условиями предоставления услуг, функционированием Системы бронирования,
              признает безусловную пригодность Системы бронирования для совершения действий, описанных на Сайте и в
              настоящем Договоре. Получение Турфирмой денежных средств и учет в Регистре забронированных туров
              подтверждает совершение Пользователем действий, перечисленных в пункте 3.1</p>
            <p>3.3. Для оказания Системой бронирования услуг Пользователь должен заполнить личные идентификационные
              данные &mdash; Имя пользователя (Логин) и E-mail. Пароль будет отправлен на указанный пользователем
              e-mail.</p>
            <p>С момента акцепта настоящей публичной оферты Пользователь является участником Системы бронирования
              исключительно в части получения и дальнейшего использования настоящего договора в виде электронного
              документа.</p>
            <p>3.4. Пользовательские распоряжения, требования и уведомления, формируемые с использованием Системы
              бронирования, подписываются аналогом собственноручной подписи Пользователя. Стороны договорились, что
              e-mail Пользователя &ndash; логин &ndash; и пароль определен ими как аналог собственноручной подписи
              (далее по тексту&nbsp;&mdash; АСП) Пользователя и признается Турфирмой и Пользователем в качестве
              однозначного и бесспорного подтверждения совершенных сделок, распоряжений, требований и уведомлений.</p>
            <p>&nbsp;</p>
            <ol start="4">
              <li><strong> Ответственность сторон</strong></li>
            </ol>
            <p>4.1. Турфирма не несет ответственность за перерывы в предоставлении Услуг в случае сбоев программного
              обеспечения или оборудования, не принадлежащих Турфирме.</p>
            <p>4.2. Турфирма не несет ответственность за полные или частичные прерывания предоставления Услуг, связанные
              с заменой оборудования, программного обеспечения или проведения других работ, вызванных необходимостью
              поддержания работоспособности и модернизации программного и/или аппаратного обеспечения.</p>
            <p>4.3. Турфирма не несет ответственность за функционирование и доступность отдельных сегментов сети
              Интернет.</p>
            <p>4.4. Турфирма не гарантирует возможность информационного обмена с теми узлами или серверами, которые
              временно или постоянно недоступны через ссылки, размещенные на Сайте.</p>
            <p>4.5. Турфирма не несёт ответственность за возможные нежелательные для Пользователя последствия, возникшие
              вследствие предоставления Пользователю телефонной консультации.</p>
            <p>4.6. Турфирма не несет ответственность за отсутствие учета Платежа Пользователя в системе в случае не
              поступления этого платежа на расчетный счет Турфирмы.</p>
            <p>4.7. Турфирма не несет ответственность за обеспечение безопасности оборудования и программного
              обеспечения Пользователя, используемого для получения Услуг.</p>
            <p>4.8. Турфирма не запрашивает, не хранит PIN и CCV2 коды по пластиковым картам и не несет ответственность
              за их сохранность, если они случайно или намеренно сообщены менеджерам турфирмы. Все операции по снятию
              денежных средств с пластиковых карт посредством интернет-эквайринга производятся на стороннем ресурсе,
              предоставленном Банком согласно договору об интернет-эквайринге.</p>
            <p>4.9. Пользователь несет ответственность за выполнение своих обязательств по Договору в соответствии с
              законодательством РФ.</p>
            <p>4.10. Пользователь не вправе использовать предоставляемые Турфирмой услуги в предпринимательской и
              посреднической деятельности.</p>
            <p>4.11. В случае безосновательного отзыва платежа, производившегося Пользователем на счет Турфирмы с
              использованием принадлежащей ему пластиковой карты Visa или Master Card, Пользователь обязан возместить
              Турфирме денежные средства в размере ста процентов от суммы отозванного из банка эмитента платежа и
              убытки, понесенные Турфирмой и банком эмитентом банковской карты.</p>
            <p>4.12. Пользователь самостоятельно несет ответственность и риск наступления неблагоприятных последствий в
              случае неточности или недостоверности данных, переданных Турфирме, посредством специального
              пользовательского интерфейса, для осуществления требуемых действий.</p>
            <p>4.13. Пользователь самостоятельно несет ответственность за выполнение договора об использовании Системы,
              приложений, соглашения и положений к настоящему договору, размещенных на сайте. В случае нарушения
              обязанностей, определенных вышеперечисленными документами, Турфирма вправе временно приостановить
              предоставление как всех Услуг, получаемых Пользователем по Договору, так и отдельных Услуг.</p>
            <p>4.14. Пользователь самостоятельно несет ответственность в соответствии с Законодательством РФ за все
              действия, предпринятые посредством пользования Услугами, а также их последствия.</p>
            <p>4.15. Пользователь самостоятельно несет ответственность за любые (в том числе несанкционированные)
              действия третьих лиц, имевшие место при использовании аналога собственноручной подписи, а также их
              последствия перед Турфирмой и третьими лицами.</p>
            <p>4.16. В случае утери пароля, являющегося составной частью аналога собственноручной подписи Турфирма
              восстанавливает ранее определенный пользователем пароль по запросу, с отправкой его на e-mail указанный
              при регистрации.</p>
            <p>4.17. Передавая свои личные (персональные) и идентификационные данные при регистрации и заполнении
              &laquo;аккаунта&raquo;, а также персональные данные о других лицах (сопровождающих участников тура)
              Пользователь гарантирует их подлинность и согласен с их дальнейшей обработкой и проверкой Турфирмой. В
              случае недостоверности предоставленных пользователем личных идентификационных данных, а также персональных
              данных о других лицах (сопровождающих его участников тура), Турфирма вправе расторгнуть настоящий Договор
              в одностороннем порядке.</p>
            <p>4.18. Акцептом настоящей оферты Пользователь признает применение АСП для подтверждения подлинности и
              аутентичности используемых в Системе бронирования, при этом Пользователь подтверждает, что электронные
              документы и данные, полученные от Системы бронирования и сформированные им для Системы бронирования,
              рассматриваются Пользователем как юридически значимый документ, составленный в письменной форме, исходящий
              и подписанный отправителем по всем правилам традиционного оформления документов в письменной форме.</p>
            <p>4.19. Одновременно с этим Пользователь предоставляет право Турфирме направлять в его адрес электронной
              почты материалы информационного характера, уведомляющие о предоставляемых услугах.</p>
            <p>4.20. Пользователь рассматривает настоящий Договор как документ в письменной форме, составленный по всем
              правилам традиционного оформления документов в письменной форме, надлежащим образом подписанный каждой из
              Сторон.</p>
            <p>&nbsp;</p>
            <ol start="5">
              <li><strong> Изменение и расторжение договора</strong></li>
            </ol>
            <p>5.1. Настоящий Договор может быть изменен или расторгнут по соглашению сторон или по иным основаниям,
              предусмотренным действующим законодательством или настоящим договором.</p>
            <p>5.2. Каждая из Сторон вправе потребовать изменения или расторжения настоящего договора в связи с
              существенным изменением обстоятельств, из которых стороны исходили при заключении договора.</p>
            <p>К существенным изменениям обстоятельств относятся:</p>
            <p>- ухудшение условий путешествия,</p>
            <p>- изменение сроков совершения путешествия,</p>
            <p>- невозможность совершения Туристом поездки по независящим от него обстоятельствам (по медицинским
              показаниям, что должно быть подтверждено соответствующим медицинским документом).</p>
            <p>5.3. Каждая их сторон вправе потребовать в судебном порядке изменения или расторжения договора в случае
              возникновения обстоятельств, свидетельствующих о возникновении в стране (месте) временного пребывания
              Туриста угрозы безопасности его жизни и здоровью, а равно опасности причинения вреда имуществу. Наличие
              обстоятельств, свидетельствующих о возникновении в стране (месте) временного пребывания Туриста угрозы
              безопасности его жизни и здоровью, а равно опасности причинения вреда имуществу, подтверждается
              соответствующими решениями федеральных органов государственной власти, органов государственной власти
              субъектов Российской Федерации, органов местного самоуправления, принимаемыми в соответствии с
              федеральными законами. При расторжении до начала путешествия договора в связи с наступлением
              обстоятельств, свидетельствующих о возникновении в стране (месте) временного пребывания Пользователя
              угрозы безопасности его жизни и здоровью, а равно опасности причинения вреда имуществу, Туристу
              возвращается Туроператором денежная сумма, равная цене туристского продукта, а после начала путешествия
              &mdash; ее часть в размере, пропорциональном стоимости не оказанных туристу услуг.</p>
            <p>5.4. В случае изменения или расторжения договора и (или) отказа Туриста от исполнения договора и (или)
              отказа Туриста от подтвержденного туристского продукта и (или) отмены поручения Туристом, Турист обязан
              возместить Турфирме расходы, понесенные Турфирмой при исполнении договора. Под расходами Турфирмы в данном
              случае понимаются фактически понесенные Турфирмой расходы, направленные на исполнение поручения Туриста, в
              том числе денежные средства, переданные Турфирмой Туроператору и иным лицам до момента получения от
              Пользователя письменного извещения об изменении или расторжении договора и (или) отказе Пользователя от
              исполнения договора и (или) отказе Туриста от подтвержденного туристского продукта и (или) отмене
              поручения Туристом).</p>
            <p>5.5. Несвоевременная или неполная оплата Туристом денежных средств по настоящему Договору,
              непредставление требуемых Турфирмой документов, сведений необходимых для исполнения договора,
              рассматриваются сторонами как односторонний отказ Пользователя от исполнения Договора с применением
              последствий, предусмотренных п. 6.4. договора.</p>
            <p>5.6. Турфирма вправе удержать причитающуюся ей вознаграждение и сумму расходов, понесенных Турфирмой при
              исполнении Договора, из денежных средств, оплаченных Пользователем Турфирме во исполнение договора.</p>
            <p>&nbsp;</p>
            <ol start="6">
              <li><strong> Обстоятельства непреодолимой силы</strong></li>
            </ol>
            <p>6.1. Турфирма освобождается от ответственности за частичное или полное неисполнение обязательств по
              настоящему Договору, если такое неисполнение произошло вследствие действия обстоятельств непреодолимой
              силы, в том числе землетрясений, наводнений, цунами, пожара, тайфуна, снежного заноса, военных действий,
              массовых заболеваний, забастовок, ограничений перевозок, запрета торговых операций с определенными
              странами, террористических актов и других обстоятельств, не зависящих от Турфирмы. В случае наступления
              обстоятельств непреодолимой силы каждая из сторон имеет право расторгнуть Договор с применением
              последствий, предусмотренных п. 16.4. настоящего договора.</p>
            <p>&nbsp;</p>
            <ol start="7">
              <li><strong> Основные положения при бронировании турпродукта посредством системы бронирования</strong>
              </li>
            </ol>
            <p>7.1. Бронирование и оплата.</p>
            <p>Бронирование тура производится посредством последовательного использования сервисов Системы бронирования
              Сайта &mdash; заполнения заявки на тур. Пользователь самостоятельно заполняет требуемые поля поиска тура
              (дата поездки, количество гостей, их возраст, подбор категории отеля), тем самым отбирает туристский
              продукт, наиболее полно отвечающий заданному критерию поиска. Пользователю так же могут быть предложены
              альтернативные варианты туристских продуктов, наиболее соответствующих заданным критериям поиска.</p>
            <p>Оплата выбранного Пользователем тура производится в личном кабинете с помощью банковской карты в день
              заказа, с 3 дня, следующего за днем заказа, заказ будет аннулирован. Если оплата производится банковской
              картой, держателем которой не является Пользователь, то пользователю будет выслано уведомление с просьбой
              подтвердить его намерение воспользоваться услугами по данному Договору.</p>
            <p>Получить документы на тур Турист может в личном кабинете. Электронные документы могут быть также высланы
              по электронной почте.</p>
            <p>7.2. Стоимость путевки.</p>
            <p>Турфирма оставляет за собой право повышать или снижать цены на туристические путевки, но при этом
              гарантирует, что цена своевременно оплаченной или предоплаченной туристической путевки, остается
              неизменной. Общая цена туристского продукта, забронированного Туристом и переданного Турфирме по договору,
              указывается соответственно в Заявке на бронирование и в Туристской путевке. Цена туристического продукта
              установлена в рублях.</p>
            <p>Турист предупрежден об условиях аннуляции тура и ее последствиях (возмещения фактически понесенных
              расходов) Туроператора, у которого забронирован турпакет. В момент заключения настоящего договора Турист
              получил информацию о потребительских свойствах туристического продукта: о программе пребывания, об
              условиях проживания (месте нахождения средства проживания, его категории) и питания, дополнительных
              необходимых Пользователю услугах.</p>
            <p>7.3. Аннуляция брони по инициативе Пользователя.</p>
            <p>Для целей настоящего пункта под бронью понимается&nbsp;&mdash; подтвержденный заказ.</p>
            <p>Пользователь имеет право аннулировать подтвержденный заказ на забронированный тур. Заявление об
              аннулировании должно быть представлено в электронной или письменной форме и подписано, или принято лицом,
              выполнявшим бронирование (при этом если такое заявление подано из личного кабинета Туриста, то считается,
              что его личность идентифицирована).</p>
            <p>Датой аннуляции заказа будет считаться день (исключая выходные и праздничные дни) получения Турфирмой
              электронного письма от Пользователя. В случае изменения или расторжения договора и (или) отказа Туриста от
              исполнения договора и (или) отказа Туриста от подтвержденного туристского продукта и (или) отмены
              поручения Туристом, Турист обязан возместить Турфирме расходы, понесенные Турфирмой при исполнении
              договора (штрафные санкции). Под расходами Турфирмы в данном случае понимаются фактически понесенные
              Турфирмой расходы, направленные на исполнение поручения Туриста, в том числе денежные средства, переданные
              Турфирмой отелю и другим третьим лицам до момента получения от Пользователя письменного извещения об
              изменении или расторжении договора и (или) отказе Пользователя от исполнения договора и (или) отказе
              Туриста от подтвержденного туристского продукта и (или) отмене поручения Туристом). При этом комиссия
              Турфирмы в размере 10 % от стоимости брони Туристу не возмещается.</p>
            <p>Аннуляция брони, произведенная как по инициативе Пользователя, так и по инициативе Турфирмы,
              Туроператора, но вызванная объективными, не зависящими от Сторон обстоятельствами (такие как отмена
              полетных программ) является основанием для выплаты денежных средств, внесенных Туристом за бронь (тур,
              подтвержденный заказ) в полном объеме. Возмещение уплаченных денежных средств производится не позднее 15
              дней на основании заявления Туриста, направленного Турфирме в письменной не позднее 14 дней с даты
              наступления обстоятельств, послуживших причиной аннуляции брони (тура, подтвержденного заказа).</p>
            <p>7.4. Изменение брони по инициативе Пользователя.</p>
            <p>При каждом изменении в забронированной заявке по инициативе Пользователя (замена отеля, типа размещения,
              питания, изменение фамилии, имени или их написания, изменение даты рождения, перенос вылета на другие
              даты, и т.п.) с Пользователя может быть взыскана дополнительная комиссия Турфирмы, в том числе фактические
              расходы Турфирмы.</p>
            <p>В случае опоздания Пользователя на самолет возврат стоимости тура может быть рассмотрен за минусом
              фактических расходов Турфирмы.</p>
            <p>7.5. Расчетный час в гостиницах/отелях</p>
            <p>В соответствии со ст.13 Правил предоставления гостиничных услуг в РФ плата за проживание в гостинице
              взимается в соответствии с единым расчетным часом &mdash; с 12 часов текущих суток по местному времени.
              При размещении до расчетного часа (с 0 до 12 часов) плата за проживание не взимается.</p>
            <p>В случае задержки выезда потребителя плата за проживание взимается в следующем порядке:</p>
            <p>- не более 6 часов после расчетного часа &mdash; почасовая оплата</p>
            <p>- от 6 до 12 часов после расчетного часа &mdash; плата за половину суток</p>
            <p>- от 12 до 24 часов после расчетного часа &mdash; плата за полные сутки (если нет почасовой оплаты) При
              проживании не более суток (24 часов) плата взимается за сутки независимо от расчетного часа. Исполнитель с
              учетом местных особенностей вправе изменить единый расчетный час.</p>
            <p>&nbsp;</p>
            <ol start="8">
              <li><strong> Порядок рассмотрения претензий</strong></li>
            </ol>
            <p>8.1. Все претензии, вытекающие из настоящего договора, принимаются Турфирмой и могут быть предъявлены
              только тем Пользователем, кто зарегистрирован на Сайте и идентифицирован в качестве стороны по настоящему
              договору в течение 20 дней с даты окончания поездки.</p>
            <p>8.2. Претензия направляется либо по электронной почте в разделе &laquo;обратная связь&raquo;, либо в
              письменном виде по адресу: 191040, Санкт-Петербург, Лиговский проспект, д. 50, лит. Ф, оф. 7А.</p>
            <p>В претензии должен быть указан почтовый адрес (иные контактные данные Туриста), по которому должен быть
              отправлен ответ.</p>
            <p>8.3. Срок рассмотрения и ответа на Претензию составляет 10 рабочих дней.</p>
            <p>8.4. В случае не урегулирования возникшей проблемной ситуации на месте, претензии к качеству туристского
              продукта предъявляются Туристом Туроператору в письменной форме в течение 20 дней со дня окончания
              действия договора и подлежат рассмотрению в течение 10 дней со дня получения претензий.</p>
            <p>&nbsp;</p>
          </div>
        </modal>
      </form>
    </div>
  </main>
  <footer class="row p-3 mb-5">
  </footer>
</div>
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vue-router"></script>
<script src="https://cdn.jsdelivr.net/npm/axios@0.12.0/dist/axios.min.js"></script>
<script src="js/app.min.js?rev=4ef9cd2617a7765e7313af50d0ebbc31"></script>
<script
    id="alfa-payment-script"
    type="text/javascript"
    src="https://pay2.alfabank.ru/assets/alfa-payment.js">
</script>
</body>
</html>
