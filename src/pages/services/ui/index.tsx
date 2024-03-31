import { PaddingWrapper, Subheader } from "@/shared/ui";
import { ServiceList } from "./services-list";
import { breadcrumbs_list } from "./config";

const Services = () => {
  return (
    <>
      <Subheader render={breadcrumbs_list} title="Услуги" />
      <PaddingWrapper pt={100} pb={100}>
        <ServiceList />
      </PaddingWrapper>
    </>
  );
};

export default Services;
