import { useI18n } from "@/features/locales";
import styles from "./styles.module.scss";

const FooterInfo = () => {
  const t = useI18n();
  const infos = [
    {
      title: `${t("phone.phone")}:`,
      text: "+998 55-506-03-03",
    },
    {
      title: `${t("phone.phone")}:`,
      text: "+998 55-510-03-03",
    },
    {
      title: `${t("address")}:`,
      text: "Тошкент ш. Учтепа т. Алгоритм массиви 31",
    },
    {
      title: `${t("office-time")}:`,
      text: "Душ - Якш | 08:00 - 00:00",
    },
  ];

  return (
    <div className={styles.info}>
      {infos.map((info) => (
        <div className={styles.wrapper} key={info.text}>
          <h3 className={styles.title}>{info.title}</h3>
          <h2 className={styles.heading}>{info.text}</h2>
        </div>
      ))}
    </div>
  );
};

export default FooterInfo;
