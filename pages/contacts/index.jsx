import styles from "./Contacts.module.scss";

const Contacts = () => {
  return (
    <div className={styles.container}>
      <img className={styles.bgBlur} src={"/img/blur.svg"} />
      <div className={styles.contentWrapper}>
        <div className={styles.left}>
          <div className={styles.leftWrapper}>
            <h1 className={styles.title}>КОНТАКТЫ</h1>
            <span className={styles.text}>ООО Лекс</span>
            <span className={styles.text}>ИНН: 6317156167</span>
            <span className={styles.text}>КПП: 631701001</span>
            <span className={styles.text}>ОГРН: 1216300056983</span>
            <span className={styles.text}>
              Адрес: 443099, Россия, г. Самара,
            </span>
            <span className={styles.text}>ул. Чапаевская, д. 85, ком. 9</span>
          </div>
        </div>
        <div className={styles.right}>
          <img className={styles.heroImg} src="/img/map.png" />
        </div>
      </div>
    </div>
  );
};

export default Contacts;
