import { PaddingWrapper, Subheader } from "@/shared/ui";
import { ServiceList } from "./services-list";
import { breadcrumbs_list } from "./config";
import { useScopedI18n } from "@/features/locales";

const Services = () => {
  const t = useScopedI18n("services");
  return (
    <>
      <Subheader render={breadcrumbs_list} title={t("title")} />
      <PaddingWrapper pt={100} pb={100}>
        <ServiceList />
      </PaddingWrapper>
    </>
  );
};

export default Services;
