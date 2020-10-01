<?php
$tourID = count(scandir('sent/')) + 1;
$host = $_SERVER['HTTP_HOST'];
$host == 'localhost' ? $path = 'nscamp/app/': '';
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
  <meta property="og:image" content="<?=$path?>/images/meta-image.jpg">
  <meta
      content="Фестиваль New Star Camp пройдет 26 марта - 4 апреля 2021 года на всесезонном горном курорте «Роза Хутор» (Сочи)."
      property="description">
  <meta content="New Star Camp 2021" property="og:site_name">
  <meta content="New Star Camp 2021" property="og:title">

  <link rel="icon" href="<?=$path?>images/favicon.ico">
  <link rel="apple-touch-icon" sizes="140x140" href="<?=$path?>images/apple-touch-icon.png">
  <!-- Template Basic Images End -->

  <!-- Custom Browsers Color Start -->
  <meta name="theme-color" content="#000">
  <!-- Custom Browsers Color End -->

  <link rel="stylesheet" href="<?=$path?>css/app.min.css?rev=1.9">
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
        <img src="<?=$path?>images/svg/nsc-logo.svg">
      </a>
    </div>
    <div class="col-1">
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
              :class="['step' + curStep.id, curStep.col , 'p-0' , 'f1' ,curStep.text, step === curStep.id ? 'active' : '']">
            <span v-html="curStep.name[selectedLocale]"></span>
          </li>
        </ul>
        <section v-if="step === 1">
          <div class="row">
            <div class="col-12 col-sm-12 col-md-3 col-lg-3">
              <div class="row step-num">
                <div class="col-2 d-flex align-items-start flex-column p-0 mr-3 nsc-step-num">
                  <img src="<?=$path?>images/svg/step1.svg"/>
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
                    <div class="m-4 text-left">
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
                    <div class="mr-4 ml-4 mt-4 mb-3 text-left">
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
                  <img src="<?=$path?>images/svg/step2.svg"/>
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
                      input-class="form-control rounded-0 nsc-select"
                      v-model="form.dateFrom"
                      :placeholder="translations.dateFrom[selectedLocale]"
                      open-date="2021-03-26"
                      monday-first="true"
                      bootstrap-styling="true"
                      :disabled-dates=disabledDates
                  >
                  </vuejs-datepicker>
                  <!--                  <input class="form-control rounded-0 nsc-select"-->
                  <!--                         type="date" v-model="form.dateFrom"-->
                  <!--                         :placeholder="translations.dateFrom[selectedLocale]"/>-->
                </div>
                <div class="col-12 col-sm-12 col-md-6 col-lg-6 pt-2 pb-2">
                  <!--                  <input class="form-control rounded-0 nsc-select"-->
                  <!--                        type="date" v-model="form.dateTill"-->
                  <!--                        :placeholder="translations.dateTill[selectedLocale]"/>-->
                  <vuejs-datepicker
                      input-class="form-control rounded-0 nsc-select"
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
                    <span>{{ translations.dateNote[selectedLocale] }}</span>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                </div>
                <div class="col-12 col-sm-12 col-md-6 col-lg-6 pt-2 pb-2">
                  <!--                  <input class="form-control custom-select rounded-0 nsc-select"-->
                  <!--                         type="text" v-model.number="form.adults"-->
                  <!--                         :placeholder="translations.tourAdults[selectedLocale]"/>-->
                  <select v-model.number="form.adults"
                          class="custom-select rounded-0 nsc-select"
                          :placeholder="translations.tourAdults[selectedLocale]"
                          required>
                    <option value="" disabled selected>{{ translations.tourAdults[selectedLocale] }}</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </select>
                </div>
              </div>
              <div class="row">
                <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                </div>
                <div class="col-12 col-sm-12 col-md-6 col-lg-6 pt-2 pb-2">
                  <!--                  <input class="form-control custom-select rounded-0 nsc-select"-->
                  <!--                         type="text" v-model.number="form.kids"-->
                  <!--                         :placeholder="translations.tourKids[selectedLocale]"/>-->
                  <select v-model.number="form.kids"
                          class="custom-select rounded-0 nsc-select"
                          :placeholder="translations.tourKids[selectedLocale]"
                          required>
                    <option value="" disabled selected>{{ translations.tourKids[selectedLocale] }}</option>
                    <option value="1">без детей</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </select>
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
                  <img src="<?=$path?>images/svg/step3.svg"/>
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
                            class="custom-select rounded-0 nsc-select"
                            @change="showRoomPhoto"
                            required>
                      <option value="" disabled selected>{{ translations.roomType[selectedLocale] }}</option>
                      <option v-for="room in activeHotelRooms" :value=room.code>{{ room.name }}</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                </div>
                <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                  <label class="row m-0">
                    <input v-model.trim="form.hotelBreakfast"
                           class="custom-control-input"
                           type="checkbox"
                           required/>
                    <div class="border-0 mr-1 nsc-bf-checkbox"
                         :class="[form.hotelBreakfast ? ' active' : '']"></div>
                    <div class="col" v-html="translations.hotelBreakfast[selectedLocale]"></div>
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
                         :id="hotels[currentHotel].code" :src="hotels[currentHotel].gallery[0]" :alt="hotels[currentHotel].name"/>
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
                  <img src="<?=$path?>images/svg/step4.svg"/>
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
              <div class="form-row" v-if="form.adults > 1">
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
            <div class="col-12 col-sm-12 col-md-12 col-lg-12">
              <div class="row step-num">
                <div class="col-2 col-sm-2 col-md-1 col-lg-1 d-flex align-items-start flex-column p-0 nsc-step-num">
                  <img src="<?=$path?>images/svg/step5.svg"/>
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
                <div>
                  <input type="text" class="form-control rounded-0"
                         v-model.trim="form.promocode"
                         :placeholder="translations.guestPromoCode[selectedLocale]">
                </div>
              </div>
            </div>
            <div class="row p-2">
              <div class="col-12 col-sm-12 col-md-6 col-lg-6 form-check">
                <label class="row">
                  <input v-model.trim="form.consent"
                         class="custom-control-input"
                         type="checkbox"
                         required>
                  <div class="border-0 mr-1 nsc-checkbox"
                       :class="[form.consent ? ' active' : '']"></div>
                  <div class="col-9" v-html="translations.guestAgreement[selectedLocale]"></div>
                </label>
              </div>
              <div class="col-12 col-sm-12 col-md-1 col-lg-1"></div>
              <div class="col-12 col-sm-12 col-md-5 col-lg-5 form-check">
                <label class="row">
                  <input v-model.trim="form.offer"
                         class="custom-control-input"
                         type="checkbox"
                         required>
                  <div class="border-0 nsc-checkbox"
                       :class="[form.offer ? ' active' : '']"></div>
                  <div class="col-9" v-html="translations.guestOfferAccept[selectedLocale]">
                  </div>
                </label>
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
        <div class="invalid-feedback" v-if="errors != null">{{ errors }}</div>
        <div class="row col-12 d-flex pl-0 pr-0 ml-0 mr-0 mb-3 mt-sm-3 mt-3 mt-md-0 mt-lg-0 bg-nsc-grey">
          <button class="col-3 col-sm-3 col-md-2 col-lg-2 p-2 bd-highlight form-control col-2 rounded-0 nsc-button"
                  v-if="step !== 1"
                  @click.prevent="prevStep">{{ translations.stepPrevious[selectedLocale] }}
          </button>
          <div v-if="step > 2 && step < 6" class="row col-5 col-sm-7 col-lg-6 text-right nsc-tour-sum">
            <input type="text" class="nsw-tourid" value="<?= $tourID ?>" readonly hidden/>
            <input type="text" class="nsw-tournumber" value="<?= $tourNumber ?>" readonly hidden/>
            <input v-if="form.pass" type="text" class="nsw-tourname" :value="setTourName" readonly hidden/>
            <label v-if="this.form.room" for="toursum" class="col-8 col-sm-8 col-md-6 col-lg-8 align-middle">
              {{ translations.tourPriceText[selectedLocale] }}
            </label>
            <input class="col-4 border-0 nsw-toursum"
                   v-if="this.form.room"
                   type="text"
                   id="toursum"
                   name="toursum"
                   :value="calcTourPrice"
                   readonly
            />
          </div>
          <button
              class="col-3 col-sm-3 col-md-2 col-lg-2 ml-auto p-2 bd-highlight form-control col-2 rounded-0 nsc-button"
              v-if="step !== totalsteps"
              @click.prevent="nextStep">{{ translations.stepNext[selectedLocale] }}
          </button>
          <?php $host == 'nswpay.ru' ? $token = 'qlsnf995gkvurbqpc3qm4nbvqs' : $token = '5ul0u41eam2n3qpsuicfjim7fj' ?>
          <div
              class="col-4 col-sm-7 col-md-4 ml-auto p-2 bd-highlight form-control rounded-0 nsc-button"
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
              @click="saveVaucher(<?php echo $tourNumber ?>,<?php echo $tourID ?>)">
          </div>
        </div>
        <div class="row mb-3 ml-0 mr-0 footer">
          <div class="col-12 col-md-8 col-lg-8 order-12 order-md-1">
            <div class="row">
              <div class="col-1 p-0 text-center">
                <img src="<?=$path?>images/svg/wnsc-logo.svg" class="mb-2 nsc-logo">
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
              <img src="<?=$path?>images/svg/user-offer.svg" class="nsc-user-offer">{{ translations.userAgreement[selectedLocale]
              }}
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
<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/vuejs-datepicker"></script>
<script src="https://unpkg.com/vue-router"></script>
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script src="<?=$path?>js/app.min.js?rev=4.6"></script>
<script
    id="alfa-payment-script"
    type="text/javascript"
    src="https://pay2.alfabank.ru/assets/alfa-payment.js">
</script>
</body>
</html>
