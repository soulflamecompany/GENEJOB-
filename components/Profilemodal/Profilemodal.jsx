import styles from "./Profilemodal.module.scss";
import { useState } from "react";

const Profilemodal = () => {
  const [show, setShow] = useState(false);
  return (
    <div className={styles.container}>
      <img
        className={styles.img}
        src={"/img/header/avatar.svg"}
        onClick={() => setShow(!show)}
      />
      {show && (
        <article className={styles.modal}>
          <div className={styles.divWithImg}>
            <img src={"/img/header/myProfileTiny.svg"} />
            <span>Мой профиль</span>
          </div>
          <div className={styles.divWithImg}>
            <img src={"/img/header/myTasksTiny.svg"} />
            <span>Мои задания</span>
          </div>
          <div className={styles.divWithImg}>
            <img src={"/img/header/myExitTiny.svg"} />
            <span>Выйти</span>
          </div>
        </article>
      )}
    </div>
  );
};

export default Profilemodal;
