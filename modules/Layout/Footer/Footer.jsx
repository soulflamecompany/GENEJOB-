import styles from "./Footer.module.scss";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        <div className={styles.linksColumn}>
          <div className={styles.logoLine}>
            <img src={"/img/icon.png"} />
            <div>POSTDESIGN</div>
          </div>
          <img className={styles.appImg} src={"/img/footer/app_store.png"} />
          <img className={styles.appImg} src={"/img/footer/appgallery.png"} />
          <img className={styles.appImg} src={"/img/footer/google_play.png"} />
        </div>
        <div className={styles.linksColumn}>
          <div className={styles.columnTitle}>Для работодателей</div>
          <div>Создать задание</div>
        </div>

        <div className={styles.linksColumn}>
          <div className={styles.columnTitle}>Для исполнителей</div>
          <div>Найти задание</div>
        </div>
        <div className={styles.linksColumn}>
          <div className={styles.columnTitle}>Помощь</div>
          <div className={styles.columnLinks}>
            <div>Контакты</div> <div>Служба поддержки</div>
            <div>Частые вопросы</div> <div>Как работает Сервис</div>
            <div className={styles.subscribe}>Подписывайся</div>
          </div>
        </div>
      </div>
      <div className={styles.bottomLine}>
        <div>© 2022 All Rights Reserved</div>
        <div className={styles.payMethods}>
          <img className={styles.appImg} src={"/img/footer/mir.png"} />
          <img className={styles.appImg} src={"/img/footer/visa.png"} />
          <img className={styles.appImg} src={"/img/footer/ms.png"} />
        </div>
        <div>
          <img className={styles.appImg} src={"/img/footer/tg.png"} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
