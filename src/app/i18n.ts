import i18n from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import { resources } from "app/constants";


i18n
    //.use(LanguageDetector)
    .init({
        resources,
        fallbackLng: "en",

        interpolation: {
            escapeValue: false
        },
        debug: false
    });
export default i18n;