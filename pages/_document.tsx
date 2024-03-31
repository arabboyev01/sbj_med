import { Html, Head, Main, NextScript, DocumentProps } from "next/document";

const Document = (context: DocumentProps) => {
  const locale_label = context.locale;
  return (
    <Html className="page" lang={locale_label === "ru" ? "ru-UZ" : "uz-UZ"}>
      <Head>
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta content="#fff" name="theme-color" />
      </Head>
      <body className="page__body">
        <Main />
        <div id="modal" />
        <div id="notification" />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
