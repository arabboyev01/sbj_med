import clsx from "clsx";
import styles from "./styles.module.scss";
import Modal, { ModalType } from "../modal/ui";
import { CloseIcon, Icon } from "..";

export interface PopupProps extends ModalType {
  rootClassName?: string;
}

interface CloseProps {
  onClick: () => void;
  className?: string;
}

export const Popup = ({
  rootClassName,
  className,
  close,
  children,
  ...props
}: PopupProps) => (
  <Modal
    className={clsx(styles.modal, rootClassName)}
    close={close}
    onClick={close}
    {...props}
  >
    <div
      className={clsx(styles.container, className)}
      onClick={(e) => e.stopPropagation()}
    >
      {children}
    </div>
  </Modal>
);

const ClosePopup = ({ onClick, className }: CloseProps) => (
  <button
    className={clsx("btn-reset", styles.close, className)}
    onClick={onClick}
  >
    <CloseIcon />
  </button>
);

Popup.Close = ClosePopup;
