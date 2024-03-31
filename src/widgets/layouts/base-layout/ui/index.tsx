import type { PropsWithChildren } from "react";
import Seo from "../seo";
import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/footer";
import { ApplicationFormModal } from "@/entities/application-form";

const BaseLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Seo />
      <Header />
      <main className="main">{children}</main>
      <Footer />
      <ApplicationFormModal />
    </>
  );
};

export default BaseLayout;
