import { PaddingWrapper, Subheader } from "@/shared/ui";
import { breadcrumbs_list } from "./config";
import { DoctorsList } from "./doctors-list";

const Doctors = () => {
  return (
    <>
      <Subheader render={breadcrumbs_list} title="Наша команда врачей" />
      <PaddingWrapper pt={100} pb={100}>
        <DoctorsList />
      </PaddingWrapper>
    </>
  );
};

export default Doctors;
