import { ComponentPropsWithoutRef, PropsWithChildren, ReactNode } from "react";
import clsx from "clsx";

import styles from "./style.module.scss";

type ButtonTypeProps = {
  icon?: ReactNode;
  variant?: "outlined" | "contained";
  className?: string;
};

type ButtonType = PropsWithChildren<
  ComponentPropsWithoutRef<"button"> & ButtonTypeProps
>;

const Button = ({
  icon,
  children,
  variant,
  className,
  ...rest
}: ButtonType) => {
  const classes = clsx(styles.button, styles[variant ?? "outlined"], className);

  return (
    <button className={classes} {...rest}>
      {icon && icon}
      <span className={styles.text}>{children}</span>
    </button>
  );
};

export default Button;
