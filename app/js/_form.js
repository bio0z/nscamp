Vue.component('modal', {
    template: "#modal-template"
});

Vue.directive('phone', {
    bind(el) {
        el.oninput = function (e) {
            if (!e.isTrusted) {
                return;
            }

            let x = this.value.replace(/\D/g, '').match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
            this.value = x[1] + ' (' + x[2] + ') ' + x[3] + ' ' + x[4] + ' ' + x[5];
            el.dispatchEvent(new Event('input'));
        }
    }
});

let router = new VueRouter({
    mode: 'history',
    routes: []
});

let vm = new Vue({
    router,
    el: "#orderForm",
    component: {},
    data: {
        locales : {
            'ru': "русская версия",
            'en': "english version",
        },
        selectedLocale : 'ru',
        translations : {
            title:{
                'ru':'Купить тур',
                'en':'Tour Booking',
            },
            stepOne:{
                'ru':'Выберите категорию размещения',
                'en':'Choose your tour',
            },
            roomType:{
                'ru':'Выберите категорию размещения',
                'en':'Choose your tour',
            },
            hotelType:{
                'ru':'Отель',
                'en':'Hotel',
            },
            passDetails:{
                'ru':'Подробнее',
                'en':'More'
            },
            passSDetails:{
                'ru':'от 9900 <span>₽ </span> 3 дня 2 ночи',
                'en':'from 9900 <span>₽ </span> 3 days 2 nights'
            },
            passVDetails:{
                'ru':'от 19900<span>₽</span> 3 дня 2 ночи ',
                'en':'from 19900 <span>₽ </span> 3 days 2 nights'
            },
            passVDetailsFull:{
                'ru':'<p class="mb-2">проживание в выбранном отеле с завтраками</p>\n' +
                    '<p class="mb-2">VIP-браслет участника NSC</p>\n' +
                    '<p class="mb-2">прогулочный билет на канатные дороги курорта «Роза Хутор» на все дни\n' +
                    'фестиваля</p>\n' +
                    '<p class="mb-2">зона VIP на вечеринках</p>\n' +
                    '<p class="mb-2">сувениры первым 500</p>\n' +
                    '<p class="mb-2">бонусы и скидки в заведениях курорта</p>',
                'en':'<p class="mb-2">Hotel accommodation</p>\n' +
                    '<p class="mb-2">Festival VIP PASS</p>\n' +
                    '<p class="mb-2">Cable lifts pass</p>\n' +
                    '<p class="mb-2">VIP zone access</p>\n' +
                    '<p class="mb-2">Special offers in resort restaurants</p>\n'
            },
            passSDetailsFull:{
                'ru':'<p class="mb-2">проживание в выбранном отеле с завтраками</p>\n' +
                    '<p class="mb-2">браслет участника NSC</p>\n' +
                    '<p class="mb-2">прогулочный билет на канатные дороги курорта «Роза Хутор» на все дни\n' +
                    'фестиваля</p>\n' +
                    '<p class="mb-2">сувениры первым 500</p>\n' +
                    '<p class="mb-2">бонусы и скидки в заведениях курорта</p>',
                'en':'<p class="mb-2">Hotel accommodation</p>\n' +
                    '<p class="mb-2">Festival PASS</p>\n' +
                    '<p class="mb-2">Cable lifts pass</p>\n' +
                    '<p class="mb-2">Special offers in resort restaurants</p>\n'
            },
            stepNext:{
                'ru':'Далее',
                'en':'Next'
            },
            tourPriceText:{
                'ru':'cтоимость тура: ',
                'en':'Tour Cost: '
            },
            stepPrevious:{
                'ru':'Назад',
                'en':'Back'
            },
            firstGuest:{
                'ru':'Первый гость',
                'en':'First guest'
            },
            secondGuest:{
                'ru':'Второй гость',
                'en':'Second guest'
            },
            guestName:{
                'ru':'Имя',
                'en':'Name'
            },
            guestSurname:{
                'ru':'Фамилия',
                'en':'Surname'
            },
            guestPhone:{
                'ru':'Телефон',
                'en':'Phone num'
            },
            guestHotel:{
                'ru':'Телефон',
                'en':'Phone num'
            },
            guestPromoCode:{
                'ru':'Промокод',
                'en':'Promocode'
            },
            userAgreement:{
                'ru':'пользовательское соглашение',
                'en':'user agreement'
            },
            stepThree:{
                'ru':'Заполните, пожалуйста, персональные данные и оставьте контактную информацию',
                'en':'Please, fill the personal information'
            },
            stepFour:{
                'ru':'Проверьте введенные данные, подтвердите согласие на их обработку, введите промокод, если имеется и\n' +
                    'нажмите кнопку «Купить тур»',
                'en':'Check your details, enter promocode'
            },
            stepTwo:{
                'ru':'Выберите отель и тип номера',
                'en':'Please, choose your accommodation'
            },
            errorChoosePass:{
                'ru':'Вы забыли выбрать вариант размещения.',
                'en':'Please, choose your pass'
            },
            errorChooseRoom:{
                'ru':'Вы забыли выбрать отель.',
                'en':'Please, choose your hotel'
            },
            errorFillFIO:{
                'ru':'Вы забыли заполнить Имя или Фамилию.',
                'en':'Please, fill Name and Surname'
            },
            errorFillEmail:{
                'ru':'Укажите электронную почту.',
                'en':'Please, fill Email'
            },
            errorFillCorrectEmail:{
                'ru':'Укажите корректный адрес электронной почты.',
                'en':'Please, fill correct Email'
            },
            errorFillPhone:{
                'ru':'Укажите Телефон.',
                'en':'Please, fill number of cell phone'
            },
            errorFillCorrectPhone:{
                'ru':'Укажите корректный телефон.',
                'en':'Please, fill correct number of cell phone'
            },
            tourIncluded:{
                'ru':'<p><b>В тур включено:</b></p>\n' +
                    '<ul>\n' +
                    '<li> Браслет участника</li>\n' +
                    '<li> Проживание в отеле с завтраками</li>\n' +
                    '<li> Прогулочный билет на подъемники фестиваля на все дни фестиваля</li>\n' +
                    '</ul>',
                'en':'<p><b>Tour details:</b></p>\n' +
                    '<ul>\n' +
                    '<li> Festival PASS</li>\n' +
                    '<li> Hotel accommodation + breakfast</li>\n' +
                    '<li> Cable lifts ticket(s)</li>\n' +
                    '</ul>',
            },
            guestAgreement:{
                'ru':'<p>Я даю <span class="btn btn-link border-0 p-0" @click.prevent="showModal = true">согласие</span>\n' +
                    'на обработку персональных данных</p>',
                'en':'<p>I accept <span class="btn btn-link border-0 p-0" @click.prevent="showModal = true">Terms and Conditions</span></p>'
            },
            guestOfferAccept:{
                'ru':'<p>Я согласен c <span class="btn btn-link border-0 p-0"\n' +
                    '@click.prevent="showOffer = true">договором оферты</span></p>',
                'en':'<p>I accept <span class="btn btn-link border-0 p-0"\n' +
                    '@click.prevent="showOffer = true">offer.</span></p>'
            },
            buyTour:{
                'ru':'Купить тур',
                'en':'Buy tour'
            },
            tourSuccess:{
                'ru':'<p>Вы успешно оформили тур New Star Weekend.</p>\n' +
                    '<p>Ваучер отправлен на email.</p>\n' +
                    '<p>Скоро увидимся ;)</p>\n',
                'en':'<p>I accept <span class="btn btn-link border-0 p-0"\n' +
                    '@click.prevent="showOffer = true">offer.</span></p>'
            },
            tourFail:{
                'ru':'<p>Возникла ошибка при проведении платежа,\n' +
                    '<a href="#">попробуйте еще раз</a>.</p>',
                'en':'<p>An error occurred while making a payment, \n' +
                    '<a href="#">try again</a>.</p>'
            },
            newStarDesc:{
                'ru':'ООО «Нью Стар» — организатор спортивно-музыкального фестиваля New Star Weekend, который пройдёт 26 марта -\n' +
                    '4 апреля 2021 года на всесезонном горном курорте «Роза Хутор» (Сочи).',
                'en':'“New Star” LLC is the organizer of “New Star Weekend” sports and music festival, that will\n' +
                    ' be held on March 26 - 4 April, 2020 at Russian ski resort “Rosa Khutor” (Sochi).'
            }
        },
        sent: false,
        showModal: false,
        showOffer: false,
        step: 1,
        totalsteps: 4,
        errors: null,
        guests: 1,
        maxguests: 2,
        error: null,

        steps: [
            {
                active: true,
                id: 1,
                name: {
                    'ru':'Выбор категории',
                    'en': 'Choose your tour'
                },
                text: 'text-left',
                col: 'col-2',
            },
            {
                active: false,
                id: 2,
                name: {
                    'ru':'Выбор отеля',
                    'en':'Choose accommodation'
                },
                text: 'text-center',
                col: 'col-4',
            },
            {
                active: false,
                id: 3,
                name: {
                    'ru':'Персональные данные',
                    'en':'Personal details'
                },
                text: 'text-center',
                col: 'col-4',
            },
            {
                active: false,
                id: 4,
                name: {
                    'ru': 'Покупка тура',
                    'en': 'Tour purchasing'
                },
                text: 'text-right',
                col: 'col-2',
            }
        ],

        passSDetails: false,
        passVDetails: false,

        passes: [
            {
                name: 'standard',
                code: 'S',
                color: '#CCCCCC',
                price: 5000,
            },
            {
                name: 'vip',
                code: 'V',
                color: '#777FA8',
                price: 15000,
            }
        ],

        form: {
            pass: null,

            hotel: 'RIL',
            hotelName: null,
            address: null,
            room: null,

            fname: null,
            sname: null,
            email: null,
            phone: null,

            gfname: null,
            gsname: null,
            gphone: null,
            gemail: null,

            promocode: null,
            consent: null,
            offer: null,

            tourName: null,
            tourNumber: null,
            tourID: null,
            tourPrice: 0,
            payed: null,
        },
        hotels: [
            {
                active: true,
                name: 'Riders Lodge **',
                code: 'RIL',
                gallery:
                    [
                        'https://444803.selcdn.ru/cdn.awsd.cc/hotel-rl-1.jpg',
                        'https://444803.selcdn.ru/cdn.awsd.cc/hotel-rl-2.JPG',
                        'https://444803.selcdn.ru/cdn.awsd.cc/hotel-rl-3.jpg',
                        'https://444803.selcdn.ru/cdn.awsd.cc/hotel-rl-4.jpg',
                        'https://444803.selcdn.ru/cdn.awsd.cc/hotel-rl-5.jpg',
                    ],
                desc:{
                    'ru':'Хочешь жить в эпицентре фестиваля по доступной цене?\n' +
                        ' Riders Lodge — первый в России отель для райдеров и любителей отдыха\n' +
                        ' в дружеской компании, который удобно расположен относительно всех\n' +
                        ' активностей и находится максимально близко к Штабу фестиваля и\n' +
                        ' поъёмнику Олимпия. Лобби отеля заслуживает отдельного упоминания —\n' +
                        ' именно там с утра до ночи кипит жизнь: удобный чилаут с быстрым\n' +
                        ' интернетом, игровая зона, кинотеатр, и кофейня Surf Coffee.',
                    'en':'Do you want to live at the festival epicenter at an affordable price? Riders Lodge is the first hotel in Russia for riders and a friendly gathering and hang out, and very closely located relative to all activities and to the Festival Headquarters and the Olympia cable lift. The hotel lobby deserves special attention - cause it’s full of fun from morning to late night that life: convenient chill-out zone with a fast internet connection, a games area, a cinema, and the Surf Coffee cafe inside.'

                }
            },
            {
                active: true,
                name: 'AYS Design Hotel **',
                code: 'AYS',
                gallery: [
                    'https://444803.selcdn.ru/cdn.awsd.cc/hotel-ays-1.JPG',
                    'https://444803.selcdn.ru/cdn.awsd.cc/hotel-ays-2.JPG',
                    'https://444803.selcdn.ru/cdn.awsd.cc/hotel-ays-3.JPG',
                    'https://444803.selcdn.ru/cdn.awsd.cc/hotel-ays-4.JPG',
                    'https://444803.selcdn.ru/cdn.awsd.cc/hotel-ays-5.JPG',
                ],
                desc:{
                    'ru':'Располагается в Горной Олимпийской деревне на высоте 1170\n' +
                            ' метров в тихом месте с прекрасными видами из номеров. Главная фишка\n' +
                        ' отеля — дизайнерские номера с граффити. Каждое утро в отеле\n' +
                        ' начинается с вкусного завтрака в AYS Cafe. А пообедать и поужинать\n' +
                        ' можно в AYS Kitchen — уютное место с домашней атмосферой и вкусным\n' +
                        ' полезным меню из блюд с разных уголков света.\n' +
                        ' Отель находится всего в 5 минутах пешком от творческого пространства\n' +
                        ' Flacon 1170 и парковки курорта, на которой, кстати, также разрешено\n' +
                        ' парковать автомобили каршеринга.',
                    'en':'The hotel is located in the Mountain Olympic Village (1170 meters high) in a quiet location with beautiful views from the rooms. Its main feature is graffiti design rooms. Each morning at the hotel begins with a delicious breakfast at the AYS Cafe. You can also enjoy lunch and dinner at AYS Kitchen - a cozy place with a homely atmosphere and a delicious various menu.'
                }
            },
            {
                active: true,
                name: 'Green Flow ****',
                code: 'GRF',
                gallery: [
                    'https://444803.selcdn.ru/cdn.awsd.cc/hotel-gf-1.jpg',
                    'https://444803.selcdn.ru/cdn.awsd.cc/hotel-gf-2.JPG',
                    'https://444803.selcdn.ru/cdn.awsd.cc/hotel-gf-3.JPG',
                    'https://444803.selcdn.ru/cdn.awsd.cc/hotel-gf-4.jpeg',
                    'https://444803.selcdn.ru/cdn.awsd.cc/hotel-gf-5.jpg',
                ],
                desc:{
                    'ru': 'Green Flow – настоящий оазис для тех, кто хочет отдохнуть\n' +
                        ' в тишине и покое, наслаждаясь невероятной красотой гор из окна\n' +
                        ' номера. Это не просто комфорт и сервис, это особая атмосфера, в\n' +
                        ' которую хочется возвращаться. Неотъемлемая составляющая отеля —\n' +
                        ' открытый всесезонный инфинити бассейн с подогревом, подсветкой и\n' +
                        ' панорамным видом на живописные склоны Северокавказских гор.\n' +
                        ' Удовольствие от посещения спа-зоны отеля и открытого бассейна\n' +
                        ' останется ещё на долгое время на ваших красивых фотографиях.',
                    'en':'Green Flow is an amazing oasis for those who want to chill in peace and quiet. It is not just comfort and service, it is a special atmosphere. An integral part of the hotel is an all-season outdoor heated and lighted pool, with panoramic views of the northern slopes. The hotel\'s spa areas and the outdoor pool will remain for a long time in your beautiful shots and memory.'
                }
            },
            {
                active: true,
                name: 'Rosa Springs',
                code: 'ROS',
                gallery: [
                    'https://444803.selcdn.ru/cdn.awsd.cc/hotel-rs-1.jpg',
                    'https://444803.selcdn.ru/cdn.awsd.cc/hotel-rs-2.jpg',
                    'https://444803.selcdn.ru/cdn.awsd.cc/hotel-rs-3.jpg',
                    'https://444803.selcdn.ru/cdn.awsd.cc/hotel-rs-4.jpg',
                    'https://444803.selcdn.ru/cdn.awsd.cc/hotel-rs-5.jpg',
                ],
                desc: {
                    'ru' : 'Отель для тех, кто хочет не только классно отдохнуть, но и\n' +
                            ' поправить свое здоровье после многочисленных вечеринок во время\n' +
                        ' фестиваля. Rosa Springs — это первый бальнеологический отель в\n' +
                        ' Красной Поляне. Помимо медицинского центра, все проживающие могут\n' +
                        ' посещать спа-комплекс с крытым плавательным бассейном и банями.\n' +
                        ' Отель находится всего в 5 минутах ходьбы от Штаба фестиваля и в\n' +
                        ' непосредственной близости от многих вечеринок NSC, подъёмника\n' +
                        ' Олимпия, а также магазинов, кафе, баров и ресторанов, среди которых\n' +
                        ' Груша и Surf Coffee.',
                    'en':'This hotel was made especially for those who want to have a cool vacation but also retreat health after numerous parties during the festival. Rosa Springs is the first balneological hotel in Krasnaya Polyana mountainside. In addition to the medical center, all residents can visit its spa complex with an indoor swimming pool and baths.\n' +
                        'The hotel is just a 5-minute walk from Festival Headquarters and in close proximity to many NSC parties, Olympia cable lifts, as well as shops, cafes, bars, and restaurants, including Grusha restaurant and Surf Coffee cafe.\n'
                }
            },
            {
                active: false,
                name: 'Rosa Ski Inn ****',
                code: 'RSI',
                imagemain: ''
            }
        ],
        rooms: [
            {
                active: true,
                name: 'Single',
                code: 'S'
            },
            {
                active: true,
                name: 'Double',
                code: 'D'
            },
            {
                active: false,
                name: 'Twin',
                code: 'T'
            }
        ]
    },
    mounted: function () {
        get_parameters = this.$route.query
        if (get_parameters.step === 5 && get_parameters.payed !== 1) {
            this.step = 5;
            this.form.payed = 0;
        } else if (get_parameters.step === 5 && get_parameters.payed === 1) {
            this.step = 5;
            this.form.payed = 1;
            this.sendMail(get_parameters.tourNumber);
        }
    },
    computed: {
        userFIO() {
            return this.form.fname + ' ' + this.form.sname;
        },
        roomName() {
            if (this.form.room === 'S') {
                return 'Single';
            } else if (this.form.room === 'D') {
                return 'Double';
            }
        },
        // setTourNumber(){
        //   var date = Math.round(+new Date()/1000);
        //   this.form.tourNumber = date;
        //   return this.form.tourNumber;
        // },
        setTourName() {
//            this.form.tourName = 'New Star Weekend ' + this.passes[this.form.pass].name + ' tour, hotel: ' + this.form.hotelName;
            this.form.tourName = 'New Star Weekend ' + ' tour, hotel: ' + this.form.hotelName;
            return this.form.tourName;
        },
        calcTourPrice() {
            let totalPrice = 0;

            if (this.form.pass === 'S') {

                totalPrice = this.form.tourPrice + this.passes[0].price;

                if (this.form.hotel === 'RIL' && this.step > 1) {

                    if (this.form.room === 'S') {

                        totalPrice = totalPrice + 2450 * 2;

                    } else if (this.form.room === 'D') {

                        totalPrice = totalPrice * 2 + 3000 * 2;

                    }

                } else if (this.form.hotel === 'GRF' && this.step > 1) {

                    if (this.form.room === 'S') {

                        totalPrice = totalPrice + 4100 * 2;

                    } else if (this.form.room === 'D') {

                        totalPrice = totalPrice * 2 + 4900 * 2;

                    }
                } else if (this.form.hotel === 'AYS' && this.step > 1) {

                    if (this.form.room === 'S') {

                        totalPrice = totalPrice + 3150 * 2;

                    } else if (this.form.room === 'D') {

                        totalPrice = totalPrice * 2 + 3600 * 2;

                    }
                } else if (this.form.hotel === 'ROS' && this.step > 1) {

                    if (this.form.room === 'S') {

                        totalPrice = totalPrice + 4370 * 2;

                    } else if (this.form.room === 'D') {

                        totalPrice = totalPrice * 2 + 4830 * 2;

                    }
                }
            } else if (this.form.pass === 'V') {

                totalPrice = this.form.tourPrice + this.passes[1].price;

                if (this.form.hotel === 'RIL' && this.step > 1) {

                    if (this.form.room === 'S') {

                        totalPrice = totalPrice + 2450 * 2;

                    } else if (this.form.room === 'D') {

                        totalPrice = totalPrice * 2 + 3000 * 2;

                    }

                } else if (this.form.hotel === 'GRF' && this.step > 1) {

                    if (this.form.room === 'S') {

                        totalPrice = totalPrice + 4100 * 2;

                    } else if (this.form.room === 'D') {

                        totalPrice = totalPrice * 2 + 4900 * 2;

                    }
                } else if (this.form.hotel === 'AYS' && this.step > 1) {

                    if (this.form.room === 'S') {

                        totalPrice = totalPrice + 3150 * 2;

                    } else if (this.form.room === 'D') {

                        totalPrice = totalPrice * 2 + 3600 * 2;

                    }
                } else if (this.form.hotel === 'ROS' && this.step > 1) {

                    if (this.form.room === 'S') {

                        totalPrice = totalPrice + 4370 * 2;

                    } else if (this.form.room === 'D') {

                        totalPrice = totalPrice * 2 + 4830 * 2;

                    }
                }
            }
            return totalPrice + '₽';
        }
    },
    watch: {
        // calcTourPrice(){
        //     this.form.tourPrice = this.calcTourPrice();
        // }
    },
    methods: {
        setLocale : function (locale)
        {
            this.selectedLocale = locale;
        },
        validEmail: function (email) {
            let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        },
        validPhone: function (phone) {
            // let re = /^\d(\d{3})?\d{7}$/;
            // console.log(phone);
            // console.log(phone.replace(/\s+/g, ''));
            // return re.test(phone.replace(/\s+/g, ''));
            return true;
        },
        prevStep() {
            this.step--;
            this.form.consent = null
        },
        nextStep() {

            if (this.step === 1) {
                if (!this.form.pass) {
                    this.errors = this.translations.errorChoosePass[this.selectedLocale];
                    return false;
                } else {
                    this.errors = null;
                }
            } else if (this.step === 2) {
                if (this.form.hotel === 'RIL') {
                    this.form.hotelName = 'Riders Lodge **';
                    this.form.address = 'Роза Хутор, п. Эсто-Садок, ул. Медовея, д. 6';
                } else if (this.form.hotel === 'AYS') {
                    this.form.hotelName = 'AYS Design Hotel **';
                    this.form.address = 'Роза Хутор, п. Эсто-Садок, ул. Сулимовка, 5';
                } else if (this.form.hotel === 'GRF') {
                    this.form.hotelName = 'Green Flow ****';
                    this.form.address = 'Роза Хутор, п. Эсто-Садок, ул. Сулимовка, 9';
                } else if (this.form.hotel === 'ROS') {
                    this.form.hotelName = 'Rosa Springs ****';
                    this.form.address = 'Роза Хутор, п. Эсто-Садок, ул. Медовея, д. 4';
                } else if (this.form.hotel === 'RSI') {
                    this.form.hotelName = 'Rosa Ski Inn ****';
                    this.form.address = 'Роза Хутор, п. Эсто-Садок, ул. Пихтовая аллея, д. 1';
                }

                if (!this.form.hotel || !this.form.room) {
                    this.errors = this.translations.errorChooseRoom[this.selectedLocale];
                    return false;
                } else {
                    this.errors = null;
                }
            } else if (this.step === 3) {
                if (!this.form.fname || !this.form.sname) {
                    this.errors = this.translations.errorFillFIO[this.selectedLocale];
                    return false;
                } else if (!this.form.email) {
                    this.errors = this.translations.errorFillEmail[this.selectedLocale];
                    return false;
                } else if (!this.validEmail(this.form.email)) {
                    this.errors = this.translations.errorFillCorrectEmail[this.selectedLocale];
                    return false;
                } else if (!this.form.phone) {
                    this.errors = this.translations.errorFillPhone[this.selectedLocale];
                    return false;
                } else if (!this.validPhone(this.form.phone)) {
                    this.errors = this.translations.errorFillCorrectPhone[this.selectedLocale];
                    return false;
                } else {
                    this.errors = null;
                }
            }
            this.step++;
        },
        showPassVDetail() {
            if (!this.passVDetails) {
                this.passVDetails = true;
            } else {
                this.passVDetails = false;
            }
        },
        showPassSDetail() {
            if (!this.passSDetails) {
                this.passSDetails = true;
            } else {
                this.passSDetails = false;
            }
        },
        setPassActive(pass) {
            if (pass === 'S') {
                this.$refs.passSLabel.className += " active";
                this.$refs.passVLabel.classList.remove("active");
            } else if (pass === 'V') {
                this.$refs.passVLabel.className += " active";
                this.$refs.passSLabel.classList.remove("active");
            }
        },

        nextPhoto() {
            let imgId = this.$refs.hotelImage.getAttribute('image-id');
            let hotelId = this.$refs.hotelDiv.getAttribute('hotel-id');
            let countHotelImg = this.hotels[hotelId].gallery.length;
            let imgImageNum = Number(imgId) + Number(1);
            if (imgImageNum < countHotelImg) {
                this.$refs.hotelImage.src = this.hotels[hotelId].gallery[imgImageNum];
                this.$refs.hotelImage.setAttribute('image-id', String(imgImageNum));
            } else {
                this.$refs.hotelImage.src = this.hotels[hotelId].gallery[0];
                imgImageNum = 0;
                this.$refs.hotelImage.setAttribute('image-id', String(imgImageNum));
            }
        },
        previousPhoto() {
            let imgId = this.$refs.hotelImage.getAttribute('image-id');
            let hotelId = this.$refs.hotelDiv.getAttribute('hotel-id');
            let countHotelImg = this.hotels[hotelId].gallery.length;
            let imgImageNum = Number(imgId) - Number(1);
            if (Number(imgImageNum) < 0) {
                imgImageNum = countHotelImg;
                this.$refs.hotelImage.src = this.hotels[hotelId].gallery[imgImageNum];
                this.$refs.hotelImage.setAttribute('image-id', String(imgImageNum));
            } else {
                this.$refs.hotelImage.src = this.hotels[hotelId].gallery[imgImageNum];
                this.$refs.hotelImage.setAttribute('image-id', String(imgImageNum));
            }
        },

        sendMail(tourNumber) {
            this.errors = null;
            var sdata = new FormData();

            sdata.append('tourNumber', tourNumber);

            axios({
                method: 'post',
                url: 'php/send.php',
                data: sdata,
                // headers: {'Content-Type': 'multipart/form-data' },
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                // querystring.stringify(this.form),
            })
                .then(response => {
                    this.sent = true;
                })
                // .then(response => this.responseData = response.data)
                .catch(e => {
                    this.errors.push(e);
                });
            this.errors = null;
        },

        saveVaucher(tournumber, tourid) {

            if (!this.form.consent) {
                this.errors = 'Без согласия на обработку персональных данных мы не сможем принять ваш запрос.';
                return false;
            } else {
                this.errors = null;

                this.form.tourNumber = tournumber;
                this.form.tourID = tourid;

                var fdata = new FormData();

                fdata.append('tourNumber', this.form.tourNumber);
                fdata.append('tourID', this.form.tourID);
                fdata.append('tourName', this.form.tourName);
                fdata.append('name', this.form.fname);
                fdata.append('lastname', this.form.sname);
                fdata.append('email', this.form.email);
                fdata.append('phone', this.form.phone);
                fdata.append('room', this.form.room);
                fdata.append('hotel', this.form.hotelName);
                fdata.append('address', this.form.address);
                fdata.append('passname', this.form.pass);
                fdata.append('gname', this.form.gfname);
                fdata.append('glastname', this.form.gsname);
                fdata.append('promocode', this.form.promocode);

                axios({
                    method: 'post',
                    url: 'php/saveVaucher.php',
                    data: fdata,
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                })
                    .then(response => {
                        this.from.payed = true;
                    })
                    // .then(response => this.responseData = response.data)
                    .catch(e => {
                        this.errors.push(e);
                    });
            }
        },
    },

    submit() {

    }

    //   onSubmit(e) {
    //     e.preventDefault();
    //     console.log('onSubmited');
    //     this.$axios
    //        .post(
    //            "send.php",
    //             querystring.stringify(this.form)
    //        )
    //        .then(res => {
    //            this.sent = true;
    //        });
    // },
    // components:{
    //     'nsc-pass':{
    //         methods: {
    //             setActiveClass() {
    //                 this.$emit('active',this.index);
    //             },
    //         }
    //     }
    // }
});

// document.getElementById("externalButton").onclick = function () {
//     vm.$refs.modal.showUserOffer();
// };
