import { PaddingWrapper, Subheader } from "@/shared/ui";
import { breadcrumbs_list } from "./config";
import { NewsList } from "./news-list";
import { NewsListType } from "@/shared/inderface";

type NewsType = {
  news: NewsListType;
};

const News = ({ news }: NewsType) => {
  return (
    <>
      <Subheader render={breadcrumbs_list} title="Новости" />
      <PaddingWrapper pt={100} pb={100}>
        <NewsList news={news} />
      </PaddingWrapper>
    </>
  );
};

export default News;
