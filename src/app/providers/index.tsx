import type { AppProps, AppType } from "next/app";
import { Provider } from "react-redux";
import store from "../store";
import "swiper/scss";
import "swiper/scss/pagination";
import { I18nProvider } from "@/features/locales";

export const withProvider = (Component: AppType) => {
  const withProvider = (props: AppProps) => (
    <I18nProvider locale={props.pageProps.locale}>
      <Provider store={store}>
        <Component {...props} />
      </Provider>
    </I18nProvider>
  );

  // Set display name
  withProvider.displayName = `withProvider(${
    Component.displayName || Component.name || "Component"
  })`;

  return withProvider;
};
