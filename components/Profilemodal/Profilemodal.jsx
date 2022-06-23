import styles from "./Profilemodal.module.scss";
import { useState } from "react";

const Profilemodal = () => {
  const [show, setShow] = useState(false);
  return (
    <div className={styles.container}>
      <img
        className={styles.img}
        src={"/img/header/profile.png"}
        onClick={() => setShow(!show)}
      />
      {show && (
        <div className={styles.modal}>
          <div>Профиль</div>
          <div>Тарифы</div>
          <div className={styles.divWithImg}>
            <img src={"/img/header/settings.png"} />
            <div>Настройки</div>
          </div>
          <div className={styles.divWithImg}>
            <img src={"/img/header/arrow.png"} />
            <div>Выйти</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profilemodal;
