Vue.component('modal', {
    template: "#modal-template"
});

Vue.filter('toCurrency', function (value) {
    if (typeof value !== "number") {
        return value;
    }
    var formatter = new Intl.NumberFormat('ru-RU', {
        style: 'currency',
        currency: 'RUB',
        minimumFractionDigits: 0
    });
    return formatter.format(value);
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
});

let router = new VueRouter({
    mode: 'history',
    routes: []
});

Vue.config.devtools = false

const {CalendarPanel} = DatePicker;

function isValidDate(date) {
    return date instanceof Date && !isNaN(date);
}

let vm = new Vue({
    router,
    el: "#orderForm",
    components: {
        DatePicker,
        CalendarPanel
    },
    data: {
        domain: document.domain,
        locales: {
            'ru': "RU",
            'en': "EN",
        },
        selectedLocale: 'ru',
        minDays: 3,
        dateClearable: false,
        activePass: null,
        passDetails: null,
        gallery: null,
        hotelGallery: null,
        roomGallery: null,
        form: {
            event: 'NSC23',
            currentEvent: null,
            passColor: '#ccc',
            pasCurrent: null,
            passCurrentPrice: 0,
            dateRange: 303,
            dateFrom: '2023-03-30',
            dateTill: '2023-04-03',
            tourDays: 4,
            skiPassDays: 4,
            adults: 2,
            adultsText: null,
            kids: null,
            kidsText: null,

            hotel: null,
            hotelCurrent: null,
            hotelBreakfast: 0,
            hotelBreakfastText: null,
            hotelBreakfastPrice: null,
            hotelPrice: null,
            address: null,
            room: null,
            roomCurrent: null,
            bed: null,
            bedId: null,

            fname: null,
            sname: null,
            email: null,
            phone: null,
            guest: null,
            guests: null,

            gfname: null,
            gsname: null,
            gphone: null,
            gemail: null,

            g3sname: null,
            g3fname: null,
            g3phone: null,
            g3email: null,
            g4fname: null,
            g4sname: null,
            g4phone: null,
            g4email: null,
            g5fname: null,
            g5sname: null,
            g5phone: null,
            g5email: null,
            g6sname: null,
            g6fname: null,
            g6phone: null,
            g6email: null,

            promocode: null,
            consent: null,
            offer: null,

            tourName: null,
            tourNumber: null,
            tourID: null,
            skiPassPrice: 1500,
            tourPrice: 0,
            hotelTotal: 0,
            passTotal: 0,
            skiPassTotal: 0,
            hotelBreakfastTotal: 0,
            arrTourDays: null,
            payed: null,
            passDiscount: 0
        },
        translations: {
            title: {
                'ru': 'Купить тур',
                'en': 'Book your tour',
            },
            titleP: {
                'ru': 'Купить браслет',
                'en': 'Festival Pass',
            },
            festPass: {
                'ru': '<p>Браслет участника дает право доступа на мероприятия фестиваля, но не включает в себя проживание, merch pack и скипасc.</p>',
                'en': '<p>Браслет участника дает право доступа на мероприятия фестиваля, но не включает в себя проживание, merch pack и скипасс.</p>',
            },
            bannerVisaTitle: {
                'ru': 'Выиграй сноуборд с VISA!',
                'en': 'Выиграй сноуборд с VISA!'
            },
            bannerVisaText: {
                'ru': 'С 30 марта по 2 апреля оплати тур на New Star Camp картой VISA и стань участником розыгрыша трех сноубордов! <br> Подробности на <a href="http://newstarcamp.ru">newstarcamp.ru</a>',
                'en': 'С 30 марта по 2 апреля оплати тур на New Star Camp картой VISA и стань участником розыгрыша трех сноубордов! <br> Подробности на <a href="http://newstarcamp.ru">newstarcamp.ru</a>'
            },
            bracelet: {
                'ru': 'Браслет участника',
                'en': 'Festival pass'
            },
            skipass: {
                'ru': 'Скипасс на ',
                'en': 'Ski pass'
            },
            skipassDays: {
                'ru': 'дня',
                'en': 'days'
            },
            tourNights: {
                'ru': 'ночи',
                'en': 'nights'
            },
            tourSum: {
                'ru': 'Стоимость пакетного предложения:',
                'en': ''
            },
            tourSumFrom: {
                'ru': 'От',
                'en': 'From'
            },
            chooseButton: {
                'ru': 'Выбрать',
                'en': 'Book now'
            },
            step1: {
                'ru': 'Выберите тур',
                'en': 'Choose your tour',
            },
            guest1: {
                'ru': '1 гость',
                'en': '1 guest'
            },
            guest2: {
                'ru': '2 гостя',
                'en': '2 guests'
            },
            guest3: {
                'ru': '3 гостя',
                'en': '3 guests'
            },
            guest4: {
                'ru': '4 гостя',
                'en': '4 guests'
            },
            guest5: {
                'ru': '5 гостей',
                'en': '5 guests'
            },
            guest6: {
                'ru': '6 гостей',
                'en': '6 guests'
            },
            guest7: {
                'ru': '7 гостей',
                'en': '7 guests'
            },
            guest8: {
                'ru': '8 гостей',
                'en': '8 guests'
            },
            guest9: {
                'ru': '9 гостей',
                'en': '9 guests'
            },
            guest10: {
                'ru': '10 гостей',
                'en': '10 guests'
            },
            guest11: {
                'ru': '11 гостей',
                'en': '11 guests'
            },
            guest12: {
                'ru': '12 гостей',
                'en': '12 guests'
            },
            guest13: {
                'ru': '13 гостей',
                'en': '13 guests'
            },
            guest14: {
                'ru': '14 гостей',
                'en': '14 guests'
            },
            guest15: {
                'ru': '15 гостей',
                'en': '15 guests'
            },
            guest1fp: {
                'ru': '1 браслет',
                'en': '1 guest'
            },
            guest2fp: {
                'ru': '2 браслета',
                'en': '2 guest'
            },
            guest3fp: {
                'ru': '3 браслета',
                'en': '3 guest'
            },
            guest4fp: {
                'ru': '4 браслета',
                'en': '4 guest'
            },
            guest5fp: {
                'ru': '5 браслетов',
                'en': '5 guest'
            },
            guest6fp: {
                'ru': '6 браслетов',
                'en': '6 guest'
            },
            breakfastIncluded: {
                'ru': 'Завтрак включен в стоимость',
                'en': 'breakfast included',
            },
            roomType: {
                'ru': 'Тип номера',
                'en': 'Type of room',
            },
            roomNumber: {
                'ru': 'Номер',
                'en': 'Type of room',
            },
            bedType: {
                'ru': 'Тип кровати',
                'en': 'Type of bed',
            },
            hotelType: {
                'ru': 'Отель',
                'en': 'Hotel',
            },
            hotelBreakfast: {
                'ru': 'Завтраки',
                'en': 'Breakfast',
            },
            hotelBreakfastIncluded: {
                'ru': 'Завтрак включен',
                'en': 'Breakfast included',
            },
            hotelBreakfastNotIncluded: {
                'ru': 'Проживание без завтрака',
                'en': 'Breakfast not included',
            },
            passDetails: {
                'ru': 'Подробнее',
                'en': 'More'
            },
            soldOut: {
                'ru': 'Sold Out',
                'en': 'Sold Out'
            },
            stepNext: {
                'ru': 'Далее',
                'en': 'Next'
            },
            tourPriceText: {
                'ru': 'Стоимость пакетного предложения ',
                'en': 'Total '
            },
            stepPrevious: {
                'ru': 'Назад',
                'en': 'Back'
            },
            firstGuest: {
                'ru': 'Первый гость',
                'en': 'First guest'
            },
            secondGuest: {
                'ru': 'Второй гость',
                'en': 'Second guest'
            },
            thirdGuest: {
                'ru': 'Третий гость',
                'en': 'Third guest'
            },
            fourthGuest: {
                'ru': 'Четвертый гость',
                'en': 'Fourth guest'
            },
            fifthGuest: {
                'ru': 'Пятый гость',
                'en': 'Fourth guest'
            },
            sixGuest: {
                'ru': 'Шестой гость',
                'en': 'Six guest'
            },
            guestName: {
                'ru': 'Имя',
                'en': 'Name'
            },
            guestsName: {
                'ru': 'Гости',
                'en': 'Guests'
            },
            guestsMail: {
                'ru': 'гостя',
                'en': 'guests'
            },
            guestMail: {
                'ru': 'гость',
                'en': 'guest'
            },
            guestssMail: {
                'ru': 'гостей',
                'en': 'guest'
            },
            hotelMailBreakfast: {
                'ru': 'Завтрак в отеле',
                'en': 'with breakfast'
            },
            hotelMailNoBreakfast: {
                'ru': 'Без завтрака',
                'en': 'No breakfast'
            },
            guestSurname: {
                'ru': 'Фамилия',
                'en': 'Surname'
            },
            guestPhone: {
                'ru': 'Телефон',
                'en': 'Phone num'
            },
            guestHotel: {
                'ru': 'Отель',
                'en': 'Hotel'
            },
            guestPromoCode: {
                'ru': 'Промокод',
                'en': 'Promocode'
            },
            guestPromoCodeApply: {
                'ru': 'Применить',
                'en': 'Apply'
            },
            guestPromoCodeDiscount: {
                'ru': 'Скидка использована',
                'en': 'Promocode used'
            },
            userAgreement: {
                'ru': 'Договор оферты',
                'en': 'Offer'
            },
            newStarFAQ: {
                'ru': 'Часто задаваемые вопросы и ответы',
                'en': 'FAQ'
            },
            step3: {
                'ru': 'Выберите тип номера',
                'en': 'Choose room type'
            },
            step4: {
                'ru': 'Давайте знакомиться',
                'en': 'Lets get to know each other'
            },
            step5: {
                'ru': 'Дабл-чек',
                'en': 'Double check your details, please :)'
            },
            dateFrom: {
                'ru': 'Дата заезда',
                'en': 'Date in'
            },
            dateTill: {
                'ru': 'Дата выезда',
                'en': 'Date out'
            },
            dateNote: {
                'ru': '* Туры длительностью менее 9 дней станут доступны с 01.01.2021',
                'en': '* Туры длительностью менее 9 дней станут доступны с 01.01.2021',
            },
            tourAdults: {
                'ru': 'Количество взрослых',
                'en': 'Number of adults',
            },
            tourDates: {
                'ru': 'Даты',
                'en': 'Dates',
            },
            tourDates303: {
                'ru': '30 марта - 3 апреля',
                'en': '30 march - 3 april',
            },
            tourDates302: {
                'ru': '30 марта - 2 апреля',
                'en': '30 march - 2 april',
            },
            tourDates272: {
                'ru': '27 марта - 2 апреля',
                'en': '27 march - 2 april',
            },
            tourDates273: {
                'ru': '27 марта - 3 апреля',
                'en': '27 march - 3 april',
            },
            tourKids: {
                'ru': 'Количество детей',
                'en': 'Number of children',
            },
            step2: {
                'ru': 'Выберите отель и даты',
                'en': 'Please, choose your accommodation'
            },
            step2fp: {
                'ru': 'Выберите количество браслетов',
                'en': 'Please, choose your accommodation'
            },
            step2fpdesc: {
                'ru': 'Вместе веселей, возможно ваши друзья вас поддержат и вы поедете небольшой компанией. Укажите количество браслетов.',
                'en': 'Please, choose how many passes you need'
            },
            stepGuests: {
                'ru': 'Количество гостей',
                'en': 'Number of guests'
            },
            errorChoosePass: {
                'ru': 'Вы забыли выбрать категорию',
                'en': 'Please, choose your pass'
            },
            errorChooseDates: {
                'ru': 'Вы забыли выбрать даты заезда',
                'en': 'Please, choose your the dates of tour'
            },
            errorChooseAdults: {
                'ru': 'Вы забыли выбрать количество человек',
                'en': 'Please, choose number of people'
            },
            errorChooseRoom: {
                'ru': 'Вы забыли выбрать вариант размещения',
                'en': 'Please, choose your accommodation.'
            },
            errorFillFIO: {
                'ru': 'Вы забыли заполнить персональные данные',
                'en': 'Please, fill Name and Surname.'
            },
            errorFillFIO2: {
                'ru': 'Вы забыли заполнить персональные данные второго гостя',
                'en': 'Please, fill Name and Surname.'
            },
            errorFillFIO3: {
                'ru': 'Вы забыли заполнить персональные данные третьего гостя',
                'en': 'Please, fill Name and Surname.'
            },
            errorFillFIO4: {
                'ru': 'Вы забыли заполнить персональные данные четвертого гостя',
                'en': 'Please, fill Name and Surname.'
            },
            errorFillFIO5: {
                'ru': 'Вы забыли заполнить персональные данные пятого гостя',
                'en': 'Please, fill Name and Surname.'
            },
            errorFillFIO6: {
                'ru': 'Вы забыли заполнить персональные данные шестого гостя',
                'en': 'Please, fill Name and Surname.'
            },
            errorFillEmail: {
                'ru': 'Укажите электронную почту',
                'en': 'Please, fill Email'
            },
            errorFillCorrectEmail: {
                'ru': 'Укажите корректный адрес электронной почты',
                'en': 'Please, fill correct Email'
            },
            errorFillPhone: {
                'ru': 'Укажите Телефон',
                'en': 'Please, fill number of cell phone'
            },
            errorFillCorrectPhone: {
                'ru': 'Укажите корректный телефон',
                'en': 'Please, fill correct number of cell phone'
            },
            tourIncludedHeader: {
                'ru': 'В пакетное предложение включено:',
                'en': 'Tour included:'
            },
            tourIncludedHotel: {
                'ru': 'Проживание в отеле',
                'en': 'Hotel accommodation'
            },
            tourUsePromo: {
                'ru': 'Введите промокод, если имеется',
                'en': 'Insert your promo code if you have one'
            },
            tourIncludedP: {
                'ru': '<p><b>В пакетное предложение включено:</b></p></li>' +
                    '<ul></li>' +
                    '<li> Браслет участника</li></li>' +
                    '</ul>',
                'en': '<p><b>Tour details:</b></p></li>' +
                    '<ul></li>' +
                    '<li> Festival PASS</li></li>' +
                    '</ul>',
            },
            tourIncluded: {
                'ru': '<p><b>В пакетное предложение включено:</b></p></li>' +
                    '<ul></li>' +
                    '<li> Браслет участника</li></li>' +
                    '<li> Проживание в отеле</li></li>' +
                    '</ul>',
                'en': '<p><b>Tour details:</b></p></li>' +
                    '<ul></li>' +
                    '<li> Festival PASS</li></li>' +
                    '<li> Hotel accommodation</li></li>' +
                    '<li> Cable lifts ticket(s)</li></li>' +
                    '</ul>',
            },
            guestAgreement: {
                'ru': 'Я даю ',
                'en': 'I accept '
            },
            guestAgreement1: {
                'ru': 'согласие ',
                'en': 'Terms and Conditions'
            },
            guestAgreement2: {
                'ru': 'на обработку персональных данных',
                'en': '.'
            },
            guestOfferAccept: {
                'ru': 'Я согласен c ',
                'en': 'I accept '
            },
            guestOfferAccept1: {
                'ru': 'политикой конфиденциальности',
                'en': 'offer.'
            },
            buyTour: {
                'ru': 'Купить тур',
                'en': 'Buy tour'
            },
            tourTanks: {
                'ru': 'Спасибо',
                'en': 'Thank you'
            },
            tourSuccess: {
                'ru': '<p>Благодарим вас за покупку тура на Quiksilver New Star Camp 2023</p>\n' +
                    '<p>Ваучер на пакетный тур отправлен на вашу почту. <br>Дополнительный ваучер на ски-пассы придет не позднее 20 марта 2023 г.</p>' +
                    '<p>До встречи на Фестивале!</p>',
                'en': '<p>Thank you for your purchase!</p>' +
                    '<p>The tour voucher has been sent to your e-mail.</p>' +
                    '<p>Please expect the ski pass voucher closer to festival dates.</p>',
            },
            tourFail: {
                'ru': '<p>Возникла ошибка при проведении платежа</p>' +
                    '<a href="#">попробуйте еще раз</a>.</p>',
                'en': '<p>An error occurred while making a payment, </p>' +
                    '<a href="#">try again</a>.</p>'
            },
            newStarDesc: {
                'ru': 'ООО «Нью Стар» — организатор спортивно-музыкального фестиваля New Star Camp,' +
                    'который пройдёт 30 марта по 2 апреля 2023 года на всесезонном горном курорте «Роза Хутор» (Сочи)',
                'en': '“New Star” LLC is the organizer of “New Star Camp” sports and music festival, that will' +
                    ' be held on March 30 - 2 April, 2023 at Russian ski resort “Rosa Khutor” (Sochi).'
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
                    'ru': 'Выбор<br> категории',
                    'en': 'Tour<br> category'
                },
                text: 'text-left',
                col: 'col',
                desc: {
                    'ru': '<p>До путешествия на Quiksilver New Star Camp 2023 осталось несколько шагов. Здесь ты можешь подобрать тур и узнать, что именно в него входит. Выбери один из вариантов, чтобы начать.</p>',
                    'en': '<p>There are a few steps left before traveling to Quiksilver New Star Camp 2023. Here you can choose a tour and find out what exactly is included in it. Choose one of the options to get started.</p>',
                },
            },
            {
                active: false,
                id: 2,
                name: {
                    'ru': 'Выбор<br> отеля',
                    'en': 'Hotel'
                },
                text: 'text-center',
                col: 'col-3',
                desc: {
                    'ru': 'Тут стоит подумать над датами, так как даже в последний день фестиваля мы запланировали масштабную программу, и если вы не хотите пропустить ни минуты, то стоит остаться до понедельника (03.04). Если же на работе ждут, то вылет в воскресенье вечером (02.04) - тоже отличный вариант. И да, вылететь на Роза Хутор надо в четверг (30.03), поэтому правильно планируйте отпуск.<br>' +
                        '* С 27 марта по 02 апреля 2023 г. - Riders Week, более подробную информацию читайте на сайте https://newstarcamp.ru/ в разделе "Новости"',
                    'en': 'All the hotels in the Rosa Khutor resort guarantee convenient logistics to the festival sites and will save your time so you can enjoy its fun in full.'
                },
            },
            {
                active: false,
                id: 3,
                name: {
                    'ru': 'Выбор<br> номера',
                    'en': 'Accomodation'
                },
                text: 'text-center',
                col: 'col-3',
                desc: 'Во всех отелях курорта есть номера на любой вкус и кошелек. Просто выбери подходящий номер.<br> Рекомендуем добавить завтрак, чтобы начать день в горах полным энергии!'
            },
            {
                active: false,
                id: 4,
                name: {
                    'ru': 'Персональные<br> данные',
                    'en': 'Personal<br> вata'
                },
                text: 'text-center',
                col: 'col-3',
                desc: 'Мы рекомендуем покупать тур на все 10 дней фестиваля, ведь его программа очень насыщенная!'
            },
            {
                active: false,
                id: 5,
                name: {
                    'ru': 'Покупка<br> тура',
                    'en': 'Purchasing'
                },
                text: 'text-right',
                col: 'col',
                desc: 'Проверьте введенные данные, подтвердите согласие на их обработку и нажмите кнопку «Купить тур»'
            }
        ],

        passSDetails: false,
        passVDetails: false,
        passPDetails: false,

        passes: null,
        hotelQuota: '',
        freeHotels: [],
        hotelRooms: null,
        hotelRoomBeds: null,
        hotels: [],
    },
    methods: {
        goToNSCsite() {
            window.open('https://newstarcamp.ru/news/visa_snowboards/?utm_source=nswpay&utm_medium=banner&utm_campaign=visa')
        },
        acceptNumber() {
            let x = this.form.phone.replace(/\D/g, '').match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,4})/);
            this.form.phone = x[1] + ' (' + x[2] + ') ' + x[3] + ' ' + x[4];
        },
        activePasses() {
            if (this.passes) {
                return this.passes.filter(pass => {
                    return this.passes
                })
            }
        },
        activeHotels() {
            if (this.passes && this.form.adults && this.form.dateFrom && this.form.dateTill) {
                return this.hotels.filter(hotel => {
                    return hotel.maxGuests >= this.form.adults
                })
            }
        },
        getClasses(cellDate, currentDates, classes) {
            if (
                !/disabled|active|not-current-month/.test(classes) &&
                currentDates.length === 2 &&
                cellDate.getTime() > currentDates[0].getTime() &&
                cellDate.getTime() < currentDates[1].getTime()
            ) {
                return "in-range";
            }
            return "";
        },
        setLocale: function (locale) {
            this.selectedLocale = locale;
        },
        validEmail: function (email) {
            let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        },
        validPhone: function (phone) {
            // let re = /^\d(\d{3})?\d{7}$/;
            // return re.test(phone.replace(/\s+/g, ''));
            return true;
        },
        scrollToTop() {
            let element = document.getElementById("orderForm");
            window.scrollTo(0, element.offsetTop)
        },
        calcTourDays() {
            if (this.form.dateRange == 302) {
                this.form.dateFrom = '2023-03-30'
                this.form.dateTill = '2023-04-02'
                this.form.tourDays = 3
                this.form.skiPassDays = 3
                this.translations.skipassDays = {
                    'ru': 'дня',
                    'en': 'days'
                }
                this.translations.tourNights = {
                    'ru': 'ночи',
                    'en': 'nights'
                }
            } else if (this.form.dateRange == 303) {
                this.form.dateFrom = '2023-03-30'
                this.form.dateTill = '2023-04-03'
                this.form.tourDays = 4
                this.form.skiPassDays = 4
                this.translations.skipassDays = {
                    'ru': 'дня',
                    'en': 'days'
                }
                this.translations.tourNights = {
                    'ru': 'ночи',
                    'en': 'nights'
                }
            } else if (this.form.dateRange == 273) {
                this.form.dateFrom = '2023-03-27'
                this.form.dateTill = '2023-04-03'
                this.form.tourDays = 7
                this.form.skiPassDays = 6
                this.translations.skipassDays = {
                    'ru': 'дней',
                    'en': 'days'
                }
                this.translations.tourNights = {
                    'ru': 'ночей',
                    'en': 'nights'
                }
            } else if (this.form.dateRange == 272) {
                this.form.dateFrom = '2023-03-27'
                this.form.dateTill = '2023-04-02'
                this.form.tourDays = 6
                this.form.skiPassDays = 6
                this.translations.skipassDays = {
                    'ru': 'дней',
                    'en': 'days'
                }
                this.translations.tourNights = {
                    'ru': 'ночей',
                    'en': 'nights'
                }
            }

            if (this.form.dateFrom && this.form.dateTill) {
                if (this.form.pasCurrent.is_hotel === 1) {
                    this.getActiveHotels()
                }
            }
        },
        cleanCurrentForm() {
            this.hotels = [];
            this.form.hotelCurrent = [];
            this.form.roomCurrent = [];
            this.form.hotelBreakfast = 0;
        },
        prevStep() {
            this.step--;
            this.form.consent = null
            this.scrollToTop()
        },
        nextStep() {
            if (this.step === 1) {
                if (!this.form.pasCurrent) {
                    this.errors = this.translations.errorChoosePass[this.selectedLocale];
                    return false;
                } else {
                    this.errors = null
                    this.step++
                    this.scrollToTop()
                }
            } else if (this.step === 2) {
                const startDates = [30];
                const endDates = [2,3];

                let dateStartNan = startDates.includes(new Date(this.form.dateFrom).getDate())
                let dateEndNan = endDates.includes(new Date(this.form.dateTill).getDate())

                if (!this.form.dateTill || !this.form.dateFrom) {
                    this.errors = this.translations.errorChooseDates[this.selectedLocale];
                    return false;
                } else if (!this.form.adults) {
                    this.errors = this.translations.errorChooseAdults[this.selectedLocale];
                    return false;
                } else if (this.form.tourDays < this.minDays) {
                    let text = {
                        'ru': 'Туры менее ' + this.minDays + ' дней, недоступны',
                        'en': 'Minimal tour ' + this.minDays + ' days'
                    };
                    this.errors = text[this.selectedLocale];
                    return false;
                } else if ( dateEndNan !== true || dateStartNan !== true) {
                    let text = {
                        'ru': 'Тур должен начинаться 30 марта и заканчиваться 2 или 3 апреля',
                        'en': 'Тур должен начинаться 30 марта и заканчиваться 2 или 3 апреля'
                    };
                    this.errors = text[this.selectedLocale];
                    return false;
                } else {
                    this.errors = null
                }
                if (this.form.adults && this.errors == null) {
                    if (this.form.pasCurrent.is_hotel === 0) {
                        this.step = 3
                        this.scrollToTop()
                    }
                    this.step++
                    this.scrollToTop()
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
                    this.saveGuest()
                    if (true) {
                        this.errors = null;
                        this.step++
                        this.scrollToTop()
                    }
                }
            }
        },
        setPassActive(passCode) {
            this.activePass = passCode
            let pasCurrent = this.passes.filter(pass => {
                return pass.code === passCode
            })
            console.log('passCode = ' + passCode)
            console.log(pasCurrent[0].is_hotel)

            if (pasCurrent[0].is_hotel === 1) {
                this.form.skiPassPrice = this.form.currentEvent.skipass_price
                this.form.passColor = pasCurrent[0].color
                this.form.passCurrentPrice = pasCurrent[0].price
                this.form.pasCurrent = pasCurrent[0]
                this.getActiveHotels()
                this.step++
                this.scrollToTop()
            } else if (pasCurrent[0].is_hotel === 0) {
                this.form.skiPassPrice = 0
                this.form.passCurrentPrice = pasCurrent[0].price
                this.form.pasCurrent = pasCurrent[0]
                this.hotels = []
                this.step ++
                this.scrollToTop()
            }

        },
        setHotelActive(hotelId) {
            const startDates = [27,30];
            const endDates = [2,3];

            let dateStartNan = startDates.includes(new Date(this.form.dateFrom).getDate())
            let dateEndNan = endDates.includes(new Date(this.form.dateTill).getDate())

            if (this.form.tourDays < this.minDays) {
                let text = {
                    'ru': 'Туры менее ' + this.minDays + ' дней недоступны',
                    'en': 'Minimal tour ' + this.minDays + ' days'
                };
                this.errors = text[this.selectedLocale];
                return false;
            } else if ( dateEndNan !== true || dateStartNan !== true) {
                let text = {
                    'ru': 'Туры должны начинаться 27 или 30 марта и заканчиваться 2 или 3 апреля',
                    'en': 'Туры должны начинаться 27 или 30 марта и заканчиваться 2 или 3 апреля'
                };
                this.errors = text[this.selectedLocale];
                return false;
            } else {
                this.form.hotel = hotelId
                let hotelCurrent = this.hotels.filter(hotel => {
                    return hotel.id === hotelId
                })
                this.form.hotelCurrent = hotelCurrent[0]
                this.getActiveHotelRooms()
                this.step++
                this.scrollToTop()
            }
        },
        setRoomActive(roomId) {
            this.form.room = roomId
            let roomCurrent = this.hotelRooms.filter(room => {
                return room.id === roomId
            })
            this.form.roomCurrent = roomCurrent[0]
            this.form.hotelBreakfastTotal = roomCurrent[0].total_breakfasts
            this.form.skiPassTotal = roomCurrent[0].total_skiPass
            this.form.hotelTotal = roomCurrent[0].total_hotel
            this.form.passTotal = roomCurrent[0].total_pass
            this.form.tourPrice = (this.form.hotelBreakfast === 1) ? this.form.roomCurrent.total_price + this.form.roomCurrent.total_breakfasts : this.form.roomCurrent.total_price
            this.step++
            this.scrollToTop()
        },
        getHotelPhotos() {
            const conf = {
                responseType: 'text',
            };
            const data = {
                hotelId: this.form.hotel
            };
            axios
                .get("api/hotelimg/" + this.form.hotel, data, conf)
                .then(response => {
                    if (response.data) {
                        this.errors = null
                        this.hotelGallery = Object.values(response.data)
                        this.gallery = Object.values(response.data)
                    } else {
                        this.errors = 'no active passes'
                    }
                })
                .catch(error => {
                    this.errors = 'Error axios.get query.'
                    console.log("error", error)
                });
        },
        getRoomPhotos() {
            const conf = {
                responseType: 'text'
            };
            const data = {
                hotelId: this.form.hotel,
                roomId: this.form.room
            };
            axios
                .get("api/roomimg/" + this.form.room, data, conf)
                .then(response => {
                    this.getActiveRoomBeds()
                    if (response.data) {
                        this.errors = null
                        let arCurRoom = this.hotelRooms.filter(room => {
                            return room.id === this.form.room
                        })
                        this.form.roomCurrent = arCurRoom[0]
                        this.roomGallery = Object.values(response.data)
                        this.gallery = Object.values(response.data)
                    } else {
                        this.gallery = [{
                            "url": this.domain + 'nsc/images/hotels/take1.width-1200.jpegquality-99.png'
                        }]
                    }
                })
                .catch(error => {
                    this.errors = 'Error axios.get query.'
                    console.log("error", error)
                });
        },
        nextPhoto() {
            let gallery = this.gallery
            let imgId = this.$refs.hotelImage.getAttribute('image-id');
            let countHotelImg = gallery.length;
            let imgImageNum = Number(imgId) + Number(1);
            if (imgImageNum < countHotelImg) {
                this.$refs.hotelImage.src = gallery[imgImageNum].url;
                this.$refs.hotelImage.setAttribute('image-id', String(imgImageNum));
            } else {
                this.$refs.hotelImage.src = gallery[0].url;
                imgImageNum = 0;
                this.$refs.hotelImage.setAttribute('image-id', String(imgImageNum));
            }
        },
        previousPhoto() {
            let gallery = this.gallery
            let imgId = this.$refs.hotelImage.getAttribute('image-id');
            let countHotelImg = gallery.length;
            let imgImageNum = Number(imgId) - Number(1);
            if (Number(imgImageNum) < 0) {
                imgImageNum = countHotelImg - 1;
                this.$refs.hotelImage.src = gallery[imgImageNum].url;
                this.$refs.hotelImage.setAttribute('image-id', String(imgImageNum));
            } else {
                this.$refs.hotelImage.src = gallery[imgImageNum].url;
                this.$refs.hotelImage.setAttribute('image-id', String(imgImageNum));
            }
        },
        getEvent(url, config) {
            const conf = {
                responseType: 'text',
            };
            axios
                .get("api/curevent", {
                    params: {
                        code: this.form.event
                    }
                }, conf)
                .then(response => {
                    this.form.currentEvent = response.data[0]
                })
                .catch(error => {
                    this.errors = 'Ошибка запроса api/event/.';
                    console.log("error", error);
                });
        },
        applyPromoCode() {
            this.errors = null;
            const conf = {
                responseType: 'text'
            };
            const data = {
                promoCode: this.form.promocode,
                eventCode: this.form.event,
                tourPass: this.form.pasCurrent.code,
                tourPassId: this.form.pasCurrent.id,
                hotelId: this.form.hotelCurrent.id
            };
            axios
                .post("api/promo", data, conf)
                .then(response => {
                    if (response.data !== false) {
                        this.form.passDiscount = response.data;
                    }
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
                url: 'nsc23/php/send.php',
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
        saveApiVoucher() {
            const conf = {
                responseType: 'text',
                timeout: 1000
            };

            let options = {
                year: 'numeric',
                month: 'numeric',
                day: 'numeric',
            }
            this.form.dateFrom = this.form.dateFrom.toLocaleString("ru", options)
            this.form.dateTill = this.form.dateTill.toLocaleString("ru", options)

            const data = this.form
            axios
                .post("api/voucher/", data, conf, {timeout: 1000})
                .then(response => {
                    if (response.data.status === 201) {
                        this.errors = null
                    } else if (response.data.status === 200) {
                        this.errors = null
                    }
                })
                .catch(error => {
                    this.errors = 'Ошибка запроса api/voucher/.';
                    console.log("error", error);
                });
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
                    [5, this.translations.guestssMail[this.selectedLocale]],
                    [6, this.translations.guestssMail[this.selectedLocale]]
                ]);

                let adultsGuests = this.form.adults + ' ' + guestsText.get(this.form.adults);
                let kids = this.form.kids !== 1 || this.form.kids !== 2 ? 0 : this.form.kids
                let tourDaysCount = Math.round(Number(this.form.tourDays))
                let options = {
                    year: 'numeric',
                    month: 'numeric',
                    day: 'numeric',
                }

                fdata.append('tourNumber', this.form.tourNumber);
                fdata.append('tourID', this.form.tourID);
                fdata.append('tourName', this.form.tourName);
                fdata.append('name', this.form.fname);
                fdata.append('lastname', this.form.sname);
                fdata.append('email', this.form.email);
                fdata.append('phone', this.form.phone);

                if (this.form.pasCurrent.is_hotel === 1) {
                    let breakfast
                    if (this.form.roomCurrent.breakfasts === 1) {
                        breakfast = this.translations.hotelMailBreakfast[this.selectedLocale]
                    } else {
                        breakfast = this.form.hotelBreakfast === 1 ?
                            this.translations.hotelMailBreakfast[this.selectedLocale] : this.translations.hotelMailNoBreakfast[this.selectedLocale]
                    }

                    fdata.append('room', this.form.room);
                    fdata.append('bed', this.form.bed);
                    fdata.append('roomName', this.form.roomCurrent.name);
                    fdata.append('hotel', this.form.hotelCurrent.id);
                    fdata.append('hotelName', this.form.hotelCurrent.name);
                    fdata.append('address', this.form.hotelCurrent.address);
                    fdata.append('hotelBreakfast', breakfast);
                    this.form.hotelBreakfastText = breakfast
                    fdata.append('breakfasts', this.form.hotelBreakfast);
                }

                fdata.append('passname', this.form.pasCurrent.name);
                fdata.append('passcode', this.form.pasCurrent.code);
                fdata.append('passColor', this.form.passColor);
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
                fdata.append('dateFrom', this.form.dateFrom.toLocaleString("ru", options))
                fdata.append('dateTill', this.form.dateTill.toLocaleString("ru", options));
                fdata.append('adults', adultsGuests);
                this.form.adultsText = adultsGuests
                fdata.append('adultsNum', this.form.adults);
                fdata.append('kids', kids);
                this.form.kidsText = kids
                fdata.append('hotelPrice', this.form.hotelTotal);
                fdata.append('tourPrice', this.form.tourPrice);
                fdata.append('skiPassPrice', this.form.skiPassTotal);
                fdata.append('breakfastPrice', this.form.hotelBreakfastTotal);
                fdata.append('passTotal', this.form.passTotal);
                fdata.append('passDiscount', this.form.passDiscount);
                fdata.append('tourDays', String(tourDaysCount));
                fdata.append('skiPassDays', this.form.skiPassDays);
                fdata.append('event', this.form.event);

                axios({
                    method: 'post',
                    url: 'nsc23/php/saveVoucher.php',
                    data: fdata,
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                })
                    .then(response => {
                        // this.form.payed = true;
                    })
                    // .then(response => this.responseData = response.data)
                    .catch(error => {
                        // this.errors.push(error);
                    });
            }
        },
        getActivePasses(url, config) {
            const conf = {
                responseType: 'text'
            };
            axios
                .get("api/passes", {
                    params: {
                        event: this.form.event
                    }
                }, conf)
                .then(response => {
                    if (response.data) {
                        this.errors = null
                        this.passes = Object.values(response.data)
                        return response.data
                    } else {
                        this.errors = 'no active passes'
                    }
                })
                .catch(error => {
                    this.errors = 'Error get query api/passes.'
                    console.log("error", error)
                });
        },
        getActiveHotels() {
            if (this.form.dateTill && this.form.pasCurrent.is_hotel === 1) {
                let dateStart = this.form.dateFrom
                let dateEnd = this.form.dateTill
                let tourDays = this.form.tourDays

                this.cleanCurrentForm()

                const conf = {
                    responseType: 'text'
                };
                axios
                    .get("api/hotels", {
                        params: {
                            tourDays: tourDays,
                            adults: this.form.adults,
                            dateStart: dateStart,
                            dateEnd: dateEnd,
                            passPrice: this.form.passCurrentPrice,
                            skiPassPrice: this.form.skiPassPrice,
                        }
                    }, conf)
                    .then(response => {
                        if (response.data) {
                            this.hotels = Object.values(response.data)
                        } else {
                            this.errors = 'Нет доступных отелей на эти даты.';
                        }
                    })
                    .catch(error => {
                        console.log("error", error);
                    });
            }
        },
        getActiveHotelRooms() {
            let option = {
                year: 'numeric',
                month: 'numeric',
                day: 'numeric',
            };

            let dayStart = this.form.dateFrom; // .toLocaleString("ru", option);
            let dayEnd = this.form.dateTill; // .toLocaleString("ru", option);
            let tourDays = this.form.tourDays

            const conf = {
                responseType: 'text'
            };

            axios
                .get("api/hotelrooms/" + this.form.hotelCurrent.id, {
                    params: {
                        hotelId: this.form.hotelCurrent.id,
                        tourDays: tourDays,
                        adults: this.form.adults,
                        dateStart: dayStart,
                        dateEnd: dayEnd,
                        passPrice: this.form.passCurrentPrice,
                        skiPassPrice: this.form.skiPassPrice,
                    }
                }, conf)
                .then(response => {
                    if (response.data) {
                        this.errors = null;
                        this.hotelRooms = Object.values(response.data);
                    } else {
                        this.hotelRooms = [];
                        this.errors = 'Все номера в этом отеле проданы.';
                    }
                })
                .catch(error => {
                    this.errors = 'Ошибка запроса информации по выбранному номеру в отеле.';
                    console.log("error", error);
                });
        },
        setBreakfast(index, val) {
            this.hotelRooms[index].breakfast = val
            this.form.hotelBreakfast = val
            this.hotelRooms[index].breakfastChoosen = 1
        },
        setRoomBed(index, bed) {
            this.form.bed = bed
            this.hotelRooms[index].bedChoosen = bed

            if (this.hotelRooms[index].breakfasts === 1) {
                this.hotelRooms[index].breakfastChoosen = 1
                this.form.hotelBreakfast = 1
            } else if (this.hotelRooms[index].breakfasts_no === 1) {
                this.hotelRooms[index].breakfastChoosen = 1
                this.form.hotelBreakfast = 0
            }
            this.hotelRooms.forEach(function (item, key, array) {
                if (key !== index) {
                    item.bedChoosen = null
                }
            })
        },
        getActiveRoomBeds() {
            const conf = {
                responseType: 'text'
            };
            const data = {};
            axios
                .get("api/roombeds/" + this.form.room, data, conf)
                .then(response => {
                    if (response.data) {
                        this.errors = null
                        this.hotelRoomBeds = Object.values(response.data)
                    } else {
                        this.errors = 'Ошибка получения размещений.';
                    }
                })
                .catch(error => {
                    this.errors = 'Ошибка запроса api/roombeds/.';
                    console.log("error", error);
                });
        },
        saveGuest() {
            const conf = {
                responseType: 'text',
                timeout: 1000
            };
            const data = {
                email: this.form.email,
                phone: this.form.phone,
                name: this.form.fname,
                lastname: this.form.sname,
            };
            axios
                .post("api/guest/", data, conf, {timeout: 1000})
                .then(response => {
                    if (response.data.status === 201) {
                        this.errors = null
                    } else if (response.data.status === 200) {
                        this.errors = null
                        this.form.guest = Object.values(response.data)
                    }
                })
                .catch(error => {
                    this.errors = 'Ошибка запроса api/guest/.';
                    console.log("error", error);
                });
        },
        updateQuota(tourNumber) {
            const conf = {
                responseType: 'text',
                timeout: 1000
            };
            const data = {
                tourNumber: tourNumber
            }
            axios
                .post("api/quota/", data, conf, {timeout: 1000})
                .then(response => {
                    if (response.data.status === 201) {
                        this.errors = null
                    } else if (response.data.status === 200) {
                        this.errors = null
                    }
                })
                .catch(error => {
                    this.errors = 'Ошибка запроса api/quota/.';
                    console.log("error", error);
                });
        }
    },
    created: function () {
    },
    beforeMount() {
        this.getActivePasses()
        this.getEvent()
    },
    mounted: function () {
        let get_parameters = this.$route.query
        if (get_parameters.step === '6' && get_parameters.par !== '0') {
            this.step = 6
            this.form.payed = 0
        } else if (get_parameters.step === '6' && get_parameters.par === '0') {
            this.step = 6
            this.form.payed = 1
        }
    },
    updated() {

    },
    computed: {
        dateFrom() {
            if (this.form.pasCurrent.is_hotel === 1) {
                return 'дата приезда'
            } else {
                return 'дата действия браслета с'
            }
        },
        calcTourPrice() {
            if (this.form.pasCurrent.is_hotel === 0) {
                this.form.tourPrice = this.form.pasCurrent.price * this.form.adults
                return this.form.tourPrice - this.form.passDiscount;
            } else if (this.form.pasCurrent.is_hotel === 1) {
                return this.form.tourPrice - this.form.passDiscount;
            }
        },
        dateTill() {
            if (this.form.pasCurrent.is_hotel === 1) {
                return 'дата выезда'
            } else {
                return 'дата действия браслета по'
            }
        },
        userFIO() {
            return this.form.fname + ' ' + this.form.sname;
        },
        guestsNum() {
            let kids = ''
            let adults = ''
            if (this.form.kids) {
                if (this.form.kids === 1) {
                    kids = ' / ' + this.form.kids + ' ребенок'
                } else if (this.form.kids > 1) {
                    kids = ' / ' + this.form.kids + ' детей'
                }
            }
            if (this.form.adults > 1) {
                adults = this.form.adults + ' взрослых'
            } else {
                adults = this.form.adults + ' взрослый'
            }
            return adults + kids;
        },
        setTourName() {
            if (this.form.pasCurrent.is_hotel === 1 && this.form.hotel) {
                this.form.tourName = 'New Star Camp tour, hotel: ' + this.form.hotelCurrent.name;
            } else {
                this.form.tourName = 'New Star Camp Festival Pass';
            }
            return this.form.tourName;
        },
        activeRooms() {
            return this.hotelRooms.filter(room => {
                return room.maxGuests >= this.form.adults
            })
        },
        activeRoomBeds() {
            return this.hotelRoomBeds
        },
    },
    watch: {},
    destroyed() {

    },
});