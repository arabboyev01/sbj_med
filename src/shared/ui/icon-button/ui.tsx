import { ComponentPropsWithoutRef, PropsWithChildren } from "react";
import styles from "./styles.module.scss";
import clsx from "clsx";
import Link from "next/link";

type ButtonProps = {
  className?: string;
};

type IconButtonType = PropsWithChildren<
  ComponentPropsWithoutRef<"button"> & ButtonProps
>;

const IconButton = ({ className, children, type, ...rest }: IconButtonType) => {
  return (
    <button className={clsx(styles.button, className)} {...rest}>
      {children}
    </button>
  );
};

export default IconButton;
