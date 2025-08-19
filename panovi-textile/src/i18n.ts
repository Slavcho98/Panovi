import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en.json";
import de from "./locales/de.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: { en: { translation: en }, de: { translation: de } },
    fallbackLng: "en",
    supportedLngs: ["en", "de"],
    detection: {
      order: ["querystring", "localStorage", "navigator", "htmlTag"],
      lookupQuerystring: "lang",
      caches: ["localStorage"]
    },
    interpolation: { escapeValue: false }
  });

document.documentElement.lang = i18n.resolvedLanguage || "en";
i18n.on("languageChanged", (lng) => (document.documentElement.lang = lng));

export default i18n;
