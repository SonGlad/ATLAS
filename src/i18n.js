import i18next from "i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from 'react-i18next';
import I18NextHttpBackend from "i18next-http-backend";



i18next
    .use(I18NextHttpBackend)
    .use(I18nextBrowserLanguageDetector)
    .use(initReactI18next)
    .init({
        default: 'ro',
        debug: true,
        defaultNS: 'translation',
        fallbackLng: 'ro',
        // lng: 'ro',
        backend: {
            loadPath: '/ATLAS/locales/{{lng}}/translation.json'
        },
        react: {
            useSuspense: true
        },
        detection: {
            order: ['navigator', 'htmlTag', 'path', 'subdomain'],
            caches: ['localStorage', 'cookie'],
        },
    });

export default i18next;