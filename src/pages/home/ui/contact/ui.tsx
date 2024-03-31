import clsx from "clsx";
import styles from "./styles.module.scss";
import Link from "next/link";
import routing from "@/shared/routing";
import { useScopedI18n } from "@/features/locales";

const Contact = () => {
  const t = useScopedI18n("contact");

  return (
    <div className={styles.contact}>
      <div className={clsx("container-sm", styles.container)}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>{t("title")}</h2>
          <p className={styles.text}>{t("text")}</p>
        </div>
        <Link className={styles.link} href={routing.contact}>
          {t("contact")}
        </Link>
      </div>
    </div>
  );
};

export default Contact;
