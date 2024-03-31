import { FooterInfo } from "./info";
import { FooterNav } from "./nav";
import { FooterSocials } from "./socials";
import styles from "./style.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container-sm">
        <FooterNav />
        <FooterInfo />
        <FooterSocials />
      </div>
    </footer>
  );
};

export default Footer;
