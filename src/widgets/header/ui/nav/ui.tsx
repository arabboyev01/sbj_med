import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import clsx from "clsx";
import {
  Button,
  CloseIcon,
  IconButton,
  Language,
  MailIcon,
  UserIcon,
} from "@/shared/ui";
import styles from "./style.module.scss";
import routing from "@/shared/routing";
import { openModal } from "@/app/store/reducer/modals";
import { useI18n } from "@/features/locales";

type NavType = {
  isActive: boolean;
  close: () => void;
};

const Nav = ({ isActive, close }: NavType) => {
  const { pathname } = useRouter();
  const dispatch = useDispatch();

  const t = useI18n();

  const items = [
    {
      text: t("routes.home"),
      href: routing.home,
    },
    {
      text: t("routes.about"),
      href: routing.about,
    },
    {
      text: t("routes.services"),
      href: routing.services,
    },
    {
      text: t("routes.news"),
      href: routing.news,
    },
    {
      text: t("routes.programs"),
      href: routing.programs,
    },
    {
      text: t("routes.partnership"),
      href: routing.partnership,
    },
    {
      text: t("routes.contact"),
      href: routing.contact,
    },
  ];

  return (
    <nav className={styles.nav}>
      <div className={clsx(styles.left, isActive && styles.active)}>
        <button className={styles.close} onClick={close}>
          <CloseIcon />
        </button>
        <ul className={styles.list}>
          {items.map((item) => {
            const isCurrentPage = pathname === item.href;
            return (
              <li className={styles.item} key={item.text}>
                <Link
                  className={clsx(
                    styles.link,
                    isCurrentPage && styles.isCurrent
                  )}
                  href={item.href}
                >
                  {item.text}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={styles.right}>
        <div className={styles.number}>
          <span className={styles["number-text"]}>
            {t("phone.call-center")}:
          </span>
          <Link
            className={styles["number-link"]}
            href={routing.phone}
            target="_blank"
          >
            +998 71 203-70-71
          </Link>
        </div>
        <div className={styles.buttons}>
          <Language />
          <IconButton className={styles["buttons-button"]}>
            <UserIcon />
          </IconButton>
          <Button
            className={styles["application-button"]}
            icon={<MailIcon />}
            onClick={() => dispatch(openModal("application"))}
          >
            {t("appointment.appointment")}
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
