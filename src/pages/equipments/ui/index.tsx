import { PaddingWrapper, Subheader } from "@/shared/ui";
import { breadcrumbs_list } from "./config";
import { EquipmentsList } from "./equipments-list";

const Equipments = () => {
  return (
    <>
      <Subheader render={breadcrumbs_list} title="Медицинского оборудования " />
      <PaddingWrapper pt={100} pb={100}>
        <EquipmentsList />
      </PaddingWrapper>
    </>
  );
};

export default Equipments;
