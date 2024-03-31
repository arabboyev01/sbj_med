import { ReactElement } from "react";

export type BackgroundVariantType =
  | "red"
  | "peach"
  | "mint"
  | "belge"
  | "green"
  | "purple"
  | "medium-purple"
  | "blue"
  | "sky"
  | "teal"
  | "pink";

export type ProgramsVariantType =
  | "blue"
  | "mint"
  | "green"
  | "purple"
  | "brown"
  | "grey";

export type BreadcrumbsType = {
  icon?: ReactElement;
  path?: string;
  name: string;
};

export type NullOrNumber = null | number;

export type NullOrString = null | number;

export type ImageType = {
  id: number;
  image: string;
  title: string;
  is_active: boolean;
  blog: NullOrNumber;
  program: NullOrNumber;
  service: NullOrNumber;
  doctor: NullOrNumber;
};

export type NewsType = {
  id: number;
  title_uz: string;
  title_ru: string;
  title_en: string;
  desc_uz: string;
  desc_ru: string;
  desc_en: string;
  author_doctor: null;
  author_name: NullOrString;
  images: ImageType[];
  slug: string;
  created: string;
};

export type NewsListType = {
  count: number;
  results: NewsType[];
};

export type ServiceType = {
  id: number;
  title_uz: string;
  title_ru: string;
  title_en: string;
  desc_uz: string;
  desc_ru: string;
  desc_en: string;
  created: string;
  work_start_time: string;
  work_end_time: string;
  appointment_per_hour: number;
  is_active: true;
  slug: string;
  appointment_times: string[];
  images: ImageType[];
};

export type ProgramType = {
  id: number;
  title_uz: string;
  title_ru: string;
  title_en: string;
  desc_uz: string;
  desc_en: string;
  desc_ru: string;
  colors: ProgramsVariantType;
  slug: string;
  appointment_times: string[];
  images: ImageType[];
};
