import { useState, useEffect, MouseEvent, ReactNode } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.scss";

const Modal = ({ show, close, children }) => {
  const [isBrowser, setIsBrowser] = useState(false);
  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleClose = (e) => {
    e.preventDefault();
    e.stopPropagation();
    close();
  };

  const modalContent = show ? (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div onClick={handleClose} className={styles.closeModal}>
          <img src="/img/closeButton.svg" />
        </div>
        <div>{children}</div>
      </div>
    </div>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")
    );
  }
  return <></>;
};

export default Modal;
