import { BackgroundVariantType } from "@/shared/inderface";

export type ServiceType = {
  id: number;
  title: string;
  text: string;
  image: string;
  variant: BackgroundVariantType;
  slug: string;
};
