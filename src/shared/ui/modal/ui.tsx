import { ComponentPropsWithRef, PropsWithChildren } from "react";
import { CSSTransition } from "react-transition-group";
import styles from "./style.module.scss";
import { Portal } from "../portal";
import clsx from "clsx";
import { useEscape, useLockedBody } from "@/shared/lib/modal";

type ModalProps = {
  isOpen: boolean;
  close: () => void;
};

type ModalAttributeTypes = ComponentPropsWithRef<"div">;

export type ModalType = PropsWithChildren<ModalProps> & ModalAttributeTypes;

const Modal = ({
  isOpen,
  close,
  children,
  className,
  ref,
  ...rest
}: ModalType) => {
  useLockedBody(isOpen);

  useEscape(close);

  return (
    <CSSTransition
      classNames={{
        enterDone: styles.done,
      }}
      timeout={0}
      in={isOpen}
    >
      <Portal rootId="#modal">
        {isOpen ? (
          <div className={clsx(styles.modal, className)} ref={ref} {...rest}>
            {children}
          </div>
        ) : null}
      </Portal>
    </CSSTransition>
  );
};

export default Modal;
