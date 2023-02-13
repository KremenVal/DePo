import ru from "../components/header/header/img/ru.svg";
import us from "../components/header/header/img/us.svg";
import ua from "../components/header/header/img/ua.svg";

export default class Service {
    _header = {
        'ru': {
            'links': {
                'about_us': 'О нас',
                'how_it_works': 'Как это работает',
                'where_we_work': 'Где работаем',
                'faq': 'FAQ',
                'contacts': 'Контакты'
            }
        },
        'us': {
            'links': {
                'about_us': 'About us',
                'how_it_works': 'How it works',
                'where_we_work': 'Where we work',
                'faq': 'FAQ',
                'contacts': 'Contacts'
            }
        },
        'ua': {
            'links': {
                'about_us': 'Про нас',
                'how_it_works': 'Як це працює',
                'where_we_work': 'Де працюємо',
                'faq': 'FAQ',
                'contacts': 'Контакти'
            }
        },
        'languages': {
            'ru': {
                'language': 'Русский',
                'image': ru,
                'selectLanguage': 'Выберите язык'
            },
            'us': {
                'language': 'English',
                'image': us,
                'selectLanguage': 'Choose language'
            },
            'ua': {
                'language': 'Український',
                'image': ua,
                'selectLanguage': 'Оберіть мову'
            }
        }
    }

    _exchange_crypto = {
        ru: {
            main: 'Обменивай крипту и фиат без ограничений',
            main_text: 'Работает на смарт-контрактах',
            down: 'Листайте вниз',
            social: 'Наши социальные сети',
            actions: ['Отправить', 'Получить'],
            payment: 'Оплатить с',
            sending: 'Отправить',
            notes: 'Примечание',
            number: '4967777777',
            continueTrans: 'Продолжить передачу',
            placeHolder: 'Введите, чтобы добавить примечание',
        },
        us : {
            main: 'Exchange crypto and fiat without limits',
            main_text: 'Works on smart contracts',
            down: 'Scroll down',
            social: 'Our social networks',
            actions: ['Send', 'Receive'],
            payment: 'Pay with',
            sending: 'Send to',
            notes: 'Note',
            number: '12345678901',
            continueTrans: 'Continue Transfer',
            placeHolder: 'Type to add a note',
        },
        ua: {
            main: 'Обмінюй крипту та фіат без обмежень',
            mainText: 'Працює на смарт-контрактах',
            down: 'Гартуйте вниз',
            social: 'Наші соціальні мережі',
            actions: ['Відправити', 'Отримати'],
            payment: 'Платити з',
            sending: 'Відправити',
            notes: 'Примітка',
            number: '0981234567',
            continueTrans: 'Продовжити передачу',
            placeHolder: 'Введіть, щоб додати примітку',
        }
    }

    _currencies = {
        'BTC': {
            name: 'Bitcoin',
            cost: 23282.60
        },
        'ETH': {
            name: 'Ethereum',
            cost: 1671.67
        }
    }

    static _default = 'ua'

    getHeader = (language) => {
        return this._header[language];
    };

    getHeaderLanguages = () => {
        return this._header['languages'];
    };

    getExchangeCrypto = (language) => {
        return this._exchange_crypto[language];
    }

    getCurrencies = () => {
        return this._currencies;
    }
}