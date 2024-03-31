import { BreadcrumbsType } from "@/shared/inderface";
import { HomeIcon } from "@/shared/ui";

export const breadcrumbs_list: (BreadcrumbsType & { key: number })[] = [
  {
    key: 1,
    path: "/",
    name: "Главная",
    icon: <HomeIcon />,
  },
  {
    key: 2,
    name: "Наша команда врачей",
  },
];
