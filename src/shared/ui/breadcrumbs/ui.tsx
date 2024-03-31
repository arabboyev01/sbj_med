import { BreadcrumbsType } from "@/shared/inderface";
import styles from "./style.module.scss";
import clsx from "clsx";
import Link from "next/link";
import { RightArrowIcon } from "..";

type BreadcrumbsProps = {
  render: (BreadcrumbsType & { key: number })[];
  className?: string;
};

const Breadcrumbs = ({ render, className }: BreadcrumbsProps) => {
  return (
    <div className={clsx(styles.wrapper, className)}>
      {render.map((el) =>
        el.path ? (
          <Link className={styles.link} href={el.path} key={el.key}>
            {el.icon && el.icon}
            {el.name}
            <RightArrowIcon />
          </Link>
        ) : (
          <div className={styles.text} key={el.key}>
            {el.icon && el.icon}
            <span>{el.name}</span>
          </div>
        )
      )}
    </div>
  );
};

export default Breadcrumbs;
