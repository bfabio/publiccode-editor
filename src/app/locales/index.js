import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import it from "./it";

const resources = {
  it: {
    translation: it,
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'it',
    keySeparator: false,
    interpolation: {
      // React already escapes values to prevent XSS
      escapeValue: false
    }
});

export default i18n;
