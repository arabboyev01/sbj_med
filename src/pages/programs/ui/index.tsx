import { PaddingWrapper, Subheader } from "@/shared/ui";
import { breadcrumbs_list } from "./config";
import { ProgramsList } from "./programs-list";

const Programs = () => {
  return (
    <>
      <Subheader render={breadcrumbs_list} title="Программы" />
      <PaddingWrapper pt={100} pb={100}>
        <ProgramsList />
      </PaddingWrapper>
    </>
  );
};

export default Programs;
