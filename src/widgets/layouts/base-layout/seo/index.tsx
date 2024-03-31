import { NextSeo } from "next-seo";

const Seo = () => {
  return (
    <NextSeo
      additionalLinkTags={[
        {
          rel: "icon",
          href: "/favicon.ico",
        },
      ]}
      additionalMetaTags={[
        {
          name: "keywords",
          content: "",
        },
        {
          name: "viewport",
          content: "width=device-width,initial-scale=1",
        },
        {
          name: "apple-mobile-web-app-capable",
          content: "yes",
        },
      ]}
    />
  );
};

export default Seo;
