import { PaddingWrapper, Subheader } from "@/shared/ui";
import { breadcrumbs_list } from "./config";
import { Tabs } from "./tab";
import { Form } from "./form";

const Partnership = () => {
  return (
    <>
      <Subheader render={breadcrumbs_list} title="Партнерство" />
      <PaddingWrapper pt={100}>
        <Tabs />
      </PaddingWrapper>
      <PaddingWrapper pt={100} pb={100}>
        <Form />
      </PaddingWrapper>
    </>
  );
};

export default Partnership;
