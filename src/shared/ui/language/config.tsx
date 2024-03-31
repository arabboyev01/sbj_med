import { EnFlagIcon, RuFlagIcon, SVGProps, UzFlagIcon } from "..";

type LangType = {
  title: string;
  icon: (props: SVGProps) => JSX.Element;
  lang: "en" | "uz" | "ru";
};

export const languages: LangType[] = [
  {
    title: "En",
    icon: EnFlagIcon,
    lang: "en",
  },
  {
    title: "Ru",
    icon: RuFlagIcon,
    lang: "ru",
  },
  {
    title: "Uz",
    icon: UzFlagIcon,
    lang: "uz",
  },
];
