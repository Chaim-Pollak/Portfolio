import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import he from "../src/locales/he.json";
import en from "../src/locales/en.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en,
      },
      he: {
        translation: he,
      },
    },
    fallbackLng: "en",
    detection: {
      order: ["navigator", "localStorage"],
    },
    interpolation: { escapeValue: false },
  });

document.documentElement.dir = i18n.language === "he" ? "rtl" : "ltr";

export default i18n;
