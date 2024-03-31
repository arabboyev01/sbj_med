import { GetServerSideProps } from "next";
import axios from "axios";
import { ApiBaseURL } from "@/shared/config";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const slug = context.query.slug;

  if (!slug) {
    return {
      notFound: true,
    };
  }

  try {
    const url = `${ApiBaseURL}/appointment/program/${slug}`;
    const response = await axios.get(url);
    const data = await response.data;

    return {
      props: {
        program: data,
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
};

export { ProgramContent as default } from "@/pages/programs-content";
