import { BreadcrumbsType, NewsType, ProgramType } from "@/shared/inderface";
import routing from "@/shared/routing";
import { HomeIcon, PaddingWrapper, Subheader } from "@/shared/ui";
import { Content } from "./content";
import { Reviews } from "@/pages/home/ui/reviews";
import { AboutGalery } from "@/pages/about/ui/galery";
import { Route } from "@/hooks/router";
import { ProgramListType } from "@/global/type";

type ProgramContentProps = {
  program: ProgramListType;
};

const ProgramContent = ({ program }: ProgramContentProps) => {

  const { lang, pathname } = Route()
  const title: string = program[`title_${lang}` as keyof ProgramListType] as string

  const breadcrumbs: (BreadcrumbsType & { key: number })[] = [
    {
      key: 1,
      path: routing.home,
      name: "Главная",
      icon: <HomeIcon />,
    },
    {
      key: 2,
      name: pathname,
      path: routing.programs,
    },
    {
      key: 3,
      name: program.slug,
    },
  ];


  return (
    <>
      <Subheader render={breadcrumbs} title={title} />
      <PaddingWrapper pt={100} pb={80}>
        <Content program={program} />
      </PaddingWrapper>
      <PaddingWrapper pb={100}>
        <AboutGalery />
      </PaddingWrapper>
      <PaddingWrapper pb={100}>
        <Reviews />
      </PaddingWrapper>
    </>
  );
};

export default ProgramContent;
