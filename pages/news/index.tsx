import { GetServerSideProps } from "next";
import axios from "axios";
import { ApiBaseURL } from "@/shared/config";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const page = context.query.page ?? 1;
  try {
    const url = `${ApiBaseURL}/blog/post/list`;
    const params = { page, page_size: 14 };
    const response = await axios.get(url, { params });
    const data = await response.data;

    return {
      props: {
        news: data,
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
};

export { News as default } from "@/pages/news";
