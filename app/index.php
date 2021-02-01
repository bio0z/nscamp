<?php
$tourID = count(scandir('sent/')) + 1;
$host = $_SERVER['HTTP_HOST'];
$host == 'localhost' ? $path = 'nscamp/app/' : '';
$tourNumber = time();
$env = $host == 'nswpay.ru' ? 'prod' : 'test';
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
  <meta property="og:image" content="<?= $path ?>/images/meta-image.jpg">
  <meta
      content="Фестиваль New Star Camp пройдет 26 марта - 4 апреля 2021 года на всесезонном горном курорте «Роза Хутор» (Сочи)."
      property="description">
  <meta content="New Star Camp 2021" property="og:site_name">
  <meta content="New Star Camp 2021" property="og:title">

  <link rel="icon" href="<?= $path ?>images/favicon.ico">
  <link rel="apple-touch-icon" sizes="140x140" href="<?= $path ?>images/apple-touch-icon.png">
  <!-- Template Basic Images End -->

  <!-- Custom Browsers Color Start -->
  <meta name="theme-color" content="#000">
  <!-- Custom Browsers Color End -->

  <link rel="stylesheet" href="<?= $path ?>css/app.min.css?rev=1609615830">
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
                <button class="btn modal-default-button  nsc-button" @click.prevent="$emit('close')">
                  Согласен
                </button>
              </slot>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </script>
  <?php if ($env == 'prod') { ?>
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
            accurateTrackBounce: true,
            webvisor: true
        });
    </script>
    <noscript>
      <div><img src="https://mc.yandex.ru/watch/66145342" style="position:absolute; left:-9999px;" alt=""/></div>
    </noscript>
  <?php } ?>
</head>

<body>
<div id="orderForm" class="container" v-cloak>
  <header class="row m-0 mt-2">
    <div class="col-12 pb-3 lang-mob">
      <button class="btn btn-link p-0 link">
        <div v-for="(locale,code) in locales">
          <a :data-lang-id="code" v-if="code!==selectedLocale" @click.prevent="setLocale(code)">{{ locale }}</a>
        </div>
      </button>
    </div>
    <div class="col-8"><h1>{{ translations.title[selectedLocale] }}</h1></div>
    <div class="col text-right pt-2 nsc-logo">
      <a href="https://newstarcamp.ru">
        <img src="<?= $path ?>images/svg/nsc-logo.svg?v=2">
      </a>
    </div>
    <div class="col-1 lang-top">
      <button class="btn btn-link p-0 link">
        <div v-for="(locale,code) in locales">
          <a :data-lang-id="code" v-if="code!==selectedLocale" @click.prevent="setLocale(code)">{{ locale }}</a>
        </div>
      </button>
    </div>
  </header>
  <main class="row">
    <div class="col">
      <form class="needs-validation">
        <ul class="row p-3" id="progressbar">
          <li v-for="curStep in steps" :key="curStep.id"
              :class="['step' + curStep.id, curStep.col , 'p-0' ,curStep.text, step === curStep.id ? 'active' : '']">
            <span v-html="curStep.name[selectedLocale]"></span>
          </li>
        </ul>
        <section v-if="step === 1">
          <div class="row">
            <div class="col-12 col-sm-12 col-md-3 col-lg-3">
              <div class="row step-num">
                <div class="col-2 d-flex align-items-start flex-column p-0 mr-3 nsc-step-num">
                  <img src="<?= $path ?>images/svg/step1.svg?v=2"/>
                </div>
                <div class="col-6 col-sm-6 col-md-8 col-lg-8">
                  {{ translations.stepTour[selectedLocale] }}
                </div>
              </div>
            </div>
            <div class="col-12 col-sm-12 col-md-9 col-lg-9 mb-2 pl-0 pr-0">
              <div class="row justify-content-end">
                <div class="col-12 col-sm-6 col-md-6 col-lg-4 nsc-pass">
                  <label class="m-1 nsc-pass-label p-0"
                         v-bind:class="[!passSDetails ? 'nsc-pass-s' : 'nsc-pass-s-back']"
                         @click="setPassActive('S')"
                         ref="passSLabel">
                    <div class="row pass-front" id="pass-front">
                      <div class="f1 pass-detail-dt" v-if="passSDetails">
                        <div v-html="translations.passSDetailsFull[selectedLocale]"></div>
                        <div class="pass-price-dt" v-html="translations.passSDetails[selectedLocale]"></div>
                      </div>
                      <div class="pass-price" v-html="translations.passSDetails[selectedLocale]"></div>
                    </div>
                    <div class="row f1 pass-detail" id="pass-detail" v-if="passSDetails"
                         v-html="translations.passSDetailsFull[selectedLocale]">
                    </div>
                    <input type="radio" class="form-control "
                           v-model.trim="form.pass"
                           value="S"
                           hidden
                           required>
                  </label>
                  <div class="btn  nsc-button btn-more"
                       @click="showPassSDetail()">{{ translations.passDetails[selectedLocale] }}
                  </div>
                </div>
                <div class="col-12 col-sm-6 col-md-6 col-lg-4 nsc-pass">
                  <label class="m-1 nsc-pass-label p-0"
                         v-bind:class="[!passVDetails ? 'nsc-pass-v' : 'nsc-pass-v-back']"
                         @click="setPassActive('V')"
                         ref="passVLabel">
                    <div class="row pass-front" id="pass-front-v">
                      <div class="f1 pass-detail-dt" v-if="passVDetails">
                        <div v-html="translations.passVDetailsFull[selectedLocale]"></div>
                        <div class="pass-price-dt" v-html="translations.passVDetails[selectedLocale]"></div>
                      </div>
                      <div class="pass-price" v-html="translations.passVDetails[selectedLocale]"></div>
                    </div>
                    <div class="row f1 pass-detail" id="pass-detail-v" v-if="passVDetails"
                         v-html="translations.passVDetailsFull[selectedLocale]">
                    </div>
                    <input type="radio" class="form-control "
                           v-model.trim="form.pass"
                           value="V"
                           hidden
                           required>
                  </label>
                  <div class="btn  nsc-button btn-more"
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
                  <img src="<?= $path ?>images/svg/step2.svg?v=2"/>
                </div>
                <div class="col-6 col-sm-6 col-md-8 col-lg-8">
                  {{ translations.stepDates[selectedLocale] }}
                </div>
              </div>
            </div>
            <div class="col-12 col-sm-12 col-md-8 col-lg-8 p-sm-2">
              <div class="row">
                <div class="col-12 col-sm-12 col-md-6 col-lg-6 pt-2 pb-2">
                  <vuejs-datepicker
                      input-class="form-control nsc-select"
                      calendar-class="datepicker"
                      v-model="form.dateFrom"
                      :placeholder="translations.dateFrom[selectedLocale]"
                      open-date="2021-03-26"
                      monday-first="true"
                      bootstrap-styling="true"
                      :disabled-dates=disabledDates
                  >
                  </vuejs-datepicker>
                  <!--                  <input class="form-control  nsc-select"-->
                  <!--                         type="date" v-model="form.dateFrom"-->
                  <!--                         :placeholder="translations.dateFrom[selectedLocale]"/>-->
                </div>
                <div class="col-12 col-sm-12 col-md-6 col-lg-6 pt-2 pb-2">
                  <!--                  <input class="form-control  nsc-select"-->
                  <!--                        type="date" v-model="form.dateTill"-->
                  <!--                        :placeholder="translations.dateTill[selectedLocale]"/>-->
                  <vuejs-datepicker
                      input-class="form-control  nsc-select"
                      calendar-class="datepicker"
                      v-model="form.dateTill"
                      :placeholder="translations.dateTill[selectedLocale]"
                      open-date="2021-04-01"
                      monday-first="true"
                      bootstrap-styling="true"
                      :disabled-dates=disabledDates
                  >
                  </vuejs-datepicker>
                </div>
              </div>
              <div class="row">
                <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                </div>
                <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                  <div class="pt-2 pb-2 nsc-datesnote">
<!--                    <span>{{ translations.dateNote[selectedLocale] }}</span>-->
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                </div>
                <div class="col-12 col-sm-12 col-md-6 col-lg-6 pt-2 pb-2">
                  <!--                  <input class="form-control custom-select  nsc-select"-->
                  <!--                         type="text" v-model.number="form.adults"-->
                  <!--                         :placeholder="translations.tourAdults[selectedLocale]"/>-->
                  <select v-model.number="form.adults"
                          class="custom-select  nsc-select"
                          :placeholder="translations.tourAdults[selectedLocale]"
                          required>
                    <option value="" disabled selected>{{ translations.tourAdults[selectedLocale] }}</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                  </select>
                </div>
              </div>
              <div class="row">
                <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                </div>
                <div class="col-12 col-sm-12 col-md-6 col-lg-6 pt-2 pb-2">
                  <!--                  <select v-model.number="form.kids"-->
                  <!--                          class="custom-select  nsc-select"-->
                  <!--                          :placeholder="translations.tourKids[selectedLocale]"-->
                  <!--                          required>-->
                  <!--                    <option value="" disabled selected>{{ translations.tourKids[selectedLocale] }}</option>-->
                  <!--                    <option value="0">без детей</option>-->
                  <!--                    <option value="1">1</option>-->
                  <!--                    <option value="2">2</option>-->
                  <!--                  </select>-->
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
                  <img src="<?= $path ?>images/svg/step3.svg?v=2"/>
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
                            class="custom-select  nsc-select"
                            @change="showHotelPhoto"
                            required>
                      <option value="" disabled selected>{{ translations.hotelType[selectedLocale] }}</option>
                      <option v-for="hotel in activeHotels" :value=hotel.code>{{ hotel.name }}</option>
                    </select>
                  </div>
                </div>
                <div class="col-12 col-sm-12 col-md-6 col-lg-6 pb-2">
                  <div>
                    <select v-model.trim="form.room"
                            class="custom-select  nsc-select"
                            @change="showRoomPhoto"
                            required>
                      <option value="" disabled selected>{{ translations.roomType[selectedLocale] }}</option>
                      <option v-for="room in activeHotelRooms" :value=room.code>{{ room.name }}</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-12 col-sm-12 col-md-6 col-lg-6 pb-2">
                  <div>
                    <select v-model.trim="form.bed"
                            class="custom-select  nsc-select"
                            @change="showRoomPhoto"
                            required>
                      <option value="" disabled selected>{{ translations.bedType[selectedLocale] }}</option>
                      <option v-for="bed in activeRoomBeds" :value=bed.name>{{ bed.name }}</option>
                    </select>
                  </div>
                </div>
                <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                  <label v-if="form.hotel !== 'RIL' && form.hotel !== 'VALBAZ' && form.hotel !== 'FREEBAZ' && form.hotel !== 'ROS'" class="row m-0">
                    <input v-model.trim="form.hotelBreakfast"
                           class="custom-control-input"
                           type="checkbox"
                           required/>
                    <div class="border-0 mr-1 nsc-bf-checkbox"
                         :class="[form.hotelBreakfast ? ' active' : '']"></div>
                    <div class="col" v-html="translations.hotelBreakfast[selectedLocale]"></div>
                  </label>
                  <label v-if="form.hotel === 'RIL' || form.hotel === 'ROS'" class="row m-0">
                    <div class="col" v-html="translations.hotelBreakfastIncluded[selectedLocale]"></div>
                  </label>
                  <label v-if="form.hotel === 'VALBAZ' || form.hotel === 'FREEBAZ'" class="row m-0">
                    <div class="col" v-html="translations.hotelBreakfastNotIncluded[selectedLocale]"></div>
                  </label>
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
                  <div :data-val="currentHotel">
                    <h3>{{ hotels[currentHotel].name }}</h3>
                    <div class="f1" ref="hotelText">{{ hotels[currentHotel].desc[selectedLocale] }}</div>
                  </div>
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-6 p-0 hotel-photo text-right order-1 order-lg-12">
                  <button type="button" aria-label="Previous Photo" class="gallery previous" @click="previousPhoto()">
                    <
                  </button>
                  <div :hotel-id="currentHotel" ref="hotelDiv" class="hotel-gallery">
                    <img image-id='0' class="img-fluid active" ref="hotelImage"
                         :id="hotels[currentHotel].code" :src="hotels[currentHotel].gallery[0]"
                         :alt="hotels[currentHotel].name"/>
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
            <div class="col-12 col-sm-12 col-md-6 col-lg-4">
              <div class="row step-num">
                <div class="col-2 d-flex align-items-start flex-column p-0 mr-3 nsc-step-num">
                  <img src="<?= $path ?>images/svg/step4.svg?v=2"/>
                </div>
                <div class="col-6 col-sm-6 col-md-8 col-lg-8">
                  {{ translations.stepThree[selectedLocale] }}
                </div>
              </div>
            </div>
            <div class="col-12 col-sm-12 col-md-6 col-lg-8 pt-sm-2" id="Guests">
              <div class="form-row">
                <h5>{{ translations.firstGuest[selectedLocale] }}</h5>
                <div class="col-md-12 mb-4">
                  <input v-model.trim="form.fname" name="fname" type="text"
                         class="form-control "
                         :placeholder="translations.guestName[selectedLocale]"
                         required>
                </div>
                <div class="col-md-12 mb-4">
                  <input v-model.trim="form.sname" type="text"
                         class="form-control "
                         :placeholder="translations.guestSurname[selectedLocale]"
                         required>
                </div>
                <div class="col-md-12 mb-4">
                  <input type="email" v-model.trim="form.email"
                         class="form-control "
                         placeholder="E-Mail"
                         required>
                </div>
                <div class="col-md-12 mb-4">
                  <input type="phone"
                         v-model.trim="form.phone"
                         name="phone"
                         id="phone"
                         autocomplete="tel"
                         class="form-control "
                         :placeholder="translations.guestPhone[selectedLocale]"
                         maxlength="17"
                         v-phone
                         pattern="\+7\s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}"
                         required>
                </div>
              </div>
              <div class="form-row" v-if="form.adults >= 2">
                <h5>{{ translations.secondGuest[selectedLocale] }}</h5>
                <div class="col-md-12 mb-4">
                  <input v-model.trim="form.gfname" name="gfname" type="text"
                         class="form-control "
                         :placeholder="translations.guestName[selectedLocale]"
                         required>
                </div>
                <div class="col-md-12 mb-4">
                  <input v-model.trim="form.gsname" type="text"
                         class="form-control "
                         :placeholder="translations.guestSurname[selectedLocale]"
                         required>
                </div>
              </div>
              <div class="form-row" v-if="form.adults >= 3">
                <h5>{{ translations.thirdGuest[selectedLocale] }}</h5>
                <div class="col-md-12 mb-4">
                  <input v-model.trim="form.g3fname" type="text"
                         class="form-control"
                         :placeholder="translations.guestName[selectedLocale]"
                         required>
                </div>
                <div class="col-md-12 mb-4">
                  <input v-model.trim="form.g3sname" type="text"
                         class="form-control"
                         :placeholder="translations.guestSurname[selectedLocale]"
                         required>
                </div>
              </div>
              <div class="form-row" v-if="form.adults >= 4">
                <h5>{{ translations.fourthGuest[selectedLocale] }}</h5>
                <div class="col-md-12 mb-4">
                  <input v-model.trim="form.g4fname" type="text"
                         class="form-control"
                         :placeholder="translations.guestName[selectedLocale]"
                         required>
                </div>
                <div class="col-md-12 mb-4">
                  <input v-model.trim="form.g4sname" type="text"
                         class="form-control"
                         :placeholder="translations.guestSurname[selectedLocale]"
                         required>
                </div>
              </div>
              <div class="form-row" v-if="form.adults >= 5">
                <h5>{{ translations.fifthGuest[selectedLocale] }}</h5>
                <div class="col-md-12 mb-4">
                  <input v-model.trim="form.g5fname" type="text"
                         class="form-control"
                         :placeholder="translations.guestName[selectedLocale]"
                         required>
                </div>
                <div class="col-md-12 mb-4">
                  <input v-model.trim="form.g5sname" type="text"
                         class="form-control"
                         :placeholder="translations.guestSurname[selectedLocale]"
                         required>
                </div>
              </div>
              <div class="form-row" v-if="form.adults === 6">
                <h5>{{ translations.sixGuest[selectedLocale] }}</h5>
                <div class="col-md-12 mb-4">
                  <input v-model.trim="form.g6fname" type="text"
                         class="form-control"
                         :placeholder="translations.guestName[selectedLocale]"
                         required>
                </div>
                <div class="col-md-12 mb-4">
                  <input v-model.trim="form.g6sname" type="text"
                         class="form-control"
                         :placeholder="translations.guestSurname[selectedLocale]"
                         required>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section v-if="step === 5">
          <div class="row">
            <div class="col-12 col-sm-12 col-md-12 col-lg-12">
              <div class="row step-num">
                <div class="col-2 col-sm-2 col-md-1 col-lg-1 d-flex align-items-start flex-column p-0 nsc-step-num">
                  <img src="<?= $path ?>images/svg/step5.svg?v=2"/>
                </div>
                <div class="col-10">
                  {{ translations.stepFour[selectedLocale] }}
                </div>
              </div>
            </div>
          </div>
          <div clas="row">
            <div class="row p-2">
              <div class="col-12 col-sm-12 col-md-6 col-lg-6"
                   v-bind:class="[ form.pass === 'V' ? 'tour-final-v' : 'tour-final-s']">
                <div class="tour-final tourIncluded p-3">
                  <h5 v-if="form.pass === 'V'">VIP TOUR</h5>
                  <h5 v-if="form.pass === 'S'">STANDARD TOUR</h5>
                  <div class="row">
                    <label class="col-4" for="tourPersonName">{{ translations.guestName[selectedLocale] }}</label>
                    <input class="col-8 border-0" type="text" id="tourPersonName"
                           :value="userFIO" readonly></div>
                  <div class="row">
                    <label class="col-4" for="tourPersonGuests">{{ translations.guestsName[selectedLocale] }}</label>
                    <input class="col-8 border-0" type="text" id="tourPersonGuests"
                           :value="guestsNum" readonly></div>
                  <div class="row">
                    <label class="col-4" for="tourPersonEmail">E-mail</label>
                    <input class="col-8 border-0" type="email" class="tourClientEmail" id="tourPersonEmail"
                           :value="form.email" readonly></div>
                  <div class="row">
                    <label class="col-4" for="tourPersonPhone">{{ translations.guestPhone[selectedLocale] }}</label>
                    <input class="col-8 border-0" type="text" id="tourPersonPhone"
                           :value="form.phone" readonly></div>
                  <div class="row">
                    <label class="col-4" for="tourPersonHotel">{{ translations.guestHotel[selectedLocale] }}</label>
                    <input class="col-8 border-0" type="text" id="tourPersonHotel"
                           :value="form.hotelName" readonly>
                    <!--                                                <input v-for="(val, key) in hotels" v-if="key == form.hotel" :some-data="key" class="col-8 border-0" type="text" id="tourPersonHotel"-->
                    <!--                                                       :value="val" readonly>-->
                  </div>
                  <div class="row">
                    <label class="col-4" for="tourPersonRoom">Номер</label>
                    <input class="col-8 border-0" type="text" id="tourPersonRoom"
                           :value="roomName" readonly></div>
                </div>
              </div>
              <div class="col-12 col-sm-12 col-md-1 col-lg-1"></div>
              <div class="col pt-3">
                <div class="tourIncluded" v-html="translations.tourIncluded[selectedLocale]">
                </div>
                <div class="row">
                  <input type="text" class="form-control col promocode"
                         v-model.prevent="promocode"
                         :placeholder="translations.guestPromoCode[selectedLocale]">
                  <div class="form-control col  nsc-button"
                       @click.prevent="applyPromoCode()">
                    {{ translations.guestPromoCodeApply[selectedLocale] }}
                  </div>
<!--                  <div class="col" v-if="form.passDiscount < 1">-->
<!--                    {{ translations.guestPromoCodeDiscount[selectedLocale] }}-->
<!--                  </div>-->
                </div>
              </div>
            </div>
            <div class="row p-2">
              <div class="col-12 col-sm-12 col-md-6 col-lg-6 form-check">
                <div class="row">
                  <label for="guestAgreement">
                    <input v-model.trim="form.consent"
                           class="custom-control-input"
                           type="checkbox"
                           id="guestAgreement"
                           required>
                    <div class="border-0 mr-1 nsc-checkbox"
                         :class="[form.consent ? ' active' : '']"></div>
                  </label>
                  <div class="col-9">
                    <p>
                      {{ translations.guestAgreement[selectedLocale] }}
                      <span class="nsc-btn-link" @click.prevent="showModal = true">
                        {{ translations.guestAgreement1[selectedLocale] }}</span>
                      {{ translations.guestAgreement2[selectedLocale] }}
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-12 col-sm-12 col-md-1 col-lg-1"></div>
              <div class="col-12 col-sm-12 col-md-5 col-lg-5 form-check">
                <div class="row">
                  <label for="guestOfferAccept">
                  <input v-model.trim="form.offer"
                         class="custom-control-input"
                         type="checkbox"
                         id="guestOfferAccept"
                         required>
                  <div class="border-0 nsc-checkbox"
                       :class="[form.offer ? ' active' : '']"></div>
                  </label>
                  <div class="col-9">
                    <p>
                      {{ translations.guestOfferAccept[selectedLocale] }}
                      <span class="nsc-btn-link" @click.prevent="showOffer = true">
                        {{ translations.guestOfferAccept1[selectedLocale] }}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section v-if="step === 6">
          <div class="row">
            <div class="col text-center">
              <div v-if="form.payed === 1" v-html="translations.tourSuccess[selectedLocale]">
              </div>
              <div v-if="form.payed !== 1" v-html="translations.tourFail[selectedLocale]">
              </div>
            </div>
          </div>
        </section>
        <div>
          <div class="invalid-feedback" v-if="errors != null">{{ errors }}</div>
        </div>
        <div class="row col-12 d-flex pl-0 pr-0 ml-0 mr-0 mb-3 mt-sm-3 mt-3 mt-md-0 mt-lg-0 bg-nsc-grey">
          <button class="col-3 col-sm-3 col-md-2 col-lg-2 p-2 bd-highlight form-control col-2  nsc-button"
                  v-if="step !== 1"
                  @click.prevent="prevStep">{{ translations.stepPrevious[selectedLocale] }}
          </button>
          <div v-if="step > 2 && step < 6" class="row col-5 col-sm-6 col-lg-6 text-right nsc-tour-sum">
            <input type="text" class="nsw-tourid" value="<?= $tourID ?>" readonly hidden/>
            <input type="text" class="nsw-tournumber" value="<?= $tourNumber ?>" readonly hidden/>
            <input v-if="form.pass" type="text" class="nsw-tourname" :value="setTourName" readonly hidden/>
            <label v-if="this.form.room" for="toursum"
                   class="col-7 col-sm-7 col-md-7 col-lg-7 align-middle nsw-toursum-label">
              {{ translations.tourPriceText[selectedLocale] }}
            </label>
            <input class="col-5 border-0 nsw-toursum"
                   v-if="this.form.room"
                   type="text"
                   id="toursum"
                   name="toursum"
                   :value="calcTourPrice"
                   readonly
            />
          </div>
          <button
              class="col-3 col-sm-3 col-md-2 col-lg-2 ml-auto p-2 bd-highlight form-control col-2  nsc-button"
              v-if="step !== totalsteps"
              @click.prevent="nextStep">{{ translations.stepNext[selectedLocale] }}
          </button>
          <?php $env == 'prod' ? $token = 'qlsnf995gkvurbqpc3qm4nbvqs' : $token = '5ul0u41eam2n3qpsuicfjim7fj' ?>
          <?php if ($env == 'prod') { ?>
            <div
                class="col-4 col-sm-4 col-md-4 ml-auto p-2 bd-highlight form-control  nsc-button"
                v-show="form.consent && form.offer"
                id="alfa-payment-button"
                data-token="<?= $token ?>"
                data-return-url="http://<?= $host ?>/?step=6&par=0&tourNumber=<?= $tourNumber ?>"
                data-fail-url="http://<?= $host ?>/?step=6"
                data-language="ru"
                data-stages="1"
                data-amount-format="rubli"
                data-order-number-selector=".nsw-tournumber"
                data-amount-selector=".nsw-toursum"
                data-description-selector=".nsw-tourname"
                data-email-selector='.tourClientEmail'
                data-redirect=true
                :data-button-text="translations.buyTour[selectedLocale]"
                @click="saveVoucher(<?php echo $tourNumber ?>,<?php echo $tourID ?>)">
            </div>
          <?php } ?>
          <?php if ($env == 'test') { ?>
            <div v-show="form.consent && form.offer"
                 class="col-4 col-sm-4 col-md-4 ml-auto p-2 bd-highlight form-control  nsc-button"
                 @click="saveVoucher(<?php echo $tourNumber ?>,<?php echo $tourID ?>)">
              Создать ваучер
            </div>
            <div v-show="form.consent && form.offer"
                 class="col-4 col-sm-4 col-md-4 ml-auto p-2 bd-highlight form-control  nsc-button"
                 @click="sendMail(<?php echo $tourNumber ?>)">
              Отправить письмо
            </div>
          <?php } ?>
        </div>
        <div class="row mb-3 ml-0 mr-0 footer">
          <div class="col-12 col-md-8 col-lg-8 order-12 order-md-1">
            <div class="row nsc-btn-link">
              <a href="https://newstarcamp.ru/participants" target="_blank">
                {{ translations.newStarFAQ[selectedLocale] }}
              </a>
            </div>
            <div class="row m-0">
              <div class="col-1 p-0 text-center">
                <img src="<?= $path ?>images/svg/wnsc-logo.svg?v=2" class="mb-2 nsc-logo">
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
            <div class="row m-0 p-1">
              <button id="externalButton" @click.prevent="showModal = true" class="btn nsc-btn-link p-0 link f1">
                <img src="<?= $path ?>images/svg/user-offer.svg?v=2" class="nsc-user-offer"/>
                {{ translations.userAgreement[selectedLocale] }}
              </button>
            </div>
          </div>
        </div>
        <modal v-if="showModal" @close="showModal = false">
          <h3 slot="header">Политика конфиденциальности в отношении обработки персональных данных.</h3>
          <div slot="body">
          <p>&nbsp;</p>
          <ol>
            <li><strong>Общие положения.</strong></li>
          </ol>
          <p>&nbsp;</p>
          <p>Назначением настоящей политики конфиденциальности (далее по тексту &mdash; Политика) является обеспечение защиты прав и свобод человека и гражданина при обработке его персональных данных.</p>
          <p>Настоящая Политика вступает в силу после опубликования на сайте Оператора.</p>
          <p>1.2 Основные понятия.</p>
          <p>Персональные данные&nbsp;- любая информация, относящаяся прямо или косвенно к определенному или определяемому субъекту персональных данных (фамилия, имя, электронная почта, номер телефона, сведения о заказе (дата заезда, дата выезда, место пребывания)).</p>
          <p>Оператор&nbsp;- администрация сайта <a href="https://nswpay.ru/">https://nswpay.ru/</a> (ООО "Нью Стар"), определяющая цели обработки персональных данных, состав персональных данных, подлежащих обработке, действия (операции), совершаемые с персональными данными;</p>
          <p>Обработка персональных данных&nbsp;- любое действие (операция) или совокупность действий (операций), совершаемых с использованием средств автоматизации или без использования таких средств с персональными данными, включая сбор, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передачу (распространение, предоставление, доступ), обезличивание, блокирование, удаление, уничтожение персональных данных;</p>
          <p>Конфиденциальность персональных данных&nbsp;-требование предъявляемое к операторам получившим персональные данные от субъектов персональных данных о не раскрытии полученных данных третьим лицам, а также обязанность не распространять персональные данные без согласия субъекта персональных данных.</p>
          <p>Субъект персональных данных&nbsp;- клиент, который прямо или косвенно определен или определяемый с помощью персональных данных, в том числе посетители сайта.</p>
          <p>&nbsp;</p>
          <ol start="2">
            <li><strong>Права и обязанности.</strong></li>
          </ol>
          <p>&nbsp;</p>
          <p>2.1&nbsp;Субъект персональных данных в праве:</p>
          <ol>
            <li>Получать информацию, касающуюся обработки его персональных данных.</li>
            <li>Требовать от оператора уточнения его персональных данных, их блокирования или уничтожения в случае, если персональные данные являются неполными, устаревшими, неточными, незаконно полученными или не являются необходимыми для заявленной цели обработки, а также принимать предусмотренные законом меры по защите своих прав.</li>
            <li>Отозвать свое согласия на обработку персональных данных.</li>
            <li>Вправе обжаловать действия или бездействие оператора в уполномоченный орган по защите прав субъектов персональных данных или в судебном порядке, если считает, что оператор осуществляет обработку его персональных данных с нарушением требований законодательства РФ или иным образом нарушает его права и свободы.</li>
            <li>Имеет право на защиту своих прав и законных интересов, в том числе на возмещение убытков и (или) компенсацию морального вреда в судебном порядке.</li>
            <li>Предоставлять персональные данные третьих лиц (данные другого человека) только с согласия указанных лиц. При этом Субъекту необходимо убедиться, что лицо или лица, чьи персональные данные он предоставил, осведомлены об этом, понимают и согласны с тем, как Оператор использует их данные (как описано в данном Положении о конфиденциальности), так как это является ответственностью Субъекта (лица, которое предоставляет персональные данные третьих лиц).</li>
          </ol>
          <p>2.2&nbsp;Оператор обязан:</p>
          <ol>
            <li>Предоставить по запросу субъекта персональных данных информацию касающуюся обработки его персональных данных, либо предоставить отказ в течение тридцати дней̆ с даты получения запроса субъекта персональных данных в случаях предусмотренных законом.</li>
          </ol>
          <p>Разъяснить субъекту персональных данных юридические последствия отказа предоставить персональные данные, если предоставление персональных данных, является обязательным в соответствии с федеральным законом.</p>
          <ol start="2">
            <li>Прекратить обработку персональных данных, в случае отзыва субъектом персональных данных согласия на обработку его персональных данных.</li>
            <li>Опубликовать в сети Интернет и обеспечить неограниченный̆ доступ с использованием сети Интернет к документу, определяющему его политику в отношении обработки персональных данных.</li>
          </ol>
          <p>2.3&nbsp;Оператор вправе:</p>
          <p>Вносить изменения в настоящую Политику обработки персональных данных по своему усмотрению и в соответствии с Федеральным законом от 27.07.2006 N 152-ФЗ "О персональных данных". Субъекты персональных данных самостоятельно ознакамливаются с изменениями политики персональных данных, путем прочтения документа содержащего Политику персональных данных, размещенного на сайте Оператора. Новая редакция Политики вступает в силу с момента ее размещения.</p>
          <p>&nbsp;</p>
          <ol start="3">
            <li><strong>Объем и категории обрабатываемых персональных данных, субъектов персональных данных</strong></li>
          </ol>
          <p>&nbsp;</p>
          <p>Оператор обрабатывает персональные данные Пользователя только в случае их заполнения и/или отправки Пользователем самостоятельно через специальные формы, расположенные на сайте&nbsp;<a href="https://nswpay.ru/">https://nswpay.ru/</a>. Заполняя соответствующие формы и/или отправляя свои персональные данные Оператору, Пользователь выражает свое согласие с данной Политикой.</p>
          <p>Оператор в том числе может собирать и обрабатывать сведения, не являющимися персональными данными. Оператор автоматически получает некоторые виды информации, получаемой в процессе взаимодействия пользователей с сайтом, таких как веб-протоколы, &laquo;cookie&raquo;, веб-отметки.</p>
          <p>При этом веб-отметки, &laquo;cookie&raquo; и другие мониторинговые технологии не дают возможность автоматически получать персональные данные. Файлы &laquo;cookie&raquo; используются для улучшения доступа к сайту и определения повторных посещений. Кроме того, они позволяют отследить наиболее интересующие запросы. Файлы &laquo;cookie&raquo; не передают никакую конфиденциальную информацию&raquo;.</p>
          <p>Сайт содержит ссылки на иные веб-ресурсы, где может находиться полезная и интересная для пользователей сайта информация. При этом действие настоящей Политики не распространяется на такие иные сайты.</p>
          <p>Оператор публикует на сайте документ, определяющий его политику в отношении обработки персональных данных.</p>
          <p>&nbsp;</p>
          </div>
        </modal>
        <modal v-if="showOffer" @close="showOffer = false">
          <h3 slot="header">Договор публичной оферты</h3>
          <div slot="body">
          <p>Общество с ограниченной ответственностью "Нью стар" (ИНН&nbsp;7842181512 КПП 784201001&nbsp;ОГРН 1207800067683), далее именуемое &laquo;Продавец&raquo;, публикует данную публичную оферту (далее &ndash; &laquo;Оферта&raquo; или &laquo;Договор&raquo;) о продаже пакетов услуг на фестиваль &laquo;New Star Camp&raquo; на интернет сайте &nbsp;<a href="https://nswpay.ru">https://nswpay.ru</a> в адрес неопределенного круга физических лиц, которые, в случае принятия предложения и оплаты услуг именуются далее как &laquo;Покупатель&raquo;.</p>
          <p>Настоящая Оферта является публичной в силу действующего законодательства РФ, в том числе, но не ограничиваясь статьей 435 и частью 2 статьи 437 Гражданского кодекса Российской Федерации (далее &mdash;&nbsp;&laquo;ГК РФ&raquo;).</p>
          <p>Покупка пакета услуг Покупателем является акцептом Оферты, что считается равносильным заключению Договора. Акцепт Оферты возможен только путем присоединения к предложенному Договору в целом.</p>
          <p>Действующая редакция Оферты находится по адресу: <a href="https://nswpay.ru/">https://nswpay.ru/</a>.</p>
          <p>Внимательно ознакомьтесь с текстом настоящей Оферты, и, если вы не согласны с каким-либо пунктом данной Оферты, Вам предлагается отказаться от покупки пакетов услуг, предоставляемых Продавцом. Покупка пакетов услуг является подтверждением безоговорочного согласия с настоящим договором.</p>
          <p>Оферта может быть отозвана Продавцом в любой момент до ее принятия.</p>
          <p>Оферта может быть изменена Продавцом без какого-либо специального уведомления, новая редакция Оферты вступает в силу с момента ее размещения по адресу: <a href="https://nswpay.ru/">https://nswpay.ru/</a>, если иное не предусмотрено новой редакцией Оферты.</p>
          <ol>
            <li><strong>Определения и термины</strong></li>
          </ol>
          <p>В настоящей Оферте нижеприведенные термины и определения используются равно в единственном и во множественном числе, в следующих значениях:</p>
          <ul>
            <li><strong>Фестиваль</strong> - публичное (открытое) спортивно - развлекательное мероприятие под открытым небом, фестиваль &laquo;New Star Camp&raquo;, проведение которого планируется в с 26 марта 2021 года по 06 апреля 2021 года по адресу г. Сочи, Адлерский район, пос. Эстосадок, ул. Олимпийская, д. 35, курорт &laquo;Роза Хутор&raquo;. Полная информация о Фестивале и Программа Фестиваля публикуется организатором Фестиваля на сайте <a href="https://newstarcamp.ru/">https://newstarcamp.ru/</a> и любых доменах третьего уровня <a href="https://newstarcamp.ru/">https://newstarcamp.ru/</a>. На Фестивале ведётся аудиовизуальная запись, фотосъемка.</li>
            <li><strong>Организатор Фестиваля</strong> &ndash; Общество с ограниченной ответственностью &laquo;Нью стар кэмп&raquo; (ИНН&nbsp;7842154371, КПП 784201001, ОГРН 1187847158828).</li>
            <li><strong>Продавец </strong>&ndash; Общество с ограниченной ответственностью &laquo;Нью стар&raquo; (ИНН&nbsp;7842181512 КПП 784201001&nbsp;ОГРН 1207800067683), реализующий Пакеты услуг на Фестиваль, представленные на сайте <a href="https://nswpay.ru">https://nswpay.ru</a>. Выступает в правоотношениях с Покупателем или Участником Фестиваля в качестве агента.</li>
            <li><strong>Пакет услуг</strong> &mdash; комплекс услуг, состоящий из:</li>
          </ul>
          <ul>
            <li>Проживание Покупателя в выбранном им из сформированного и предложенного Продавцом перечня объектов размещения.</li>
            <li>услуги канатных дорог, подъемников курорта &laquo;Роза Хутор&raquo;, предоставляемые Покупателю на основании ски-пасса.</li>
            <li>право доступа на Фестиваль, предоставляемый, Покупателю посредством Карты участника).</li>
          </ul>
          <p>для приобретения которого требуется указание данных о его владельце (фамилия, имя, отчество, номер телефона, адрес электронной почты) во время покупки через Систему бронирования с учетом требований законодательства Российской Федерации о персональных данных.</p>
          <ul>
            <li><strong>Ваучер</strong> &ndash; документ, который устанавливает право лица, указанного в Ваучере являться Участником фестиваля и получать услуги, входящих в состав оплаченного Пакета услуг. Каждый Ваучер содержит уникальный QR-код, содержащий информацию об услугах, входящих в данный Пакет услуг, и персональные данные всех Участников Фестиваля, имеющих право посетить Фестиваль по данному Ваучеру.</li>
            <li><strong>Сайт </strong>&mdash; вебсайт в сети Интернет, расположенный по адресу <a href="https://nswpay.ru/">https://nswpay.ru/</a>, права (в том числе право администрирования) на которые в полном объеме принадлежат Продавцу.</li>
            <li><strong>Система бронирования</strong> &mdash; программно-аппаратный комплекс, расположенный на Сайте, с помощью которого происходит заказ, оплата Пакета услуг и выпуск Ваучеров. Система бронирования позволяет осуществлять поиск и бронирование Пакета услуг на Фестиваль с помощью сервисов Сайта, а также предоставляет информацию о реализуемых третьими лицами услугах, входящих в стоимость Пакета услуг.</li>
            <li><strong>Покупатель</strong> &ndash; физическое лицо, заключившее с Продавцом настоящий Договор публичной оферты на условиях, установленных в настоящем Договоре публичной оферты, и самостоятельно оплатившее Пакет услуг.</li>
            <li><strong>Участник фестиваля</strong> &ndash; физическое лицо, чье имя указано на Ваучере.</li>
            <li><strong>Карта участника</strong> &ndash; персональный идентификатор, содержащий персональные данные (фамилия, имя, отчество, фотография) Участника Фестиваля, который выдается Организатором при предъявлении Ваучера и позволяет посещать территорию Фестиваля, не прибегая к демонстрации Ваучера. Карта Участника дает право неограниченного количества входов на Фестиваль в течение срока, указанного на Ваучере, лицу, указанному при оформлении пакета услуг в качестве Участника Фестиваля.</li>
          </ul>
          <ol start="2">
            <li><strong>Предмет договора</strong>
              <ul>
                <li>Предметом настоящего договора является урегулирование правоотношений в сфере оказания услуг по бронированию и оплате Пакета услуг на Фестиваль посредством Системы бронирования, размещенной на Сайте.</li>
                <li>Продавец предоставляет Покупателю (Участнику Фестиваля) достоверные сведения о составе и характеристиках услуг, входящих в Пакет услуг. Услуги, входящие в Пакет услуг, непосредственно оказываются Покупателю (Участнику Фестиваля) третьими лицами &mdash; отелем или иным средством размещения, Организатором Фестиваля и прочими лицами, предоставляющими услуги, входящие в состав Пакета услуг.</li>
              </ul>
            </li>
            <li><strong>Стоимость Пакета услуг, порядок бронирования и оплаты</strong></li>
          </ol>
          <p><strong>Стоимость Пакета услуг</strong></p>
          <ul>
            <li>Цены на Пакеты услуг публикуются на Сайте и могут быть изменены в любой момент. Не допускается изменение стоимости Пакета услуг, если на дату такого изменения он уже был оплачен Покупателем. Если Покупатель выбрал Пакет услуг, заполнил персональные данные, но не нажал кнопку &laquo;Оплатить&raquo; до изменения цены, то при нажатии на кнопку &laquo;Оплатить&raquo; стоимость заказа будет пересчитана с учетом изменения цены.</li>
          </ul>
          <p><strong>Порядок бронирования</strong></p>
          <ul>
            <li>Заказ Пакета услуг осуществляется через Сайт путем последовательного выбора необходимых позиций из представленного перечня и заполнения персональных данных Участников Фестиваля (фамилия, имя, номер телефона, адрес электронной почты). После оплаты Пакета услуг Система бронирования формирует Ваучер и доставляет его на адрес электронной почты, указанный Покупателем при формировании заказа.</li>
            <li>Ваучер может быть получен Покупателем только при условии формирования Заказа непосредственно на Сайте и оплате заказа только с помощью банковской карты.</li>
            <li>Ваучер будет доставлен на указанный Покупателем адрес электронной почты в течение максимум 12 часов с момента его оплаты. Ответственность за корректность ввода адреса электронной почты, предназначенного для отправки Ваучера, полностью лежит на Покупателе. В случае допуска ошибки при вводе адреса электронной почты, Покупатель может написать запрос тур-менеджеру на адрес электронной почты <a href="mailto:tour@newstarcamp.ru">tour@newstarcamp.ru</a> для формирования Ваучера и отправки на корректный адрес электронной почты Покупателя.</li>
            <li>Сразу после получения Ваучера Покупатель должен сохранить его или распечатать. Покупатель обязан сохранять Ваучер на весь период проведения Фестиваля и предъявлять его по требованиям соответствующих служб и уполномоченных лиц Фестиваля.</li>
          </ul>
          <p><strong>Порядок оплаты</strong></p>
          <ul>
            <li>Покупатель вправе произвести оплату Пакета услуг через Сайт с помощью банковских карт платежных систем VISA, MasterCard, МИР. Перед оплатой Покупатель должен убедиться, что карта, с которой планируется оплата, поддерживает технологию 3-D Secure.</li>
            <li>Обязательства Покупателя по оплате Пакета услуг считаются исполненными с момента поступления денежных средств на расчётный счёт Продавца.</li>
          </ul>
          <ol start="4">
            <li><strong>Аннуляция, отмена, замена Пакета услуг</strong></li>
          </ol>
          <p><strong>Изменение данных в Ваучере</strong></p>
          <ul>
            <li>Покупатель вправе совершить изменение данных об Участнике (Участниках) Фестиваля в Ваучере, в том числе с целью передачи права получения услуг, входящих в стоимость Пакета услуг, другому лицу (лицам). Для внесения изменений в Ваучер Покупатель оставляет запрос тур-менеджеру на электронную почту <a href="mailto:tour@newstarcamp.ru">tour@newstarcamp.ru</a>.</li>
          </ul>
          <p><strong>Аннуляция Пакета услуг по инициативе Покупателя</strong></p>
          <ul>
            <li>Покупатель имеет право аннулировать подтвержденный заказ на забронированный Пакет услуг. Для аннулирования Пакета услуг необходимо заполнить Заявление об аннулировании и возврате денежных средств согласно порядку, описанному в п. 4.5-4.7 настоящей Оферты.</li>
            <li>Датой аннуляции заказа будет считаться день (исключая выходные и праздничные дни) получения Продавцом электронного письма от Покупателя.</li>
            <li>Покупатель обязан возместить Продавцу расходы, понесенные Продавцом при исполнении договора (штрафные санкции). Под расходами Продавца в данном случае понимаются фактически понесенные расходы, направленные на исполнение поручения Покупателя до момента получения от Покупателя письменного извещения об изменении или расторжении договора.</li>
          </ul>
          <p>&nbsp;</p>
          <p><strong>Порядок возврата денежных средств</strong></p>
          <ul>
            <li>Для возврата денежных средств Покупатель оставляет запрос тур-менеджеру на электронную почту <a href="mailto:tour@newstarcamp.ru">tour@newstarcamp.ru</a>. Далее тур-менеджер предоставит Покупателю шаблон заявления на отмену бронирования и возврат денежных средств. Возврат денежных средств Покупателю осуществляется на основании заявления, которое подписывает Покупатель собственноручно и предоставляет Продавцу в виде оригинала или скан-копии.</li>
            <li>Сроки рассмотрения заявления на возврат &ndash; 5 рабочих дней. По итогам рассмотрения заявления выносится решение. В случае положительного решения возврат денежных средств осуществляется не позднее 30 календарных дней с момента уведомления Покупателя о принятом положительном решении по заявлению.</li>
            <li>Возврат денежных средств за Пакеты услуг, приобретенные по банковским картам, производится на ту же карту, с которой они были оплачены, в сроки и в порядке, установленными банком-эмитентом.</li>
          </ul>
          <ol start="5">
            <li><strong>Ответственность Сторон и порядок разрешения споров</strong></li>
          </ol>
          <p><strong>Ответственность Продавца</strong></p>
          <ul>
            <li>Продавец не несет ответственности и не выплачивает никакого возмещения за расходы, понесенные Покупателем (Участником Фестиваля), если решением властей или ответственных лиц ему, либо Участникам Фестиваля, в интересах которых он действует, было отказано в возможности проживания в забронированном объекте размещения, либо прохода на территорию проведения Фестиваля по следующим причинам: нарушение правопорядка, состояние алкогольного или наркотического опьянения, медицинские и (или) санитарные противопоказания, а также других нарушений, как например: хранение, провоз или распространение наркотиков, незаконное хранение или ношение оружия и прочие основания, предусмотренные действующим законодательством РФ.</li>
            <li>Продавец не несет ответственности за несоответствие предоставленной услуги ожиданиям Покупателя и/или его субъективной оценке. В том числе Продавец не несет ответственности за замену / отмену выступлений музыкальных коллективов, артистов и других лиц, задействованных в ходе проведения программы Фестиваля, а также перенос / отмену спортивных соревнований и показательных выступлений спортсменов до или в ходе проведения Фестиваля. Такие изменения в программе Фестиваля не являются основанием для возврата денежных средств за Пакет услуг или билет на Фестиваль.</li>
            <li>Продавец освобождается от ответственности за полное или частичное неисполнение обязательств, предусмотренных настоящей офертой, если это неисполнение явилось следствием обстоятельств непреодолимой силы, возникших после заключения договора, в результате событий чрезвычайного характера, погодных условий и пр., которые стороны не могли ни предвидеть, ни предотвратить разумными мерами (форс-мажор).</li>
          </ul>
          <p><strong>Ответственность Покупателя</strong></p>
          <ul>
            <li>Покупатель и Участники Фестиваля обязаны придерживаться соблюдения всех правил, содержащихся в настоящей Оферте, а также правил посещения курорта Роза Хутор, расположенных по адресу: <a href="https://rosakhutor.com/rules/">https://rosakhutor.com/rules/</a>, правил проживания в выбранном объекте размещения, и правил использования Карты участника, расположенных по адресу <a href="https://newstarcamp.ru/">https://newstarcamp.ru/</a>.</li>
            <li>Покупатель не вправе передавать свои права и обязанности по настоящему Договору третьим лицам без согласия Продавца. Изменение данных об Участнике (Участниках) Фестиваля в Ваучере с целью передачи права прохода на Фестиваль другому лицу (лицам) осуществляется Продавцом в порядке, указанном в п. 4.1 настоящей Оферты.</li>
            <li>Покупатель и(или) иное лицо (Участник Фестиваля) должен проявить должную осмотрительность и самостоятельно несет риски наступления негативных последствий при нарушении им установленных правил в ходе посещения концертно-зрелищного мероприятия под открытым небом, в том числе вследствие природных катаклизмов, стихийных бедствий, явлений техногенного характера и(или) не прогнозируемых событий объективной непредотвратимости, при угрозе возникновения и (или) возникновении отдельных чрезвычайных ситуаций, введении режима повышенной готовности или чрезвычайной ситуации на всей территории Российской Федерации либо на ее части, наступивших вне зависимости от действий Продавца (организатора Фестиваля). Продавец (организатор Фестиваля) предпринимает соответствующие меры по организации и обеспечению санитарно-эпидемиологической безопасности, медико-санитарного обслуживания, пожарной безопасности, общественного порядка и безопасности на территории проведения фестиваля, при этом организатор не несет ответственности за нарушения посетителями и(или) иными лицами общепринятых мер личной безопасности, а также иных правил и(или) требований установленных в соответствии с законодательством РФ. Покупатель и(или) иное лицо (Участник Фестиваля) обязан не допускать своими действиями либо своими бездействиями создания каких-либо угроз безопасности для собственной жизни и здоровья, а также для жизни и здоровья других лиц, соблюдать установленные меры санитарно-эпидемиологической безопасности, санитарно- эпидемиологические правила, меры личной и пожарной безопасности, в том числе общественный порядок, исполнять соответствующие требования медицинских работников, а также иные правила и(или) требования организатора и(или) соответствующих правоохранительных органов, государственных и компетентных органов и(или) должностных лиц, предусмотренных действующим законодательством РФ на всей территории проведения фестиваля.</li>
          </ul>
          <p><strong>Разрешение споров</strong></p>
          <ul>
            <li>Споры, возникающие при исполнении условий настоящей Оферты, разрешаются в претензионном порядке. Претензия подлежит передаче Продавцу в письменной форме по адресу Продавца с приложением документов, обосновывающих предъявляемые требования. Поступившая претензия рассматривается Продавцом в течение 30 (тридцати) дней с момента ее поступления. Если споры и разногласия между Сторонами не могут быть урегулированы путем переговоров, они подлежат разрешению в суде.</li>
            <li>В любом случае размер ответственности Продавца при возмещении убытков в связи с неисполнением/ненадлежащим исполнением настоящей Оферты не может превышать стоимости купленного Покупателем Пакета услуг.</li>
          </ul>
          <ol start="6">
            <li><strong>Персональные данные</strong>
              <ul>
                <li>В соответствии с требованиями Федерального закона от 27.07.2006 № 152-ФЗ &laquo;О персональных данных&raquo; приобретая Пакет услуг Покупатель дает согласие на обработку и хранение переданных им персональных данных, необходимых для покупки Пакета услуг. Покупатель гарантирует, что данные, указанные при заказе Пакета услуг, являются добровольно предоставленными им и третьими лицами, и все эти лица ознакомлены и согласны с Офертой.</li>
                <li>Под обработкой персональных данных понимаются действия (операции) Продавца с персональными данными, включая сбор, систематизацию, накопление, хранение, уточнение (обновление, изменение), использование, передача (в том числе трансграничная) третьим лицам с соблюдением мер, обеспечивающих защиту персональных данных от несанкционированного доступа, обезличивание, блокирование, уничтожение персональных данных.</li>
                <li>Целью предоставления Покупателем персональных данных и последующей их обработки Продавцом является получение Покупателем услуг по данному договору.</li>
                <li>Принятие условий Оферты означает согласие Покупателя на обработку следующих персональных данных:</li>
              </ul>
            </li>
          </ol>
          <ul>
            <li>фамилия, имя, отчество;</li>
            <li>дата рождения;</li>
            <li>номера телефонов;</li>
            <li>адреса электронной почты (E-mail).
              <ul>
                <li>Согласие на обработку персональных данных дается Покупателем Продавцу на неопределенный срок, но может быть в любой момент отозвано путем направления простого письменного заявления в адрес Продавца. При этом Покупатель осознает и согласен с тем, что:</li>
              </ul>
            </li>
            <li>такой отзыв может повлечь невозможность оказания услуг Продавцом Покупателю;</li>
            <li>такой отзыв не имеет обратной силы по отношению к персональным данным, уже переданным третьим лицам во исполнение Договора до получения Продавцом заявления на отзыв.</li>
          </ul>
          <ol start="7">
            <li><strong>Заключительные положения</strong>
              <ul>
                <li>Настоящая Оферта вступает в силу с момента размещения в сети Интернет по адресу <a href="https://nswpay.ru">https://nswpay.ru</a> и действует до момента отзыва Оферты Продавцом.</li>
                <li>Продавец оставляет за собой право корректировать условия Оферты или отзывать её. В случае внесения правок Продавцом в текст Оферты изменения вступают в силу с момента размещения обновленного текста на сайте по адресу <a href="https://nswpay.ru">https://nswpay.ru</a>.</li>
                <li>Настоящий договор, приложения к нему, а также информация, размещенная на Сайте, являются официальными документами Продавца и неотъемлемой частью Оферты.</li>
                <li>Во всем, что не предусмотрено настоящей Оферте, Стороны руководствуются действующим законодательством Российской Федерации.</li>
                <li>Продавец вправе расторгнуть настоящую Оферту в любое время без предварительного уведомления Покупателя в случае нарушения Покупателем положений Оферты и иных правил, опубликованных на Сайте Фестиваля.</li>
                <li>Стороны признают надлежащим образом направленными любые уведомления и корреспонденцию, в случае, если отправка совершена в письменной форме по адресу, указанному в Оферте. Наряду с этим Стороны признают надлежащими следующие способы уведомления по Договору: Посредством размещения информации на Сайте newstarcamp.ru для уведомлений об изменениях на Фестивале, правилах автоматизированной Системы, текста Оферты, и иной информации, касающейся широкого круга лиц. С использованием телефона и электронной почты Покупателя &ndash; для уведомлений об отмене, замене, переносе Фестиваля, о событиях, касающихся как широкого круга лиц, так и персонально Покупателя.</li>
                <li>В соответствии с требованиями Федерального закона от 13.03.2006 N 38-ФЗ &laquo;О рекламе&raquo; Покупатель заявляет о своем согласии на получение по сетям электросвязи (в том числе по сети Интернет) рекламно-информационных материалов.</li>
              </ul>
            </li>
            <li><strong>Реквизиты Продавца</strong></li>
          </ol>
          <p><strong>ООО &laquo;Нью Стар&raquo;</strong></p>
          <p>ИНН / КПП 7842181512 / 784201001</p>
          <p>ОГРН 1207800067683</p>
          <p>Юридический адрес: 191040, Санкт-Петербург, Лиговский пр-кт, д. 50, строение Ф, оф. 7А</p>
          <p>Фактический адрес: 191040, Санкт-Петербург, Лиговский пр-кт, д. 50, строение Ф, оф. 7А</p>
          <p>р/с 40702810832060011598</p>
          <p>к/с 30101810600000000786</p>
          <p>БИК 044030786</p>
          <p>Телефон:</p>
          <p>E-mail: <a href="mailto:tour@newstarcamp.ru">tour@newstarcamp.ru</a></p>
          <p><strong>Приложение № 1 к Договору публичной оферты</strong></p>
          <p><strong>&nbsp;</strong></p>
          <p><strong>Определение расходов, понесенных Продавцом при аннуляции Пакета услуг по инициативе Покупателя</strong></p>
          <p><strong>&nbsp;</strong></p>
          <ol>
            <li>Возврат стоимости билета (Карты Участника) осуществляется за минусом сервисного сбора 5%.</li>
            <li>Возврат стоимости проживания в объекте размещения, указанном в Ваучере, осуществляется в соответствии с условиями отмены бронирования конкретного объекта размещения и за минусом сервисного сбора 5%. Условия отмены бронирования объекта размещения указываются по адресу: <a href="https://newstarcamp.ru/participants">https://newstarcamp.ru/participants</a>.</li>
          </ol>
          <p>&nbsp;</p>
          <ol start="3">
            <li>Возврат стоимости ски-пасса осуществляется за минусом сервисного сбора 5%.</li>
          </ol>
          </div>
        </modal>
      </form>
    </div>
  </main>
  <footer class="row p-3 mb-5">
  </footer>
</div>
<script src="https://unpkg.com/vue@2.6.12/dist/vue.js"></script>
<script src="https://unpkg.com/vuejs-datepicker"></script>
<script src="https://unpkg.com/vue-router"></script>
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script src="<?= $path ?>js/app.min.js?rev=1612189872"></script>
<!--<script src="js/vue-tap.js"></script>-->
<!--<script src="js/vue-touch-events.js"></script>-->
<?php if ($env == 'prod') { ?>
  <script
      id="alfa-payment-script"
      type="text/javascript"
      src="https://pay2.alfabank.ru/assets/alfa-payment.js">
  </script>
<?php } ?>
</body>
</html>
