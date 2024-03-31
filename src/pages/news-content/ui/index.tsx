import { BreadcrumbsType, NewsType } from "@/shared/inderface";
import routing from "@/shared/routing";
import { HomeIcon, PaddingWrapper, Subheader } from "@/shared/ui";
import { NextNews } from "./next-news";
import { Content } from "./content";

type NewsProps = {
  news: NewsType;
};

const NewsContent = ({ news }: NewsProps) => {
  const breadcrumbs: (BreadcrumbsType & { key: number })[] = [
    {
      key: 1,
      path: routing.home,
      name: "Главная",
      icon: <HomeIcon />,
    },
    {
      key: 2,
      name: "Новости",
      path: routing.news,
    },
    {
      key: 3,
      name: news.title_ru,
    },
  ];

  return (
    <>
      <Subheader render={breadcrumbs} title={news.title_ru} />
      <PaddingWrapper pt={100} pb={80}>
        <Content news={news} />
      </PaddingWrapper>
      <PaddingWrapper pb={100}>
        <NextNews />
      </PaddingWrapper>
    </>
  );
};

export default NewsContent;
