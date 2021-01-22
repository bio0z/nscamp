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
    },
    touch(el){

    }
});

let router = new VueRouter({
    mode: 'history',
    routes: []
});

Vue.config.devtools = false

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
        days: [26,27,28,29,30,31,1,2,3,4],
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
            bed: '',
            bedName: '',

            fname: null,
            sname: null,
            email: null,
            phone: null,

            gfname: null,
            gsname: null,
            gphone: null,
            gemail: null,

            g3sname: null,
            g3fname: null,
            g4fname: null,
            g4sname: null,
            g5fname: null,
            g5sname: null,
            g6sname: null,
            g6fname: null,

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
            passDiscount: 1
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
                'en':'Type of room',
            },
            bedType:{
                'ru':'Тип кровати',
                'en':'Type of bed',
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
            hotelBreakfastNotIncluded:{
                'ru':'Проживание без завтрака',
                'en':'Breakfast not included',
            },
            passDetails:{
                'ru':'Подробнее',
                'en':'More'
            },
            passSDetails:{
                'ru':'от 28 986<span>₽ </span> от 5 дней',
                'en':'from 28 986<span>₽ </span> from 5 days'
            },
            passVDetails:{
                'ru':'от 40 986<span>₽ </span> от 5 дней ',
                'en':'from 40 986<span>₽ </span> from 5 days'
            },
            passSDetailsFull:{
                'ru':'<p class="mb-2">Браслет участника</p></li>' +
                    '<p class="mb-2">Проживание в отеле</p></li>' +
                    '<p class="mb-2">Скидки и привилегии участника фестиваля</p></li>' +
                    '<p class="mb-2">Ски пасс*</p><p class="minitext">*информация по ски-пасс доступна в разделе F.A.Q</p></li>' +
                    '<p class="mb-2">Первые 500 покупателей получают фирменную футболку фестиваля</p></li>',
                'en': '<p class="mb-2">Hotel accommodation</p></li>' +
                    '<p class="mb-2">Festival PASS</p></li>' +
                    '<p class="mb-2">Cable lifts pass</p></li>' +
                    '<p class="mb-2">Branded gifts for the first 500 guests</p></li>' +
                    '<p class="mb-2">Special offers in resort restaurants</p></li>',
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
                    '<p class="mb-2">Special offers in resort restaurants</p></li>',
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
            thirdGuest:{
                'ru':'Третий гость',
                'en':'Third guest'
            },
            fourthGuest:{
                'ru':'Четвертый гость',
                'en':'Fourth guest'
            },
            fifthGuest:{
                'ru':'Пятый гость',
                'en':'Fourth guest'
            },
            sixGuest:{
                'ru':'Шестой гость',
                'en':'Six guest'
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
            guestssMail:{
                'ru':'гостей',
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
            guestPromoCodeDiscount:{
                'ru':'Скидка использована.',
                'en':'Promocode used.'
            },
            userAgreement:{
                'ru':'пользовательское соглашение',
                'en':'user agreement'
            },
            newStarFAQ:{
                'ru':'Часто задаваемые вопросы и ответы',
                'en':'FAQ'
            },
            stepThree:{
                'ru':'Заполните, персональные данные и оставьте контактную информацию.',
                'en':'Please, fill the personal information.'
            },
            stepFour:{
                'ru':'Проверьте введенные данные, подтвердите согласие на их обработку, введите промокод, если имеется, и ' +
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
            errorMinDates:{
                'ru':'Туры менее 4 дней пока недоступны.',
                'en':'Minimal tour 4 days at this moment.'
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
            errorFillFIO2:{
                'ru':'Вы забыли заполнить персональные данные второго гостя.',
                'en':'Please, fill Name and Surname.'
            },
            errorFillFIO3:{
                'ru':'Вы забыли заполнить персональные данные третьего гостя.',
                'en':'Please, fill Name and Surname.'
            },
            errorFillFIO4:{
                'ru':'Вы забыли заполнить персональные данные четвертого гостя.',
                'en':'Please, fill Name and Surname.'
            },
            errorFillFIO5:{
                'ru':'Вы забыли заполнить персональные данные пятого гостя.',
                'en':'Please, fill Name and Surname.'
            },
            errorFillFIO6:{
                'ru':'Вы забыли заполнить персональные данные шестого гостя.',
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
                'ru':'Я даю ',
                'en':'I accept '
            },
            guestAgreement1:{
                'ru':'согласие ',
                'en':'Terms and Conditions'
            },
            guestAgreement2:{
                'ru':'на обработку персональных данных.',
                'en':'.'
            },
            guestOfferAccept:{
                'ru':'Я согласен c ',
                'en':'I accept '
            },
            guestOfferAccept1:{
                'ru':'политикой конфиденциальности',
                'en':'offer.'
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
                // new Date(2021, 2, 28),
                // new Date(2021, 2, 29),
                // new Date(2021, 2, 30),
                // new Date(2021, 2, 31),
                // new Date(2021, 3, 1),
                // new Date(2021, 3, 2),
            ],
        },
        hotels: [
            {
                active: true,
                name: 'Riders Lodge **',
                code: 'RIL',
                address: 'Улица Медовея 6, Эсто-Садок, Россия',
                formula: 99,
                gain: 1.12,
                maxGuests: 4,
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
                        maxGuests: 2,
                        quota:65,
                        prices: {
                            1: [4700, 4700, 4700, 4700, 4700, 4700, 4700, 4700, 4700, 4700],
                            2: [5300, 5300, 5300, 5300, 5300, 5300, 5300, 5300, 5300, 5300]
                        },
                        breakfasts:{},
                        breakfasts_included: true,
                        breakfasts_no: false,
                        beds: [
                            {
                                'code':1,
                                'name': '1 двуспальная кровать',
                            },
                            {
                                'code':2,
                                'name':'2 односпальные кровати'
                            }
                        ],
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
                        active: false,
                        name: 'Стандарт с балконом',
                        code: 'SB',
                        maxGuests: 2,
                        prices: {
                            1: [5200, 5200, 5200, 5200, 5200, 5200, 5200, 5200, 5200, 5200],
                            2: [5800, 5800, 5800, 5800, 5800, 5800, 5800, 5800, 5800, 5800]
                        },
                        breakfasts:{},
                        breakfasts_included: true,
                        breakfasts_no: false,
                        beds: [
                            {
                                'code':1,
                                'name': '1 двуспальная кровать',
                            },
                            {
                                'code':2,
                                'name':'2 односпальные кровати'
                            }
                        ],
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
                        name: 'Стандарт улучшенный с балконом',
                        code: 'S3B',
                        maxGuests: 2,
                        prices: {
                            1: [7100, 7100, 7100, 7100, 7100, 7100, 7100, 7100, 7100, 7100],
                            2: [7800, 7800, 7800, 7800, 7800, 7800, 7800, 7800, 7800, 7800]
                        },
                        breakfasts:{},
                        breakfasts_included: true,
                        breakfasts_no: false,
                        beds: [
                            {
                                'code': 12,
                                'name': '1 двуспальная кровать',
                            },
                            {
                                'code': 22,
                                'name': '2 односпальные кровати'
                            }
                        ],
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
                        active: false,
                        name: 'Стандарт улучшенный без балкона',
                        code: 'S3',
                        maxGuests: 4,
                        prices: {
                            1: [7100, 7100, 7100, 7100, 7100, 7100, 7100, 7100, 7100, 7100],
                            2: [7800, 7800, 7800, 7800, 7800, 7800, 7800, 7800, 7800, 7800],
                            3: [8500, 8500, 8500, 8500, 8500, 8500, 8500, 8500, 8500, 8500],
                            4: [9200, 9200, 9200, 9200, 9200, 9200, 9200, 9200, 9200, 9200]
                        },
                        breakfasts:{},
                        breakfasts_included: true,
                        breakfasts_no: false,
                        beds: [
                            {
                                'code': 12,
                                'name': '1 двуспальная кровать, 2 диван-кровати',
                            },
                            {
                                'code': 22,
                                'name': '2 односпальные кровати, 2 диван-кровати'
                            }
                        ],
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
                        active: false,
                        name: 'Двухкомнатный номер',
                        code: 'S2',
                        maxGuests: 3,
                        prices: {
                            1: [7100, 7100, 7100, 7100, 7100, 7100, 7100, 7100, 7100, 7100],
                            2: [7800, 7800, 7800, 7800, 7800, 7800, 7800, 7800, 7800, 7800],
                            3: [8500, 8500, 8500, 8500, 8500, 8500, 8500, 8500, 8500, 8500],
                        },
                        breakfasts:{},
                        breakfasts_included: true,
                        breakfasts_no: false,
                        beds: [
                            {
                                'code':11,
                                'name': '1 двухспальная кровать, 1 диван-кровать',
                            },
                            {
                                'code':22,
                                'name':'2 односпальные кровати, 1 диван-кровать'
                            }
                        ],
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
                        maxGuests: 4,
                        prices: {
                            1: [7000, 7000, 7000, 7000, 7000, 7000, 7000, 7000, 7000, 7000],
                            2: [7600, 7600, 7600, 7600, 7600, 7600, 7600, 7600, 7600, 7600],
                            3: [8200, 8200, 8200, 8200, 8200, 8200, 8200, 8200, 8200, 8200],
                            4: [8800, 8800, 8800, 8800, 8800, 8800, 8800, 8800, 8800, 8800],
                        },
                        breakfasts:{},
                        breakfasts_included: true,
                        breakfasts_no: false,
                        beds: [
                            {
                                'code':11,
                                'name': '1 двуспальная кровать, 1 двухъярусная кровать',
                            },
                            {
                                'code':21,
                                'name':'2 односпальные кровати, 1 двухъярусная кровать'
                            }
                        ],
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
                name: 'Ski Inn Spa Hotel ****',
                code: 'SKIINN',
                address: '354392 г. Сочи, Красная поляна, курорт "Роза Хутор", ул. Пихтовая аллея, д.1',
                formula: 99,
                gain: 1.17,
                maxGuests: 2,
                gallery:
                    [
                        'https://444803.selcdn.ru/cdn.awsd.cc/hotel-skiinn2-1.jpg',
                        'https://444803.selcdn.ru/cdn.awsd.cc/hotel-skiinn2-2.jpg',
                        'https://444803.selcdn.ru/cdn.awsd.cc/hotel-skiinn2-3.jpg',
                        'https://444803.selcdn.ru/cdn.awsd.cc/hotel-skiinn2-4.jpg',
                        'https://444803.selcdn.ru/cdn.awsd.cc/hotel-skiinn-std-1.jpg',
                        'https://444803.selcdn.ru/cdn.awsd.cc/hotel-skiinn-std-2.jpg',
                        'https://444803.selcdn.ru/cdn.awsd.cc/hotel-skiinn-std-3.jpg',
                        'https://444803.selcdn.ru/cdn.awsd.cc/hotel-skiinn-std-4.jpg',
                        'https://444803.selcdn.ru/cdn.awsd.cc/hotel-skiinn-std-5.jpg',
                        'https://444803.selcdn.ru/cdn.awsd.cc/hotel-skiinn-std-6.jpg',
                        'https://444803.selcdn.ru/cdn.awsd.cc/hotel-skiinn-std-7.jpg',
                        'https://444803.selcdn.ru/cdn.awsd.cc/hotel-skiinn-std-8.jpg',
                    ],
                rooms:[
                    {
                        active: false,
                        name: 'Стандарт-Делюкс',
                        code: 'STD',
                        maxGuests: 2,
                        quota:65,
                        prices: {
                            1: [5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000],
                            2: [5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000]
                        },
                        breakfasts:{
                            1: [1200, 1200, 1200, 1200, 1200, 1200, 1200, 1200, 1200, 1200],
                            2: [2400, 2400, 2400, 2400, 2400, 2400, 2400, 2400, 2400, 2400]
                        },
                        breakfasts_included: false,
                        breakfasts_no: false,
                        beds: [
                            {
                                'code':1,
                                'name': '1 двуспальная кровать',
                            },
                            {
                                'code':2,
                                'name':'2 односпальные кровати'
                            }
                        ],
                        desc: {
                            'ru':'<ul><li>22 кв. м.</li>' +
                                '<li>Вместимость до 3-х человек</li>' +
                                '<li>Доступ в спа-зону с бассейном</li>' +
                                '<li>Климат-контроль</li>' +
                                '<li>Халат и тапочки</li>' +
                                '<li>Фен</li>' +
                                '<li>ЖК-телевизор</li>' +
                                '<li>Бесплатный Wi-Fi</li>' +
                                '<li>Холодильник</li>' +
                                '<li>Чайная станция</li></ul>',
                            'en': '<ul><li>22 кв. м.</li>' +
                                '<li>Вместимость до 3-х человек</li>' +
                                '<li>Доступ в спа-зону с бассейном</li>' +
                                '<li>Климат-контроль</li>' +
                                '<li>Халат и тапочки</li>' +
                                '<li>Фен</li>' +
                                '<li>ЖК-телевизор</li>' +
                                '<li>Бесплатный Wi-Fi</li>' +
                                '<li>Холодильник</li>' +
                                '<li>Чайная станция</li></ul>'
                        },
                        photo: 'https://444803.selcdn.ru/cdn.awsd.cc/hotel-skiinn-std-1.jpg',
                    },
                ],
                desc:{
                    'ru':'Ski Inn SPA Hotel - это главный корпус отеля Rosa Ski Inn, прошедший полную реновацию. Это все тоже любимое гостями место с теплой семейной атмосферой, в шаге от подъемника и склонов «Роза Хутор», но в сочетании с абсолютно новыми интерьерами и уютной термальной зоной от FRESH SPA NATURA SIBERICA',
                    'en':'Do you want to live at the festival epicenter at an affordable price? Riders Lodge is the first hotel in Russia for riders and a friendly gathering and hang out, and very closely located relative to all activities and to the Festival Headquarters and the Olympia cable lift. The hotel lobby deserves special attention - cause it’s full of fun from morning to late night that life: convenient chill-out zone with a fast internet connection, a games area, a cinema, and the Surf Coffee cafe inside.'
                }
            },
            {
                active: true,
                name: 'Rosa Ski Inn **',
                code: 'SKIINN2',
                address: 'Эстосадок, «Роза Хутор», улица Пихтовая аллея, дом 1',
                formula: 99,
                gain: 1.17,
                maxGuests: 6,
                gallery:
                    [
                        'https://444803.selcdn.ru/cdn.awsd.cc/hotel-skiinn2-1.jpg',
                        'https://444803.selcdn.ru/cdn.awsd.cc/hotel-skiinn2-2.jpg',
                        'https://444803.selcdn.ru/cdn.awsd.cc/hotel-skiinn2-3.jpg',
                        'https://444803.selcdn.ru/cdn.awsd.cc/hotel-skiinn2-4.jpg',
                        'https://444803.selcdn.ru/cdn.awsd.cc/hotel-skiinn2-std-1.jpg',
                        'https://444803.selcdn.ru/cdn.awsd.cc/hotel-skiinn2-std3-1.jpg',
                        'https://444803.selcdn.ru/cdn.awsd.cc/hotel-skiinn2-std3-2.jpg',
                        'https://444803.selcdn.ru/cdn.awsd.cc/hotel-skiinn2-std3-3.jpg',
                        'https://444803.selcdn.ru/cdn.awsd.cc/hotel-skiinn2-fam-1.jpg',
                        'https://444803.selcdn.ru/cdn.awsd.cc/hotel-skiinn2-fam-2.jpg',
                        'https://444803.selcdn.ru/cdn.awsd.cc/hotel-skiinn2-fam-3.jpg',
                        'https://444803.selcdn.ru/cdn.awsd.cc/hotel-skiinn2-trl-1.jpg',
                        'https://444803.selcdn.ru/cdn.awsd.cc/hotel-skiinn2-trl-2.jpg',
                        'https://444803.selcdn.ru/cdn.awsd.cc/hotel-skiinn2-trl-3.jpg',
                        'https://444803.selcdn.ru/cdn.awsd.cc/hotel-skiinn2-trl4-1.jpg',
                        'https://444803.selcdn.ru/cdn.awsd.cc/hotel-skiinn2-trl4-2.jpg',
                        'https://444803.selcdn.ru/cdn.awsd.cc/hotel-skiinn2-trl4-3.jpg',
                        'https://444803.selcdn.ru/cdn.awsd.cc/hotel-skiinn2-trl6-1.jpg',
                        'https://444803.selcdn.ru/cdn.awsd.cc/hotel-skiinn2-trl6-2.jpg',
                        'https://444803.selcdn.ru/cdn.awsd.cc/hotel-skiinn2-trl6-3.jpg',
                        'https://444803.selcdn.ru/cdn.awsd.cc/hotel-skiinn2-trl6-4.jpg',
                    ],
                rooms:[
                    {
                        active: true,
                        name: 'Стандартный двухместный номер (корпус B)',
                        code: 'STD',
                        maxGuests: 2,
                        quota:65,
                        prices: {
                            1: [4600, 4600, 4600, 4600, 4600, 4600, 4600, 4600, 4600, 4600],
                            2: [4600, 4600, 4600, 4600, 4600, 4600, 4600, 4600, 4600, 4600]
                        },
                        breakfasts:{
                            1: [600, 600, 600, 600, 600, 600, 600, 600, 600, 600],
                            2: [1200, 1200, 1200, 1200, 1200, 1200, 1200, 1200, 1200, 1200]
                        },
                        breakfasts_included: false,
                        breakfasts_no: false,
                        beds: [
                            {
                                'code':1,
                                'name': '1 двуспальная кровать',
                            },
                            {
                                'code':2,
                                'name':'2 односпальные кровати'
                            }
                        ],
                        desc: {
                            'ru':'<ul><li>25 кв. м.</li>' +
                                '<li>Вместимость до 3-х человек</li>' +
                                '<li>Телевизор</li>' +
                                '<li>Холодильник</li>' +
                                '<li>Телефон</li>' +
                                '<li>Чайник</li>' +
                                '<li>Чайный набор посуды</li>' +
                                '<li>Фен</li>' +
                                '<li>Набор полотенец и косметических средств для душа</li>' +
                                '<li>Выделенное место для хранения лыж/сноуборда</li></ul>',
                            'en': '<ul><li>25 кв. м.</li>' +
                                '<li>Вместимость до 3-х человек</li>' +
                                '<li>Телевизор</li>' +
                                '<li>Холодильник</li>' +
                                '<li>Телефон</li>' +
                                '<li>Чайник</li>' +
                                '<li>Чайный набор посуды</li>' +
                                '<li>Фен</li>' +
                                '<li>Набор полотенец и косметических средств для душа</li>' +
                                '<li>Выделенное место для хранения лыж/сноуборда</li></ul>'
                        },
                        photo: 'https://444803.selcdn.ru/cdn.awsd.cc/hotel-skiinn2-std-1.jpg'
                    },
                    {
                        active: true,
                        name: 'Стандартный трехместный номер (корпус В)',
                        code: 'STD3',
                        maxGuests: 3,
                        quota:65,
                        prices: {
                            1: [5700, 5700, 5700, 5700, 5700, 5700, 5700, 5700, 5700, 5700],
                            2: [5700, 5700, 5700, 5700, 5700, 5700, 5700, 5700, 5700, 5700],
                            3: [5700, 5700, 5700, 5700, 5700, 5700, 5700, 5700, 5700, 5700],
                        },
                        breakfasts:{
                            1: [600, 600, 600, 600, 600, 600, 600, 600, 600, 600],
                            2: [1200, 1200, 1200, 1200, 1200, 1200, 1200, 1200, 1200, 1200],
                            3: [1800, 1800, 1800, 1800, 1800, 1800, 1800, 1800, 1800, 1800]
                        },
                        breakfasts_included: false,
                        breakfasts_no: false,
                        beds: [
                            {
                                'code':4,
                                'name': '3 односпальные кровати',
                            }
                        ],
                        desc: {
                            'ru':'<ul><li>25 кв. м.</li>' +
                                '<li>Вместимость до 3-х человек</li>' +
                                '<li>Телевизор</li>' +
                                '<li>Холодильник</li>' +
                                '<li>Телефон</li>' +
                                '<li>Чайник</li>' +
                                '<li>Чайный набор посуды</li>' +
                                '<li>Фен</li>' +
                                '<li>Набор полотенец и косметических средств для душа</li>' +
                                '<li>Выделенное место для хранения лыж/сноуборда</li></ul>',
                            'en': '<ul><li>25 кв. м.</li>' +
                                '<li>Вместимость до 3-х человек</li>' +
                                '<li>Телевизор</li>' +
                                '<li>Холодильник</li>' +
                                '<li>Телефон</li>' +
                                '<li>Чайник</li>' +
                                '<li>Чайный набор посуды</li>' +
                                '<li>Фен</li>' +
                                '<li>Набор полотенец и косметических средств для душа</li>' +
                                '<li>Выделенное место для хранения лыж/сноуборда</li></ul>'
                        },
                        photo: 'https://444803.selcdn.ru/cdn.awsd.cc/hotel-skiinn2-std3-1.jpg',
                    },
                    {
                        active: true,
                        name: 'Стандартный Семейный номер (корпуса В/С/D)',
                        code: 'FAM',
                        maxGuests: 2,
                        quota:65,
                        prices: {
                            1: [5400, 5400, 5400, 5400, 5400, 5400, 5400, 5400, 5400, 5400],
                            2: [5400, 5400, 5400, 5400, 5400, 5400, 5400, 5400, 5400, 5400],
                        },
                        breakfasts:{
                            1: [600, 600, 600, 600, 600, 600, 600, 600, 600, 600],
                            2: [1200, 1200, 1200, 1200, 1200, 1200, 1200, 1200, 1200, 1200],
                        },
                        breakfasts_included: false,
                        breakfasts_no: false,
                        beds: [
                            {
                                'code': 11,
                                'name': '1 двуспальная кровать, 1 диван-кровать',
                            }
                        ],
                        desc: {
                            'ru':'<ul><li>25 кв. м.</li>' +
                                '<li>Вместимость до 3-х человек</li>' +
                                '<li>Телевизор</li>' +
                                '<li>Холодильник</li>' +
                                '<li>Телефон</li>' +
                                '<li>Чайник</li>' +
                                '<li>Чайный набор посуды</li>' +
                                '<li>Фен</li>' +
                                '<li>Набор полотенец и косметических средств для душа</li>' +
                                '<li>Выделенное место для хранения лыж/сноуборда</li></ul>',
                            'en': '<ul><li>25 кв. м.</li>' +
                                '<li>Вместимость до 3-х человек</li>' +
                                '<li>Телевизор</li>' +
                                '<li>Холодильник</li>' +
                                '<li>Телефон</li>' +
                                '<li>Чайник</li>' +
                                '<li>Чайный набор посуды</li>' +
                                '<li>Фен</li>' +
                                '<li>Набор полотенец и косметических средств для душа</li>' +
                                '<li>Выделенное место для хранения лыж/сноуборда</li></ul>'
                        },
                        photo: 'https://444803.selcdn.ru/cdn.awsd.cc/hotel-skiinn2-fam-1.jpg',
                    },
                    {
                        active: true,
                        name: 'Комната в 3х комнатном номере с общей ванной (корпус B)',
                        code: 'TRL',
                        maxGuests: 2,
                        quota:65,
                        prices: {
                            1: [3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000],
                            2: [3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000],
                        },
                        breakfasts:{
                            1: [600, 600, 600, 600, 600, 600, 600, 600, 600, 600],
                            2: [1200, 1200, 1200, 1200, 1200, 1200, 1200, 1200, 1200, 1200],
                        },
                        breakfasts_included: false,
                        breakfasts_no: false,
                        beds: [
                            {
                                'code': 1,
                                'name': '1 двуспальная кровать',
                            },
                            {
                                'code': 2,
                                'name': '2 односпальные кровати'
                            }
                        ],
                        desc: {
                            'ru':'<ul><li>25 кв. м.</li>' +
                                '<li>Вместимость до 3-х человек</li>' +
                                '<li>Телевизор</li>' +
                                '<li>Холодильник</li>' +
                                '<li>Телефон</li>' +
                                '<li>Чайник</li>' +
                                '<li>Чайный набор посуды</li>' +
                                '<li>Фен</li>' +
                                '<li>Набор полотенец и косметических средств для душа</li>' +
                                '<li>Выделенное место для хранения лыж/сноуборда</li></ul>',
                            'en': '<ul><li>25 кв. м.</li>' +
                                '<li>Вместимость до 3-х человек</li>' +
                                '<li>Телевизор</li>' +
                                '<li>Холодильник</li>' +
                                '<li>Телефон</li>' +
                                '<li>Чайник</li>' +
                                '<li>Чайный набор посуды</li>' +
                                '<li>Фен</li>' +
                                '<li>Набор полотенец и косметических средств для душа</li>' +
                                '<li>Выделенное место для хранения лыж/сноуборда</li></ul>'
                        },
                        photo: 'https://444803.selcdn.ru/cdn.awsd.cc/hotel-skiinn2-trl-1.jpg',
                    },
                    {
                        active: true,
                        name: '3х-комнатный номер для компаний (2 спальни+гостиная), корпус С',
                        code: 'TRL4',
                        maxGuests: 4,
                        quota:65,
                        prices: {
                            1: [7200, 7200, 7200, 7200, 7200, 7200, 7200, 7200, 7200, 7200],
                            2: [7200, 7200, 7200, 7200, 7200, 7200, 7200, 7200, 7200, 7200],
                            3: [7200, 7200, 7200, 7200, 7200, 7200, 7200, 7200, 7200, 7200],
                            4: [7200, 7200, 7200, 7200, 7200, 7200, 7200, 7200, 7200, 7200],
                        },
                        breakfasts:{
                            1: [600, 600, 600, 600, 600, 600, 600, 600, 600, 600],
                            2: [1200, 1200, 1200, 1200, 1200, 1200, 1200, 1200, 1200, 1200],
                            3: [1800, 1800, 1800, 1800, 1800, 1800, 1800, 1800, 1800, 1800],
                            4: [2400, 2400, 2400, 2400, 2400, 2400, 2400, 2400, 2400, 2400],
                        },
                        breakfasts_included: false,
                        breakfasts_no: false,
                        beds: [
                            {
                                'code': 12,
                                'name': '1 двуспальная кровать, 2 односпальные',
                            },
                            {
                                'code': 2,
                                'name': '2 двуспальные кровати',
                            },
                            {
                                'code': 4,
                                'name': '4 односпальные кровати'
                            }
                        ],
                        desc: {
                            'ru':'<ul><li>25 кв. м.</li>' +
                                '<li>Вместимость до 3-х человек</li>' +
                                '<li>Телевизор</li>' +
                                '<li>Холодильник</li>' +
                                '<li>Телефон</li>' +
                                '<li>Чайник</li>' +
                                '<li>Чайный набор посуды</li>' +
                                '<li>Фен</li>' +
                                '<li>Набор полотенец и косметических средств для душа</li>' +
                                '<li>Выделенное место для хранения лыж/сноуборда</li></ul>',
                            'en': '<ul><li>25 кв. м.</li>' +
                                '<li>Вместимость до 3-х человек</li>' +
                                '<li>Телевизор</li>' +
                                '<li>Холодильник</li>' +
                                '<li>Телефон</li>' +
                                '<li>Чайник</li>' +
                                '<li>Чайный набор посуды</li>' +
                                '<li>Фен</li>' +
                                '<li>Набор полотенец и косметических средств для душа</li>' +
                                '<li>Выделенное место для хранения лыж/сноуборда</li></ul>'
                        },
                        photo: 'https://444803.selcdn.ru/cdn.awsd.cc/hotel-skiinn2-trl4-1.jpg'
                    },
                    {
                        active: true,
                        name: '4х-комнатный номер для компаний (3 спальни+гостиная), корпуса B и С',
                        code: 'TRL6',
                        maxGuests: 6,
                        quota:65,
                        prices: {
                            1: [10800, 10800, 10800, 10800, 10800, 10800, 10800, 10800, 10800, 10800],
                            2: [10800, 10800, 10800, 10800, 10800, 10800, 10800, 10800, 10800, 10800],
                            3: [10800, 10800, 10800, 10800, 10800, 10800, 10800, 10800, 10800, 10800],
                            4: [10800, 10800, 10800, 10800, 10800, 10800, 10800, 10800, 10800, 10800],
                            5: [10800, 10800, 10800, 10800, 10800, 10800, 10800, 10800, 10800, 10800],
                            6: [10800, 10800, 10800, 10800, 10800, 10800, 10800, 10800, 10800, 10800],
                        },
                        breakfasts:{
                            1: [600, 600, 600, 600, 600, 600, 600, 600, 600, 600],
                            2: [1200, 1200, 1200, 1200, 1200, 1200, 1200, 1200, 1200, 1200],
                            3: [1800, 1800, 1800, 1800, 1800, 1800, 1800, 1800, 1800, 1800],
                            4: [2400, 2400, 2400, 2400, 2400, 2400, 2400, 2400, 2400, 2400],
                            5: [3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000],
                            6: [5600, 5600, 5600, 5600, 5600, 5600, 5600, 5600, 5600, 5600],
                        },
                        breakfasts_included: false,
                        breakfasts_no: false,
                        beds: [
                            {
                                'code': 22,
                                'name': '2 двуспальные кровати, 2 односпальные',
                            },
                            {
                                'code': 14,
                                'name': '1 двуспальная, 4 односпальные кровати'
                            },
                            {
                                'code': 3,
                                'name': '3 двуспальные кровати'
                            },
                            {
                                'code': 6,
                                'name': '6 односпальных кроватей'
                            }
                        ],
                        desc: {
                            'ru':'<ul><li>25 кв. м.</li>' +
                                '<li>Вместимость до 3-х человек</li>' +
                                '<li>Телевизор</li>' +
                                '<li>Холодильник</li>' +
                                '<li>Телефон</li>' +
                                '<li>Чайник</li>' +
                                '<li>Чайный набор посуды</li>' +
                                '<li>Фен</li>' +
                                '<li>Набор полотенец и косметических средств для душа</li>' +
                                '<li>Выделенное место для хранения лыж/сноуборда</li></ul>',
                            'en': '<ul><li>25 кв. м.</li>' +
                                '<li>Вместимость до 3-х человек</li>' +
                                '<li>Телевизор</li>' +
                                '<li>Холодильник</li>' +
                                '<li>Телефон</li>' +
                                '<li>Чайник</li>' +
                                '<li>Чайный набор посуды</li>' +
                                '<li>Фен</li>' +
                                '<li>Набор полотенец и косметических средств для душа</li>' +
                                '<li>Выделенное место для хранения лыж/сноуборда</li></ul>'
                        },
                        photo: 'https://444803.selcdn.ru/cdn.awsd.cc/hotel-skiinn2-trl6-1.jpg'
                    },
                ],
                desc:{
                    'ru':'Отель Rosa Ski Inn находится на горнолыжном курорте Роза-Хутор, на высоте 1 170 метров над уровнем моря, в 10 минутах ходьбы от лыжного подъемника «Олимпия». Он состоит из 5 зданий на разном расстоянии от горнолыжных склонов. Рядом с главным корпусом проложены лыжные трассы. К услугам гостей помещение для хранения лыж.\n' +
                        'В числе удобств всех номеров телевизор с плоским экраном, электрический чайник, мини-бар и фен. Из номеров открывается вид на горы. Гостям предоставляется бесплатный Wi-Fi.\n' +
                        'В ресторане подают блюда европейской и местной кухни.\n' +
                        'Стойка регистрации отеля Rosa Ski Inn работает круглосуточно.',
                    'en':'Отель Rosa Ski Inn находится на горнолыжном курорте Роза-Хутор, на высоте 1 170 метров над уровнем моря, в 10 минутах ходьбы от лыжного подъемника «Олимпия». Он состоит из 5 зданий на разном расстоянии от горнолыжных склонов. Рядом с главным корпусом проложены лыжные трассы. К услугам гостей помещение для хранения лыж.\n' +
                        'В числе удобств всех номеров телевизор с плоским экраном, электрический чайник, мини-бар и фен. Из номеров открывается вид на горы. Гостям предоставляется бесплатный Wi-Fi.\n' +
                        'В ресторане подают блюда европейской и местной кухни.\n' +
                        'Стойка регистрации отеля Rosa Ski Inn работает круглосуточно.'
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
                active: true,
                name: 'Rosa Springs ****',
                code: 'ROS',
                address: 'Роза Хутор, п. Эсто-Садок, ул. Медовея, д. 4',
                formula: 99,
                gain: 1.07,
                maxGuests: 2,
                gallery: [
                    'https://444803.selcdn.ru/cdn.awsd.cc/hotel-rs-8.jpg',
                    'https://444803.selcdn.ru/cdn.awsd.cc/hotel-rs-9.jpg',
                    'https://444803.selcdn.ru/cdn.awsd.cc/hotel-rs-4.jpg',
                    'https://444803.selcdn.ru/cdn.awsd.cc/hotel-rs-1.jpg',
                    'https://444803.selcdn.ru/cdn.awsd.cc/hotel-rs-2.jpg',
                    'https://444803.selcdn.ru/cdn.awsd.cc/hotel-rs-3.jpg',
                    'https://444803.selcdn.ru/cdn.awsd.cc/hotel-rs-5.jpg',
                    'https://444803.selcdn.ru/cdn.awsd.cc/hotel-rs-std-1.jpg',
                    'https://444803.selcdn.ru/cdn.awsd.cc/hotel-rs-std-2.jpg',
                    'https://444803.selcdn.ru/cdn.awsd.cc/hotel-rs-std-3.jpg',
                ],
                desc: {
                    'ru' : 'Спа-отель Rosa Springs с медицинским центром и прямым доступом к лыжным склонам расположен на горнолыжном курорте Роза Хутор. К услугам гостей пункт продажи ски-пассов и спа-центр с бассейном, сауной и фитнес-центром. Также проводятся медицинские и спа-процедуры. На всей территории работает бесплатный Wi-Fi.\n' +
                        'Во всех номерах имеются кондиционер, электрический чайник, принадлежности для чая/кофе и телевизор с плоским экраном и спутниковыми каналами. В некоторых из них обустроена гостиная зона и установлен диван. Кроме того, в номерах есть собственная ванная комната с халатами, тапочками, феном и бесплатными туалетно-косметическими принадлежностями.\n' +
                        'Ежедневно для гостей сервируют завтрак «шведский стол». На территории гостиницы также работают рестораны и фитобар, где предлагают закуски.\n',
                    'en': 'This hotel was made especially for those who want to have a cool vacation but also retreat health after numerous parties during the festival. Rosa Springs is the first balneological hotel in Krasnaya Polyana mountainside. In addition to the medical center, all residents can visit its spa complex with an indoor swimming pool and baths.\n' +
                        'The hotel is just a 5-minute walk from Festival Headquarters and in close proximity to many NSC parties, Olympia cable lifts, as well as shops, cafes, bars, and restaurants, including Grusha restaurant and Surf Coffee cafe.'
                },
                rooms:[
                    {
                        active: true,
                        name: 'Стандарт',
                        code: 'STD',
                        maxGuests: 2,
                        quota: 65,
                        prices: {
                            1: [7350, 7350, 7350, 8400, 8400, 8400, 8400, 8400, 7350, 7350],
                            2: [8050, 8050, 9200, 9200, 9200, 9200, 9200, 9200, 8050, 8050],
                        },
                        breakfasts:{
                        },
                        breakfasts_included: true,
                        breakfasts_no: false,
                        beds: [
                            {
                                'code':1,
                                'name': '1 двуспальная кровать',
                            },
                            {
                                'code':2,
                                'name':'2 односпальные кровати'
                            }
                        ],
                        desc: {
                            'ru': '<ul><li>Телевизор</li>' +
                                '<li>WI-FI</li>' +
                                '<li>Кондиционер</li>' +
                                '<li>Телефон</li>' +
                                '<li>Фен</li>' +
                                '<li>Туалетные принадлежности</li>' +
                                '<li>Чайник</li>',
                            'en': '<ul><li>Телевизор</li>' +
                                '<li>WI-FI</li>' +
                                '<li>Кондиционер</li>' +
                                '<li>Телефон</li>' +
                                '<li>Фен</li>' +
                                '<li>Туалетные принадлежности</li>' +
                                '<li>Чайник</li>'
                        },
                        photo: 'https://444803.selcdn.ru/cdn.awsd.cc/hotel-rs-std-1.jpg'
                    },
                    {
                        active: true,
                        name: 'Джуниор',
                        code: 'JUN',
                        maxGuests: 2,
                        quota: 65,
                        prices: {
                            1: [10880,10880,10880,12240,12240,12240,12240,12240,10880,10880],
                            2: [11680,11680,13140,13140,13140,13140,13140,13140,11680,11680],
                        },
                        breakfasts:{
                        },
                        breakfasts_included: true,
                        breakfasts_no: false,
                        beds: [
                            {
                                'code':1,
                                'name': '1 двуспальная кровать',
                            },
                            {
                                'code':2,
                                'name':'2 односпальные кровати'
                            }
                        ],
                        desc: {
                            'ru': '<ul><li>Телевизор</li>' +
                                '<li>WI-FI</li>' +
                                '<li>Кондиционер</li>' +
                                '<li>Телефон</li>' +
                                '<li>Фен</li>' +
                                '<li>Туалетные принадлежности</li>' +
                                '<li>Чайник</li>',
                            'en': '<ul><li>Телевизор</li>' +
                                '<li>WI-FI</li>' +
                                '<li>Кондиционер</li>' +
                                '<li>Телефон</li>' +
                                '<li>Фен</li>' +
                                '<li>Туалетные принадлежности</li>' +
                                '<li>Чайник</li>'
                        },
                        photo: 'https://444803.selcdn.ru/cdn.awsd.cc/hotel-rs-jun-1.jpg'
                    },
                    {
                        active: true,
                        name: 'Люкс',
                        code: 'LUX',
                        maxGuests: 2,
                        quota:65,
                        prices: {
                            1: [13280,13280,13280,14940,14940,14940,14940,14940,13280,13280],
                            2: [14080,14080,15840,15840,15840,15840,15840,15840,14080,14080],
                        },
                        breakfasts:{
                        },
                        breakfasts_included: true,
                        breakfasts_no: false,
                        beds: [
                            {
                                'code':1,
                                'name': '1 двуспальная кровать',
                            }
                        ],
                        desc: {
                            'ru': '<ul><li>Телевизор</li>' +
                                '<li>WI-FI</li>' +
                                '<li>Кондиционер</li>' +
                                '<li>Телефон</li>' +
                                '<li>Фен</li>' +
                                '<li>Туалетные принадлежности</li>' +
                                '<li>Чайник</li>' +
                                '<li>Утюг</li>' +
                                '<li>Гладильная доска</li>',
                            'en': '<ul><li>Телевизор</li>' +
                                '<li>WI-FI</li>' +
                                '<li>Кондиционер</li>' +
                                '<li>Телефон</li>' +
                                '<li>Фен</li>' +
                                '<li>Туалетные принадлежности</li>' +
                                '<li>Чайник</li>' +
                                '<li>Утюг</li>' +
                                '<li>Гладильная доска</li>'
                        },
                        photo: 'https://444803.selcdn.ru/cdn.awsd.cc/hotel-rs-std-1.jpg'
                    },
                ]
            },
            {
                active: true,
                name: 'Отель Radisson Rosa Khutor *****',
                code: 'RRK5',
                gain: 1.12,
                formula: 99,
                maxGuests: 2,
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
                        prices: {
                            1: [8800,8800,7000,7000,7000,7000,7000,4900,4900,4900],
                            2: [8800,8800,7000,7000,7000,7000,7000,4900,4900,4900],
                        },
                        breakfasts:{
                            1: [800,800,800,800,800,800,800,800,800,800],
                            2: [2000,2000,2000,2000,2000,2000,2000,2000,2000,2000]
                        },
                        breakfasts_included: false,
                        breakfasts_no: false,
                        maxGuests: 2,
                        beds: [
                            {
                                'code':1,
                                'name': '1 двуспальная кровать',
                            },
                            {
                                'code':2,
                                'name':'2 односпальные кровати'
                            }
                        ],
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
                        prices: {
                            1: [8800,8800,7000,7000,7000,7000,7000,4900,4900,4900],
                            2: [8800,8800,7000,7000,7000,7000,7000,4900,4900,4900],
                        },
                        breakfasts:{
                            1: [800,800,800,800,800,800,800,800,800,800],
                            2: [2000,2000,2000,2000,2000,2000,2000,2000,2000,2000]
                        },
                        breakfasts_included: false,
                        breakfasts_no: false,
                        maxGuests: 2,
                        beds: [
                            {
                                'code':1,
                                'name': '1 двуспальная кровать',
                            },
                            {
                                'code':2,
                                'name':'2 односпальные кровати'
                            }
                        ],
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
                        prices: {
                            1: [10300,10300,10300,8500,8500,8500,8500,8500,6400,6400],
                            2: [10300,10300,10300,8500,8500,8500,8500,8500,6400,6400],
                        },
                        breakfasts:{
                            1: [800,800,800,800,800,800,800,800,800,800],
                            2: [2000,2000,2000,2000,2000,2000,2000,2000,2000,2000]
                        },
                        breakfasts_included: false,
                        breakfasts_no: false,
                        maxGuests: 2,
                        beds: [
                            {
                                'code':1,
                                'name': '1 двуспальная кровать',
                            },
                            {
                                'code':2,
                                'name':'2 односпальные кровати'
                            }
                        ],
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
                        prices: {
                            1: [16300,16300,16300,14500,14500,14500,14500,14500,12400,12400],
                            2: [16300,16300,16300,14500,14500,14500,14500,14500,12400,12400],
                        },
                        breakfasts:{
                            1: [800,800,800,800,800,800,800,800,800,800],
                            2: [2000,2000,2000,2000,2000,2000,2000,2000,2000,2000]
                        },
                        breakfasts_included: false,
                        breakfasts_no: false,
                        maxGuests: 2,
                        beds: [
                            {
                                'code':1,
                                'name': '1 двуспальная кровать, 1 диван',
                            }
                        ],
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
                        prices: {
                            1: [16800,16800,16800,15000,15000,15000,15000,15000,12900,12900],
                            2: [16800,16800,16800,15000,15000,15000,15000,15000,12900,12900],
                        },
                        breakfasts:{
                            1: [800,800,800,800,800,800,800,800,800,800],
                            2: [2000,2000,2000,2000,2000,2000,2000,2000,2000,2000]
                        },
                        breakfasts_included: false,
                        breakfasts_no: false,
                        maxGuests: 2,
                        beds: [
                            {
                                'code':1,
                                'name': '1 двуспальная кровать, 1 диван',
                            }
                        ],
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
                        prices: {
                            1: [17800,17800,17800,16000,16000,16000,16000,16000,13900,13900],
                            2: [117800,7800,17800,16000,16000,16000,16000,16000,13900,13900],
                        },
                        breakfasts:{
                            1: [800,800,800,800,800,800,800,800,800,800],
                            2: [2000,2000,2000,2000,2000,2000,2000,2000,2000,2000]
                        },
                        breakfasts_included: false,
                        breakfasts_no: false,
                        maxGuests: 2,
                        beds: [
                            {
                                'code': 11,
                                'name': '1 двуспальная кровать, диван',
                            }
                        ],
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
                        prices: {
                            1: [27800,27800,27800,26000,26000,26000,26000,26000,23900,23900],
                            2: [27800,27800,27800,26000,26000,26000,26000,26000,23900,23900],
                        },
                        breakfasts:{
                            1: [800,800,800,800,800,800,800,800,800,800],
                            2: [2000,2000,2000,2000,2000,2000,2000,2000,2000,2000]
                        },
                        breakfasts_included: false,
                        breakfasts_no: false,
                        maxGuests: 2,
                        beds: [
                            {
                                'code':1,
                                'name': '1 двуспальная кровать, 2 односпальные кровати'
                            }
                        ],
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
                formula: 99,
                maxGuests: 2,
                gain: 1.12,
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
                        active: false,
                        name: 'Стандарт',
                        code: 'S2',
                        prices: {
                            1: [4700,4700,4700,3500,3500,3500,3500,3500,3500,3500],
                            2: [4700,4700,4700,3500,3500,3500,3500,3500,3500,3500],
                        },
                        breakfasts:{
                            1: [600,600,600,900,900,900,900,900,900,900],
                            2: [1500,1500,1500,1800,1800,1800,1800,1800,1800,1800]
                        },
                        breakfasts_included: false,
                        breakfasts_no: false,
                        beds: [
                            {
                                'code':1,
                                'name': '1 двуспальная кровать',
                            },
                            {
                                'code':2,
                                'name':'2 односпальные кровати'
                            }
                        ],
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
                        active: false,
                        name: 'Стандарт с видом на реку',
                        code: 'S2RV',
                        prices: {
                            1: [4700,4700,4700,3500,3500,3500,3500,3500,3500,3500],
                            2: [4700,4700,4700,3500,3500,3500,3500,3500,3500,3500],
                        },
                        breakfasts:{
                            1: [600,600,600,900,900,900,900,900,900,900],
                            2: [1500,1500,1500,1800,1800,1800,1800,1800,1800,1800]
                        },
                        breakfasts_included: false,
                        breakfasts_no: false,
                        maxGuests: 2,
                        beds: [
                            {
                                'code':1,
                                'name': '1 двуспальная кровать',
                            },
                            {
                                'code':2,
                                'name':'2 односпальные кровати'
                            }
                        ],
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
                        active: false,
                        name: 'Супериор',
                        code: 'SUP',
                        prices: {
                            1: [5200,5200,5200,4000,4000,4000,4000,4000,4000,4000],
                            2: [5200,5200,5200,4000,4000,4000,4000,4000,4000,4000],
                        },
                        breakfasts:{
                            1: [600,600,600,900,900,900,900,900,900,900],
                            2: [1500,1500,1500,1800,1800,1800,1800,1800,1800,1800]
                        },
                        breakfasts_included: false,
                        breakfasts_no: false,
                        maxGuests: 2,
                        beds: [
                            {
                                'code':1,
                                'name': '1 двуспальная кровать',
                            },
                            {
                                'code':2,
                                'name':'2 односпальные кровати'
                            }
                        ],
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
                        active: false,
                        name: 'Семейный номер',
                        code: 'FAM',
                        prices: {
                            1: [5700,5700,5700,4500,4500,4500,4500,4500,4500,4500],
                            2: [5700,5700,5700,4500,4500,4500,4500,4500,4500,4500],
                        },
                        breakfasts:{
                            1: [600,600,600,900,900,900,900,900,900,900],
                            2: [1500,1500,1500,1800,1800,1800,1800,1800,1800,1800]
                        },
                        breakfasts_included: false,
                        breakfasts_no: false,
                        maxGuests: 2,
                        beds: [
                            {
                                'code':11,
                                'name': '1 двуспальная кровать, 1 диван-кровать',
                            },
                            {
                                'code':22,
                                'name':'2 односпальные кровати, 1 диван-кровать'
                            }
                        ],
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
                        prices: {
                            1: [6200,6200,6200,5000,5000,5000,5000,5000,5000,5000],
                            2: [6200,6200,6200,5000,5000,5000,5000,5000,5000,5000],
                        },
                        breakfasts:{
                            1: [600,600,600,900,900,900,900,900,900,900],
                            2: [1500,1500,1500,1800,1800,1800,1800,1800,1800,1800]
                        },
                        breakfasts_included: false,
                        breakfasts_no: false,
                        maxGuests: 2,
                        beds: [
                            {
                                'code':1,
                                'name': '1 двуспальная кровать, 1 диван',
                            },
                            {
                                'code':2,
                                'name':'2 односпальные кровати, 1 диван'
                            }
                        ],
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
                        active: false,
                        name: 'Полулюкс',
                        code: 'PL',
                        prices: {
                            1: [11200,11200,11200,10000,10000,10000,10000,10000,10000,10000],
                            2: [11200,11200,11200,10000,10000,10000,10000,10000,10000,10000],
                        },
                        breakfasts:{
                            1: [600,600,600,900,900,900,900,900,900,900],
                            2: [1500,1500,1500,1800,1800,1800,1800,1800,1800,1800]
                        },
                        breakfasts_included: false,
                        breakfasts_no: false,
                        maxGuests: 2,
                        beds: [
                            {
                                'code': 11,
                                'name': '1 двуспальная кровать, 1 диван-кровать',
                            }
                        ],
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
                        prices: {
                            1: [12200,12200,12200,11000,11000,11000,11000,11000,11000,11000],
                            2: [12200,12200,12200,11000,11000,11000,11000,11000,11000,11000],
                        },
                        breakfasts:{
                            1: [600,600,600,900,900,900,900,900,900,900],
                            2: [1500,1500,1500,1800,1800,1800,1800,1800,1800,1800]
                        },
                        breakfasts_included: false,
                        breakfasts_no: false,
                        maxGuests: 2,
                        beds: [
                            {
                                'code': 11,
                                'name': '1 двуспальная кровать, 1 диван-кровать',
                            }
                        ],
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
                        prices: {
                            1: [16200,16200,16200,15000,15000,15000,15000,15000,15000,15000],
                            2: [16200,16200,16200,15000,15000,15000,15000,15000,15000,15000],
                        },
                        breakfasts:{
                            1: [600,600,600,900,900,900,900,900,900,900],
                            2: [1500,1500,1500,1800,1800,1800,1800,1800,1800,1800]
                        },
                        breakfasts_included: false,
                        breakfasts_no: false,
                        maxGuests: 2,
                        beds: [
                            {
                                'code': 11,
                                'name': '1 двуспальная кровать, 1 диван-кровать',
                            }
                        ],
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
                formula: 99,
                maxGuests: 2,
                gain: 1.22,
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
                        prices: {
                            1: [5040,5040,5040,4270,4270,4270,4270,2940,2940,2940],
                            2: [5040,5040,5040,4270,4270,4270,4270,2940,2940,2940],
                        },
                        breakfasts:{
                            1: [630,630,630,630,630,630,630,630,630,630],
                            2: [1260,1260,1260,1260,1260,1260,1260,1260,1260,1260]
                        },
                        breakfasts_included: false,
                        breakfasts_no: false,
                        maxGuests: 2,
                        beds: [
                            {
                                'code': 1,
                                'name': '1 двуспальная кровать',
                            },
                            {
                                'code': 2,
                                'name': '2 односпальные кровати'
                            }
                        ],
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
                        name: 'Стандарт Привилегия',
                        code: 'SP',
                        prices: {
                            1: [6090,6090,6090,5320,5320,5320,5320,3640,3640,3640],
                            2: [6090,6090,6090,5320,5320,5320,5320,3640,3640,3640],
                        },
                        breakfasts:{
                            1: [630,630,630,630,630,630,630,630,630,630],
                            2: [1260,1260,1260,1260,1260,1260,1260,1260,1260,1260]
                        },
                        breakfasts_included: false,
                        breakfasts_no: false,
                        maxGuests: 2,
                        beds: [
                            {
                                'code': 1,
                                'name': '1 двуспальная кровать',
                            },
                            {
                                'code': 2,
                                'name': '2 односпальные кровати'
                            }
                        ],
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
                        prices: {
                            1: [8540,8540,8540,7770,7770,7770,7770,5740,5740,5740],
                            2: [8540,8540,8540,7770,7770,7770,7770,5740,5740,5740],
                        },
                        breakfasts:{
                            1: [630,630,630,630,630,630,630,630,630,630],
                            2: [1260,1260,1260,1260,1260,1260,1260,1260,1260,1260]
                        },
                        breakfasts_included: false,
                        breakfasts_no: false,
                        maxGuests: 2,
                        beds: [
                            {
                                'code': 1,
                                'name': '1 двуспальная кровать',
                            }
                        ],
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
                    'ru': '«Mercure» Роза Хутор расположен в курортном поселке Эсто-Садок. Отель является дочерним проектом сети гостиниц «Mercure Hotel», имеющей представительство в 68 странах. «Меркюр» Роза соответствует стандартам крупной отельной цепочки и идеально подходит как для отдыха, так и для бизнеса.                                                                                                   «Меркюр Роза Хутор» имеет удобное расположение в 150 м от горнолыжного подъемника. В 1 км от отеля находятся центр санного спорта и биатлонный комплекс «Лаура».                           После катания на лыжах гости могут попариться в банном комплексе отеля и поплавать в бассейне 25x5 м со стеклянным куполом, потренироваться в тренажерном зале или в современном фитнес-центре.' +
                        'Современная конференц-зона подойдет для проведения конференций, семинаров, банкетов любого уровня.',
                    'en': 'The only hotel on the lower level of Rosa Khutor Resort with its own swimming pool — you should definitely take the opportunity to cool down after an eventful day or night. The hotel also offers a spacious room to store and dry your equipment. The distance to the lower ropeway stations is 500 m.'
                }
            },
            {
                active: false,
                name: 'Приют Панды',
                code: 'PP',
                formula: 99,
                address: 'Краснодарский край, Горная Олимпийская деревня, ул. Сулимовка, д. 8',
                maxGuests: 3,
                gain: 1.12,
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
                        maxGuests: 2,
                        prices: {
                            1: [3600,3600,3600,3600,3600,3600,3600,3600,3600,3600],
                            2: [3600,3600,3600,3600,3600,3600,3600,3600,3600,3600],
                        },
                        breakfasts:{
                            1: [400,400,400,400,400,400,400,400,400,400],
                            2: [800,800,800,800,800,800,800,800,800,800]
                        },
                        breakfasts_included: false,
                        breakfasts_no: false,
                        beds: [
                            {
                                'code':1,
                                'name': '1 двуспальная кровать',
                            },
                            {
                                'code':2,
                                'name':'2 односпальные кровати'
                            }
                        ],
                        desc:{
                            'ru':'<ul><li>17 кв. м</li>' +
                                '<li>Двуспальная/две односпальные кровати</li>' +
                                '<li>Балкон</li>' +
                                '<li>Душ и туалет в номере</li>' +
                                '<li>Телевизор</li>' +
                                '<li>Сушилка для одежды</li></ul>',
                            'en':'<ul><li>17 кв. м</li>' +
                                '<li>Двуспальная/две односпальные кровати</li>' +
                                '<li>Балкон</li>' +
                                '<li>Душ и туалет в номере</li>' +
                                '<li>Телевизор</li>' +
                                '<li>Сушилка для одежды</li></ul>',
                        },
                        photo: 'https://444803.selcdn.ru/cdn.awsd.cc/hotel-pp-2-small-1.jpg',
                    },
                    {
                        active: true,
                        name: 'Эконом двухместный',
                        code: 'S2E',
                        maxGuests: 2,
                        prices: {
                            1: [3200,3200,3200,3200,3200,3200,3200,3200,3200,3200],
                            2: [3200,3200,3200,3200,3200,3200,3200,3200,3200,3200],
                        },
                        breakfasts:{
                            1: [400,400,400,400,400,400,400,400,400,400],
                            2: [800,800,800,800,800,800,800,800,800,800]
                        },
                        breakfasts_included: false,
                        breakfasts_no: false,
                        beds: [
                            {
                                'code':1,
                                'name': '1 двуспальная кровать',
                            },
                            {
                                'code':2,
                                'name':'2 односпальные кровати'
                            }
                        ],
                        desc:{
                            'ru':'<ul><li>15 кв. м </li>' +
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
                        maxGuests: 3,
                        prices: {
                            1: [4800,4800,4800,4800,4800,4800,4800,4800,4800,4800],
                            2: [4800,4800,4800,4800,4800,4800,4800,4800,4800,4800],
                            3: [4800,4800,4800,4800,4800,4800,4800,4800,4800,4800],
                        },
                        breakfasts:{
                            1: [400,400,400,400,400,400,400,400,400,400],
                            2: [800,800,800,800,800,800,800,800,800,800],
                            3: [1200,1200,1200,1200,1200,1200,1200,1200,1200,1200]
                        },
                        breakfasts_included: false,
                        breakfasts_no: false,
                        beds: [
                            {
                                'code': 3,
                                'name': '3 односпальные кровати',
                            },
                            {
                                'code': 11,
                                'name': '1 односпальная кровать, 1 двуспальная'
                            }
                        ],
                        desc:{
                            'ru':'<ul><li>17 кв. м </li>' +
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
                        maxGuests: 1,
                        prices: {
                            1: [1600,1600,1600,1600,1600,1600,1600,1600,1600,1600],
                        },
                        breakfasts:{
                            1: [400,400,400,400,400,400,400,400,400,400],
                        },
                        breakfasts_included: false,
                        breakfasts_no: false,
                        beds: [
                            {
                                'code': 1,
                                'name': '1 односпальная кровать',
                            }
                        ],
                        desc:{
                            'ru':'<ul><li>17 кв. м </li>' +
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
                address: 'Краснодарский край, Горная Олимпийская деревня, ул. Сулимовка, д. 7',
                formula: 99,
                maxGuests: 4,
                gain: 1.17,
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
                        maxGuests: 2,
                        prices: {
                            1: [3600,3600,3600,3600,3600,3600,3600,3600,3600,3600],
                            2: [3600,3600,3600,3600,3600,3600,3600,3600,3600,3600],
                        },
                        breakfasts:{
                            1: [500,500,500,500,500,500,500,500,500,500],
                            2: [1000,1000,1000,1000,1000,1000,1000,1000,1000,1000],
                        },
                        breakfasts_included: false,
                        breakfasts_no: false,
                        beds: [
                            {
                                'code':1,
                                'name': '1 двуспальная кровать',
                            },
                            {
                                'code':2,
                                'name':'2 односпальные кровати'
                            }
                        ],
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
                        maxGuests: 3,
                        prices: {
                            1: [7500,7500,7500,7500,7500,7500,7500,7500,7500,7500],
                            2: [7500,7500,7500,7500,7500,7500,7500,7500,7500,7500],
                            3: [7500,7500,7500,7500,7500,7500,7500,7500,7500,7500],
                        },
                        breakfasts:{
                            1: [500,500,500,500,500,500,500,500,500,500],
                            2: [1000,1000,1000,1000,1000,1000,1000,1000,1000,1000],
                            3: [1500,1500,1500,1500,1500,1500,1500,1500,1500,1500],
                        },
                        breakfasts_included: false,
                        breakfasts_no: false,
                        beds: [
                            {
                                'code': 11,
                                'name': '1 двуспальная кровать, 1 диван-кровать',
                            },
                            {
                                'code': 2,
                                'name': '2 односпальные кровати, 1 диван-кровать'
                            }
                        ],
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
                        maxGuests: 4,
                        prices: {
                            1: [11000,11000,11000,11000,11000,11000,11000,11000,11000,11000],
                            2: [11000,11000,11000,11000,11000,11000,11000,11000,11000,11000],
                            3: [11000,11000,11000,11000,11000,11000,11000,11000,11000,11000],
                            4: [11000,11000,11000,11000,11000,11000,11000,11000,11000,11000],
                        },
                        breakfasts:{
                            1: [500,500,500,500,500,500,500,500,500,500],
                            2: [1000,1000,1000,1000,1000,1000,1000,1000,1000,1000],
                            3: [1500,1500,1500,1500,1500,1500,1500,1500,1500,1500],
                            4: [2000,2000,2000,2000,2000,2000,2000,2000,2000,2000],
                        },
                        breakfasts_included: false,
                        breakfasts_no: false,
                        beds: [
                            {
                                'code': 12,
                                'name': '1 двуспальная кровать, 2 односпальные',
                            },
                            {
                                'code': 2,
                                'name': '2 двуспальные кровати'
                            },
                            {
                                'code': 4,
                                'name': '4 односпальные кровати'
                            }
                        ],
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
                address: 'Краснодарский край, Горная Олимпийская деревня, ул. Сулимовка, д. 27',
                formula: 99,
                gain: 1.17,
                maxGuests: 3,
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
                        maxGuests: 2,
                        prices: {
                            1: [5000,5000,5000,5000,5000,5000,5000,5000,5000,5000],
                            2: [5000,5000,5000,5000,5000,5000,5000,5000,5000,5000],
                        },
                        breakfasts:{
                            1: [500,500,500,500,500,500,500,500,500,500],
                            2: [1000,1000,1000,1000,1000,1000,1000,1000,1000,1000],
                        },
                        breakfasts_included: false,
                        breakfasts_no: false,
                        beds: [
                            {
                                'code':1,
                                'name': '1 двуспальная кровать',
                            },
                            {
                                'code':2,
                                'name':'2 односпальные кровати'
                            }
                        ],
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
                        active: true,
                        name: 'Трехместный',
                        code: 'T',
                        maxGuests: 3,
                        prices: {
                            1: [6000,6000,6000,6000,6000,6000,6000,6000,6000,6000],
                            2: [6000,6000,6000,6000,6000,6000,6000,6000,6000,6000],
                            3: [6000,6000,6000,6000,6000,6000,6000,6000,6000,6000],
                        },
                        breakfasts:{
                            1: [500,500,500,500,500,500,500,500,500,500],
                            2: [1000,1000,1000,1000,1000,1000,1000,1000,1000,1000],
                            3: [1500,1500,1500,1500,1500,1500,1500,1500,1500,1500],
                        },
                        breakfasts_included: false,
                        breakfasts_no: false,
                        beds: [
                            {
                                'code': 11,
                                'name': '1 двуспальная кровать, 1 односпальная',
                            },
                            {
                                'code': 3,
                                'name': '3 односпальные кровати'
                            }
                        ],
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
                        maxGuests: 3,
                        prices: {
                            1: [6000,6000,6000,6000,6000,6000,6000,6000,6000,6000],
                            2: [6000,6000,6000,6000,6000,6000,6000,6000,6000,6000],
                            3: [6000,6000,6000,6000,6000,6000,6000,6000,6000,6000],
                        },
                        breakfasts:{
                            1: [500,500,500,500,500,500,500,500,500,500],
                            2: [1000,1000,1000,1000,1000,1000,1000,1000,1000,1000],
                            3: [1500,1500,1500,1500,1500,1500,1500,1500,1500,1500],
                        },
                        breakfasts_included: false,
                        breakfasts_no: false,
                        beds: [
                            {
                                'code': 11,
                                'name': '1 двуспальная кровать, 1 диван-кровать',
                            },
                            {
                                'code': 21,
                                'name': '2 односпальные кровати, 1 диван-кровать'
                            }
                        ],
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
                        maxGuests: 3,
                        prices: {
                            1: [7500,7500,7500,7500,7500,7500,7500,7500,7500,7500],
                            2: [7500,7500,7500,7500,7500,7500,7500,7500,7500,7500],
                            3: [7500,7500,7500,7500,7500,7500,7500,7500,7500,7500],
                        },
                        breakfasts:{
                            1: [500,500,500,500,500,500,500,500,500,500],
                            2: [1000,1000,1000,1000,1000,1000,1000,1000,1000,1000],
                            3: [1500,1500,1500,1500,1500,1500,1500,1500,1500,1500],
                        },
                        breakfasts_included: false,
                        breakfasts_no: false,
                        beds: [
                            {
                                'code': 11,
                                'name': '1 двуспальная кровать, 1 диван-кровать',
                            },
                            {
                                'code': 21,
                                'name': '2 односпальные кровати, 1 диван-кровать'
                            }
                        ],
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
                address: 'Краснодарский край, с. Эстосадок, наб. Панорама, д.2',
                code: 'TINN',
                formula: 99,
                maxGuests: 2,
                gain: 1.12,
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
                        prices: {
                            1: [3720,3720,3720,3720,3300,3300,3300,3300,3300,3300],
                            2: [3720,3720,3720,3720,3300,3300,3300,3300,3300,3300],
                        },
                        breakfasts:{
                            1: [640,640,640,640,600,600,600,600,600,600],
                            2: [1240,1240,1240,1240,1230,1230,1230,1230,1230,1230],
                        },
                        breakfasts_included: false,
                        breakfasts_no: false,
                        maxGuests: 2,
                        beds: [
                            {
                                'code': 1,
                                'name': '1 двуспальная кровать',
                            },
                            {
                                'code': 2,
                                'name': '2 односпальные кровати'
                            }
                        ],
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
                        prices: {
                            1: [4400,4400,4400,4400,3970,3970,3970,3970,3970,3970],
                            2: [4400,4400,4400,4400,3970,3970,3970,3970,3970,3970],
                        },
                        breakfasts:{
                            1: [650,650,650,650,650,650,650,650,650,650],
                            2: [1250,1250,1250,1250,1250,1250,1250,1250,1250,1250],
                        },
                        breakfasts_included: false,
                        breakfasts_no: false,
                        maxGuests: 2,
                        beds: [
                            {
                                'code': 1,
                                'name': '1 двуспальная кровать',
                            },
                            {
                                'code': 2,
                                'name': '2 односпальные кровати'
                            }
                        ],
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
                        prices: {
                            1: [4990,4990,4990,4990,4590,4590,4590,4590,4590,4590],
                            2: [4990,4990,4990,4990,4590,4590,4590,4590,4590,4590],
                        },
                        breakfasts:{
                            1: [660,660,660,660,630,630,630,630,630,630],
                            2: [1250,1250,1250,1250,1230,1230,1230,1230,1230,1230],
                        },
                        breakfasts_included: false,
                        breakfasts_no: false,
                        maxGuests: 2,
                        beds: [
                            {
                                'code': 1,
                                'name': '1 двуспальная кровать',
                            },
                            {
                                'code': 2,
                                'name': '2 односпальные кровати'
                            }
                        ],
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
                address: 'Краснодарский край, с. Эстосадок, наб. Панорама, д.3',
                formula: 99,
                maxGuests: 2,
                gain: 1.12,
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
                        prices: {
                            1: [4730,4730,4730,4730,3850,3850,3850,3850,3850,3850],
                            2: [4730,4730,4730,4730,3850,3850,3850,3850,3850,3850],
                        },
                        breakfasts:{
                            1: [650,650,650,650,640,640,640,640,640,640],
                            2: [1250,1250,1250,1250,1240,1240,1240,1240,1240,1240],
                        },
                        breakfasts_included: false,
                        breakfasts_no: false,
                        maxGuests: 2,
                        beds: [
                            {
                                'code': 1,
                                'name': '1 двуспальная кровать',
                            },
                            {
                                'code': 2,
                                'name': '2 односпальные кровати'
                            }
                        ],
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
                        prices: {
                            1: [5410,5410,5410,5410,5030,5030,5030,5030,5030,5030],
                            2: [5410,5410,5410,5410,5030,5030,5030,5030,5030,5030],
                        },
                        breakfasts:{
                            1: [830,830,830,830,660,660,660,660,660,660],
                            2: [1430,1430,1430,1430,1260,1260,1260,1260,1260,1260],
                        },
                        breakfasts_included: false,
                        breakfasts_no: false,
                        maxGuests: 2,
                        beds: [
                            {
                                'code': 1,
                                'name': '1 двуспальная кровать',
                            },
                            {
                                'code': 2,
                                'name': '2 односпальные кровати'
                            }
                        ],
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
                        prices: {
                            1: [5750,5750,5750,5750,5370,5370,5370,5370,5370,5370],
                            2: [5750,5750,5750,5750,5370,5370,5370,5370,5370,5370],
                        },
                        breakfasts:{
                            1: [920,920,920,920,660,660,660,660,660,660],
                            2: [1520,1520,1520,1520,1260,1260,1260,1260,1260,1260],
                        },
                        breakfasts_included: false,
                        breakfasts_no: false,
                        maxGuests: 2,
                        beds: [
                            {
                                'code': 1,
                                'name': '1 двуспальная кровать',
                            },
                            {
                                'code': 2,
                                'name': '2 односпальные кровати'
                            }
                        ],
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
                active: true,
                name: 'Freestyle by Azimut',
                code: 'FREEBAZ',
                address: 'Краснодарский край, с. Эстосадок, наб. Полянки, д.5',
                formula: 99,
                maxGuests: 2,
                gain: 1.12,
                gallery: [
                    'https://444803.selcdn.ru/cdn.awsd.cc/hotel-freebaz-1.jpg',
                    'https://444803.selcdn.ru/cdn.awsd.cc/hotel-freebaz-sup-1.jpg',
                    'https://444803.selcdn.ru/cdn.awsd.cc/hotel-freebaz-sup-2.jpg'
                ],
                rooms: [
                    {
                        active: true,
                        name: 'Супериор с видом на лес',
                        code: 'SUPF',
                        prices: {
                            1: [3000,3000,3000,3000,3000,3000,3000,3000,3000,3000],
                            2: [3000,3000,3000,3000,3000,3000,3000,3000,3000,3000],
                        },
                        breakfasts:{
                            1: [0,0,0,0,0,0,0,0,0,0],
                            2: [0,0,0,0,0,0,0,0,0,0],
                        },
                        breakfasts_included: false,
                        breakfasts_no: true,
                        maxGuests: 2,
                        beds: [
                            {
                                'code': 1,
                                'name': '1 двуспальная кровать',
                            },
                            {
                                'code': 2,
                                'name': '2 односпальные кровати'
                            }
                        ],
                        desc:{
                            'ru':'<ul><li>27 кв. м.</li>' +
                                '<li>Принадлежности для приготовления чая/кофе </li>' +
                                '<li>Тапочки</li>' +
                                '<li>Фен</li>' +
                                '<li>Рабочее место</li>' +
                                '<li>ЖК-телевизор</li>' +
                                '<li>Бесплатный Wi-Fi</li></ul>',
                            'en':'<ul><li>27 кв. м.</li>' +
                                '<li>Принадлежности для приготовления чая/кофе </li>' +
                                '<li>Тапочки</li>' +
                                '<li>Фен</li>' +
                                '<li>Рабочее место</li>' +
                                '<li>ЖК-телевизор</li>' +
                                '<li>Бесплатный Wi-Fi</li></ul>',
                        },
                        photo: 'https://444803.selcdn.ru/cdn.awsd.cc/hotel-freebaz-sup-1.jpg'
                    },
                    {
                        active: true,
                        name: 'Супериор с видом на реку',
                        code: 'SUPR',
                        prices: {
                            1: [3400,3400,3400,3400,3400,3400,3400,3400,3400,3400],
                            2: [3400,3400,3400,3400,3400,3400,3400,3400,3400,3400],
                        },
                        breakfasts:{
                            1: [800,800,800,800,800,800,800,800,800,800],
                            2: [1600,1600,1600,1600,1600,1600,1600,1600,1600,1600],
                        },
                        breakfasts_included: false,
                        breakfasts_no: false,
                        maxGuests: 2,
                        beds: [
                            {
                                'code': 1,
                                'name': '1 двуспальная кровать',
                            },
                            {
                                'code': 2,
                                'name': '2 односпальные кровати'
                            }
                        ],
                        desc:{
                            'ru':'<ul><li>27 кв. м.</li>' +
                                '<li>Принадлежности для приготовления чая/кофе</li>' +
                                '<li>Вид на реку</li>' +
                                '<li>Тапочки</li>' +
                                '<li>Фен</li>' +
                                '<li>Рабочее место</li>' +
                                '<li>Телевизор</li>' +
                                '<li>Бесплатный Wi-Fi</li>',
                            'en':'<ul><li>27 кв. м.</li>' +
                                '<li>Принадлежности для приготовления чая/кофе</li>' +
                                '<li>Вид на реку</li>' +
                                '<li>Тапочки</li>' +
                                '<li>Фен</li>' +
                                '<li>Рабочее место</li>' +
                                '<li>Телевизор</li>' +
                                '<li>Бесплатный Wi-Fi</li>',
                        },
                        photo: 'https://444803.selcdn.ru/cdn.awsd.cc/hotel-freebaz-sup-2.jpg'
                    }
                ],
                desc: {
                    'ru': 'Отель «AZIMUT FREESTYLE Роза Хутор» находится в 10 минутах ходьбы от горнолыжного подъемника «Олимпия». К услугам гостей оздоровительный центр и сауна. На всей территории можно воспользоваться бесплатным Wi-Fi.\n' +
                        'В каждом современном номере есть кондиционер, мини-бар и телевизор с плоским экраном. В числе прочих удобств — место для работы и сейф. В собственных ванных комнатах предоставляется фен.\n' +
                        'Каждое утро в отеле сервируется завтрак «шведский стол». В ресторане «Ешь Хорошо» подают домашние блюда русской кухни, а в лобби-баре можно заказать напитки и коктейли. Осуществляется доставка еды и напитков в номер.\n' +
                        'Гости могут воспользоваться помещением для хранения лыж. Юные гости весело проведут время в детской комнате.\n' +
                        'Железнодорожный вокзал Роза Хутор находится в 1 км. До автобусной остановки, от которой отправляются автобусы до Адлера и аэропорта Сочи, от отеля «AZIMUT FREESTYLE Роза Хутор» можно дойти за 10 минут. По запросу организуется трансфер.\n',
                    'en': ''
                }
            },
            {
                active: true,
                name: 'Valset by Azimut',
                code: 'VALBAZ',
                address: 'Краснодарский край, с. Эстосадок, наб. Полянки, д.4',
                formula: 99,
                maxGuests: 5,
                gain: 1.12,
                gallery: [
                    'https://444803.selcdn.ru/cdn.awsd.cc/hotel-valbaz-1.jpg',
                    'https://444803.selcdn.ru/cdn.awsd.cc/hotel-valbaz-ap-1.jpg',
                    'https://444803.selcdn.ru/cdn.awsd.cc/hotel-valbaz-ap-2.jpg',
                    'https://444803.selcdn.ru/cdn.awsd.cc/hotel-valbaz-ap-3.jpg'
                ],
                rooms: [
                    {
                        active: true,
                        name: 'Апартаменты Студия (корпуса Центр и Спорт)',
                        code: 'APSCS',
                        prices: {
                            1: [4000,4000,4000,4000,4000,4000,4000,4000,4000,4000],
                            2: [4000,4000,4000,4000,4000,4000,4000,4000,4000,4000],
                        },
                        breakfasts:{
                        },
                        breakfasts_included: false,
                        breakfasts_no: true,
                        maxGuests: 2,
                        beds: [
                            {
                                'code':1,
                                'name': '1 двуспальная кровать',
                            },
                            {
                                'code':2,
                                'name':'2 односпальные кровати'
                            }
                        ],
                        desc:{
                            'ru':'<ul><li>28 кв. м. </li>' +
                                '<li>Вместимость до 3-х человек</li>' +
                                '<li>Единое пространство спальни и обеденной зоны</li>' +
                                '<li>Кухня</li>' +
                                '<li>Чайная станция</li>' +
                                '<li>Посудомоечная машина</li>' +
                                '<li>Холодильник</li>' +
                                '<li>Фен</li>' +
                                '<li>Балкон</li>' +
                                '<li>WI-FI</li>',
                            'en':'<ul><li>28 кв. м. </li>' +
                                '<li>Вместимость до 3-х человек</li>' +
                                '<li>Единое пространство спальни и обеденной зоны</li>' +
                                '<li>Кухня</li>' +
                                '<li>Чайная станция</li>' +
                                '<li>Посудомоечная машина</li>' +
                                '<li>Холодильник</li>' +
                                '<li>Фен</li>' +
                                '<li>Балкон</li>' +
                                '<li>WI-FI</li>',
                        },
                        photo: 'https://444803.selcdn.ru/cdn.awsd.cc/hotel-valbaz-ap-1.jpg'
                    },
                    {
                        active: true,
                        name: 'Двухкомнатные апартаменты (корпуса Центр и Спорт)',
                        code: 'APDSC',
                        prices: {
                            1: [6000,6000,6000,6000,6000,6000,6000,6000,6000,6000],
                            2: [6000,6000,6000,6000,6000,6000,6000,6000,6000,6000],
                            3: [6000,6000,6000,6000,6000,6000,6000,6000,6000,6000],
                        },
                        breakfasts:{
                        },
                        breakfasts_included: false,
                        breakfasts_no: true,
                        maxGuests: 3,
                        beds: [
                            {
                                'code':1,
                                'name': '1 двуспальная кровать, 1 односпальная кровать, диван-кровать',
                            }
                        ],
                        desc:{
                            'ru':'<ul><li>70 кв. м.</li>' +
                                '<li>Вместимость до 3-х человек</li>' +
                                '<li>Отдельная спальная и гостиная</li>' +
                                '<li>Кухня</li>' +
                                '<li>Чайная станция</li>' +
                                '<li>Посудомоечная машина</li>' +
                                '<li>Холодильник</li>' +
                                '<li>Фен</li>' +
                                '<li>Балкон</li>' +
                                '<li>WI-FI</li>',
                            'en':'<ul><li>70 кв. м.</li>' +
                                '<li>Вместимость до 3-х человек</li>' +
                                '<li>Отдельная спальная и гостиная</li>' +
                                '<li>Кухня</li>' +
                                '<li>Чайная станция</li>' +
                                '<li>Посудомоечная машина</li>' +
                                '<li>Холодильник</li>' +
                                '<li>Фен</li>' +
                                '<li>Балкон</li>' +
                                '<li>WI-FI</li>',
                        },
                        photo: 'https://444803.selcdn.ru/cdn.awsd.cc/hotel-valbaz-ap-2.jpg'
                    },
                    {
                        active: true,
                        name: 'Трехкомнатные апартаменты (корпус Спорт)',
                        code: 'APTSC',
                        prices: {
                            1: [7000,7000,7000,7000,7000,7000,7000,7000,7000,7000],
                            2: [7000,7000,7000,7000,7000,7000,7000,7000,7000,7000],
                            3: [7000,7000,7000,7000,7000,7000,7000,7000,7000,7000],
                            4: [7000,7000,7000,7000,7000,7000,7000,7000,7000,7000],
                            5: [7000,7000,7000,7000,7000,7000,7000,7000,7000,7000],
                        },
                        breakfasts:{
                        },
                        breakfasts_included: false,
                        breakfasts_no: true,
                        maxGuests: 5,
                        beds: [
                            {
                                'code': 2,
                                'name': '2 двуспальные кровати, диван-кровать'
                            },
                            {
                                'code': 4,
                                'name': '4 односпальные, диван-кровать'
                            }
                        ],
                        desc:{
                            'ru':'<ul><li>74 кв. м.</li>' +
                                '<li>Вместимость до 5-х человек</li>' +
                                '<li>Две отдельные спальни и гостиная\n</li>' +
                                '<li>Рабочее место</li>' +
                                '<li>Кухня</li>' +
                                '<li>Чайная станция</li>' +
                                '<li>Посудомоечная машина</li>' +
                                '<li>Холодильник</li>' +
                                '<li>Фен</li>' +
                                '<li>Балкон</li>' +
                                '<li>WI-FI</li>',
                            'en':'<ul><li>74 кв. м.</li>' +
                                '<li>Вместимость до 5-х человек</li>' +
                                '<li>Две отдельные спальни и гостиная\n</li>' +
                                '<li>Рабочее место</li>' +
                                '<li>Кухня</li>' +
                                '<li>Чайная станция</li>' +
                                '<li>Посудомоечная машина</li>' +
                                '<li>Холодильник</li>' +
                                '<li>Фен</li>' +
                                '<li>Балкон</li>' +
                                '<li>WI-FI</li>',
                        },
                        photo: 'https://444803.selcdn.ru/cdn.awsd.cc/hotel-valbaz-ap-3.jpg'
                    }
                ],
                desc: {
                    'ru': 'Апартаменты «VALSET от AZIMUT Роза Хутор» находятся в селе Эстосадок, в самом центре горнолыжного курорта Роза Хутор, в 300 метрах от горнолыжных подъемников и в 250 метрах от пункта проката лыжного снаряжения. Эти апартаменты расположены в 5 зданиях на берегу реки Мзымты. К услугам гостей бесплатный Wi-Fi и круглосуточная стойка регистрации.\n' +
                        'В каждых апартаментах есть собственная ванная комната и телевизор с плоским экраном. Интерьер оформлен в современном стиле в светлых тонах. В некоторых апартаментах имеется балкон с видом на лес или горы. Кроме того, в распоряжении гостей полностью оборудованная кухня с плитой, холодильником и посудой. В числе других удобств — установленная в коридоре стиральная машина.',
                    'en': ''
                }
            },
        ],
    },
    mounted: function () {
        get_parameters = this.$route.query
        // console.log('before check pay');
        // console.log('get_parameters ');
        // console.log(get_parameters);
        if (get_parameters.step == 6 && get_parameters.par != 0) {
            // console.log('no pay');
            this.step = 6;
            this.form.payed = 0;
        } else if (get_parameters.step == 6 && get_parameters.par == 0) {
            // console.log('payed');
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
        // bedName() {
        //     this.form.roomName = this.hotels[this.currentHotel].rooms.find(room => room.code === this.form.room).code
        //     return this.hotels[this.currentHotel].rooms.find(room => room.code === this.form.room).name
        // },
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
            return this.hotels.filter(hotel => {
                return hotel.maxGuests >= this.form.adults && hotel.active
            })
        },
        activeHotelRooms() {
            let adults = this.form.adults
            let arRooms = this.hotels.find(hotel => hotel.code === this.form.hotel)
            return arRooms.rooms.filter(function (room){
                return room.maxGuests >= adults  && room.active
            })
        },
        activeRoomBeds() {
            let curHotel = this.hotels.indexOf(this.hotels.find(hotel => hotel.code === this.form.hotel))
            if (this.form.room) {
                let curRoom = this.hotels[curHotel].rooms.indexOf(this.hotels[curHotel].rooms.find(room => room.code === this.form.room))
                let beds = this.hotels[curHotel].rooms[curRoom].beds
                return beds
            }
        },
        // currentRoom() {
        //     let curHotel = this.hotels.find(hotel => hotel.code === this.form.hotel)
        //     let curRoom = this.hotels[curHotel].rooms.find(room => room.code === this.form.room)
        //     return this.hotels.indexOf(curRoom)+1
        // },
        calcTourPrice() {
            let totalPrice = 0;
            let skiPass = 1470;
            let curPass = this.passes.indexOf(this.passes.find(pass => pass.code === this.form.pass))
            let curHotel = this.hotels.indexOf(this.hotels.find(hotel => hotel.code === this.form.hotel))
            let curRoom = this.hotels[curHotel].rooms.indexOf(this.hotels[curHotel].rooms.find(room => room.code === this.form.room))
            let daysTour = this.form.tourDays
            let hotelTotalPrice = 0
            let allBreakfasts = 0
            let gain = this.hotels[curHotel].gain
            let passDayPrice = 0
            daysTour < 3 && this.form.pass === 'S' ?
                passDayPrice = 5000 :
                passDayPrice = this.passes[curPass].price
            let passPrice = (passDayPrice * this.form.adults) * this.form.passDiscount

            if (this.form.passDiscount < 1) {
                this.form.promocode = this.promocode
            }

            if ( this.form.room !== undefined ) {
                    let option = {
                        day: 'numeric',
                    };
                    let dayStart = parseInt(this.form.dateFrom.toLocaleString("ru",option));
                    let dayEnd = parseInt(this.form.dateTill.toLocaleString("ru",option));
                    let daysCount = daysTour;

                    const reducer = (accumulator, currentValue) => accumulator + currentValue;

                    let arrPrices = this.hotels[curHotel].rooms[curRoom].prices[this.form.adults].slice(vm.days.indexOf(dayStart), vm.days.indexOf(dayEnd));
                    hotelTotalPrice = arrPrices.reduce(reducer);

                    let skiPassDays = daysTour < 6 ? daysTour : daysTour - 1;
                    let skiPassPrice = ((skiPass * skiPassDays) * this.form.adults);

                    if (this.hotels[curHotel].rooms[curRoom].breakfasts_included === true) {
                        this.form.hotelBreakfast = true;
                        allBreakfasts = 0;
                        this.form.hotelBreakfastPrice = allBreakfasts;
                    } else if (this.hotels[curHotel].rooms[curRoom].breakfasts_no === false
                        && this.form.hotelBreakfast === true) {
                        let arrBreakfast = vm.hotels[curHotel].rooms[curRoom].breakfasts[this.form.adults].slice(vm.days.indexOf(dayStart), vm.days.indexOf(dayEnd));
                        allBreakfasts = arrBreakfast.reduce(reducer);
                        this.form.hotelBreakfastPrice = allBreakfasts;
                    } else {
                        this.form.hotelBreakfastPrice = 0;
                        allBreakfasts = 0;
                    }
                if (window.location.href !== 'https://nswpay.ru/') {
                    console.log('daysTour ' + daysTour)
                }
                if (this.form.adults > 0 && daysTour > 3) {
                    totalPrice =
                        (passPrice
                        + hotelTotalPrice
                        + skiPassPrice
                        + allBreakfasts)*gain

                    if (window.location.href !== 'https://nswpay.ru/') {
                        console.log('adults ' + this.form.adults)
                        // console.log('allBreakfasts day ' + this.hotels[curHotel].rooms[curRoom].breakfast[this.form.adults])
                        console.log('hotelTotalPrice prices ' + this.hotels[curHotel].rooms[curRoom].prices[this.form.adults])
                        console.log('hotelTotalPrice arrPrices ' + arrPrices)
                        console.log('hotelTotalPrice arrPrices len ' + arrPrices.length)
                        console.log('hotelTotalPrice dayStart indexOf ' + vm.days.indexOf(dayStart))
                        console.log('hotelTotalPrice dayStart ' + dayStart)
                        console.log('hotelTotalPrice dayEnd indexOf ' + vm.days.indexOf(dayEnd))
                        console.log('hotelTotalPrice dayEnd ' + dayEnd)
                        console.log('hotelTotalPrice daysCount ' + daysCount)
                        console.log('daysTour ' + daysTour)
                        console.log('passPrice no discount ' + (this.passes[curPass].price * this.form.adults))
                        console.log('passPrice ' + passPrice)
                        console.log('discount ' + this.form.passDiscount)
                        console.log('hotelTotalPrice ' + hotelTotalPrice)
                        console.log('skipassPrice ' + ((skiPass * (daysTour - 1)) * this.form.adults))
                        console.log('allBreakfasts ' + allBreakfasts)
                        console.log('gain ' + gain)
                    }

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
                } else if (this.calcTourDays < 4) {
                    this.errors = this.translations.errorMinDates[this.selectedLocale];
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
                } else if (this.form.adults >= 2 && (!this.form.gfname || !this.form.gsname)) {
                    this.errors = this.translations.errorFillFIO2[this.selectedLocale];
                    return false;
                } else if (this.form.adults >= 3 && (!this.form.g3fname || !this.form.g3sname)) {
                    this.errors = this.translations.errorFillFIO3[this.selectedLocale];
                    return false;
                } else if (this.form.adults >= 4 && (!this.form.g4fname || !this.form.g4sname)) {
                    this.errors = this.translations.errorFillFIO4[this.selectedLocale];
                    return false;
                } else if (this.form.adults >= 5 && (!this.form.g5fname || !this.form.g5sname)) {
                    this.errors = this.translations.errorFillFIO5[this.selectedLocale];
                    return false;
                } else if (this.form.adults >= 6 && (!this.form.g6fname || !this.form.g6sname)) {
                    this.errors = this.translations.errorFillFIO6[this.selectedLocale];
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
        choosePass(){
            if (form.pass === 'S') {
                this.form.pass = 'S'
                this.step = 2
            } else if (form.pass === 'V') {
                this.form.pass = 'V'
                this.step = 2
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
            this.errors = null;
            const conf = {
                responseType: 'text'
            };
            const data = {
                promocode : this.promocode,
                tourPass : this.form.pass
            };
            axios
                .post("php/checkPCode.php", data, conf)
                .then(response => {
                    this.form.passDiscount = response.data;
                })
                .catch(error => {
                    this.errors = 'Такой промокод нам не известен.';
                    console.log("error", error);
                });
            this.errors = null;
        },
        sendMail(tourNumber) {
            this.errors = null;
            let sdata = new FormData();

            sdata.append('tourNumber', tourNumber);

            axios({
                method: 'post',
                url: 'php/send.php',
                data: sdata,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            })
                .then(response => {
                    // this.sent = true;
                    console.log("response", response);
                })
                // .then(response => this.responseData = response.data)
                .catch(error => {
                    // this.errors.push(e);
                    console.log("error", error);
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

                let guestsText = new Map([
                    [1, this.translations.guestMail[this.selectedLocale]],
                    [2, this.translations.guestsMail[this.selectedLocale]],
                    [3, this.translations.guestsMail[this.selectedLocale]],
                    [4, this.translations.guestsMail[this.selectedLocale]],
                    [5, this.translations.guestssMail[this.selectedLocale]]
                ]);

                let adultsGuests = this.form.adults + ' ' + guestsText.get(this.form.adults);
                console.log(adultsGuests)

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
                fdata.append('bed', this.form.bed);
                fdata.append('roomName', roomName);
                fdata.append('hotel', this.form.hotel);
                fdata.append('hotelName', this.form.hotelName);
                fdata.append('address', this.form.address);
                fdata.append('passname', this.form.pass);
                fdata.append('g2fname', this.form.gfname);
                fdata.append('g2sname', this.form.gsname);
                fdata.append('g3fname', this.form.g3fname);
                fdata.append('g3sname', this.form.g3sname);
                fdata.append('g4fname', this.form.g4fname);
                fdata.append('g4sname', this.form.g4sname);
                fdata.append('g5fname', this.form.g5fname);
                fdata.append('g5sname', this.form.g5sname);
                fdata.append('g6fname', this.form.g6fname);
                fdata.append('g6sname', this.form.g6sname);
                fdata.append('gphone', this.form.gphone);
                fdata.append('gemail', this.form.gemail);
                fdata.append('promocode', this.form.promocode);
                fdata.append('dateFrom', this.form.dateFrom.toLocaleString("ru",options))
                fdata.append('dateTill', this.form.dateTill.toLocaleString("ru",options));
                fdata.append('adults', adultsGuests);
                fdata.append('kids', kids);
                fdata.append('hotelBreakfast', breakfast);
                fdata.append('hotelPrice', this.form.hotelPrice);
                fdata.append('tourPrice', this.form.tourPrice);
                fdata.append('skipassPrice', this.form.skipassPrice);
                fdata.append('breakfastPrice', this.form.hotelBreakfastPrice);
                fdata.append('passDiscount', this.form.passDiscount);
                fdata.append('tourDays', this.form.tourDays);

                axios({
                    method: 'post',
                    url: 'php/saveVoucher.php',
                    data: fdata,
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                })
                    .then(response => {
                        // this.form.payed = true;
                        // console.log("response", response);
                    })
                    // .then(response => this.responseData = response.data)
                    .catch(error => {
                        // this.errors.push(error);
                        // console.log("error", error);
                    });
            }
        },
    },

    submit() {
    },
     components: {
         vuejsDatepicker
     }
});