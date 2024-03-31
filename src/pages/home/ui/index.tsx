import ApplicationForm from "@/entities/application-form";
import { PaddingWrapper } from "@/shared/ui";
import Stats from "@/entities/stats";
import { Priority } from "./priority";
import { Contact } from "./contact";
import { Hero } from "./hero";
import { Reviews } from "./reviews";
import { Services } from "./services";
import { SearchByLetter } from "./search-by-letter";
import { Doctors } from "./doctors";
import { Programs } from "./programs";
import { Equipments } from "./equipments";

const Home = () => {
  return (
    <>
      <Hero />
      <PaddingWrapper pt={100} pb={100}>
        <Stats />
      </PaddingWrapper>
      <Priority />
      <Contact />
      <PaddingWrapper pt={100} pb={100}>
        <Services />
      </PaddingWrapper>
      <SearchByLetter />
      <PaddingWrapper pt={100}>
        <Doctors />
      </PaddingWrapper>
      <PaddingWrapper pt={100} pb={100}>
        <Programs />
      </PaddingWrapper>
      <Equipments />
      <PaddingWrapper pt={100} pb={100}>
        <Reviews />
      </PaddingWrapper>
      <PaddingWrapper pb={100}>
        <ApplicationForm theme="dark" />
      </PaddingWrapper>
    </>
  );
};

export default Home;
