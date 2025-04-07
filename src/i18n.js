import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import Backend from 'i18next-http-backend';
import laungageDetector from 'i18next-browser-languagedetector';

// import language files
import uzWords from './languages/uz.json';
import ruWords from './languages/ru.json';
import engWords from './languages/eng.json';

i18n
.use(Backend)
.use(laungageDetector)
.use(initReactI18next)
.init({
    fallbackLng:'en',
    lng:'uz',
    debug:true,
    resources:{
        uz:{translation:uzWords},
        ru:{translation:ruWords},
        en:{translation:engWords}
    }
})

export default i18n;