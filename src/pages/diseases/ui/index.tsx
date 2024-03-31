import { PaddingWrapper, Subheader } from "@/shared/ui";
import { breadcrumbs_list } from "./config";
import { DiseasesList } from "./diseases-list";

const Diseases = () => {
  return (
    <>
      <Subheader render={breadcrumbs_list} title="Болезни по буквам алфавита" />
      <PaddingWrapper pt={100} pb={100}>
        <DiseasesList />
      </PaddingWrapper>
    </>
  );
};

export default Diseases;
