import { CSSTransition } from "react-transition-group";
import { CloseIcon, Popup } from "@/shared/ui";
import { useDispatch, useSelector } from "react-redux";
import { StoreType } from "@/app/store";
import { closeModal } from "@/app/store/reducer/modals";
import ApplicationForm from "..";
import styles from "./styles.module.scss";

const ApplicationFormModal = () => {
  const isOpen = useSelector((store: StoreType) => store.modals.application);
  const dispatch = useDispatch();
  const close = () => dispatch(closeModal("application"));

  const button = (
    <button type="button" className={styles.button} onClick={close}>
      <CloseIcon />
    </button>
  );

  return (
    <CSSTransition in={isOpen} timeout={0}>
      <Popup
        className={styles.modal}
        isOpen={isOpen}
        close={close}
        rootClassName={styles.root}
      >
        <ApplicationForm modalClose={button} />
      </Popup>
    </CSSTransition>
  );
};

export default ApplicationFormModal;
