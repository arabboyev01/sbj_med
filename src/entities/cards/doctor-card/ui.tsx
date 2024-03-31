import clsx from "clsx";
import { Button, MailIcon, StarIcon } from "@/shared/ui";
import styles from "./styles.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";
import { childAnimation } from "@/shared/animation";
import { DoctorType, DoctorSpecialization } from "@/global/type";
import { Route } from "@/hooks/router";

type DoctorCardType = {
  className?: string;
  badge?: string;
  data?: DoctorType
};

const DoctorCard = ({ className, badge, data }: DoctorCardType) => {
  const classes = clsx(styles.card, className);

  const { lang } = Route()
  const title: string = data?.specialization[0]?.[`title_${lang}` as keyof DoctorSpecialization ] as string

  return (
    <motion.div className={classes} variants={childAnimation}>
      <div className={styles.wrapper}>
        <Image
          className={styles.image} //@ts-ignore
          src={data?.images[0]?.image}
          alt="Dr. Falonchi"
          width={342}
          height={350}
        />
        {badge && <div className={styles.badge}>{badge}</div>}
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{data?.first_name} {data?.last_name}</h3>
        <p className={styles.text}>{title}</p>
        <div className={styles["status-list"]}>
          <div className={styles.status}>
            <StarIcon className={styles.star} />
            <b className={styles.bold}>4.5</b>
          </div>
          <div className={styles.status}>
            <span className={styles["status-text"]}>
              Статьи: <b className={styles.bold}>23</b>
            </span>
          </div>
          <div className={styles.status}>
            <span className={styles["status-text"]}>
              Отзывы: <b className={styles.bold}>56</b>
            </span>
          </div>
          <div className={styles.status}>
            <span className={styles["status-text"]}>
              Количество поступлений: <b className={styles.bold}>27</b>
            </span>
          </div>
        </div>
        <Button className={styles.button} icon={<MailIcon />}>
          Отправить заявку
        </Button>
      </div>
    </motion.div>
  );
};

export default DoctorCard;
