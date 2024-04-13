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
    const url = `${ApiBaseURL}/appointment/doctor/${slug}`;
    const response = await axios.get(url);
    const data = await response.data;

    return {
      props: {
        doctor: data,
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
};

export { DoctorContent as default } from "@/pages/doctor-content";