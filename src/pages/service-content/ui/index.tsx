import { BreadcrumbsType, ServiceType } from "@/shared/inderface";
import routing from "@/shared/routing";
import { HomeIcon, PaddingWrapper, Subheader } from "@/shared/ui";
import { Content } from "./content";
import Stats from "@/entities/stats";
import { Doctors } from "@/pages/home/ui/doctors";
import { ServicesType } from "@/global/type";
import { Route } from "@/hooks/router";

type ServiceProps = {
  service: ServicesType;
};

const ServiceContent = ({ service }: ServiceProps) => {

  const { lang, pathname } = Route()

  const title = service[`title_${lang}` as keyof ServicesType]
  const desc = service[`desc_${lang}` as keyof ServicesType]

  const breadcrumbs: (BreadcrumbsType & { key: number })[] = [
    {
      key: 1,
      path: routing.home,
      name: "Главная",
      icon: <HomeIcon />,
    },
    {
      key: 2,
      name: "Услуги",
      path: pathname,
    },
    {
      key: 3,
      name: title,
    },
  ];

  return (
    <>
      <Subheader render={breadcrumbs} title={title} />
      <PaddingWrapper pt={40} />
      <Stats />
      <PaddingWrapper pt={40} pb={100}>
        <Content text={desc} />
      </PaddingWrapper>
      <PaddingWrapper pb={100}>
        <Doctors />
      </PaddingWrapper>
    </>
  );
};

export default ServiceContent;
