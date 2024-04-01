import { ServiceCard } from "@/entities/cards";
import { ServiceType } from "./config";
import styles from "./styles.module.scss";
import routing from "@/shared/routing";
import { SectionHeader } from "@/entities/section-header";
import { motion } from "framer-motion";
import { containerAnimation } from "@/shared/animation";
import { useI18n, useScopedI18n } from "@/features/locales";

const Services = () => {
  const t = useI18n();
  const ts = useScopedI18n("services");

  const services_list: ServiceType[] = [
    {
      id: 1,
      title: ts("urology"),
      text: ts("urology_text"),
      image: "/images/medical/urology.png",
      variant: "red",
    },
    {
      id: 2,
      title: ts("neurology"),
      text: ts("neurology_text"),
      image: "/images/medical/neurology.png",
      variant: "mint",
    },
    {
      id: 3,
      title: ts("cardiology"),
      text: ts("cardiology_text"),
      image: "/images/medical/cardiology.png",
      variant: "blue",
    },
    {
      id: 4,
      title: ts("gynecology"),
      text: ts("gynecology_text"),
      image: "/images/medical/gynecology.png",
      variant: "medium-purple",
    },
  ];

  return (
    <div className={styles.sevices}>
      <div className="container-sm">
        <SectionHeader title={t("services.caption")} href={routing.services} />
        <motion.div
          className={styles.bottom}
          initial="hidden"
          whileInView="visible"
          variants={containerAnimation}
        >
          {services_list.map((serv) => (
            <ServiceCard className={styles.card} key={serv.id} {...serv} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
