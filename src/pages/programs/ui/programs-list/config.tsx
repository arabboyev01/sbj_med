import { ProgramsVariantType } from "@/shared/inderface";
import routing from "@/shared/routing";

type ProgramType = {
  id: number;
  href: string;
  title: string;
  image: string;
  variant: ProgramsVariantType;
};

export const programs: ProgramType[] = [
  {
    id: 1,
    href: routing.programs,
    title: "Бесплатная консультация хирурга",
    image: "/images/people/two-doctors.png",
    variant: "blue",
  },
  {
    id: 2,
    href: routing.programs,
    title: "Пластика век по специальной цене",
    image: "/images/people/woman.png",
    variant: "brown",
  },
  {
    id: 3,
    href: routing.programs,
    title: "Б«КТ ночью со скидкой 20%»с 22:00 до 08:00",
    image: "/images/people/disk.png",
    variant: "purple",
  },
  {
    id: 4,
    href: routing.programs,
    title: "Акция «Выезд медсестры на дом за 1 руб.»",
    image: "/images/people/nurse.png",
    variant: "green",
  },
  {
    id: 5,
    href: routing.programs,
    title: "Гастро- и колоноскопия «во сне»: скидка 20%",
    image: "/images/people/doctor-with-telescope.png",
    variant: "mint",
  },
  {
    id: 6,
    href: routing.programs,
    title: "«Скидка 20% на гастроскопию и колоноскопию»",
    image: "/images/people/doctor.png",
    variant: "grey",
  },
];
