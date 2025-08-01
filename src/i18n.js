// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

// অনুবাদ ফাইলগুলো ইম্পোর্ট করা হলো।
// আমরা আলাদা ফাইল থেকে অনুবাদ লোড করব।
import translationBN from './locales/bn/translation.json';
import translationEN from './locales/en/translation.json';

// অনুবাদ করা রিসোর্সগুলো এখানে সংজ্ঞায়িত করা হয়েছে।
const resources = {
  en: {
    translation: translationEN
  },
  bn: {
    translation: translationBN
  }
};

i18n
  .use(LanguageDetector) // ব্রাউজারের ভাষা স্বয়ংক্রিয়ভাবে সনাক্ত করতে
  .use(initReactI18next) // react-i18next এর সাথে ইন্টিগ্রেট করতে
  .init({
    resources,
    fallbackLng: "en", // যদি কোনো ভাষা না পাওয়া যায়, তাহলে ডিফল্ট হিসেবে ইংরেজি ব্যবহার করা হবে।
    debug: false,
    interpolation: {
      escapeValue: false // React-এর XSS সুরক্ষার কারণে এটি বন্ধ করে দেওয়া হয়েছে।
    }
  });

export default i18n;
