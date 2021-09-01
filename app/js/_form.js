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
    touch(el) {
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
        domain: document.domain,
        locales: {
            'ru': "RU",
            'en': "EN",
        },
        phpPath: '',
        selectedLocale: 'ru',
        days: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        minDays: 10,
        promocode: null,
        activePass: null,
        passDetails: null,
        gallery: null,
        hotelGallery: null,
        roomGallery: null,
        form: {
            event: 2,
            pass: null,
            pasCurrent: null,
            dateFrom: '2022-04-01',
            dateTill: '2022-04-10',
            tourDays: 9,
            adults: null,
            adultsText: null,
            kids: null,
            kidsText: null,

            hotel: null,
            hotelName: null,
            hotelCurrent: null,
            hotelBreakfast: null,
            hotelBreakfastText: null,
            hotelBreakfastPrice: null,
            hotelPrice: null,
            address: null,
            room: null,
            roomName: null,
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
            skipassPrice: 0,
            tourPrice: 0,
            arrTourDays: null,
            payed: null,
            passDiscount: 1
        },
        translations: {
            title: {
                'ru': 'Купить тур',
                'en': 'Tour Booking',
            },
            titleP: {
                'ru': 'Купить Festival Pass',
                'en': 'Tour Pass',
            },
            stepTour: {
                'ru': 'Выберите тип посещения фестваля',
                'en': 'Choose your tour',
            },
            roomType: {
                'ru': 'Тип номера',
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
                'ru': 'SOLD OUT',
                'en': 'SOLD OUT'
            },
            stepNext: {
                'ru': 'Далее',
                'en': 'Next'
            },
            tourPriceText: {
                'ru': 'cтоимость: ',
                'en': 'сost: '
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
                'ru': 'с завтраком',
                'en': 'with breakfast'
            },
            hotelMailNoBreakfast: {
                'ru': 'без завтрака',
                'en': 'no breakfast'
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
                'ru': 'пользовательское соглашение',
                'en': 'user agreement'
            },
            newStarFAQ: {
                'ru': 'Часто задаваемые вопросы и ответы',
                'en': 'FAQ'
            },
            stepThree: {
                'ru': 'Заполните персональные данные и оставьте контактную информацию',
                'en': 'Please fill the personal information'
            },
            stepFour: {
                'ru': 'Проверьте введенные данные, подтвердите согласие на их обработку, введите промокод, если имеется, и ' +
                    'нажмите кнопку «Купить тур»',
                'en': 'Check your details, enter promocode'
            },
            stepDates: {
                'ru': 'Выберите даты',
                'en': 'Please, choose dates'
            },
            dateNote: {
                'ru': '* Туры длительностью менее 9 дней станут доступны с 01.01.2021',
                'en': '* Туры длительностью менее 9 дней станут доступны с 01.01.2021',
            },
            tourAdults: {
                'ru': 'Количество взрослых',
                'en': 'Number of adults',
            },
            tourKids: {
                'ru': 'Количество детей',
                'en': 'Number of children',
            },
            stepHotel: {
                'ru': 'Выберите отель и тип номера',
                'en': 'Please, choose your accommodation'
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
            errorMinDates: {
                'ru': 'Туры менее 2 дней недоступны',
                'en': 'Minimal tour, 2 days'
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
            tourIncludedP: {
                'ru': '<p><b>В тур включено:</b></p></li>' +
                    '<ul></li>' +
                    '<li> Браслет участника</li></li>' +
                    '</ul>',
                'en': '<p><b>Tour details:</b></p></li>' +
                    '<ul></li>' +
                    '<li> Festival PASS</li></li>' +
                    '</ul>',
            },
            tourIncluded: {
                'ru': '<p><b>В тур включено:</b></p></li>' +
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
            tourSuccess: {
                'ru': '<p>Вы успешно оформили тур New Star Camp.</p></li>' +
                    '<p>Ваучер отправлен на email.</p></li>' +
                    '<p>Скоро увидимся ;)</p></li>',
                'en': '<p>You win! :)</p>' +
                    '<p>Voucher goes to email right now.</p></li>' +
                    '<p>See you soon ;)</p></li>',
            },
            tourFail: {
                'ru': '<p>Возникла ошибка при проведении платежа,</li>' +
                    '<a href="#">попробуйте еще раз</a>.</p>',
                'en': '<p>An error occurred while making a payment, </li>' +
                    '<a href="#">try again</a>.</p>'
            },
            newStarDesc: {
                'ru': 'ООО «Нью Стар» — организатор спортивно-музыкального фестиваля New Star Camp,</li>' +
                    'который пройдёт 1 - 3 октября 2021 года на всесезонном горном курорте «Роза Хутор» (Сочи)',
                'en': '“New Star” LLC is the organizer of “New Star Camp” sports and music festival, that will</li>' +
                    ' be held on March 1 - 3 October, 2021 at Russian ski resort “Rosa Khutor” (Sochi).'
            }
        },
        sent: false,
        showModal: false,
        showOffer: false,
        step: 1,
        totalsteps: 4,
        errors: null,
        guests: 1,
        error: null,

        steps: [
            {
                active: true,
                id: 1,
                name: {
                    'ru': 'Выбор<br> категории',
                    'en': 'Choose<br> your tour'
                },
                text: 'text-left',
                col: 'col',
            },
            // {
            //     active: false,
            //     id: 2,
            //     name: {
            //         'ru': 'Выбор<br> даты',
            //         'en': 'Choose<br> dates'
            //     },
            //     text: 'text-center',
            //     col: 'col-3',
            // },
            {
                active: false,
                id: 2,
                name: {
                    'ru': 'Выбор<br> отеля',
                    'en': 'Choose<br> accommodation'
                },
                text: 'text-center',
                col: 'col-3',
            },
            {
                active: false,
                id: 3,
                name: {
                    'ru': 'Персональные<br> данные',
                    'en': 'Personal<br> details'
                },
                text: 'text-center',
                col: 'col-3',
            },
            {
                active: false,
                id: 4,
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
        passPDetails: false,

        passes: null,
        hotelQuota: '',
        freeHotels: [],
        hotelRooms: null,
        hotelRoomBeds: null,
        hotels: [],
    },
    methods: {
        setLocale: function (locale) {
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
        scrollToTop(){
            let element = document.getElementById("orderForm");
            window.scrollTo(0, element.offsetTop)
        },
        prevStep() {
            if (this.form.pasCurrent.is_hotel === 1) {
                this.step--;
                this.form.consent = null
                this.scrollToTop()
            } else {
                if (this.step === 4) {
                    this.step = this.step - 2;
                    this.form.consent = null
                } else {
                    this.step--;
                    this.form.consent = null
                    this.scrollToTop()
                }
            }

        },
        nextStep() {
            if (this.step === 1) {
                if (!this.form.pass) {
                    this.errors = this.translations.errorChoosePass[this.selectedLocale];
                    return false;
                } else {
                    this.errors = null
                    this.step++
                    this.scrollToTop()
                }
            } else if (this.step === 2) {
                if (!this.form.adults) {
                    this.errors = this.translations.errorChooseAdults[this.selectedLocale];
                    return false;
                } else {
                    this.errors = null
                }
                if ((!this.form.hotel || !this.form.room || !this.form.bed) && (this.form.pasCurrent.is_hotel === 1 && this.form.adults)) {
                    this.errors = this.translations.errorChooseRoom[this.selectedLocale];
                    return false;
                }
                if (this.form.adults && this.errors == null) {
                    this.step++
                    this.scrollToTop()
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
        showPassDetail(passCode) {
            let curPass = this.passes.indexOf(this.passes.find(pass => pass.code === passCode))
            if (!this.passes[curPass].back) {
                this.passes[curPass].back = true;
            } else {
                this.passes[curPass].back = false;
            }
        },
        setPassActive(code) {
            this.activePass = code
            let pasCurrent = this.passes.filter(pass => {
                return pass.code === code
            })
            this.form.pasCurrent = pasCurrent[0]
            if (this.form.pasCurrent.is_hotel === 1) {
                this.getActiveHotels()
            }

            this.form.pass = code
        },
        getHotelPhotos() {
            const conf = {
                responseType: 'text',
            };
            const data = {
                hotelId: this.form.hotel
            };
            axios
                .get(this.phpPath + "api/hotelimg/" + this.form.hotel, data, conf)
                .then(response => {
                    if (response.data) {
                        this.errors = null
                        this.cleanCurrentRoom()
                        this.getActiveHotelRooms()
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
        cleanCurrentRoom() {
            if (this.step === 2) {
                this.form.roomCurrent = null
                this.form.room = null
                this.form.hotelBreakfast = null
                this.form.hotelBreakfastPrice = null
            }
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
                .get(this.phpPath + "api/roomimg/" + this.form.room, data, conf)
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
                            "url": this.domain + 'app/images/hotels/take1.width-1200.jpegquality-99.png'
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
        applyPromoCode() {
            this.errors = null;
            const conf = {
                responseType: 'text'
            };
            const data = {
                promocode: this.promocode,
                tourPass: this.form.pass
            };
            axios
                .post(this.phpPath + "php/checkPCode.php", data, conf)
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
                url: this.phpPath + 'app/php/send.php',
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
                    [5, this.translations.guestssMail[this.selectedLocale]],
                    [6, this.translations.guestssMail[this.selectedLocale]]
                ]);

                let adultsGuests = this.form.adults + ' ' + guestsText.get(this.form.adults);
                let kids = this.form.kids !== 1 || this.form.kids !== 2 ? 0 : this.form.kids
                let tourDaysCount = Math.round(Number(this.form.tourDays))
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

                if (this.form.pasCurrent.is_hotel === 1) {
                    let breakfast
                    if (this.form.roomCurrent.breakfasts === 1) {
                        breakfast = this.translations.hotelMailBreakfast[this.selectedLocale]
                    } else {
                        breakfast = this.form.hotelBreakfast === true ?
                            this.translations.hotelMailBreakfast[this.selectedLocale] : this.translations.hotelMailNoBreakfast[this.selectedLocale]
                    }

                    fdata.append('room', this.form.room);
                    fdata.append('bed', this.form.bed);
                    fdata.append('roomName', this.form.roomCurrent.name);
                    fdata.append('hotel', this.form.hotel);
                    fdata.append('hotelName', this.form.hotelCurrent.name);
                    fdata.append('address', this.form.hotelCurrent.address);
                    fdata.append('hotelBreakfast', breakfast);
                    this.form.hotelBreakfastText = breakfast
                    fdata.append('breakfasts', this.form.hotelBreakfast);
                }

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
                fdata.append('dateFrom', this.form.dateFrom.toLocaleString("ru", options))
                fdata.append('dateTill', this.form.dateTill.toLocaleString("ru", options));
                fdata.append('adults', adultsGuests);
                this.form.adultsText = adultsGuests
                fdata.append('adultsNum', this.form.adults);
                fdata.append('kids', kids);
                this.form.kidsText = kids
                fdata.append('hotelPrice', this.form.hotelPrice);
                fdata.append('tourPrice', this.form.tourPrice);
                fdata.append('skipassPrice', this.form.skipassPrice);
                fdata.append('breakfastPrice', this.form.hotelBreakfastPrice);
                fdata.append('passDiscount', this.form.passDiscount);
                fdata.append('tourDays', String(tourDaysCount));

                axios({
                    method: 'post',
                    url: this.phpPath + 'app/php/saveVoucher.php',
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
        getPassPrice(pass) {
            const conf = {
                responseType: 'text'
            };
            const data = {
                event: 'nsc',
                pass: pass
            };
            axios
                .post(this.phpPath + "php/getPassPrice.php", data, conf)
                .then(response => {
                    if (response.data) {
                        this.errors = null;
                        this.freeHotels = Array.from(response.data);
                    } else {
                        console.log('response.data')
                        console.log(response.data)
                        this.errors = 'Ошибка получения цены.';
                    }
                })
                .catch(error => {
                    this.errors = 'Ошибка запроса информации по ценам.';
                    console.log("error", error);
                });

        },
        getActivePasses() {
            const conf = {
                responseType: 'text'
            };
            const data = {
                event: this.form.event
            };
            axios
                .get(this.phpPath + "api/passes", data, conf)
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
                    this.errors = 'Error axios.get query.'
                    console.log("error", error)
                });
        },
        getActiveHotels() {
            if (this.form.pasCurrent.is_hotel === 1) {
                let option = {
                    day: 'numeric',
                };
                // let dayStart = parseInt(this.form.dateFrom.toLocaleString("ru", option));
                // let dayEnd = parseInt(this.form.dateTill.toLocaleString("ru", option));
                // let thisTourDays = this.days.slice(vm.days.indexOf(dayStart), vm.days.indexOf(dayEnd))
                let thisTourDays = this.form.tourDays

                const conf = {
                    responseType: 'text'
                };
                const data = {
                    tourDays: thisTourDays
                };
                axios
                    .get(this.phpPath + "api/hotels", data, conf)
                    .then(response => {
                        if (response.data) {
                            this.cleanCurrentRoom()
                            if (this.form.adults && this.form.hotel) {
                                this.getActiveHotelRooms()
                            }
                            this.hotels = Object.values(response.data)
                        } else {
                            this.errors = 'Нет доступных отелей на эти даты.';
                        }
                    })
                    .catch(error => {
                        this.errors = 'Ошибка запроса информации по выбранному отелю.';
                        console.log("error", error);
                    });
            }
        },
        getActiveHotelRooms() {
            let option = {
                day: 'numeric',
            };

            let dayStart = parseInt(this.form.dateFrom.toLocaleString("ru", option));
            let dayEnd = parseInt(this.form.dateTill.toLocaleString("ru", option));

            // let thisTourDays = this.days.slice(vm.days.indexOf(dayStart), vm.days.indexOf(dayEnd))
            let tourDays = this.form.tourDays

            if (this.form.pasCurrent.is_hotel === 1) {
                if (this.form.adults) {
                    const conf = {
                        responseType: 'text'
                    };
                    axios
                        .get(this.phpPath + "api/hotelrooms/" + this.form.hotel, {
                            params: {
                                hotelId: this.form.hotel,
                                tourDays: tourDays,
                                adults: this.form.adults,
                                dateStart: this.form.dateFrom,
                                dateEnd: this.form.dateTill
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
                        .catch( error  => {
                            this.errors = 'Ошибка запроса информации по выбранному номеру в отеле.';
                            console.log("error", error);
                        });
                } else {
                    this.errors = 'Количество гостей не выбрано.';
                }
            } else {
                console.log('arRooms empty');
            }
        },
        getActiveRoomBeds() {
            const conf = {
                responseType: 'text'
            };
            const data = {};
            axios
                .get(this.phpPath + "api/roombeds/" + this.form.room, data, conf)
                .then(response => {
                    if (response.data) {
                        this.errors = null
                        this.hotelRoomBeds = Object.values(response.data)
                    } else {
                        this.errors = 'Ошибка получения размещений.';
                    }
                })
                .catch(error => {
                    this.errors = 'Ошибка запроса.';
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
                .post(this.phpPath + "api/guest/", data, conf, {timeout: 1000})
                .then(response => {
                    if (response.data.status === 201) {
                        this.errors = null
                    } else if (response.data.status === 200) {
                        this.errors = null
                        this.form.guest = Object.values(response.data)
                    }
                })
                .catch(error => {
                    this.errors = 'Ошибка запроса saveGuest.';
                    console.log("error", error);
                });
        },
        saveApiVoucher() {
            this.form.guests = [
                this.form.gfname + ' ' + this.form.gsname,
                this.form.g3fname + ' ' + this.form.g3sname,
                this.form.g4fname + ' ' + this.form.g4sname,
                this.form.g5fname + ' ' + this.form.g5sname,
                this.form.g6fname + ' ' + this.form.g6sname,
            ]
            const conf = {
                responseType: 'text',
                timeout: 1000
            };
            const data = this.form
            axios
                .post(this.phpPath + "api/voucher/", data, conf, {timeout: 1000})
                .then(response => {
                    if (response.data.status === 201) {
                        this.errors = null
                    } else if (response.data.status === 200) {
                        this.errors = null
                    }
                })
                .catch(error => {
                    this.errors = 'Ошибка запроса saveVoucher.';
                    console.log("error", error);
                });
        },
        updateQuota(tourNumber){
            const conf = {
                responseType: 'text',
                timeout: 1000
            };
            const data = {
                tourNumber: tourNumber
            }
            axios
                .post(this.phpPath + "api/quota/", data, conf, {timeout: 1000})
                .then(response => {
                    if (response.data.status === 201) {
                        this.errors = null
                    } else if (response.data.status === 200) {
                        this.errors = null
                    }
                })
                .catch(error => {
                    this.errors = 'Ошибка запроса updateQuota.';
                    console.log("error", error);
                });
        }
    },
    created: function () {
        this.getActivePasses()
    },
    beforeMount() {
    },
    mounted: function () {
        get_parameters = this.$route.query
        console.log('step 1' + this.step)
        if (get_parameters.step === '5' && get_parameters.par !== '0') {
            this.step = 5
            this.form.payed = 0
            console.log('step ' + this.step)
        } else if (get_parameters.step === '5' && get_parameters.par === '0') {
            console.log('step 2' + this.step)
            this.step = 5
            this.form.payed = 1
            console.log('step 3' + this.step)
            this.sendMail(get_parameters.tourNumber)
            this.updateQuota(get_parameters.tourNumber)
        }
        // check available rooms
        let step = document.getElementById("stepper");
        step.addEventListener('click', () => {
            if (this.form.adults && this.step !== 5) {
                if (this.form.pasCurrent.is_hotel === 1) {
                    this.getActiveHotels()
                }
            }
        });
    },
    updated() {

    },
    computed: {
        getDomain() {
            if (this.domain === 'localhost') {
                this.phpPath = 'nscamp/app/'
            } else {
                this.phpPath = ''
            }
        },
        dateFrom() {
            if (this.form.pasCurrent.is_hotel === 1) {
                return 'дата приезда'
            } else {
                return 'дата действия браслета с'
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
        roomName() {
            if (this.form.pasCurrent.is_hotel === 1 && this.form.hotel) {
                this.form.roomName = this.form.roomCurrent.name
                return this.form.roomName
            } else {
                return false
            }
        },
        currentHotel() {
            if (this.hotels && this.form.hotel) {
                let curHotel = this.hotels.find(hotel => hotel.id === this.form.hotel)
                this.form.hotelCurrent = curHotel
                return this.hotels.indexOf(curHotel)
            }
        },
        setTourName() {
            if (this.form.pasCurrent.is_hotel === 1 && this.form.hotel) {
                this.form.tourName = 'New Star Camp tour, hotel: ' + this.form.hotelCurrent.name;
            } else {
                this.form.tourName = 'New Star Camp Festival Pass';
            }
            return this.form.tourName;
        },
        calcTourDays() {
            let tourDays = 0
            if (this.form.dateFrom && this.form.dateTill) {
                tourDays = ((this.form.dateTill - this.form.dateFrom) / 1000 / 60 / 60 / 24)
                this.form.tourDays = tourDays
            }
        },
        activePasses() {
            if (this.passes) {
                return this.passes
            } else {
            }
        },
        activeHotels() {
            return this.hotels.filter(hotel => {
                return hotel.maxGuests >= this.form.adults
            })
        },
        activeRooms() {
            return this.hotelRooms.filter(room => {
                return room.maxGuests >= this.form.adults
            })
        },
        activeRoomBeds() {
            return this.hotelRoomBeds
        },
        calcTourPrice() {
            let totalPrice = 0;
            let skiPass = 0;
            let curPass = this.passes.indexOf(this.passes.find(pass => pass.code === this.form.pass))

            let curRoom = ''
            let gain = ''
            let hotelTotalPrice = 0
            let allBreakfasts = 0

            if (this.form.pasCurrent.is_hotel === 1 && this.form.hotelCurrent && this.form.roomCurrent) {
                curRoom = this.form.room
                gain = this.form.hotelCurrent.gain
            }

            let daysTour = this.form.tourDays
            let passDayPrice = this.passes[curPass].price
            let passPrice = 0
            if (this.form.pasCurrent.is_hotel === 1) {
                passPrice  = (passDayPrice * this.form.adults) * this.form.passDiscount
            } else {
                if (this.form.adults >= 4) {
                    passPrice = (passDayPrice * this.form.adults) * 0.8
                } else {
                    passPrice  = (passDayPrice * this.form.adults) * this.form.passDiscount
                }
            }


            if (this.form.passDiscount < 1) {
                this.form.promocode = this.promocode
            }

            if (this.form.roomCurrent && this.form.pasCurrent.is_hotel === 1) {
                let option = {
                    day: 'numeric',
                };
                let dayStart = 1 // parseInt(this.form.dateFrom.toLocaleString("ru", option));
                let dayEnd = 3 //parseInt(this.form.dateTill.toLocaleString("ru", option));

                const reducer = (accumulator, currentValue) => accumulator + currentValue

                // let arrPrices = this.hotels[curHotel].rooms[curRoom].prices[this.form.adults].slice(vm.days.indexOf(dayStart), vm.days.indexOf(dayEnd));
                arCurRoom = this.form.roomCurrent

                let arrPrices = 0
                if (this.form.adults === 1) {
                    arrPrices = arCurRoom.price_room * daysTour
                } else if (this.form.adults === 2) {
                    arrPrices = arCurRoom.price_room2 * daysTour
                } else if (this.form.adults === 3) {
                    arrPrices = arCurRoom.price_room3 * daysTour
                } else if (this.form.adults === 4) {
                    arrPrices = arCurRoom.price_room4 * daysTour
                } else if (this.form.adults === 5) {
                    arrPrices = arCurRoom.price_room5 * daysTour
                } else if (this.form.adults === 6) {
                    arrPrices = arCurRoom.price_room6 * daysTour
                }

                if (this.form.hotelBreakfast) {
                    if (this.form.adults === 1) {
                        allBreakfasts = arCurRoom.price_breakfasts * daysTour
                    } else if (this.form.adults === 2) {
                        allBreakfasts = arCurRoom.price_breakfasts2 * daysTour
                    } else if (this.form.adults === 3) {
                        allBreakfasts = arCurRoom.price_breakfasts3 * daysTour
                    } else if (this.form.adults === 4) {
                        allBreakfasts = arCurRoom.price_breakfasts4 * daysTour
                    } else if (this.form.adults === 5) {
                        allBreakfasts = arCurRoom.price_breakfasts5 * daysTour
                    } else if (this.form.adults === 6) {
                        allBreakfasts = arCurRoom.price_breakfasts6 * daysTour
                    }
                }

                // hotelTotalPrice = arrPrices.reduce(reducer);
                hotelTotalPrice = arrPrices;

                // let skiPassDays = daysTour < 6 ? daysTour : daysTour - 1;
                // skiPassDays = daysTour = 2 ? daysTour + 1 : skiPassDays;
                // skiPassDays = daysTour > 6 ? skiPassDays - 2 : skiPassDays;
                // let skiPassPrice = ((skiPass * skiPassDays) * this.form.adults);
                let skiPassPrice = 0;

                /*if (this.hotels[curHotel].rooms[curRoom].breakfasts_included === true) {
                    this.form.hotelBreakfast = true;
                    allBreakfasts = 0;
                    this.form.hotelBreakfastPrice = allBreakfasts;
                } else if (this.hotels[curHotel].rooms[curRoom].breakfasts_no === false
                    && this.form.hotelBreakfast === true) {
                    let arrBreakfast = vm.hotels[curHotel].rooms[curRoom].breakfasts[this.form.adults].slice(vm.days.indexOf(dayStart), vm.days.indexOf(dayEnd));
                    allBreakfasts = arrBreakfast.reduce(reducer);
                    this.form.hotelBreakfastPrice = allBreakfasts;
                } else {
                    this.form.hotelBreakfastPrice = 0
                    allBreakfasts = 0
                }*/

                if (this.form.adults > 0 && daysTour >= this.minDays) {
                    totalPrice =
                        skiPassPrice + passPrice + ((hotelTotalPrice + allBreakfasts) * gain)

                    if (window.location.href !== 'https://nswpay.ru/') {
                        console.log('Start -- adults ' + this.form.adults)
                        console.log('daysTour ' + daysTour)
                        console.log('hotelTotalPrice dayStart indexOf ' + vm.days.indexOf(dayStart))
                        console.log('hotelTotalPrice dayStart ' + dayStart)
                        console.log('hotelTotalPrice dayEnd indexOf ' + vm.days.indexOf(dayEnd))
                        console.log('hotelTotalPrice dayEnd ' + dayEnd)
                        console.log('passPrice no discount ' + (this.passes[curPass].price * this.form.adults))
                        console.log('passPrice ' + passPrice)
                        console.log('skipassPrice ' + skiPassPrice)
                        console.log('discount ' + this.form.passDiscount)
                        console.log('hotelTotalPrice ' + hotelTotalPrice)
                        console.log('allBreakfasts ' + allBreakfasts)
                        console.log('gain ' + gain)
                        console.log('hotelTotalPrice + breafast * gain ' + (hotelTotalPrice + allBreakfasts) * gain)
                    }

                    this.form.hotelPrice = hotelTotalPrice
                    this.form.skipassPrice = ((skiPass * (daysTour - 1)) * this.form.adults)
                    this.form.hotelBreakfastPrice = allBreakfasts
                    this.form.tourPrice = Math.ceil(totalPrice)
                    return Math.ceil(totalPrice) + '₽'
                }
            } else if (this.form.pasCurrent.is_hotel === 0) {
                totalPrice = passPrice
                if (totalPrice === 0) {
                    totalPrice = 1
                }

                this.form.tourPrice = Math.ceil(totalPrice)

                return Math.ceil(totalPrice) + '₽'
            } else {
                return 'Ошибка расчета';
            }
        }
    },
    watch: {},
    destroyed() {

    }
});