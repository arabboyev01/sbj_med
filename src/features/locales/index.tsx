import { createI18n } from "next-international";

export const {
  useI18n,
  useScopedI18n,
  I18nProvider,
  getLocaleProps,
  useChangeLocale,
  useCurrentLocale,
} = createI18n({
  en: () => import("./translations/en.json"),
  ru: () => import("./translations/ru.json"),
  uz: () => import("./translations/uz.json"),
});
