import { motion } from "framer-motion";
import clsx from "clsx";
import styles from "./styles.module.scss";
import Image from "next/image";
import { LinkButton } from "@/shared/ui";
import routing from "@/shared/routing";
import { BackgroundVariantType } from "@/shared/inderface";
import { childAnimation } from "@/shared/animation";

type ServiceCardType = {
  className?: string;
  variant?: BackgroundVariantType;
  title: string;
  text: string;
  image: string;
};

const ServiceCard = ({
  variant,
  className,
  image,
  text,
  title,
}: ServiceCardType) => {
  const classes = clsx(styles.card, className, styles[variant ?? "red"]);

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
        <p className={styles.text}>{text}</p>
        <LinkButton
          className={styles.link}
          href={routing.serviceBySlug("urology")}
        >
          Подробнее
        </LinkButton>
      </div>
      <Image
        className={styles.image}
        src={image}
        alt="text"
        width={247}
        height={349}
      />
    </motion.div>
  );
};

export default ServiceCard;
