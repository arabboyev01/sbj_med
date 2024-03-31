import Link from "next/link";
import styles from "./styles.module.scss";
import routing from "@/shared/routing";
import Image from "next/image";
import { useScopedI18n } from "@/features/locales";

const FooterNav = () => {
  const t = useScopedI18n("routes");
  const links = [
    [
      {
        text: t("news"),
        href: routing.news,
      },
      {
        text: t("about"),
        href: routing.about,
      },
    ],
    [
      {
        text: t("programs"),
        href: routing.programs,
      },
      {
        text: t("services"),
        href: routing.services,
      },
    ],
    [
      {
        text: t("partnership"),
        href: routing.partnership,
      },
      {
        text: t("contact"),
        href: routing.contact,
      },
    ],
  ];

  return (
    <div className={styles.nav}>
      <div className={styles.wrapper}>
        <Link className={styles.logo} href={routing.home}>
          <Image
            src="/images/logo-white.svg"
            alt="Site Logo"
            width={269}
            height={50}
          />
        </Link>
        <p className={styles.text}>©2024 SBJ Medical</p>
      </div>
      {links.map((wrapper, ind) => (
        <div className={styles.wrapper} key={ind}>
          {wrapper.map((link) => (
            <Link className={styles.link} href={link.href} key={link.text}>
              {link.text}
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default FooterNav;
