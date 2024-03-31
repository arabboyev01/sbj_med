import { PaddingWrapper, Subheader } from "@/shared/ui";
import { breadcrumbs_list } from "./config";
import Stats from "@/entities/stats";
import { AboutInfo } from "./info";
import { AboutGalery } from "./galery";
import { AboutLicence } from "./licence";

const About = () => {
  return (
    <>
      <Subheader render={breadcrumbs_list} title="О Нас" />
      <PaddingWrapper pt={100} pb={32}>
        <AboutInfo />
      </PaddingWrapper>
      <Stats />
      <PaddingWrapper pt={100} pb={100}>
        <AboutLicence />
      </PaddingWrapper>
      <PaddingWrapper pb={100}>
        <AboutGalery />
      </PaddingWrapper>
    </>
  );
};

export default About;
