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
        locales: {
            'ru': "RU",
            'en': "EN",
        },
        selectedLocale: 'ru',
        promocode: '',
        form: {
            pass: null,
            dateFrom: null,
            dateTill: null,
            adults: '',
            kids: '',

            hotel: 'RIL',
            hotelName: '',
            hotelBreakfast: null,
            hotelBreakfastPrice: null,
            hotelPrice: null,
            address: null,
            room: '',
            roomName: '',

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
            skipassPrice: 0,
            tourDays: 0,
            arrTourDays: null,
            payed: null,
        },

        translations : {
            title:{
                'ru':'Купить тур',
                'en':'Tour Booking',
            },
            stepTour:{
                'ru':'Выберите категорию размещения',
                'en':'Choose your tour',
            },
            roomType:{
                'ru':'Тип номера',
                'en':'Choose your tour',
            },
            hotelType:{
                'ru':'Отель',
                'en':'Hotel',
            },
            hotelBreakfast:{
                'ru':'Завтраки',
                'en':'Breakfast',
            },
            hotelBreakfastIncluded:{
                'ru':'Завтрак включен',
                'en':'Breakfast included',
            },
            passDetails:{
                'ru':'Подробнее',
                'en':'More'
            },
            passSDetails:{
                'ru':'от 52 190 <span>₽ </span> от 9 дней',
                'en':'from 52 190 <span>₽ </span> from 9 days'
            },
            passVDetails:{
                'ru':'от 64 190<span>₽</span> от 9 дней ',
                'en':'from 64 190 <span>₽ </span> from 9 days'
            },
            passSDetailsFull:{
                'ru':'<p class="mb-2">Браслет участника</p></li>' +
                    '<p class="mb-2">Проживание в отеле</p></li>' +
                    '<p class="mb-2">Скидки и привелегии участника фестиваля</p></li>' +
                    '<p class="mb-2">Ски пасс ( 7 дней из 9 / 8 дней из 10)</p></li>' +
                    '<p class="mb-2">Перевые 500 покупателей получают футболку кэмпа</p></li>',
                'en': '<p class="mb-2">Hotel accommodation</p></li>' +
                    '<p class="mb-2">Festival PASS</p></li>' +
                    '<p class="mb-2">Cable lifts pass</p></li>' +
                    '<p class="mb-2">Branded gifts for the first 500 guests</p></li>' +
                    '<p class="mb-2">Special offers in resort restaurants</p></li>'
            },
            passVDetailsFull:{
                'ru':'<p class="mb-2">Все опции STANDARD TOUR</p></li>' +
                    '<p class="mb-2">+ Доступ в VIP-Зоны на концертах и уровне 1600</p></li>' +
                    '<p class="mb-2">+ Расширенное меню в VIP-Зонах</p></li>' +
                    '<p class="mb-2">+ Индивидуальный пакет участника с футболкой</p></li>' +
                    '<p class="mb-2">+ Priority pass в штабе при регистрации</p></li>' +
                    '<p class="mb-2">+ Возможность брони столов на всех площадках</p>',
                'en':'<p class="mb-2">Hotel accommodation</p></li>' +
                    '<p class="mb-2">Festival VIP PASS</p></li>' +
                    '<p class="mb-2">Cable lifts pass</p></li>' +
                    '<p class="mb-2">VIP zone access</p></li>' +
                    '<p class="mb-2">Special offers in resort restaurants</p></li>'
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
            guestsName:{
                'ru':'Гости',
                'en':'Guests'
            },
            guestsMail:{
                'ru':'гостя',
                'en':'guests'
            },
            guestMail:{
                'ru':'гость',
                'en':'guest'
            },
            hotelMailBreakfast:{
                'ru':'с завтраком',
                'en':'with breakfast'
            },
            hotelMailNoBreakfast:{
                'ru':'без завтрака',
                'en':'no breakfast'
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
                'ru':'Отель',
                'en':'Hotel'
            },
            guestPromoCode:{
                'ru':'Промокод',
                'en':'Promocode'
            },
            guestPromoCodeApply:{
                'ru':'Применить',
                'en':'Apply'
            },
            userAgreement:{
                'ru':'пользовательское соглашение',
                'en':'user agreement'
            },
            stepThree:{
                'ru':'Заполните, персональные данные и оставьте контактную информацию.',
                'en':'Please, fill the personal information.'
            },
            stepFour:{
                'ru':'Проверьте введенные данные, подтвердите согласие на их обработку, введите промокод, если имеется и</li>' +
                    'нажмите кнопку «Купить тур».',
                'en':'Check your details, enter promocode.'
            },
            stepDates:{
                'ru':'Выберите даты',
                'en':'Please, choose dates'
            },
            dateFrom:{
                'ru':'Даты заезда',
                'en':'Date in'
            },
            dateTill:{
                'ru':'Даты выезда',
                'en':'Date out'
            },
            dateNote:{
                'ru':'* Туры длительностью менее 9 дней станут доступны с 01.01.2021',
                'en':'* Туры длительностью менее 9 дней станут доступны с 01.01.2021',
            },
            tourAdults:{
                'ru':'Количество взрослых',
                'en':'Number of adults',
            },
            tourKids:{
                'ru':'Количество детей',
                'en':'Number of children',
            },
            stepHotel:{
                'ru':'Выберите отель и тип номера.',
                'en':'Please, choose your accommodation.'
            },
            errorChoosePass:{
                'ru':'Вы забыли выбрать вариант размещения.',
                'en':'Please, choose your pass.'
            },
            errorChooseDates:{
                'ru':'Вы забыли выбрать даты заезда.',
                'en':'Please, choose your the dates of tour.'
            },
            errorChoose9Dates:{
                'ru':'Туры менее 9 дней пока недоступны.',
                'en':'Minimal tour 9 days at this moment.'
            },
            errorChooseAdults:{
                'ru':'Вы забыли выбрать количество человек.',
                'en':'Please, choose number of people.'
            },
            errorChooseRoom:{
                'ru':'Вы забыли выбрать тип номера.',
                'en':'Please, choose your accommodation.'
            },
            errorFillFIO:{
                'ru':'Вы забыли заполнить персональные данные.',
                'en':'Please, fill Name and Surname.'
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
                'ru':'<p><b>В тур включено:</b></p></li>' +
                    '<ul></li>' +
                    '<li> Браслет участника</li></li>' +
                    '<li> Проживание в отеле</li></li>' +
                    '<li> Ски-пасс</li></li>' +
                    '</ul>',
                'en':'<p><b>Tour details:</b></p></li>' +
                    '<ul></li>' +
                    '<li> Festival PASS</li></li>' +
                    '<li> Hotel accommodation</li></li>' +
                    '<li> Cable lifts ticket(s)</li></li>' +
                    '</ul>',
            },
            guestAgreement:{
                'ru':'<p>Я даю <span class="btn btn-link border-0 p-0" @click.prevent="showModal = true">согласие</span></li>' +
                    'на обработку персональных данных</p>',
                'en':'<p>I accept <span class="btn btn-link border-0 p-0" @click.prevent="showModal = true">Terms and Conditions</span></p>'
            },
            guestOfferAccept:{
                'ru':'<p>Я согласен c <span class="btn btn-link border-0 p-0"</li>' +
                    '@click.prevent="showOffer = true">политикой конфиденциальности</span></p>',
                'en':'<p>I accept <span class="btn btn-link border-0 p-0"</li>' +
                    '@click.prevent="showOffer = true">offer.</span></p>'
            },
            buyTour:{
                'ru':'Купить тур',
                'en':'Buy tour'
            },
            tourSuccess:{
                'ru':'<p>Вы успешно оформили тур New Star Camp.</p></li>' +
                    '<p>Ваучер отправлен на email.</p></li>' +
                    '<p>Скоро увидимся ;)</p></li>',
                'en':'<p>You win! :)</p>' +
                    '<p>Voucher goes to email right now.</p></li>' +
                    '<p>See you soon ;)</p></li>',
            },
            tourFail:{
                'ru':'<p>Возникла ошибка при проведении платежа,</li>' +
                    '<a href="#">попробуйте еще раз</a>.</p>',
                'en':'<p>An error occurred while making a payment, </li>' +
                    '<a href="#">try again</a>.</p>'
            },
            newStarDesc:{
                'ru':'ООО «Нью Стар» — организатор спортивно-музыкального фестиваля New Star Camp, который пройдёт 26 марта -</li>' +
                    '4 апреля 2021 года на всесезонном горном курорте «Роза Хутор» (Сочи).',
                'en':'“New Star” LLC is the organizer of “New Star Camp” sports and music festival, that will</li>' +
                    ' be held on March 26 - 4 April, 2020 at Russian ski resort “Rosa Khutor” (Sochi).'
            }
        },
        sent: false,
        showModal: false,
        showOffer: false,
        step: 1,
        totalsteps: 5,
        errors: null,
        guests: 1,
        error: null,

        steps: [
            {
                active: true,
                id: 1,
                name: {
                    'ru':'Выбор<br> категории',
                    'en': 'Choose<br> your tour'
                },
                text: 'text-left',
                col: 'col',
            },
            {
                active: false,
                id: 2,
                name: {
                    'ru':'Выбор<br> даты',
                    'en':'Choose<br> dates'
                },
                text: 'text-center',
                col: 'col-3',
            },
            {
                active: false,
                id: 3,
                name: {
                    'ru':'Выбор<br> отеля',
                    'en':'Choose<br> accommodation'
                },
                text: 'text-center',
                col: 'col-3',
            },
            {
                active: false,
                id: 4,
                name: {
                    'ru':'Персональные<br> данные',
                    'en':'Personal<br> details'
                },
                text: 'text-center',
                col: 'col-3',
            },
            {
                active: false,
                id: 5,
                name: {
                    'ru': 'Покупка<br> тура',
                    'en': 'Tour<br> purchasing'
                },
                text: 'text-right',
                col: 'col',
            }
        ],

        passSDetails: false,
        passVDetails: false,

        passes: [
            {
                name: 'standard',
                code: 'S',
                color: '#CCCCCC',
                price: 8000,
            },
            {
                name: 'vip',
                code: 'V',
                color: '#777FA8',
                price: 20000,
            }
        ],
        disabledDates: {
            to: new Date(2021, 2, 26),
            from: new Date(2021, 3, 5),
            dates: [
                new Date(2021, 2, 28),
                new Date(2021, 2, 29),
                new Date(2021, 2, 30),
                new Date(2021, 2, 31),
                new Date(2021, 3, 1),
                new Date(2021, 3, 2),
            ],
        },
        hotels: [
            {
                active: true,
                name: 'Riders Lodge **',
                code: 'RIL',
                address: 'Улица Медовея 6, Эсто-Садок, Россия</li>',
                formula: 0,
                gain: 1.07,
                gallery:
                    [
                        'https://444803.selcdn.ru/cdn.awsd.cc/hotel-rl-1.jpg',
                        'https://444803.selcdn.ru/cdn.awsd.cc/hotel-rl-2-standard-1.jpg',
                        'https://444803.selcdn.ru/cdn.awsd.cc/hotel-rl-3-dorm-1.jpg',
                        'https://444803.selcdn.ru/cdn.awsd.cc/hotel-rl-2-standard-1.jpg',
                        'https://444803.selcdn.ru/cdn.awsd.cc/hotel-rl-2-standard-1.jpg',
                        'https://444803.selcdn.ru/cdn.awsd.cc/hotel-rl-4-family-1.jpg',
                    ],
                rooms:[
                    {
                        active: true,
                        name: 'Стандартный',
                        code: 'S',
                        price: {
                            '1': 4700,
                            '2': 5300
                        },
                        breakfast: {
                            '1':0,
                            '2':0
                        },
                        desc: {
                            'ru':'<ul><li>30 кв. м.</li>' +
                                '<li>Вместимость до 3-х человек</li>' +
                                '<li>Вид на горы</li>' +
                                '<li>WI-FI</li>' +
                                '<li>Фен</li>' +
                                '<li>Гигиенические средства</li>' +
                                '<li>Полотенца</li>' +
                                '<li>Сушилка для белья</li></ul>',
                            'en': '<ul><li>30 кв. м.<li>' +
                                '<li>Вместимость до 3-х человек</li>' +
                                '<li>Вид на горы</li>' +
                                '<li>WI-FI</li>' +
                                '<li>Фен</li>' +
                                '<li>Гигиенические средства</li>' +
                                '<li>Полотенца</li>' +
                                '<li>Сушилка для белья</li></ul>'
                        },
                        photo: 'https://444803.selcdn.ru/cdn.awsd.cc/hotel-rl-2-standard-1.jpg'
                    },
                    {
                        active: true,
                        name: 'Стандарт с балконом',
                        code: 'SB',
                        price: {
                            '1': 5200,
                            '2': 5800
                        },
                        breakfast: {
                            '1':0,
                            '2':0
                        },
                        desc: {
                            'ru': '<ul><li>30 кв. м.</li>' +
                                '<li>Вместимость до 3-х человек</li>' +
                                '<li>Балкон</li>' +
                                '<li>Вид на горы</li>' +
                                '<li>WI-FI</li>' +
                                '<li>Фен</li>' +
                                '<li>Светильник</li>' +
                                '<li>Гигиенические средства</li>' +
                                '<li>Полотенца</li>' +
                                '<li>Сушилка для белья</li></ul>',
                            'en': ''
                        },
                        photo: 'https://444803.selcdn.ru/cdn.awsd.cc/hotel-rl-2-standard-1.jpg'
                    },
                    {
                        active: false,
                        name: 'Стандарт улучшенный без балкона с завтраком (1-2 человека)',
                        code: 'SU',
                        price: {
                            '1': 7100,
                            '2': 7800,
                        },
                        breakfast: {
                            '1':0,
                            '2':0
                        },
                        desc: {
                            'ru':'<ul><li>+/- 40 кв. м. </li>' +
                                '<li>Вместимость до 3-х человек</li>' +
                                '<li>Вид на горы</li>' +
                                '<li>WI-FI</li>' +
                                '<li>Телефон</li>' +
                                '<li>Фен</li>' +
                                '<li>Светильник</li>' +
                                '<li>Гигиенические средства</li>' +
                                '<li>Полотенца</li>' +
                                '<li>Сушилка для белья</li>' +
                                '<li>Холодильник</li>' +
                                '<li>Чайник</li>' +
                                '<li>Халат и тапочки</li></ul>',
                            'en': '<ul><li>+/- 40 кв. м. </li>' +
                                '<li>Вместимость до 3-х человек</li>' +
                                '<li>Вид на горы</li>' +
                                '<li>WI-FI</li>' +
                                '<li>Телефон</li>' +
                                '<li>Фен</li>' +
                                '<li>Светильник</li>' +
                                '<li>Гигиенические средства</li>' +
                                '<li>Полотенца</li>' +
                                '<li>Сушилка для белья</li>' +
                                '<li>Холодильник</li>' +
                                '<li>Чайник</li>' +
                                '<li>Халат и тапочки</li></ul>'
                        },
                        photo: 'https://444803.selcdn.ru/cdn.awsd.cc/hotel-rl-5-standard-2.jpg'
                    },
                    {
                        active: false,
                        name: 'Стандарт улучшенный без балкона с завтраком (3-4 человека)',
                        code: 'S3',
                        price: {
                            '1': 7100,
                            '2': 7800,
                            '3': 8500,
                            '4': 9200
                        },
                        breakfast: {
                            '1':0,
                            '2':0,
                            '3':0,
                            '4':0
                        },
                        desc: {
                            'ru': '<ul><li>50 кв. м. </li>' +
                                '<li>Вместимость до 5-и человек</li>' +
                                '<li>Дополнительные диваны</li>' +
                                '<li>Вид на горы</li>' +
                                '<li>WI-FI</li>' +
                                '<li>Фен</li>' +
                                '<li>Гигиенические средства</li>' +
                                '<li>Полотенца</li>' +
                                '<li>Сушилка для белья</li>' +
                                '<li>Холодильник</li>' +
                                '<li>Чайник и кофемашина</li>' +
                                '<li>Халат и тапочки</li></ul>',
                            'en': '<ul><li>50 кв. м. </li>' +
                                '<li>Вместимость до 5-и человек</li>' +
                                '<li>Дополнительные диваны</li>' +
                                '<li>Вид на горы</li>' +
                                '<li>WI-FI</li>' +
                                '<li>Фен</li>' +
                                '<li>Гигиенические средства</li>' +
                                '<li>Полотенца</li>' +
                                '<li>Сушилка для белья</li>' +
                                '<li>Холодильник</li>' +
                                '<li>Чайник и кофемашина</li>' +
                                '<li>Халат и тапочки</li></ul>'
                        },
                        photo: 'https://444803.selcdn.ru/cdn.awsd.cc/hotel-rl-5-standard-2.jpg'
                    },
                    {
                        active: true,
                        name: 'Двухкомнатный номер',
                        code: 'S2',
                        price: {
                            '1': 7100,
                            '2': 7800,
                            '3': 8500,
                        },
                        breakfast: {
                            '1':0,
                            '2':0,
                            '3':0,
                        },
                        desc:{
                            'ru': '<ul><li>40 кв. м. </li>' +
                                '<li>Вместимость до 4-х человек</li>' +
                                '<li>2 раздельные/одна большая кровать</li>' +
                                '<li>Диван кровать</li>' +
                                '<li>Гостевой туалет</li>' +
                                '<li>Халат и тапочки</li>' +
                                '<li>Чайная и кофейная станция</li>' +
                                '<li>Холодильник</li></ul>',
                            'en': '<ul><li>40 кв. м. </li>' +
                                '<li>Вместимость до 4-х человек</li>' +
                                '<li>2 раздельные/одна большая кровать</li>' +
                                '<li>Диван кровать</li>' +
                                '<li>Гостевой туалет</li>' +
                                '<li>Халат и тапочки</li>' +
                                '<li>Чайная и кофейная станция</li>' +
                                '<li>Холодильник</li></ul>'
                        },
                        photo: 'https://444803.selcdn.ru/cdn.awsd.cc/hotel-rl-7-double-1.jpg'
                    },
                    {
                        active: true,
                        name: 'Семейный номер',
                        code: 'FAM',
                        breakfast: {
                            '1':0,
                            '2':0
                        },
                        price: {
                            '1': 11500,
                            '2': 12000
                        },
                        desc: {
                            'ru': '<ul><li>30 кв. м.</li>' +
                                '<li>Вместимость до 4-х человек</li>' +
                                '<li>Одна большая / Две раздельные кровати</li>' +
                                '<li>Одна 2-х ярусная кровать</li>' +
                                '<li>Балкон</li>' +
                                '<li>Холодильник</li>' +
                                '<li>Халат и тапочки</li>' +
                                '<li>Фен</li>' +
                                '<li>WI-FI</li>' +
                                '<li>Сушилка для белья</li>' +
                                '</ul>',
                            'en': '<ul><li>30 кв. м.</li>' +
                                '<li>Вместимость до 4-х человек</li>' +
                                '<li>Одна большая / Две раздельные кровати</li>' +
                                '<li>Одна 2-х ярусная кровать</li>' +
                                '<li>Балкон</li>' +
                                '<li>Холодильник</li>' +
                                '<li>Халат и тапочки</li>' +
                                '<li>Фен</li>' +
                                '<li>WI-FI</li>' +
                                '<li>Сушилка для белья</li>' +
                                '</ul>',
                        },
                        photo: 'https://444803.selcdn.ru/cdn.awsd.cc/hotel-rl-4-family-1.jpg',
                    }
                ],
                desc:{
                    'ru':'Riders Lodge современный отель с дружелюбной атмосферой, концептуальным дизайном и ' +
                        'с бесконечной чередой разнообразных активностей. Это первый в России отель для райдеров ' +
                        'и любителей активного отдыха, где можно отлично отдохнуть в компании друзей или в кругу семьи, ' +
                        'а также со своими домашними питомцами. Отель расположен в Горной Олимпийской деревне на курорте ' +
                        '«Роза Хутор» на высоте 1170 метров над уровнем моря, в шаговой доступности от ' +
                        'подъемника «Олимпия» (первая очередь) и в непосредственной близости к трассе «Шале» ' +
                        'и кресельному подъемнику. Riders Lodge является центральным местом для отдыха ' +
                        'чемпионов России и мира по сноубордингу, популярных блогеров в области туризма и ' +
                        'активного спорта, а также любимым местом для индивидуальных путешественников и ' +
                        'семейных пар, предпочитающих совмещать экотуризм и активный досуг.',
                    'en':'Do you want to live at the festival epicenter at an affordable price? Riders Lodge is the first hotel in Russia for riders and a friendly gathering and hang out, and very closely located relative to all activities and to the Festival Headquarters and the Olympia cable lift. The hotel lobby deserves special attention - cause it’s full of fun from morning to late night that life: convenient chill-out zone with a fast internet connection, a games area, a cinema, and the Surf Coffee cafe inside.'
                }
            },
            {
                active: false,
                name: 'AYS Let It Snow',
                code: 'AYSL',
                address: 'Роза Хутор, п. Эсто-Садок, ул. Сулимовка, 5',
                gallery: [],
                rooms: [
                    {
                        active: true,
                        name: '',
                        code: '',
                        desc:[

                        ]
                    },
                    {
                        active: true,
                        name: '',
                        code: '',
                        desc:[

                        ]
                    }
                ],
                desc: {
                    'ru': '"Расположившийся на высоте 1170 метров в Горной Олимпийской деревне отель LET IT SNOW HOTEL - место, где царит дружеская атмосфера, а проживание радует приятными ценами</li>' +
                        'Удобные одноместные и двухместные номера в блоке для заядлых путешественников и любителей отдыха в горах. Фишка отеля - просторная кухня и гостевая зона, где всегда найдется компания, чтобы попить чай, сыграть партию в настолки или просто поболтать на разные темы</li>' +
                        'Отдельная комната для багажа на первом этаже еще один приятный бонус - здесь можно оставить вещи и отправиться на прогулку. Бесплатный Wi-Fi на всей территории гостиницы дает возможность беспрепятственно выходить в интернет в любое время суток</li>' +
                        'Чтобы вы могли не только насладиться чистым воздухом и великолепными пейзажами гор, а еще и с комфортом отдохнуть на Черном море, из Олимпийской деревни до пляжа Роза Хутор организован прямой трансфер</li>' +
                        'А для прогулок по самому курорту для каждого гостя - бесплатный ски-пасс на все время проживания на подъемник ""Олимпия"", который курсирует между Роза Долиной и Горной Олимпийской деревней"</li>',
                    'en': 'The hotel is located in the Mountain Olympic Village (1170 meters high) in a quiet location with beautiful views from the rooms. Its main feature is graffiti design rooms. Each morning at the hotel begins with a delicious breakfast at the AYS Cafe. You can also enjoy lunch and dinner at AYS Kitchen - a cozy place with a homely atmosphere and a delicious various menu.'
                }
            },
            {
                active: false,
                name: 'AYS Design Hotel **',
                code: 'AYS',
                gallery: [
                    'https://444803.selcdn.ru/cdn.awsd.cc/hotel-ays-1.JPG',
                    'https://444803.selcdn.ru/cdn.awsd.cc/hotel-ays-2.JPG',
                    'https://444803.selcdn.ru/cdn.awsd.cc/hotel-ays-3.JPG',
                    'https://444803.selcdn.ru/cdn.awsd.cc/hotel-ays-4.JPG',
                    'https://444803.selcdn.ru/cdn.awsd.cc/hotel-ays-5.JPG',
                ],
                rooms: [
                    {
                        active: true,
                        name: 'Двухместный номер в блоке',
                        code: 'D2B',
                        desc: '"- +/- 12-18 кв. м.  </li>' +
                            '<li>2-3-4 номера на блок</li>' +
                            '<li>Шкаф</li>' +
                            '<li>Стол и стул</li>' +
                            '<li>Прикроватные тумбы</li>' +
                            '<li>2-3 овмещенных санузела на блок</li>' +
                            '<li>Туалетные принадлежности</li>' +
                            '<li>Комплект полотенец"'
                    },
                    {
                        active: true,
                        name: 'Двухместный стандарт',
                        code: 'D2S',
                        desc: '"- +/- 20-22 кв. м. </li>' +
                            '<li>Возможность дополнительного места</li>' +
                            '<li>Стол и стул</li>' +
                            '<li>Шкаф</li>' +
                            '<li>TV</li>' +
                            '<li>Минихолодильник</li>' +
                            '<li>Зеркало</li>' +
                            '<li>Чайник и чайный набор</li>' +
                            '<li>Комлект полотенец</li>' +
                            '<li>Фен</li>' +
                            '<li>Туалетные принадлежности"'
                    },
                    {
                        active: true,
                        name: 'Двухкомнатный полулюкс',
                        code: 'D2LH',
                        desc: '"- +/- 43 кв. м. </li>' +
                            '<li>Кровать/две кровати и диван кровать</li>' +
                            '<li>Шкаф</li>' +
                            '<li>Прикроватные тумбы</li>' +
                            '<li>Журнальный столик</li>' +
                            '<li>Минихолодильник</li>' +
                            '<li>Чайник, чайный набор</li>' +
                            '<li>Фен</li>' +
                            '<li>Комплект полотенец</li>' +
                            '<li>Туалетные принадлежности"'
                    },
                    {
                        active: true,
                        name: 'Шестиместный дорм',
                        code: 'D6',
                        desc: '"- 2 комнаты: 25 кв. м. и 15 кв. м. </li>' +
                            '<li>Две двухъярусные и две одностальные кровати</li>' +
                            '<li>Шкаф</li>' +
                            '<li>Стол и четыре стула</li>' +
                            '<li>Туалетные принадлежности </li>' +
                            '<li>Комплект полотенец"'
                    }
                ],
                desc:{
                    'ru':'"AYS DESIGN HOTEL располагается в Горной Олимпийской деревне на высоте 1170 метров в месте с чистым горным воздухом и прекрасными видами.Главная фишка отеля — дизайнерские номера с граффити</li>' +
                        'Многообразие категорий номеров - номера в блоке, стандарты, дорм на 6 человек и полулюкс - позволяет выбрать именно то, что подходит для отдыха больше всего</li>' +
                        'Благодаря разнообразию категорий номеров - блочные номера, стандарты, дорм на 6 человек и полулюкс - можно выбрать именно то, что Вам больше подходит для отдыха. Ваш комфорт - наша забота! Поэтому номера мы укомплектовали максимально. А на каждом этаже поставили кулеры с питьевой водой. Для беспрепятственного выхода в интернет - бесплатный Wi-Fi</li>' +
                        'В нашем отеле утро начинается с сытного завтрака в AYS Cafe на ресепшн. Пообедать и поужинать можно в AYS Kitchen - уютное место с домашней атмосферой и вкусным полезным меню из блюд с разных уголков света. Для любителей подкрепиться ночью мы разработали специальное меню</li>' +
                        'Отдохнуть на берегу Черного моря наши гости могут на благоустроенном пляже Роза Хутор рядом с Олимпийскими объектами и Сочи Парком - русским Диснейлендом</li>' +
                        'Прогуляться по набережной реки Мзымта, сделать яркие селфи на фоне Ратуши легко можно сделать в любое время благодаря бесплатному ски-пассу на подъемник ""Олимпия"", который курсирует между Роза Долиной и Горной Олимпийской Деревней</li>' +
                        'Легко организовать корпоративное мероприятие можно в нашем коференц-зале на 30 человек</li>' +
                        'Лучший отдых в горах Роза Хутор - отдых с AYS HOTELS!"',
                    'en':''
                }
            },
            {
                active: false,
                name: 'Green Flow ****',
                code: 'GRF',
                address: 'Роза Хутор, п. Эсто-Садок, ул. Сулимовка, 9',
                gallery: [
                    'https://444803.selcdn.ru/cdn.awsd.cc/hotel-gf-1.jpg',
                    'https://444803.selcdn.ru/cdn.awsd.cc/hotel-gf-2.JPG',
                    'https://444803.selcdn.ru/cdn.awsd.cc/hotel-gf-3.JPG',
                    'https://444803.selcdn.ru/cdn.awsd.cc/hotel-gf-4.jpeg',
                    'https://444803.selcdn.ru/cdn.awsd.cc/hotel-gf-5.jpg',
                ],
                desc:{
                    'ru': 'Green Flow – настоящий оазис для тех, кто хочет отдохнуть</li>' +
                        ' в тишине и покое, наслаждаясь невероятной красотой гор из окна</li>' +
                        ' номера. Это не просто комфорт и сервис, это особая атмосфера, в</li>' +
                        ' которую хочется возвращаться. Неотъемлемая составляющая отеля —</li>' +
                        ' открытый всесезонный инфинити бассейн с подогревом, подсветкой и</li>' +
                        ' панорамным видом на живописные склоны Северокавказских гор.</li>' +
                        ' Удовольствие от посещения спа-зоны отеля и открытого бассейна</li>' +
                        ' останется ещё на долгое время на ваших красивых фотографиях.',
                    'en':'Green Flow is an amazing oasis for those who want to chill in peace and quiet. It is not just comfort and service, it is a special atmosphere. An integral part of the hotel is an all-season outdoor heated and lighted pool, with panoramic views of the northern slopes. The hotel\'s spa areas and the outdoor pool will remain for a long time in your beautiful shots and memory.'
                }
            },
            {
                active: false,
                name: 'Rosa Springs',
                code: 'ROS',
                address: 'Роза Хутор, п. Эсто-Садок, ул. Медовея, д. 4',
                gallery: [
                    'https://444803.selcdn.ru/cdn.awsd.cc/hotel-rs-1.jpg',
                    'https://444803.selcdn.ru/cdn.awsd.cc/hotel-rs-2.jpg',
                    'https://444803.selcdn.ru/cdn.awsd.cc/hotel-rs-3.jpg',
                    'https://444803.selcdn.ru/cdn.awsd.cc/hotel-rs-4.jpg',
                    'https://444803.selcdn.ru/cdn.awsd.cc/hotel-rs-5.jpg',
                ],
                desc: {
                    'ru' : 'Отель для тех, кто хочет не только классно отдохнуть, но и</li>' +
                            ' поправить свое здоровье после многочисленных вечеринок во время</li>' +
                        ' фестиваля. Rosa Springs — это первый бальнеологический отель в</li>' +
                        ' Красной Поляне. Помимо медицинского центра, все проживающие могут</li>' +
                        ' посещать спа-комплекс с крытым плавательным бассейном и банями.</li>' +
                        ' Отель находится всего в 5 минутах ходьбы от Штаба фестиваля и в</li>' +
                        ' непосредственной близости от многих вечеринок NSC, подъёмника</li>' +
                        ' Олимпия, а также магазинов, кафе, баров и ресторанов, среди которых</li>' +
                        ' Груша и Surf Coffee.',
                    'en':'This hotel was made especially for those who want to have a cool vacation but also retreat health after numerous parties during the festival. Rosa Springs is the first balneological hotel in Krasnaya Polyana mountainside. In addition to the medical center, all residents can visit its spa complex with an indoor swimming pool and baths.</li>' +
                        'The hotel is just a 5-minute walk from Festival Headquarters and in close proximity to many NSC parties, Olympia cable lifts, as well as shops, cafes, bars, and restaurants, including Grusha restaurant and Surf Coffee cafe.</li>'
                }
            },
            {
                active: true,
                name: 'Отель Radisson Rosa Khutor *****',
                code: 'RRK5',
                gain: 1.07,
                formula: 1,
                address:'Набережная Лаванды, 4 , Эсто-Садок, Росси',
                gallery: [
                    'https://444803.selcdn.ru/cdn.awsd.cc/hotel-rrk5-1.jpg',
                    'https://444803.selcdn.ru/cdn.awsd.cc/hotel-rrk5-2-standard-1.jpg',
                    'https://444803.selcdn.ru/cdn.awsd.cc/hotel-rrk5-3-premium-balcony-1.jpg',
                    'https://444803.selcdn.ru/cdn.awsd.cc/hotel-rrk5-4-half-lux-1.jpg',
                    'https://444803.selcdn.ru/cdn.awsd.cc/hotel-rrk5-5-lux-1.jpg',
                    'https://444803.selcdn.ru/cdn.awsd.cc/hotel-rrk5-6-president-1.jpg',
                    'https://444803.selcdn.ru/cdn.awsd.cc/hotel-rrk5-6-president-1.jpg',
                    'https://444803.selcdn.ru/cdn.awsd.cc/hotel-rrk5-lux-1.jpg',
                    'https://444803.selcdn.ru/cdn.awsd.cc/hotel-rrk5-lux-2.jpg'
                ],
                rooms: [
                    {
                        active: true,
                        name: 'Стандарт',
                        code: 'S2',
                        price: [8800,8800,7000,7000,7000,7000,7000,4900,4900,4900],
                        price10: 62400,
                        price91: 53600,
                        price92: 57500,
                        breakfast: {
                            '1': 800,
                            '2': 2000
                        },
                        desc: {
                            'ru': '<ul><li>27 кв. м. </li>' +
                                '<li>Халат и тапочки</li>' +
                                '<li>Чайный и кофейный набор</li>' +
                                '<li>Телевизор</li>' +
                                '<li>Профессиональный фен</li>' +
                                '<li>Бесплатная бутылированная вода</li>' +
                                '<li>Бесплатный WI-FI</li></ul>',
                            'en': '<ul><li>27 м2 </li>' +
                                '<li>Bathrobe and slippers</li>' +
                                '<li>Tea and Coffe</li>' +
                                '<li>TV</li>' +
                                '<li>Hair Dryer</li>' +
                                '<li>Water</li>' +
                                '<li>WI-FI</li></ul>'
                        },
                        photo: 'https://444803.selcdn.ru/cdn.awsd.cc/hotel-rrk5-2-standard-1.jpg'
                    },
                    {
                        active: true,
                        name: 'Премиум с балконом',
                        code: 'PB',
                        price: [8800,8800,7000,7000,7000,7000,7000,4900,4900],
                        price10: 62400,
                        price91: 53600,
                        price92: 57500,
                        breakfast: {
                            '1': 800,
                            '2': 2000
                        },
                        desc:{
                            'ru': '<ul><li>29 кв. м. </li>' +
                                '<li>Балкон </li>' +
                                '<li>Халат и тапочки</li>' +
                                '<li>Эспрессо-машина, чайник в номере</li>' +
                                '<li>Утюг и гладильная доска</li>' +
                                '<li>Телевизор</li>' +
                                '<li>Профессиональный фен</li>' +
                                '<li>Бесплатная бутылированная вода</li>' +
                                '<li>Бесплатныцй WI-FI</li></ul>',
                            'en': '<ul><li>29 m2</li>' +
                                '<li>Balcony </li>' +
                                '<li>High floor</li>' +
                                '<li>Халат и тапочки</li>' +
                                '<li>Espresso machine, Teapot</li>' +
                                '<li>Iron</li>' +
                                '<li>TV</li>' +
                                '<li>Hair Dryer</li>' +
                                '<li>Water</li>' +
                                '<li>WI-FI</li></ul>'
                        },
                        photo: 'https://444803.selcdn.ru/cdn.awsd.cc/hotel-rrk5-3-premium-balcony-1.jpg'
                    },
                    {
                        active: true,
                        name: 'Премиум с балконом с видом на реку',
                        code: 'PBRV',
                        price: [8800,8800,7000,7000,7000,7000,7000,4900,4900],
                        price10: 75900,
                        price91: 65600,
                        price92: 69500,
                        breakfast: {
                            '1': 800,
                            '2': 2000
                        },
                        desc:{
                            'ru': '<ul><li>29 кв. м. </li>' +
                                '<li>Вид на реку </li>' +
                                '<li>Балкон </li>' +
                                '<li>Высокий этаж</li>' +
                                '<li>Халат и тапочки</li>' +
                                '<li>Эспрессо-машина, чайник в номере</li>' +
                                '<li>Утюг и гладильная доска</li>' +
                                '<li>Телевизор</li>' +
                                '<li>Сейф в номера</li>' +
                                '<li>Профессиональный фен</li>' +
                                '<li>Бесплатная бутылированная вода</li>' +
                                '<li>Бесплатныцй WI-FI</li></ul>',
                            'en': '<ul><li>29 m2</li>' +
                                '<li>Balcony </li>' +
                                '<li>High floor</li>' +
                                '<li>Халат и тапочки</li>' +
                                '<li>Espresso machine, Teapot</li>' +
                                '<li>Iron</li>' +
                                '<li>TV</li>' +
                                '<li>Hair Dryer</li>' +
                                '<li>Water</li>' +
                                '<li>WI-FI</li></ul>'
                        },
                        photo: 'https://444803.selcdn.ru/cdn.awsd.cc/hotel-rrk5-3-premium-balcony-1.jpg'
                    },
                    {
                        active: true,
                        name: 'Полулюкс с видом на площадь',
                        code: 'HLSV',
                        price: [16300,16300,14500,14500,14500,14500,14500,12400,12400],
                        price10: 129900,
                        price91: 113600,
                        price92: 117500,
                        breakfast: {
                            '1': 800,
                            '2': 2000
                        },
                        desc:{
                            'ru':'<ul><li>46 кв. м. </li>' +
                                '<li>Вид на площадь</li>' +
                                '<li>Спальня и отдельная гостиная комната в стиле особняка Нью-Йорка</li>' +
                                '<li>Халат и тапочки</li>' +
                                '<li>Дополнительные косметические принадлежности</li>' +
                                '<li>Эспрессо-машина, сайник в номере</li>' +
                                '<li>Утюг и гладильная доска</li>' +
                                '<li>Телевизор</li>' +
                                '<li>Увеличительное зеркало</li>' +
                                '<li>Профессиональный фен</li>' +
                                '<li>Бесплатная бутылированная вода</li>' +
                                '<li>Бесплатный WI-FI</li></ul>',
                            'en': '<ul><li>+/- 29 m2</li>' +
                                '<li>Balcony </li>' +
                                '<li>High floor</li>' +
                                '<li>Халат и тапочки</li>' +
                                '<li>Espresso machine, Teapot</li>' +
                                '<li>Iron</li>' +
                                '<li>TV</li>' +
                                '<li>Safe</li>' +
                                '<li>Mirror</li>' +
                                '<li>Tropic bath</li>' +
                                '<li>Hair Dryer</li>' +
                                '<li>Water</li>' +
                                '<li>WI-FI</li></ul>'
                        },
                        photo: 'https://444803.selcdn.ru/cdn.awsd.cc/hotel-rrk5-halflux-balcony-1.jpg'
                    },
                    {
                        active: true,
                        name: 'Полулюкс с видом на площадь и балконом',
                        code: 'HLSVB',
                        price: [16800,16800,15000,15000,15000,15000,15000,12900,12900],
                        price10: 134400,
                        price91: 117600,
                        price92: 121500,
                        breakfast: {
                            '1': 800,
                            '2': 2000
                        },
                        desc:{
                            'ru':'<ul><li>46 кв. м. </li>' +
                                '<li>Вид на площадь</li>' +
                                '<li>Балкон</li>' +
                                '<li>Спальня и отдельная гостиная комната в стиле особняка Нью-Йорка</li>' +
                                '<li>Халат и тапочки</li>' +
                                '<li>Дополнительные косметические принадлежности</li>' +
                                '<li>Эспрессо-машина, сайник в номере</li>' +
                                '<li>Утюг и гладильная доска</li>' +
                                '<li>Телевизор</li>' +
                                '<li>Профессиональный фен</li>' +
                                '<li>Бесплатная бутылированная вода</li>' +
                                '<li>Бесплатный WI-FI</li></ul>',
                            'en': '<ul><li>+/- 29 m2</li>' +
                                '<li>Balcony </li>' +
                                '<li>High floor</li>' +
                                '<li>Халат и тапочки</li>' +
                                '<li>Espresso machine, Teapot</li>' +
                                '<li>Iron</li>' +
                                '<li>TV</li>' +
                                '<li>Hair Dryer</li>' +
                                '<li>Water</li>' +
                                '<li>WI-FI</li></ul>'
                        },
                        photo: 'https://444803.selcdn.ru/cdn.awsd.cc/hotel-rrk5-halflux-balcony-1.jpg'
                    },
                    {
                        active: true,
                        name: 'Люкс',
                        code: 'L',
                        price: [17800,17800,16000,16000,16000,16000,16000,13900,13900],
                        price10: 143400,
                        price91: 125600,
                        price92: 129500,
                        breakfast: {
                            '1': 800,
                            '2': 2000
                        },
                        desc:{
                            'ru':'<ul><li>50 кв. м. </li>' +
                                '<li>Вид на реку или на горы</li>' +
                                '<li>Спальня и отдельная гостинная комната в стиле особняка Нью-Йорка</li>' +
                                '<li>Халат и тапочки</li>' +
                                '<li>Дополнительные косметические принадлежности</li>' +
                                '<li>Эспрессо-машина, чайник в номере</li>' +
                                '<li>Утюг и гладильная доска</li>' +
                                '<li>Телевизор</li>' +
                                '<li>Профессиональный фен</li>' +
                                '<li>Бесплатная бутылированная вода</li>' +
                                '<li>Бесплатный WI-FI</li></ul>',
                            'en': '<ul><li>50 m2</li>' +
                                '<li>Balcony </li>' +
                                '<li>High floor</li>' +
                                '<li>Халат и тапочки</li>' +
                                '<li>Espresso machine, Teapot</li>' +
                                '<li>Iron</li>' +
                                '<li>TV</li>' +
                                '<li>Hair Dryer</li>' +
                                '<li>Water</li>' +
                                '<li>WI-FI</li></ul>'
                        },
                        photo: 'https://444803.selcdn.ru/cdn.awsd.cc/hotel-rrk5-lux-2.jpg'
                    },
                    {
                        active: true,
                        name: 'Президентский люкс',
                        code: 'PREL',
                        price: [27800,27800,26000,26000,26000,26000,26000,23900,23900],
                        price10: 233400,
                        price91: 205600,
                        price92: 209500,
                        breakfast: {
                            '1': 800,
                            '2': 2000
                        },
                        desc:{
                            'ru': '<ul><li>115 кв. м. </li>' +
                                '<li>Вид на реку</li>' +
                                '<li>2 спальни и отдельная гостиная комната в стиле особняка Нью-Йорка</li>' +
                                '<li>Ванная и душ в каждой спальне</li>' +
                                '<li>Халат и тапочки</li>' +
                                '<li>Дополнительные косметические принадлежности</li>' +
                                '<li>Эспрессо-машина, чайник в номере</li>' +
                                '<li>Утюг и гладильная доска</li>' +
                                '<li>Телевизор</li>' +
                                '<li>Профессиональный фен</li>' +
                                '<li>Бесплатная бутылированная вода</li>' +
                                '<li>Бесплатный WI-FI</li></ul>',
                            'en': '<ul><li>+/- 115 m2</li>' +
                                '<li>Balcony </li>' +
                                '<li>High floor</li>' +
                                '<li>Халат и тапочки</li>' +
                                '<li>Espresso machine, Teapot</li>' +
                                '<li>Iron</li>' +
                                '<li>TV</li>' +
                                '<li>Hair Dryer</li>' +
                                '<li>Water</li>' +
                                '<li>WI-FI</li></ul>'
                        },
                        photo: 'https://444803.selcdn.ru/cdn.awsd.cc/hotel-rrk5-prelux-2.jpg'
                    },
                    {
                        active: false,
                        name: 'Семейный номер',
                        code: 'FAML',
                        desc:{
                            'ru': '<li>+/- 28 кв. м. </li>' +
                                    '<li>Дверь в номер категории Люкс</li>' +
                                '<li>Вид на реку</li>' +
                                '<li>Халат и тапочки</li>' +
                                '<li>Чайный и кофейный набор</li>' +
                                '<li>Утюг и гладильная дооска</li>' +
                                '<li>ЖК-телевизор</li>' +
                                '<li>Сейф в номере</li>' +
                                '<li>Увеличительное зеркало</li>' +
                                '<li>Профессиональный фен</li>' +
                                '<li>Тропический душ</li>' +
                                '<li>Бесплатная вода</li>' +
                                '<li>Бесплатный WI-FI',
                            'en': '<li>+/- 29 m2</li>' +
                                '<li>Balcony </li>' +
                                '<li>High floor</li>' +
                                '<li>Халат и тапочки</li>' +
                                '<li>Espresso machine, Teapot</li>' +
                                '<li>Iron</li>' +
                                '<li>TV</li>' +
                                '<li>Safe</li>' +
                                '<li>Mirror</li>' +
                                '<li>Tropic bath</li>' +
                                '<li>Hair Dryer</li>' +
                                '<li>Water</li>' +
                                '<li>WI-FI'
                        },
                        photo:''
                    }
                ],
                desc: {
                    'ru': 'Расположенный среди знаменитых Кавказских гор на знаменитом российском горном курорте "Роза Хутор", отель Radisson Rosa Khutor 5* предлагает первоклассный сервис, комфортное проживание и широкий спектр дополнительных услуг.Гостям отеля Radisson Hotel Rosa Khutor представится возможность не только увидеть поразительные горные вершины Кавказа, но и заняться самыми популярными в мире зимними видами спорта. В шаговой доступности от отеля находятся подъемники «Олимпия» и «Стрела».Отель Radisson Hotel Rosa Khutor предлагает своим гостям комфортабельные номера различных категорий, оснащённых всем необходимым согласно международным стандартам Radisson Hotel Group, как для деловых поездок, так и для отдыха.Гордостью отеля является открытая терраса Mercedes Sky Lounge с двумя подогреваемыми джакузи и панорамным баром, расположенная на высоте птичьего полёта.',
                    'en': 'The best hotel at Rosa Khutor Resort, named The Best Ski Resort Hotel by the World Ski Awards in 2014 and 2015. All the rooms in the hotel are designed by Swedish designer Christian Lundwall and furnished in full compliance with world-class standards. Two restaurants and an amazing spa area are available in the hotel. For the guests’ convenience, the hotel offers a fully equipped room for storage and drying of the sports equipment. The major benefit of the hotel is its convenient location within a few steps from «Olympia» and «Strela» ropeways.</li>' +
                        'Rosa Dolina, level 560'
                }
            },
            {
                active: true,
                name: 'Отель Park Inn by Radisson Rosa Khutor ****',
                code: 'PIRRS4',
                address: 'Улица Олимпийская 35, Эсто-Садок, Россия',
                formula: 1,
                gain: 1.07,
                gallery: [
                    'https://444803.selcdn.ru/cdn.awsd.cc/hotel-pirrs4-1.jpg',
                    'https://444803.selcdn.ru/cdn.awsd.cc/hotel-pirrs4-2-standard-1.jpg',
                    'https://444803.selcdn.ru/cdn.awsd.cc/hotel-pirrs4-3-family-1.jpg',
                    'https://444803.selcdn.ru/cdn.awsd.cc/hotel-pirrs4-4-half-lux-1.jpg',
                    'https://444803.selcdn.ru/cdn.awsd.cc/hotel-pirrs4-5-lux-1.jpg',
                    'https://444803.selcdn.ru/cdn.awsd.cc/hotel-pirrs4-6-president-lux-1.jpg',
                ],
                rooms: [
                    {
                        active: true,
                        name: 'Стандарт',
                        code: 'S2',
                        price:[4700,4700,3500,3500,3500,3500,3500,3500,3500,3500],
                        price10: 37400,
                        price91: 32700,
                        price92: 33900,
                        breakfast: {
                            '1':900,
                            '2':1800
                        },
                        desc:{
                            'ru':'<ul><li>28 кв. м.</li>' +
                                '<li>Чайник</li>' +
                                '<li>Тапочки</li>' +
                                '<li>Фен</li>' +
                                '<li>Телевизор </li>' +
                                '<li>Бесплатная бутилированная вода</li>' +
                                '<li>Бесплатный Wi-Fi</li></ul>',
                            'en':'<ul><li>29 m2</li>' +
                                '<li>Espresso machine, Teapot</li>' +
                                '<li>TV</li>' +
                                '<li>Hair Dryer</li>' +
                                '<li>Water</li>' +
                                '<li>WI-FI</li></ul>'
                        },
                        photo: 'https://444803.selcdn.ru/cdn.awsd.cc/hotel-pirrs4-2-standard-1.jpg'
                    },
                    {
                        active: true,
                        name: 'Стандарт с видом на реку',
                        code: 'S2RV',
                        price:[4700,4700,3500,3500,3500,3500,3500,3500,3500,3500],
                        price10: 33900,
                        price91: 29200,
                        price92: 30400,
                        breakfast: {
                            '1':900,
                            '2':1800
                        },
                        desc:{
                            'ru':'<ul><li>28 кв. м.</li>' +
                                '<li>Вид на реку</li>' +
                                '<li>Чайник</li>' +
                                '<li>Тапочки</li>' +
                                '<li>Фен</li>' +
                                '<li>Телевизор</li>' +
                                '<li>Бесплатная бутилированная вода</li>' +
                                '<li>Бесплатный Wi-Fi</li></ul>',
                            'en':'<ul><li>28 m2</li>' +
                                '<li>Espresso machine, Teapot</li>' +
                                '<li>Iron</li>' +
                                '<li>TV</li>' +
                                '<li>Hair Dryer</li>' +
                                '<li>Water</li>' +
                                '<li>WI-FI</li></ul>'
                        },
                        photo: 'https://444803.selcdn.ru/cdn.awsd.cc/hotel-pirrs4-2-standard-1.jpg'
                    },
                    {
                        active: true,
                        name: 'Супериор',
                        code: 'SUP',
                        price:[5200,5200,4000,4000,4000,4000,4000,4000,4000],
                        price10: 38400,
                        price91: 33200,
                        price92: 34400,
                        breakfast: {
                            '1':900,
                            '2':1800
                        },
                        desc:{
                            'ru':'<ul><li>27 кв.м.</li>' +
                                '<li>Балкон</li>' +
                                '<li>Халат и тапочки</li>' +
                                '<li>Чайник</li>' +
                                '<li>Фен</li>' +
                                '<li>Телевизор</li>' +
                                '<li>Бесплатная вода</li>' +
                                '<li>Бесплатный Wi-Fi</li></ul>',
                            'en':'<ul><li>27 кв.м.</li>' +
                                '<li>Балкон</li>' +
                                '<li>Халат и тапочки</li>' +
                                '<li>Чайник</li>' +
                                '<li>Фен</li>' +
                                '<li>Телевизор</li>' +
                                '<li>Бесплатная вода</li>' +
                                '<li>Бесплатный Wi-Fi</li></ul>',
                        },
                        photo: 'https://444803.selcdn.ru/cdn.awsd.cc/hotel-pirrs4-2-standard-1.jpg'
                    },
                    {
                        active: true,
                        name: 'Семейный номер',
                        code: 'FAM',
                        price:[5700,5700,4500,4500,4500,4500,4500,4500,4500],
                        price10: 42900,
                        price91: 37200,
                        price92: 38400,
                        breakfast: {
                            '1':900,
                            '2':1800
                        },
                        desc:{
                            'ru':'<ul><li>32 кв.м.</li>' +
                                '<li>Диван</li>' +
                                '<li>Халат и тапочки</li>' +
                                '<li>Принадлежности для приготовления чая/кофе</li>' +
                                '<li>Сейф</li>' +
                                '<li>Фен</li>' +
                                '<li>Телевизор</li>' +
                                '<li>Бесплатная вода</li>' +
                                '<li>Бесплатный Wi-Fi</li></ul>',
                            'en':''
                        },
                        photo: 'https://444803.selcdn.ru/cdn.awsd.cc/hotel-pirrs4-3-family-1.jpg'
                    },
                    {
                        active: true,
                        name: 'Семейный с балконом',
                        code: 'FAMB',
                        price:[6200,6200,5000,5000,5000,5000,5000,5000,5000],
                        price10: 47400,
                        price91: 41200,
                        price92: 42400,
                        breakfast: {
                            '1':900,
                            '2':1800
                        },
                        desc:{
                            'ru':'<ul><li>32 кв.м.</li>' +
                                '<li>Балкон</li>' +
                                '<li>Диван</li>' +
                                '<li>Халат и тапочки</li>' +
                                '<li>Принадлежности для приготовления чая/кофе</li>' +
                                '<li>Сейф</li>' +
                                '<li>Фен</li>' +
                                '<li>Телевизор</li>' +
                                '<li>Бесплатная вода</li>' +
                                '<li>Бесплатный Wi-Fi</li></ul>',
                            'en':''
                        },
                        photo: 'https://444803.selcdn.ru/cdn.awsd.cc/hotel-pirrs4-3-family-1.jpg'
                    },
                    {
                        active: true,
                        name: 'Полулюкс',
                        code: 'PL',
                        price:[11200,11200,10000,10000,10000,10000,10000,10000,10000],
                        price10: 92400,
                        price91: 81200,
                        price92: 82400,
                        breakfast: {
                            '1':900,
                            '2':1800
                        },
                        desc:{
                            'ru':'<ul><li>66 кв.м.</li>' +
                                '<li>Гостиная зона</li>' +
                                '<li>Вид на реку</li>' +
                                '<li>Халат и тапочки</li>' +
                                '<li>Принадлежности для приготовления чая/кофе, эспрессо-машина</li>' +
                                '<li>Мини-бар по требованию</li>' +
                                '<li>Фен</li>' +
                                '<li>Телевизор</li>' +
                                '<li>Бесплатная вода</li>' +
                                '<li>Гладильная доска и утюг</li>' +
                                '<li>Бесплатный Wi-Fi</li></ul>',
                            'en':''
                        },
                        photo: 'https://444803.selcdn.ru/cdn.awsd.cc/hotel-pirrs4-4-halflux.jpg'
                    },
                    {
                        active: true,
                        name: 'Люкс',
                        code: 'L',
                        price:[12200,12200,11000,11000,11000,11000,11000,11000,11000],
                        price10: 101400,
                        price91: 89200,
                        price92: 90400,
                        breakfast: {
                            '1':900,
                            '2':1800
                        },
                        desc:{
                            'ru':'<ul><li>55 кв.м.</li>' +
                                '<li>Разделенная гостиная и спальная зона</li>' +
                                '<li>Халат и тапочки</li>' +
                                '<li>Принадлежности для приготовления чая/кофе, эспрессо-машина</li>' +
                                '<li>Мини-бар по требованию</li>' +
                                '<li>Фен</li>' +
                                '<li>Телевизор</li>' +
                                '<li>Бесплатная бутилированная вода</li>' +
                                '<li>Гладильная доска и утюг</li>' +
                                '<li>Бесплатный Wi-Fi</li></ul>',
                            'en':''
                        },
                        photo: 'https://444803.selcdn.ru/cdn.awsd.cc/hotel-pirrs4-5-lux.jpg'
                    },
                    {
                        active: true,
                        name: 'Представительский люкс',
                        code: 'PREL',
                        price:[16200,16200,15000,15000,15000,15000,15000,15000,15000],
                        price10: 137400,
                        price91: 121200,
                        price92: 122400,
                        breakfast: {
                            '1':900,
                            '2':1800
                        },
                        desc:{
                            'ru':'<ul><li>80 кв.м.</li>' +
                                '<li>Разделенная гостиная и спальная зона</li>' +
                                '<li>Халат и тапочки</li>' +
                                '<li>Чайник</li>' +
                                '<li>Фен</li>' +
                                '<li>Телевизор</li>' +
                                '<li>Бесплатная бутилированная вода</li>' +
                                '<li>Гладильная доска и утюг</li>' +
                                '<li>Бесплатный Wi-Fi</li></ul>',
                            'en':''
                        },
                        photo: 'https://444803.selcdn.ru/cdn.awsd.cc/hotel-pirrs4-6-predlux.jpg'
                    }
                ],
                desc: {
                    'ru': 'Отель Park Inn by Radisson 4* расположен в самом сердце горного курорта «Роза Хутор», в шаговой доступности от главных канатных дорог «Олимпия» и «Стрела». </li>' +
                        'Отель Park Inn by Radisson Rosa Khutor 4* предлагает своим гостям современные комфортабельные номера с видом на горные вершины. Кроме того, отель располагает номерами для людей с ограниченными возможностями. На первом этаже отеля расположен баварский ресторан, где можно насладиться европейскими блюдами от нашего шеф-повара, а в лобби баре хорошо провести время с друзьями около камина.',
                    'en': 'Park Inn is one of the first hotels that has been opened at Rosa Khutor Resort. In 2012, the hotel hosted participants and facilitators of the first mountain festival. In the spacious and comfortable lobby, you might often see guest music stars, sportsmen and organisers. The festival’s second information desk is also located there. Stylish and attractive rooms will help you fully recover after a busy day, and due to its convenient location and proximity to chairlifts you will be first to arrive at the main festival site.'
                }
            },
            {
                active: true,
                name: 'Отель Mercure Rosa Khutor ****',
                code: 'MRK4',
                formula: 1,
                gain: 1.17,
                address: 'Набережная Лаванды, 4, Эсто-Садок, Россия',
                gallery: [
                    'https://444803.selcdn.ru/cdn.awsd.cc/hotel-mrk4-1.jpg',
                    'https://444803.selcdn.ru/cdn.awsd.cc/hotel-mrk4-2-standard-1.jpg',
                    'https://444803.selcdn.ru/cdn.awsd.cc/hotel-mrk4-3-suite-1.jpg',
                ],
                rooms: [
                    {
                        active: true,
                        name: 'Стандарт',
                        code: 'S',
                        price: [5040,5040,5040,4270,4270,4270,4270,2940,2940,2940],
                        price10: 35980,
                        price91: 30940,
                        price92: 33040,
                        breakfast: {
                            '1':630,
                            '2':1260
                        },
                        desc:{
                            'ru':'<ul><li>26 кв. м.</li>' +
                                '<li>Вид на реку / Вид на лес</li>' +
                                '<li>WI-FI</li>' +
                                '<li>Минеральная вода</li>' +
                                '<li>Туалетные принадлежности</li>' +
                                '<li>Чайный набор</li></ul>',
                            'en':''
                        },
                        photo: 'https://444803.selcdn.ru/cdn.awsd.cc/hotel-mrk4-2-standard-1.jpg'
                    },
                    {
                        active: true,
                        name: 'Стандарт Привелегия',
                        code: 'SP',
                        price: [6900,6900,6900,5320,5320,5320,5320,3640,3640,3640],
                        price10: 44380,
                        price91: 38290,
                        price92: 40740,
                        breakfast: {
                            '1':630,
                            '2':1260
                        },
                        desc:{
                            'ru':'<ul><li>26 кв. м. </li>' +
                                '<li>Вид на реку</li>' +
                                '<li>Высоокий этаж </li>' +
                                '<li>Кофе-машина</li>' +
                                '<li>Халат и тапочки</li>' +
                                '<li>WI-FI</li>' +
                                '<li>Минеральная вода</li>' +
                                '<li>Рабочий стол</li></ul>',
                            'en':''
                        },
                        photo: 'https://444803.selcdn.ru/cdn.awsd.cc/hotel-mrk4-2-standard-1.jpg'
                    },
                    {
                        active: true,
                        name: 'Двухкомнатный номер',
                        code: 'SS2',
                        price: [8540,8540,8540,7770,7770,7770,7770,3900,5740,5740],
                        price10: 65380,
                        price91: 56840,
                        price92: 59640,
                        breakfast: {
                            '1':630,
                            '2':1460
                        },
                        desc:{
                            'ru':'<ul><li>48 кв. м. </li>' +
                                '<li>2-х комнатный</li>' +
                                '<li>Вид на реку</li>' +
                                '<li>Спальня и гостиная</li>' +
                                '<li>Халат и тапочки</li>' +
                                '<li>Кофе-машина</li>' +
                                '<li>WI-FI</li>' +
                                '<li>Минеральная вода</li>' +
                                '<li>Рабочий стол</li></ul>',
                            'en':''
                        },
                        photo: 'https://444803.selcdn.ru/cdn.awsd.cc/hotel-mrk4-3-suite-1.jpg'
                    }
                ],
                desc: {
                    'ru': '«Mercure» Роза Хутор расположен в курортном поселке Эсто-Садок. Отель является дочерним проектом сети гостиниц «Mercure Hotel», имеющей представительство в 68 странах.     «Меркюр» Роза соответствует стандартам крупной отельной цепочки и идеально подходит как для отдыха, так и для бизнеса.                                                                                                      «Меркюр Роза Хутор» имеет удобное расположение в 150 м от горнолыжного подъемника. В 1 км от отеля находятся центр санного спорта и биатлонный комплекс «Лаура».                           После катания на лыжах гости могут попариться в банном комплексе отеля и поплавать в бассейне 25x5 м со стеклянным куполом, потренироваться в тренажерном зале или в современном фитнес-центре.</li>' +
                        'Современная конференц-зона подойдет для проведения конференций, семинаров, банкетов любого уровня.',
                    'en': 'The only hotel on the lower level of Rosa Khutor Resort with its own swimming pool — you should definitely take the opportunity to cool down after an eventful day or night. The hotel also offers a spacious room to store and dry your equipment. The distance to the lower ropeway stations is 500 m.'
                }
            },
            {
                active: false,
                name: 'Приют Панды',
                code: 'PP',
                formula: 0,
                gain: 1,
                gallery: [
                    'https://444803.selcdn.ru/cdn.awsd.cc/hotel-pp-1.jpg',
                    'https://444803.selcdn.ru/cdn.awsd.cc/hotel-pp-2-small-1.jpg',
                    'https://444803.selcdn.ru/cdn.awsd.cc/hotel-pp-3-standard-1.jpg',
                ],
                rooms: [
                    {
                        active: true,
                        name: 'Стандартный двухместный',
                        code: 'S2',
                        price:{
                            '1': 3600,
                            '2': 3600
                        },
                        breakfast: {
                            '1':400,
                            '2':800
                        },
                        desc:{
                            'ru':'<ul><li>+/- 17 кв. м </li>' +
                                '<li>Вместимость до 3-х человек</li>' +
                                '<li>Двуспальная/две односпальные кровати</li>' +
                                '<li>Балкон</li>' +
                                '<li>Душ и туалет в номере</li>' +
                                '<li>Телевизор </li>' +
                                '<li>Сушилка для одежды</li></ul>',
                            'en':''
                        },
                        photo: 'https://444803.selcdn.ru/cdn.awsd.cc/hotel-pp-2-small-1.jpg',
                    },
                    {
                        active: true,
                        name: 'Эконом двухместный',
                        code: 'S2E',
                        price:{
                            '1': 3200,
                            '2': 3200
                        },
                        breakfast: {
                            '1':400,
                            '2':800
                        },
                        desc:{
                            'ru':'<ul><li>+/- 15 кв. м </li>' +
                                '<li>Вместимость до 3-х человек</li>' +
                                '<li>Двуспальная/две односпальные кровати</li>' +
                                '<li>Душ и туалет общий в блоке</li>' +
                                '<li>Телевизор </li>' +
                                '<li>Сушилка для одежды</li></ul>',
                            'en':''
                        },
                        photo: 'https://444803.selcdn.ru/cdn.awsd.cc/hotel-pp-3-standard-1.jpg'
                    },
                    {
                        active: true,
                        name: 'Эконом трехместный',
                        code: 'S3E',
                        price:{
                            '1': 4800,
                            '2': 4800,
                            '3': 4800
                        },
                        breakfast: {
                            '1':400,
                            '2':800,
                            '3':1200,
                        },
                        desc:{
                            'ru':'<ul><li>+/- 17 кв. м </li>' +
                                '<li>Вместимость до 3-х человек</li>' +
                                '<li>Три односпальные кровати</li>' +
                                '<li>Балкон</li>' +
                                '<li>Душ и туалет общий в блоке</li>' +
                                '<li>Телевизор </li>' +
                                '<li>Сушилка для одежды</li></ul>',
                            'en':''
                        },
                        photo: 'https://444803.selcdn.ru/cdn.awsd.cc/hotel-pp-4-econom-3-1.jpg'
                    },
                    {
                        active: true,
                        name: 'Эконом одноместный',
                        code: 'S1E',
                        price:{
                            '1': 1600,
                        },
                        breakfast: {
                            '1':400,
                        },
                        desc:{
                            'ru':'<ul><li>+/- 17 кв. м </li>' +
                                '<li>Вместимость до 1-го человека</li>' +
                                '<li>Одна односпальня кровать</li>' +
                                '<li>Душ и туалет общий в блоке</li>' +
                                '<li>Телевизор </li>' +
                                '<li>Сушилка для одежды</li></ul>',
                            'en':''
                        },
                        photo: 'https://444803.selcdn.ru/cdn.awsd.cc/hotel-pp-5-single-1.jpg'
                    }
                ],
                desc: {
                    'ru': 'Отель «Приют Панды» находится в селе Эстосадок, всего в 500 метрах от подъемника «Роза Хутор». На территории отеля работает кафе и предоставляется бесплатный Wi-Fi. /n' +
                        'В ярко оформленных номерах этого отеля к услугам гостей балкон. В некоторых номерах есть собственная ванная комната, гости других номеров пользуются общей ванной комнатой. /n' +
                        'В распоряжении гостей отеля «Приют Панды» общий лаундж. Горнолыжный подъемник «Альпика-сервис» расположен менее чем в 5 км. /n' +
                        'Автомобиль можно оставить на бесплатной парковке. /n',
                    'en': 'A cozy, little hotel located at the entrance of the Olympic village right next to the free parking lots for guests. A colorful and comfortable recreation area where you can find table-top games, cafes and a large screen to relax after a hectic day on the slopes.'
                }
            },
            {
                active: true,
                name: 'Отель «28» **',
                code: 'H28',
                formula: 0,
                gain: 1.12,
                gallery: [
                    'https://444803.selcdn.ru/cdn.awsd.cc/hotel-h28-1.jpg',
                    'https://444803.selcdn.ru/cdn.awsd.cc/hotel-h28-2-double_block.jpg',
                    'https://444803.selcdn.ru/cdn.awsd.cc/hotel-h28-3-standard.jpg',
                ],
                rooms: [
                    {
                        active: true,
                        name: 'Двухместный номер в блоке',
                        code: 'DB',
                        price:{
                            '1': 3600,
                            '2': 3600
                        },
                        breakfast: {
                            '1':500,
                            '2':1000
                        },
                        desc:{
                            'ru':'<ul><li>15 кв. м </li>' +
                                '<li>Вместимость до 2-х человек</li>' +
                                '<li>Двуспальная / Две односпальные </li>' +
                                '<li>Общий санузел</li>' +
                                '<li>Телевизор</li>' +
                                '<li>Чайник</li>' +
                                '<li>Банные пренадлежности</li>' +
                                '<li>Банные полотенца</li>' +
                                '<li>Тапочки</li>' +
                                '<li>Фен</li></ul>',
                            'en':''
                        },
                        photo: 'https://444803.selcdn.ru/cdn.awsd.cc/hotel-h28-2-double_block.jpg'
                    },
                    {
                        active: true,
                        name: 'Семейный двухкомнатный',
                        code: 'S2',
                        price:{
                            '1': 7500,
                            '2': 7500,
                            '3': 7500
                        },
                        breakfast: {
                            '1':500,
                            '2':1000,
                            '3':1500
                        },
                        desc:{
                            'ru':'<ul><li>38 кв. м </li>' +
                                '<li>Вместимость до 4-х человек</li>' +
                                '<li>Двуспальная / Две односпальные кровати в каждой спальне</li>' +
                                '<li>Один санузел</li>' +
                                '<li>Телевизор</li>' +
                                '<li>Чайник</li>' +
                                '<li>Банные пренадлежности</li>' +
                                '<li>Банные полотенца</li>' +
                                '<li>Тапочки</li>' +
                                '<li>Балкон в одной спальне</li>' +
                                '<li>Фен</li></ul>',
                            'en':''
                        },
                        photo: 'https://444803.selcdn.ru/cdn.awsd.cc/hotel-h28-3-standard.jpg'
                    },
                    {
                        active: true,
                        name: 'Семейный трехкомнатный',
                        code: 'S3',
                        price:{
                            '1': 11000,
                            '2': 11000,
                            '3': 11000,
                            '4': 11000
                        },
                        breakfast: {
                            '1':500,
                            '2':1000,
                            '3':1500,
                            '4':2000
                        },
                        desc:{
                            'ru':'<ul><li>60 кв. м </li>' +
                                '<li>Вместимость до 6-и человек</li>' +
                                '<li>Двуспальная / Две односпальные кровати в каждой спальне</li>' +
                                '<li>Два санузла</li>' +
                                '<li>Телевизор</li>' +
                                '<li>Чайник</li>' +
                                '<li>Банные пренадлежности</li>' +
                                '<li>Банные полотенца</li>' +
                                '<li>Тапочки</li>' +
                                '<li>Балкон в одной спальне</li>' +
                                '<li>Фен</li></ul>',
                            'en':''
                        },
                        photo: 'https://444803.selcdn.ru/cdn.awsd.cc/hotel-h28-4-family.jpg'
                    }
                ],
                desc: {
                    'ru': 'Благодаря разнообразию номеров и доступной стоимости проживания, отель пользуется популярностью у участников фестиваля. Для гостей доступны как стандартные номера, так и номера в блоке из 2-3 комнат, которые отлично подходят для больших и дружных компаний. На территории отеля расположена уютная и современная столовая «28» с завтраками, обедами и ужинами в формате шведского стола по очень доступным ценам.',
                    'en': 'Great variety of rooms and affordable pricing make this hotel extremely popular among festival participants. The hotel offers both standard rooms and rooms in 2- or 3-room blocks that will suit large groups of friends perfectly. The Hotel 28 canteen offers a buffet breakfast, lunch and dinner at a really affordable prices.'
                }
            },
            {
                active: true,
                name: 'Rosa Village **',
                code: 'ROV',
                formula: 0,
                gain: 1.12,
                gallery: [
                    'https://444803.selcdn.ru/cdn.awsd.cc/hotel-rov-1.jpg',
                    'https://444803.selcdn.ru/cdn.awsd.cc/hotel-rov-2-standard.jpg',
                    'https://444803.selcdn.ru/cdn.awsd.cc/hotel-rov-3-triple.jpg',
                    'https://444803.selcdn.ru/cdn.awsd.cc/hotel-rov-4-standard_better.jpg',
                ],
                rooms: [
                    {
                        active: true,
                        name: 'Стандарт',
                        code: 'S',
                        price: {
                            '1': 5000,
                            '2': 5000
                        },
                        breakfast: {
                            '1':500,
                            '2':1000
                        },
                        desc:{
                            'ru':'<ul><li>25 кв. м </li>' +
                                '<li>Вместимость до 3-х человек</li>' +
                                '<li>Телевизор</li>' +
                                '<li>Чайник</li>' +
                                '<li>Банные пренадлежности</li>' +
                                '<li>Тапочки</li>' +
                                '<li>Балкон</li>' +
                                '<li>Холодильник </li>' +
                                '<li>Фен</li>' +
                                '<li>WI-FI</li></ul>',
                            'en':''
                        },
                        photo: 'https://444803.selcdn.ru/cdn.awsd.cc/hotel-rov-2-standard.jpg'
                    },
                    {
                        active: false,
                        name: 'Трехместный',
                        code: 'T',
                        price: {
                            '1': 6000,
                            '2': 6000,
                            '3': 6000
                        },
                        breakfast: {
                            '1':500,
                            '2':1000,
                            '3':1500
                        },
                        desc:{
                            'ru':'<ul><li>30 кв. м </li>' +
                                '<li>Вместимость до 3-х человек</li>' +
                                '<li>Три односпальнве кровати</li>' +
                                '<li>Телевизор</li>' +
                                '<li>Чайник</li>' +
                                '<li>Банные пренадлежности</li>' +
                                '<li>Тапочки</li>' +
                                '<li>Балкон</li>' +
                                '<li>Холодильник </li>' +
                                '<li>Фен</li>' +
                                '<li>WI-FI</li></ul>',
                            'en':'<ul><li>30 кв. м </li>' +
                                '<li>Вместимость до 3-х человек</li>' +
                                '<li>Три односпальнве кровати</li>' +
                                '<li>Телевизор</li>' +
                                '<li>Чайник</li>' +
                                '<li>Банные пренадлежности</li>' +
                                '<li>Тапочки</li>' +
                                '<li>Балкон</li>' +
                                '<li>Холодильник </li>' +
                                '<li>Фен</li>' +
                                '<li>WI-FI</li></ul>',
                        },
                        photo: 'https://444803.selcdn.ru/cdn.awsd.cc/hotel-rov-3-triple.jpg'
                    },
                    {
                        active: true,
                        name: 'Стандарт улучшенный',
                        code: 'SB',
                        price: {
                            '1': 6000,
                            '2': 6000,
                            '3': 6000,
                        },
                        breakfast: {
                            '1':500,
                            '2':1000,
                            '3':1500,
                        },
                        desc:{
                            'ru':'<ul><li>31 кв. м </li>' +
                                '<li>Вместимость до 3-х человек</li>' +
                                '<li>Двуспальная / Две односпальные кровати</li>' +
                                '<li>Телевизор</li>' +
                                '<li>Чайник</li>' +
                                '<li>Банные пренадлежности</li>' +
                                '<li>Тапочки</li>' +
                                '<li>Балкон</li>' +
                                '<li>Холодильник </li>' +
                                '<li>Фен</li></ul>',
                            'en':'<ul><li>31 кв. м </li>' +
                                '<li>Вместимость до 3-х человек</li>' +
                                '<li>Двуспальная / Две односпальные кровати</li>' +
                                '<li>Телевизор</li>' +
                                '<li>Чайник</li>' +
                                '<li>Банные пренадлежности</li>' +
                                '<li>Тапочки</li>' +
                                '<li>Балкон</li>' +
                                '<li>Холодильник </li>' +
                                '<li>Фен</li></ul>'
                        },
                        photo: 'https://444803.selcdn.ru/cdn.awsd.cc/hotel-rov-4-standard_better.jpg'
                    },
                    {
                        active: true,
                        name: 'Семейный двухкомнатный',
                        code: 'FAM',
                        price: {
                            '1': 7500,
                            '2': 7500,
                            '3': 7500
                        },
                        breakfast: {
                            '1':500,
                            '2':1000,
                            '3':1500,
                        },
                        desc:{
                            'ru':'<ul><li>31 кв. м </li>' +
                                '<li>Вместимость до 4-х человек</li>' +
                                '<li>Двуспальная / Две односпальные кровати и раскладной диван</li>' +
                                '<li>Гостиная зона</li>' +
                                '<li>Телевизор</li>' +
                                '<li>Чайник</li>' +
                                '<li>Банные пренадлежности</li>' +
                                '<li>Тапочки</li>' +
                                '<li>Балкон</li>' +
                                '<li>Холодильник </li>' +
                                '<li>Фен</li></ul>',
                            'en':'<ul><li>31 кв. м </li>' +
                                '<li>Вместимость до 4-х человек</li>' +
                                '<li>Двуспальная / Две односпальные кровати и раскладной диван</li>' +
                                '<li>Гостиная зона</li>' +
                                '<li>Телевизор</li>' +
                                '<li>Чайник</li>' +
                                '<li>Банные пренадлежности</li>' +
                                '<li>Тапочки</li>' +
                                '<li>Балкон</li>' +
                                '<li>Холодильник </li>' +
                                '<li>Фен</li></ul>'
                        },
                        photo: 'https://444803.selcdn.ru/cdn.awsd.cc/hotel-rov-3-triple.jpg'
                    }
                ],
                desc: {
                    'ru': 'Современный гостиничный комплекс «Rosa Village» расположен на территории Горной Олимпийской деревни круглогодичного курорта «Роза Хутор» в окружении кавказских гор.',
                    'en': 'Rosa Village is a state-of-the-art hotel complex including 15 small cottages fully equipped to offer you a most comfortable stay whether with your family or with a crowd of friends. Common recreation area, kids\' corner, ski equipment storage and drying facilities. To large groups of friends, we offer an opportunity to rent a whole cottage.'
                }
            },
            {
                active: true,
                name: 'Tulip Inn ***',
                code: 'TINN',
                formula: 1,
                gain: 1.07,
                gallery: [
                    'https://444803.selcdn.ru/cdn.awsd.cc/hotel-tinn-1.jpg',
                    'https://444803.selcdn.ru/cdn.awsd.cc/hotel-tinn-1-standard.jpg',
                    'https://444803.selcdn.ru/cdn.awsd.cc/hotel-tinn-1-ssuperior.jpg'
                ],
                rooms: [
                    {
                        active: true,
                        name: 'Стандарт',
                        code: 'S',
                        price: [3720,3720,3720,3300,3300,3300,3300,3300,3300],
                        price10: 30960,
                        price91: 27240,
                        price92: 27660,
                        breakfast: {
                            '1': 660,
                            '2': 1200,
                        },
                        desc:{
                            'ru':'<ul><li>21 кв. м.</li>' +
                                '<li>Тапочки</li>' +
                                '<li>Фен</li>' +
                                '<li>Телевизор</li>' +
                                '<li>Бесплатный Wi-Fi</li>' +
                                '<li>Рабочее место</li></ul>',
                            'en':'<ul><li>21 кв. м.</li>' +
                                '<li>Тапочки</li>' +
                                '<li>Фен</li>' +
                                '<li>Телевизор</li>' +
                                '<li>Бесплатный Wi-Fi</li>' +
                                '<li>Рабочее место</li></ul>',
                        },
                        photo: 'https://444803.selcdn.ru/cdn.awsd.cc/hotel-tinn-1-standard.jpg'
                    },
                    {
                        active: true,
                        name: 'Стандарт с видом на реку',
                        code: 'SRV',
                        price: [4400,4400,4400,3970,3970,3970,3970,3970,3970],
                        price10: 37020,
                        price91: 32620,
                        price92: 33050,
                        breakfast: {
                            '1': 660,
                            '2': 1200,
                        },
                        desc:{
                            'ru':'<ul><li>23 кв. м.</li>' +
                                '<li>Тапочки</li>' +
                                '<li>Фен</li>' +
                                '<li>ЖК-телевизор</li>' +
                                '<li>Бесплатный Wi-Fi</li>' +
                                '<li>Рабочее место</li>' +
                                '<li>Вид на реку и горы</li></ul>',
                            'en':'<ul><li>23 кв. м.</li>' +
                                '<li>Тапочки</li>' +
                                '<li>Фен</li>' +
                                '<li>ЖК-телевизор</li>' +
                                '<li>Бесплатный Wi-Fi</li>' +
                                '<li>Рабочее место</li>' +
                                '<li>Вид на реку и горы</li></ul>',
                        },
                        photo: 'https://444803.selcdn.ru/cdn.awsd.cc/hotel-tinn-1-standard.jpg'
                    },
                    {
                        active: true,
                        name: 'Супериор',
                        code: 'SUP',
                        price: [4990,4990,4990,4590,4590,4590,4590,4590,4590],
                        price10: 42510,
                        price91: 37520,
                        price92: 37920,
                        breakfast: {
                            '1': 660,
                            '2': 1200,
                        },
                        desc:{
                            'ru':'<ul><li>25 кв. м.</li>' +
                                '<li>Тапочки</li>' +
                                '<li>Фен</li>' +
                                '<li>ЖК-телевизор</li>' +
                                '<li>Бесплатный Wi-Fi</li>' +
                                '<li>Рабочее место</li>' +
                                '<li>Вид на реку и горы</li>' +
                                '<li>Балкон</li>' +
                                '<li>Мини-холодильник</li></ul>',
                            'en':'<ul><li>25 кв. м.</li>' +
                                '<li>Тапочки</li>' +
                                '<li>Фен</li>' +
                                '<li>ЖК-телевизор</li>' +
                                '<li>Бесплатный Wi-Fi</li>' +
                                '<li>Рабочее место</li>' +
                                '<li>Вид на реку и горы</li>' +
                                '<li>Балкон</li>' +
                                '<li>Мини-холодильник</li></ul>',
                        },
                        photo: 'https://444803.selcdn.ru/cdn.awsd.cc/hotel-tinn-1-ssuperior.jpg'
                    }
                ],
                desc: {
                    'ru': 'Откройте для себя совершенство отдыха в горах с отелем Golden Tulip Rosa Khutor 4*. Отель международной сети с первоклассным сервисом расположен в самом центре курорта Роза Хутор, на солнечном берегу реки Мзымта в окружении восхитительных природных ландшафтов. В пешей доступности от отеля находятся: канатные дороги и пункты проката летнего и зимнего снаряжения, главная площадь курорта и концертный зал «Роза Холл», археологический музей, ночной клуб и магазины. В отеле 162 просторных и уютных номера, которые оснащены всем необходимым для отдыха или работы во время деловой поездки: мини-бар, сейф, фен, высокоскоростной интернет, рабочее место, чайный набор (включающий в себя чай, кофе, сахар), бутилированная вода (обновляется ежедневно). Из окон каждого номера открывается неповторимый вид на горные вершины.</li>' +
                        'Отдыхайте без забот. Работайте с наслаждением.</li>',
                    'en': 'Откройте для себя совершенство отдыха в горах с отелем Golden Tulip Rosa Khutor 4*. Отель международной сети с первоклассным сервисом расположен в самом центре курорта Роза Хутор, на солнечном берегу реки Мзымта в окружении восхитительных природных ландшафтов. В пешей доступности от отеля находятся: канатные дороги и пункты проката летнего и зимнего снаряжения, главная площадь курорта и концертный зал «Роза Холл», археологический музей, ночной клуб и магазины. В отеле 162 просторных и уютных номера, которые оснащены всем необходимым для отдыха или работы во время деловой поездки: мини-бар, сейф, фен, высокоскоростной интернет, рабочее место, чайный набор (включающий в себя чай, кофе, сахар), бутилированная вода (обновляется ежедневно). Из окон каждого номера открывается неповторимый вид на горные вершины.</li>' +
                        'Отдыхайте без забот. Работайте с наслаждением.</li>'
                }
            },
            {
                active: true,
                name: 'Golden Tulip ****',
                code: 'GTINN',
                formula: 1,
                gain: 1.07,
                gallery: [
                    'https://444803.selcdn.ru/cdn.awsd.cc/hotel-gtinn-1.jpg',
                    'https://444803.selcdn.ru/cdn.awsd.cc/hotel-gtinn-2.jpg',
                    'https://444803.selcdn.ru/cdn.awsd.cc/hotel-gtinn-1-standard.jpg',
                    'https://444803.selcdn.ru/cdn.awsd.cc/hotel-gtinn-1-superior.jpg'
                ],
                rooms: [
                    {
                        active: true,
                        name: 'Стандарт',
                        code: 'S',
                        price: [4730,4730,4730,3850,3850,3850,3850,3850,3850],
                        price10: 37290,
                        price91: 32560,
                        price92: 33440,
                        breakfast: {
                            '1': 650,
                            '2': 1250,
                        },
                        desc:{
                            'ru':'<ul><li>25 кв. м.</li>' +
                                '<li>Климат-контроль</li>' +
                                '<li>Халат и тапочки</li>' +
                                '<li>Фен</li>' +
                                '<li>Телевизор</li>' +
                                '<li>Бесплатный Wi-Fi</li>' +
                                '<li>Мини-холодильник</li></ul>',
                            'en':'<ul><li>25 кв. м.</li>' +
                                '<li>Климат-контроль</li>' +
                                '<li>Халат и тапочки</li>' +
                                '<li>Фен</li>' +
                                '<li>Телевизор</li>' +
                                '<li>Бесплатный Wi-Fi</li>' +
                                '<li>Мини-холодильник</li></ul>',
                        },
                        photo: 'https://444803.selcdn.ru/cdn.awsd.cc/hotel-gtinn-1-standard.jpg'
                    },
                    {
                        active: true,
                        name: 'Стандарт с видом на реку',
                        code: 'SRV',
                        price: [5410,5410,5410,5030,5030,5030,5030,5030,5030],
                        price10: 46410,
                        price91: 41000,
                        price92: 41380,
                        breakfast: {
                            '1': 650,
                            '2': 1250,
                        },
                        desc:{
                            'ru':'<ul><li>27 кв. м.</li>' +
                                '<li>Климат-контроль</li>' +
                                '<li>Халат и тапочки</li>' +
                                '<li>Фен</li>' +
                                '<li>Телевизор</li>' +
                                '<li>Бесплатный Wi-Fi</li>' +
                                '<li>Сейф</li>' +
                                '<li>Мини-холодильник</li>' +
                                '<li>Вид на реку</li></ul>',
                            'en':'<ul><li>27 кв. м.</li>' +
                                '<li>Климат-контроль</li>' +
                                '<li>Халат и тапочки</li>' +
                                '<li>Фен</li>' +
                                '<li>Телевизор</li>' +
                                '<li>Бесплатный Wi-Fi</li>' +
                                '<li>Сейф</li>' +
                                '<li>Мини-холодильник</li>' +
                                '<li>Вид на реку</li></ul>',
                        },
                        photo: 'https://444803.selcdn.ru/cdn.awsd.cc/hotel-gtinn-1-standard.jpg'
                    },
                    {
                        active: true,
                        name: 'Супериор',
                        code: 'SUP',
                        price: [5750,5750,5750,5370,5370,5370,5370,5370,5370],
                        price10: 49470,
                        price91: 43720,
                        price92: 44100,
                        breakfast: {
                            '1': 650,
                            '2': 1250,
                        },
                        desc:{
                            'ru':'<ul><li>36 кв. м.</li>' +
                                '<li>Климат-контроль</li>' +
                                '<li>Халат и тапочки</li>' +
                                '<li>Фен</li>' +
                                '<li>Телевизор</li>' +
                                '<li>Бесплатный Wi-Fi</li>' +
                                '<li>Мини-холодильник</li>' +
                                '<li>Кофе-машина</li>' +
                                '<li>Диван</li></ul>',
                            'en':'<ul><li>36 кв. м.</li>' +
                                '<li>Климат-контроль</li>' +
                                '<li>Халат и тапочки</li>' +
                                '<li>Фен</li>' +
                                '<li>Телевизор</li>' +
                                '<li>Бесплатный Wi-Fi</li>' +
                                '<li>Мини-холодильник</li>' +
                                '<li>Кофе-машина</li>' +
                                '<li>Диван</li></ul>',
                        },
                        photo: 'https://444803.selcdn.ru/cdn.awsd.cc/hotel-gtinn-1-superior.jpg'
                    }
                ],
                desc: {
                    'ru': 'Откройте для себя совершенство отдыха в горах с отелем Golden Tulip Rosa Khutor 4*. Отель международной сети с первоклассным сервисом расположен в самом центре курорта Роза Хутор, на солнечном берегу реки Мзымта в окружении восхитительных природных ландшафтов. В пешей доступности от отеля находятся: канатные дороги и пункты проката летнего и зимнего снаряжения, главная площадь курорта и концертный зал «Роза Холл», археологический музей, ночной клуб и магазины. В отеле 162 просторных и уютных номера, которые оснащены всем необходимым для отдыха или работы во время деловой поездки: мини-бар, сейф, фен, высокоскоростной интернет, рабочее место, чайный набор (включающий в себя чай, кофе, сахар), бутилированная вода (обновляется ежедневно). Из окон каждого номера открывается неповторимый вид на горные вершины.</li>' +
                        'Отдыхайте без забот. Работайте с наслаждением.</li>',
                    'en': ''
                }
            },
            {
                active: false,
                name: '',
                code: '',
                formula: 0,
                gain: 1,
                gallery: [
                ],
                rooms: [
                    {
                        active: true,
                        name: '',
                        code: '',
                        price: {
                            '1': 0,
                            '2': 0,
                        },
                        breakfast: {
                            '1': 0,
                            '2': 0,
                        },
                        desc:{
                            'ru':'',
                            'en':''
                        },
                        photo: ''
                    },
                    {
                        active: true,
                        name: '',
                        code: '',
                        desc:{
                            'ru':'',
                            'en':''
                        }
                    }
                ],
                desc: {
                    'ru': '',
                    'en': ''
                }
            },
        ],
    },
    mounted: function () {
        get_parameters = this.$route.query
        if (get_parameters.step == 6 && get_parameters.par != 0) {
            this.step = 6;
            this.form.payed = 0;
        } else if (get_parameters.step == 6 && get_parameters.par == 0) {
            this.step = 6;
            this.form.payed = 1;
            this.sendMail(get_parameters.tourNumber);
        }
    },
    computed: {
        userFIO() {
            return this.form.fname + ' ' + this.form.sname;
        },
        guestsNum(){
            let kids = ''
            let adults = ''
            if (this.form.kids) {
                if (this.form.kids === 1) {
                    kids = ' / ' + this.form.kids + ' ребенок'
                } else if (this.form.kids > 1) {
                    kids = ' / ' + this.form.kids + ' детей'
                }
            }
            if (this.form.adults > 1) { adults = this.form.adults + ' взрослых'} else { adults = this.form.adults + ' взрослый'}
            return adults + kids;
        },
        roomName() {
            this.form.roomName = this.hotels[this.currentHotel].rooms.find(room => room.code === this.form.room).name
            return this.hotels[this.currentHotel].rooms.find(room => room.code === this.form.room).name
        },
        setTourName() {
//            this.form.tourName = 'New Star Camp ' + this.passes[this.form.pass].name + ' tour, hotel: ' + this.form.hotelName;
            this.form.tourName = 'New Star Camp ' + ' tour, hotel: ' + this.form.hotelName;
            return this.form.tourName;
        },
        calcTourDays() {
            let tourDays = 0
            if (this.form.dateFrom && this.form.dateTill)  {
                tourDays = ((this.form.dateTill-this.form.dateFrom)/1000/60/60/24)
                this.form.tourDays = tourDays
            }
            return tourDays
        },
        currentHotel() {
            let curHotel = this.hotels.find(hotel => hotel.code === this.form.hotel)
            return this.hotels.indexOf(curHotel)
        },
        activeHotels() {
            return this.hotels.filter(function (hotel) {
                return hotel.active
            })
        },
        activeHotelRooms() {
            return this.hotels.find(hotel => hotel.code === this.form.hotel).rooms.filter(function (room){
                return room.active
            })
        },
        currentRoom() {
            let curHotel = this.hotels.find(hotel => hotel.code === this.form.hotel)
            let curRoom = this.hotels[curHotel].rooms.find(room => room.code === this.form.room)
            return this.hotels.indexOf(curRoom)+1
        },
        calcTourPrice() {
            let totalPrice = 0;
            let skiPass = 1470;
            let curPass = this.passes.indexOf(this.passes.find(pass => pass.code === this.form.pass))
            let curHotel = this.hotels.indexOf(this.hotels.find(hotel => hotel.code === this.form.hotel))
            let curRoom = this.hotels[curHotel].rooms.indexOf(this.hotels[curHotel].rooms.find(room => room.code === this.form.room))
            // if (curRoom < 0) { curRoom = 0 }
            let daysTour = this.form.tourDays
            let arrPricesSum = 0
            let hotelTotalPrice = 0
            let allBreakfasts = 0
            let arrPricesForTour =  []
            let gain = this.hotels[curHotel].gain

            if ( this.form.room !== undefined ) {
                let formula = this.hotels[curHotel].formula
                let arrPrices = this.hotels[curHotel].rooms[curRoom].price

                if (this.form.hotel === 'RIL'){
                    this.form.hotelBreakfast = true
                }

                if ( this.form.hotelBreakfast === true ) {
                    allBreakfasts = this.hotels[curHotel].rooms[curRoom].breakfast[this.form.adults] * daysTour
                    this.form.hotelBreakfastPrice = allBreakfasts
                } else {
                    allBreakfasts = 0
                    this.form.hotelBreakfastPrice = 0
                }

                if (formula === 1){
                    arrPricesForTour.length = 0

                    if (arrPrices.length > 0) {
                        if (daysTour === 8 && arrPrices.length > 8){
                            if (this.form.dateFrom > new Date(2021, 2, 26)) {
                                // arrPricesForTour = arrPrices.splice(1,8)
                                arrPricesForTour = this.hotels[curHotel].rooms[curRoom].price92
                            } else if (this.form.dateTill === new Date(2021, 2, 26)) {
                                // arrPricesForTour = arrPrices.splice(0,8)
                                arrPricesForTour = this.hotels[curHotel].rooms[curRoom].price91
                            }
                        } else if (daysTour === 9){
                            arrPricesForTour = arrPricesForTour = this.hotels[curHotel].rooms[curRoom].price10
                        }

                        // for(let i=0; i < arrPricesForTour.length; i++){
                        //     arrPricesSum = arrPricesSum + parseInt(arrPricesForTour[i]);
                        // }
                        // hotelTotalPrice = arrPricesSum
                        hotelTotalPrice = arrPricesForTour
                    }
                } else if (formula === 0){
                    hotelTotalPrice = this.hotels[curHotel].rooms[curRoom].price[this.form.adults] * daysTour
                } else if (formula === 2) {
                    // TODO: welcome to HELL
                }
                if (this.form.adults > 0 && daysTour > 7) {
                    totalPrice =
                        ((this.passes[curPass].price * this.form.adults)
                        + hotelTotalPrice
                        + ((skiPass * (daysTour - 1)) * this.form.adults)
                        + allBreakfasts)*gain

                    console.log('daysTour ' + daysTour)
                    console.log('passPrice ' + (this.passes[curPass].price * this.form.adults))
                    console.log('hotelTotalPrice ' + hotelTotalPrice)
                    console.log('skipassPrice ' + ((skiPass * (daysTour - 1)) * this.form.adults))
                    console.log('allBreakfasts ' + allBreakfasts)
                    console.log('gain ' + gain)

                    this.form.hotelPrice = hotelTotalPrice
                    this.form.skipassPrice = ((skiPass * (daysTour - 1)) * this.form.adults)
                    this.form.hotelBreakfastPrice = allBreakfasts
                    this.form.tourPrice = Math.ceil(totalPrice)
                    return Math.ceil(totalPrice) + '₽'
                }
            }
            return false;
        }
    },
    watch: {
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
                this.form.tourDays = this.calcTourDays
                if (!this.form.dateTill || !this.form.dateFrom) {
                    this.errors = this.translations.errorChooseDates[this.selectedLocale];
                    return false;
                } else if (!this.form.adults) {
                    this.errors = this.translations.errorChooseAdults[this.selectedLocale];
                    return false;
                } else if (this.calcTourDays < 8) {
                    this.errors = this.translations.errorChoose9Dates[this.selectedLocale];
                    return false;
                } else {
                    this.errors = null;
                }
            } else if (this.step === 3) {

                this.form.hotelName = this.hotels[this.currentHotel].name;
                this.form.address = this.hotels[this.currentHotel].address;

                if (!this.form.hotel || !this.form.room) {
                    this.errors = this.translations.errorChooseRoom[this.selectedLocale];
                    return false;
                } else {
                    this.errors = null;
                }
            } else if (this.step === 4) {
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
        showHotelPhoto(){
            let curHotel = this.hotels.find(hotel => hotel.code === this.form.hotel)
            let curHotelIndex = this.hotels.indexOf(curHotel)
            this.form.room = null;
            this.$refs.hotelImage.src = this.hotels[curHotelIndex].gallery[0];
            this.$refs.hotelText.innerHTML = this.hotels[curHotelIndex].desc[this.selectedLocale];
        },
        showRoomPhoto(){
            let curHotel = this.hotels.find(hotel => hotel.code === this.form.hotel)
            let curHotelIndex = this.hotels.indexOf(curHotel)
            if (this.form.room !== undefined){
                let curRoom = this.hotels[curHotelIndex].rooms.find(room => room.code === this.form.room)
                let curRoomIndex = this.hotels[curHotelIndex].rooms.indexOf(curRoom)
                this.$refs.hotelImage.src = this.hotels[curHotelIndex].rooms[curRoomIndex].photo;
                this.$refs.hotelText.innerHTML = this.hotels[curHotelIndex].rooms[curRoomIndex].desc[this.selectedLocale];
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
        applyPromoCode(){
            this.form.promocode = this.promocode
        },
        sendMail(tourNumber) {
            this.errors = null;
            let sdata = new FormData();

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

        saveVoucher(tournumber, tourid) {

            if (!this.form.consent) {
                this.errors = 'Без согласия на обработку персональных данных мы не сможем принять ваш запрос.';
                return false;
            } else {
                this.errors = null;

                this.form.tourNumber = tournumber;
                this.form.tourID = tourid;

                let fdata = new FormData();

                let guests = this.form.adults === 1 ? this.form.adults + ' ' + this.translations.guestMail[this.selectedLocale]
                    : this.form.adults + ' ' + this.translations.guestsMail[this.selectedLocale]
                let breakfast = this.form.hotelBreakfast === true ? this.translations.hotelMailBreakfast[this.selectedLocale] : this.translations.hotelMailNoBreakfast[this.selectedLocale]

                let roomName = this.form.roomName

                let kids = this.form.kids !== 1 || this.form.kids !== 2 ? 0 : this.form.kids

                let options = {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                }

                fdata.append('tourNumber', this.form.tourNumber);
                fdata.append('tourID', this.form.tourID);
                fdata.append('tourName', this.form.tourName);
                fdata.append('name', this.form.fname);
                fdata.append('lastname', this.form.sname);
                fdata.append('email', this.form.email);
                fdata.append('phone', this.form.phone);
                fdata.append('room', this.form.room);
                fdata.append('roomName', roomName);
                fdata.append('hotel', this.form.hotelName);
                fdata.append('address', this.form.address);
                fdata.append('passname', this.form.pass);
                fdata.append('gname', this.form.gfname);
                fdata.append('glastname', this.form.gsname);
                fdata.append('gphone', this.form.gphone);
                fdata.append('gemail', this.form.gemail);
                fdata.append('promocode', this.form.promocode);
                fdata.append('dateFrom', this.form.dateFrom.toLocaleString("ru",options))
                fdata.append('dateTill', this.form.dateTill.toLocaleString("ru",options));
                fdata.append('adults', guests);
                fdata.append('kids', kids);
                fdata.append('hotelBreakfast', breakfast);
                fdata.append('hotelPrice', this.form.hotelPrice);
                fdata.append('tourPrice', this.form.tourPrice);
                fdata.append('skipassPrice', this.form.skipassPrice);
                fdata.append('breakfastPrice', this.form.hotelBreakfastPrice);
                fdata.append('tourDays', this.form.tourDays);

                axios({
                    method: 'post',
                    url: 'php/saveVoucher.php',
                    data: fdata,
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                })
                    .then(response => {
                        this.form.payed = true;
                    })
                    // .then(response => this.responseData = response.data)
                    .catch(e => {
                        this.errors.push(e);
                    });
            }
        },
    },

    submit() {
    },

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
     components: {
         vuejsDatepicker
     }
});