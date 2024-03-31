import Link from "next/link";
import { PropsWithChildren } from "react";
import styles from "./styles.module.scss";
import clsx from "clsx";
import { RightArrowIcon } from "..";
import { useI18n } from "@/features/locales";

type LinkType = {
  href: string;
  className?: string;
};

type LinkProps<T = {}> = PropsWithChildren<LinkType & T>;

export const LinkAll = ({ href, children, className }: LinkProps) => {
  const t = useI18n();
  return (
    <Link className={clsx(styles["link-all"], className)} href={href}>
      {children ?? t("all")}
      <RightArrowIcon />
    </Link>
  );
};

type LinkButtonType = {
  theme?: "dark" | "light";
};

export const LinkButton = ({
  href,
  children,
  className,
  theme,
}: LinkProps<LinkButtonType>) => {
  return (
    <Link
      className={clsx(
        styles["link-button"],
        styles[theme ?? "light"],
        className
      )}
      href={href}
    >
      {children}
    </Link>
  );
};
