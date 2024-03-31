import { motion } from "framer-motion";
import clsx from "clsx";
import styles from "./styles.module.scss";
import Image from "next/image";
import { LinkButton } from "@/shared/ui";
import routing from "@/shared/routing";
// import { BackgroundVariantType } from "@/shared/inderface";
import { childAnimation } from "@/shared/animation";
import { ServicesType } from "@/global/type";
import { Route } from "@/hooks/router";

// type ServiceCardType = {
//   className?: string;
//   variant?: BackgroundVariantType;
//   title: string;
//   text: string;
//   image: string;
// };

const ServiceCard = (props: ServicesType) => {

  const { lang } = Route()
  
  const classes = clsx(styles.card, props?.className, styles["red"]);

  const title: string = props[`title_${lang}` as keyof ServicesType] as string
  const text: string = props[`desc_${lang}` as keyof ServicesType] as string

  return (
    <motion.div
      className={classes}
      variants={childAnimation}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.75 }}
    >
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.text} dangerouslySetInnerHTML={{ __html: text }} />
        <LinkButton
          className={styles.link}
          href={routing.serviceBySlug(props?.slug)}
        >
          Подробнее
        </LinkButton>
      </div>
      <Image
        className={styles.image}
        src={props?.images[0]?.image}
        alt="text"
        width={247}
        height={349}
      />
    </motion.div>
  );
};

export default ServiceCard;
