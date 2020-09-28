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
            guestsName:{
                'ru':'Гости',
                'en':'Guests'
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
                'ru':'Заполните, пожалуйста, персональные данные и оставьте контактную информацию.',
                'en':'Please, fill the personal information.'
            },
            stepFour:{
                'ru':'Проверьте введенные данные, подтвердите согласие на их обработку, введите промокод, если имеется и\n' +
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
                'ru':'* Туры длительностью менее десяти дней станут доступны с 01.01.2021',
                'en':'* Туры длительностью менее десяти дней станут доступны с 01.01.2021',
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
            errorChooseRoom:{
                'ru':'Вы забыли выбрать отель.',
                'en':'Please, choose your hotel.'
            },
            errorFillFIO:{
                'ru':'Вы забыли заполнить Имя или Фамилию.',
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
                    '@click.prevent="showOffer = true">политикой конфиденциальности</span></p>',
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
                price: 5000,
            },
            {
                name: 'vip',
                code: 'V',
                color: '#777FA8',
                price: 15000,
            }
        ],
        disabledDates: {
            to: new Date(2021, 2, 26),
            from: new Date(2021, 3, 5),
        },

        form: {
            pass: null,

            dateFrom: null,
            dateTill: null,
            adults: '',
            kids: '',

            hotel: 'RIL',
            hotelName: '',
            hotelBreakfast: null,
            address: null,
            room: '',

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
                rooms:[
                    {
                        active: true,
                        name: 'Стандарт',
                        code: 'S',
                        desc: '"- +/- 30 кв. м. \n' +
                            '- Вместимость до 3-х человек\n' +
                            '- Вид на горы\n' +
                            '- WI-FI\n' +
                            '- Телефон\n' +
                            '- Фен\n' +
                            '- Светильник\n' +
                            '- Гигиенические средства\n' +
                            '- Полотенца\n' +
                            '- Сушилка для белья"',
                        gallery:[

                        ]
                    },
                    {
                        active: true,
                        name: 'Dorm',
                        code: 'D',
                        desc: '"- +/- 30 кв. м. \n' +
                            '- Сместимость до 4-х человек"',
                        gallery:[

                        ]
                    },
                    {
                        active: true,
                        name: 'Стандарт улучшенный (до 3-х гостей)',
                        code: 'S3',
                        desc: '"- +/- 35 кв. м. \n' +
                            '- Вместимость до 3-х человек\n' +
                            '- Вид на горы\n' +
                            '- Халат и тапочки\n' +
                            '- Чайная и кофейная станция\n' +
                            '- Холодильник"',
                        gallery:[

                        ]
                    },
                    {
                        active: true,
                        name: 'Стандарт улучшенный (до 5-ти гостей)',
                        code: 'S5',
                        desc: '"- +/- 50 кв. м. \n' +
                            '- Вместимость до 5-ти человек\n' +
                            '- Вид на горы\n' +
                            '- Халат и тапочки\n' +
                            '- Чайная и кофейная станция\n' +
                            '- Холодильник"',
                        gallery:[

                        ]
                    },
                    {
                        active: true,
                        name: 'Двухкомнатный номер',
                        code: 'D2',
                        desc: '"- +/- 60 кв. м. \n' +
                            '- Вместимость до 4-х человек\n' +
                            '- 2 раздельные/одна большая кровать\n' +
                            '- Диван кровать\n' +
                            '- Гостевой туалет\n' +
                            '- Халат и тапочки\n' +
                            '- Чайная и кофейная станция\n' +
                            '- Холодильник"',
                        gallery:[

                        ]
                    }
                ],
                desc:{
                    'ru':'Riders Lodge современный отель с дружелюбной атмосферой, концептуальным дизайном и с бесконечной чередой разнообразных активностей.                                                                              Это первый в России отель для райдеров и любителей активного отдыха, где можно отлично отдохнуть в компании друзей или в кругу семьи, а также со своими домашними питомцами.           Отель расположен в Горной Олимпийской деревне на курорте «Роза Хутор» на высоте 1170 метров над уровнем моря, в шаговой доступности от подъемника «Олимпия» (первая очередь) и в непосредственной близости к трассе «Шале» и кресельному подъемнику. Riders Lodge является центральным местом для отдыха чемпионов России и мира по сноубордингу, популярных блогеров в области туризма и активного спорта, а также любимым местом для индивидуальных путешественников и семейных пар, предпочитающих совмещать экотуризм и активный досуг.',
                    'en':'Do you want to live at the festival epicenter at an affordable price? Riders Lodge is the first hotel in Russia for riders and a friendly gathering and hang out, and very closely located relative to all activities and to the Festival Headquarters and the Olympia cable lift. The hotel lobby deserves special attention - cause it’s full of fun from morning to late night that life: convenient chill-out zone with a fast internet connection, a games area, a cinema, and the Surf Coffee cafe inside.'

                }
            },
            {
                active: false,
                name: 'AYS Let It Snow',
                code: 'AYSL',
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
                    'ru': '"Расположившийся на высоте 1170 метров в Горной Олимпийской деревне отель LET IT SNOW HOTEL - место, где царит дружеская атмосфера, а проживание радует приятными ценами\n' +
                        'Удобные одноместные и двухместные номера в блоке для заядлых путешественников и любителей отдыха в горах. Фишка отеля - просторная кухня и гостевая зона, где всегда найдется компания, чтобы попить чай, сыграть партию в настолки или просто поболтать на разные темы\n' +
                        'Отдельная комната для багажа на первом этаже еще один приятный бонус - здесь можно оставить вещи и отправиться на прогулку. Бесплатный Wi-Fi на всей территории гостиницы дает возможность беспрепятственно выходить в интернет в любое время суток\n' +
                        'Чтобы вы могли не только насладиться чистым воздухом и великолепными пейзажами гор, а еще и с комфортом отдохнуть на Черном море, из Олимпийской деревни до пляжа Роза Хутор организован прямой трансфер\n' +
                        'А для прогулок по самому курорту для каждого гостя - бесплатный ски-пасс на все время проживания на подъемник ""Олимпия"", который курсирует между Роза Долиной и Горной Олимпийской деревней"\n',
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
                        desc: '"- +/- 12-18 кв. м.  \n' +
                            '- 2-3-4 номера на блок\n' +
                            '- Шкаф\n' +
                            '- Стол и стул\n' +
                            '- Прикроватные тумбы\n' +
                            '- 2-3 овмещенных санузела на блок\n' +
                            '- Туалетные принадлежности\n' +
                            '- Комплект полотенец"'
                    },
                    {
                        active: true,
                        name: 'Двухместный стандарт',
                        code: 'D2S',
                        desc: '"- +/- 20-22 кв. м. \n' +
                            '- Возможность дополнительного места\n' +
                            '- Стол и стул\n' +
                            '- Шкаф\n' +
                            '- TV\n' +
                            '- Минихолодильник\n' +
                            '- Зеркало\n' +
                            '- Чайник и чайный набор\n' +
                            '- Комлект полотенец\n' +
                            '- Фен\n' +
                            '- Туалетные принадлежности"'
                    },
                    {
                        active: true,
                        name: 'Двухкомнатный полулюкс',
                        code: 'D2LH',
                        desc: '"- +/- 43 кв. м. \n' +
                            '- Кровать/две кровати и диван кровать\n' +
                            '- Шкаф\n' +
                            '- Прикроватные тумбы\n' +
                            '- Журнальный столик\n' +
                            '- Минихолодильник\n' +
                            '- Чайник, чайный набор\n' +
                            '- Фен\n' +
                            '- Комплект полотенец\n' +
                            '- Туалетные принадлежности"'
                    },
                    {
                        active: true,
                        name: 'Шестиместный дорм',
                        code: 'D6',
                        desc: '"- 2 комнаты: 25 кв. м. и 15 кв. м. \n' +
                            '- Две двухъярусные и две одностальные кровати\n' +
                            '- Шкаф\n' +
                            '- Стол и четыре стула\n' +
                            '- Туалетные принадлежности \n' +
                            '- Комплект полотенец"'
                    }
                ],
                desc:{
                    'ru':'"AYS DESIGN HOTEL располагается в Горной Олимпийской деревне на высоте 1170 метров в месте с чистым горным воздухом и прекрасными видами.Главная фишка отеля — дизайнерские номера с граффити\n' +
                        'Многообразие категорий номеров - номера в блоке, стандарты, дорм на 6 человек и полулюкс - позволяет выбрать именно то, что подходит для отдыха больше всего\n' +
                        'Благодаря разнообразию категорий номеров - блочные номера, стандарты, дорм на 6 человек и полулюкс - можно выбрать именно то, что Вам больше подходит для отдыха. Ваш комфорт - наша забота! Поэтому номера мы укомплектовали максимально. А на каждом этаже поставили кулеры с питьевой водой. Для беспрепятственного выхода в интернет - бесплатный Wi-Fi\n' +
                        'В нашем отеле утро начинается с сытного завтрака в AYS Cafe на ресепшн. Пообедать и поужинать можно в AYS Kitchen - уютное место с домашней атмосферой и вкусным полезным меню из блюд с разных уголков света. Для любителей подкрепиться ночью мы разработали специальное меню\n' +
                        'Отдохнуть на берегу Черного моря наши гости могут на благоустроенном пляже Роза Хутор рядом с Олимпийскими объектами и Сочи Парком - русским Диснейлендом\n' +
                        'Прогуляться по набережной реки Мзымта, сделать яркие селфи на фоне Ратуши легко можно сделать в любое время благодаря бесплатному ски-пассу на подъемник ""Олимпия"", который курсирует между Роза Долиной и Горной Олимпийской Деревней\n' +
                        'Легко организовать корпоративное мероприятие можно в нашем коференц-зале на 30 человек\n' +
                        'Лучший отдых в горах Роза Хутор - отдых с AYS HOTELS!"',
                    'en':''
                }
            },
            {
                active: false,
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
                active: false,
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
                active: true,
                name: 'Отель Radisson Rosa Khutor 5*',
                code: 'RRK5',
                gallery: [],
                rooms: [
                    {
                        active: true,
                        name: 'Стандарт',
                        code: 'S',
                        desc:'"- +/- 27 кв. м. \n' +
                            '- Халат и тапочки\n' +
                            '- Чайный и кофейный набор\n' +
                            '- ЖК-телевизор\n' +
                            '- Сейф в номере\n' +
                            '- Увеличительное зеркало\n' +
                            '- Профессиональный фен\n' +
                            '- Тропический душ\n' +
                            '- Бесплатная вода\n' +
                            '- Бесплатный WI-FI"'
                    },
                    {
                        active: true,
                        name: 'Премиум с балконом',
                        code: 'PB',
                        desc:'"- +/- 29 кв. м. \n' +
                            '- Балкон \n' +
                            '- Высокий этаж\n' +
                            '- Халат и тапочки\n' +
                            '- Эспрессо-машина, чайник в номере\n' +
                            '- Утюг и гладильная доска\n' +
                            '- ЖК-телевизор\n' +
                            '- Сейф в номера\n' +
                            '- Увеличительное зеркало\n' +
                            '- Профессиональный фен\n' +
                            '- Тропический душ\n' +
                            '- Бесплатная вода\n' +
                            '- Бесплатныцй WI-FI"'
                    },
                    {
                        active: true,
                        name: 'Полулюкс с видом на площадь',
                        code: 'HLV',
                        desc:'"- +/- 46 кв. м. \n' +
                            '- Вид на площадь\n' +
                            '- Спальня и отдельная гостиная комната в стиле особняка Нью-Йорка\n' +
                            '- Халат и тапочки\n' +
                            '- Дополнительные косметические принадлежности\n' +
                            '- Эспрессо-машина, сайник в номере\n' +
                            '- Утюг и гладильная доска\n' +
                            '- ЖК-телевизор\n' +
                            '- Сейф в номере\n' +
                            '- Увеличительное зеркало\n' +
                            '- Профессиональный фен\n' +
                            '- Тропический душ\n' +
                            '- Бесплатная вода\n' +
                            '- Бесплатный WI-FI"'
                    },
                    {
                        active: true,
                        name: 'Люкс',
                        code: 'L',
                        desc:'"- +/- 50 кв. м. \n' +
                            '- Вид на реку или на горы\n' +
                            '- Спальня и отдельная гостинная комната в стиле особняка Нью-Йорка\n' +
                            '- Халат и тапочки\n' +
                            '- Дополнительные косметические принадлежности\n' +
                            '- Эспрессо-машина, чайник в номере\n' +
                            '- Утюг и гладильная доска\n' +
                            '- ЖК-телевизор\n' +
                            '- Сейф в номере\n' +
                            '- Увеличительное зеркало\n' +
                            '- Профессиональный фен\n' +
                            '- Тропический душ\n' +
                            '- Бесплатная вода\n' +
                            '- Бесплатный WI-FI"'
                    },
                    {
                        active: true,
                        name: 'Президентский люкс',
                        code: 'PREL',
                        desc:'"- +/- 115 кв. м. \n' +
                            '- Вид на реку\n' +
                            '- 2 спальни и отдельная гостиная комната в стиле особняка Нью-Йорка\n' +
                            '- Ванная и душ в каждой спальне\n' +
                            '- Халат и тапочки\n' +
                            '- Дополнительные косметические принадлежности\n' +
                            '- Эспрессо-машина, чайник в номере\n' +
                            '- Утюг и гладильная доска\n' +
                            '- ЖК-телевизор\n' +
                            '- Сейф в номере\n' +
                            '- Увеличительное зеркало\n' +
                            '- Профессиональный фен\n' +
                            '- Тропический душ\n' +
                            '- Бесплатная вода\n' +
                            '- Бесплатный WI-FI"'
                    },
                    {
                        active: true,
                        name: 'Семейный номер',
                        code: 'FAML',
                        desc:'"- +/- 28 кв. м. \n' +
                            '- Дверь в номер категории Люкс\n' +
                            '- Вид на реку\n' +
                            '- Халат и тапочки\n' +
                            '- Чайный и кофейный набор\n' +
                            '- Утюг и гладильная дооска\n' +
                            '- ЖК-телевизор\n' +
                            '- Сейф в номере\n' +
                            '- Увеличительное зеркало\n' +
                            '- Профессиональный фен\n' +
                            '- Тропический душ\n' +
                            '- Бесплатная вода\n' +
                            '- Бесплатный WI-FI "'
                    }
                ],
                desc: {
                    'ru': 'Расположенный среди знаменитых Кавказских гор на знаменитом российском горном курорте "Роза Хутор", отель Radisson Rosa Khutor 5* предлагает первоклассный сервис, комфортное проживание и широкий спектр дополнительных услуг.Гостям отеля Radisson Hotel Rosa Khutor представится возможность не только увидеть поразительные горные вершины Кавказа, но и заняться самыми популярными в мире зимними видами спорта. В шаговой доступности от отеля находятся подъемники «Олимпия» и «Стрела».Отель Radisson Hotel Rosa Khutor предлагает своим гостям комфортабельные номера различных категорий, оснащённых всем необходимым согласно международным стандартам Radisson Hotel Group, как для деловых поездок, так и для отдыха.Гордостью отеля является открытая терраса Mercedes Sky Lounge с двумя подогреваемыми джакузи и панорамным баром, расположенная на высоте птичьего полёта.',
                    'en': '"The best hotel at Rosa Khutor Resort, named The Best Ski Resort Hotel by the World Ski Awards in 2014 and 2015. All the rooms in the hotel are designed by Swedish designer Christian Lundwall and furnished in full compliance with world-class standards. Two restaurants and an amazing spa area are available in the hotel. For the guests’ convenience, the hotel offers a fully equipped room for storage and drying of the sports equipment. The major benefit of the hotel is its convenient location within a few steps from «Olympia» and «Strela» ropeways.\n' +
                        'Rosa Dolina, \n' +
                        'level 560"'
                }
            },
            {
                active: true,
                name: 'Отель Park Inn by Radisson Rosa Khutor 4*',
                code: 'PIRRS4',
                gallery: [],
                rooms: [
                    {
                        active: true,
                        name: 'Стандарт',
                        code: 'S',
                        desc:{
                            'ru':'"- +/- 28 кв. м.\n' +
                                '- Принадлежности для приготовления чая/кофе\n' +
                                '- Сейф\n' +
                                '- Мини-бар по требованию\n' +
                                '- Увеличительное заркало\n' +
                                '- Тапочки\n' +
                                '- Фен\n' +
                                '- Тропический душ\n' +
                                '- ЖК-телевизор \n' +
                                '-Бесплатная вода\n' +
                                '- Бесплатный Wi-Fi"',
                            'en':'"""- +/- 29 m2\n' +
                                '- Balcony \n' +
                                '- High floor\n' +
                                '- Халат и тапочки\n' +
                                '- Espresso machine, Teapot\n' +
                                '- Iron\n' +
                                '- TV\n' +
                                '- Safe\n' +
                                '- Mirror\n' +
                                '- Tropic bath\n' +
                                '- Hair Dryer\n' +
                                '- Water\n' +
                                '- WI-FI"""'
                        }
                    },
                    {
                        active: true,
                        name: 'Семейнный номер - софа',
                        code: 'FS',
                        desc:{
                            'ru':'"- +/- 32 кв.м.\n' +
                                '- Софа\n' +
                                '- Халат и тапочки\n' +
                                '- Принадлежности для приготовления чая/кофе\n' +
                                '- Мини-бар по требованию\n' +
                                '- Сейф\n' +
                                '- Увеличительное заркало\n' +
                                '- Фен\n' +
                                '- Тропический душ\n' +
                                '- ЖК-телевизор\n' +
                                '- Бесплатная вода\n' +
                                '- Бесплатный Wi-Fi"',
                            'en':''
                        }
                    },
                    {
                        active: true,
                        name: 'Полулюкс',
                        code: 'PL',
                        desc:{
                            'ru':'"- +/- 66 кв.м.\n' +
                                '- Гостиная зона\n' +
                                '- Вид на реку\n' +
                                '- Халат и тапочки\n' +
                                '- Принадлежности для приготовления чая/кофе, эспрессо-машина\n' +
                                '- Мини-бар по требованию\n' +
                                '- Сейф\n' +
                                '- Увеличительное заркало\n' +
                                '- Фен\n' +
                                '- Тропический душ\n' +
                                '- ЖК-телевизор\n' +
                                '- Бесплатная вода\n' +
                                '- Гладильная доска и утюг\n' +
                                '- Бесплатный Wi-Fi"',
                            'en':''
                        }
                    },
                    {
                        active: true,
                        name: 'Люкс',
                        code: 'L',
                        desc:{
                            'ru':'"- +/- 55 кв.м.\n' +
                                '- Разделенная гостиная и спальная зона\n' +
                                '- Халат и тапочки\n' +
                                '- Принадлежности для приготовления чая/кофе, эспрессо-машина\n' +
                                '- Мини-бар по требованию\n' +
                                '- Сейф\n' +
                                '- Увеличительное заркало\n' +
                                '- Фен\n' +
                                '- Тропический душ\n' +
                                '- ЖК-телевизор\n' +
                                '- Бесплатная вода\n' +
                                '- Гладильная доска и утюг\n' +
                                '- Бесплатный Wi-Fi"',
                            'en':''
                        }
                    },
                    {
                        active: true,
                        name: 'Представительский люкс',
                        code: 'PREL',
                        desc:{
                            'ru':'"- +/- 80 кв.м.\n' +
                                '- Разделенная гостиная и спальная зона\n' +
                                '- Халат и тапочки\n' +
                                '- Принадлежности для приготовления чая/кофе, эспрессо-машина\n' +
                                '- Мини-бар по требованию\n' +
                                '- Сейф\n' +
                                '- Увеличительное заркало\n' +
                                '- Фен\n' +
                                '- Тропический душ\n' +
                                '- ЖК-телевизор\n' +
                                '- Бесплатная вода\n' +
                                '- Гладильная доска и утюг\n' +
                                '- Бесплатный Wi-Fi"',
                            'en':''
                        }
                    }
                ],
                desc: {
                    'ru': 'Отель Park Inn by Radisson 4* расположен в самом сердце горного курорта «Роза Хутор», в шаговой доступности от главных канатных дорог «Олимпия» и «Стрела». \n' +
                        'Отель Park Inn by Radisson Rosa Khutor 4* предлагает своим гостям современные комфортабельные номера с видом на горные вершины. Кроме того, отель располагает номерами для людей с ограниченными возможностями. На первом этаже отеля расположен баварский ресторан, где можно насладиться европейскими блюдами от нашего шеф-повара, а в лобби баре хорошо провести время с друзьями около камина.',
                    'en': 'Park Inn is one of the first hotels that has been opened at Rosa Khutor Resort. In 2012, the hotel hosted participants and facilitators of the first mountain festival. In the spacious and comfortable lobby, you might often see guest music stars, sportsmen and organisers. The festival’s second information desk is also located there. Stylish and attractive rooms will help you fully recover after a busy day, and due to its convenient location and proximity to chairlifts you will be first to arrive at the main festival site.'
                }
            },
            {
                active: true,
                name: '',
                code: '',
                gallery: [],
                rooms: [
                    {
                        active: true,
                        name: '',
                        code: '',
                        desc:{
                            'ru':'',
                            'en':''
                        }
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
        if (get_parameters.step === 6 && get_parameters.payed !== 1) {
            this.step = 6;
            this.form.payed = 0;
        } else if (get_parameters.step === 6 && get_parameters.payed === 1) {
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
            return '2 взрослых / 2 детей';
        },
        roomName() {
            return this.hotels[this.currentHotel()].rooms.find(room => room.code === this.form.room).name
        },
        setTourName() {
//            this.form.tourName = 'New Star Weekend ' + this.passes[this.form.pass].name + ' tour, hotel: ' + this.form.hotelName;
            this.form.tourName = 'New Star Weekend ' + ' tour, hotel: ' + this.form.hotelName;
            return this.form.tourName;
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
            return this.hotels.find(hotel => hotel.code === this.form.hotel).rooms
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
            } else if (this.step === 3) {
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