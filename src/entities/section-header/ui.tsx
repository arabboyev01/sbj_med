import clsx from "clsx";
import { LinkAll } from "@/shared/ui";
import styles from "./styles.module.scss";

type SectionHeaderType = {
  title: string;
  href: string;
  className?: string;
};

const SectionHeader = ({ className, title, href }: SectionHeaderType) => {
  return (
    <div className={clsx(styles.header, className)}>
      <h2 className={styles.title}>{title}</h2>
      <LinkAll className={styles.link} href={href} />
    </div>
  );
};

export default SectionHeader;
