import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from '../public/en.json';
import bnTranslation from '../public/bn.json';

// Initialize i18n
i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslation,
    },
    bn: {
      translation: bnTranslation,
    },
  },
  lng: 'en', // Default language
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
