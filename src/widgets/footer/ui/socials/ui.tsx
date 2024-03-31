import Link from "next/link";
import { socials } from "./config";
import styles from "./styles.module.scss";

const FooterSocials = () => {
  return (
    <div className={styles.socials}>
      <div className={styles.icons}>
        {socials.map((social) => {
          const Icon = social.icon;
          return (
            <Link className={styles.link} href={social.href} key={social.key}>
              <Icon />
            </Link>
          );
        })}
      </div>
      <p className={styles.text}>Design by Wemard</p>
    </div>
  );
};

export default FooterSocials;
