import styles from "./Footer.module.scss";
import Link from "next/link";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        <div className={styles.linksColumn}>
          <div className={styles.logoLine}>
            <img src={"/img/icon.png"} />
            <div>POSTDESIGN</div>
          </div>
          {/*<img className={styles.appImg} src={"/img/footer/app_store.png"} />*/}
          {/*<img className={styles.appImg} src={"/img/footer/appgallery.png"} />*/}
          {/*<img className={styles.appImg} src={"/img/footer/google_play.png"} />*/}
        </div>
        <div className={styles.linksColumn}>
          <div className={styles.columnTitle}>Для работодателей</div>
          <Link href={"/makeorder"}>
            <a>
              <div>Создать задание</div>
            </a>
          </Link>
        </div>

        <div className={styles.linksColumn}>
          <div className={styles.columnTitle}>Для исполнителей</div>
          <Link href={"/tasks"}>
            <a>
              <div>Найти задание</div>
            </a>
          </Link>
        </div>
        <div className={styles.linksColumn}>
          <div className={styles.columnTitle}>Помощь</div>

          <div className={styles.columnLinks}>
            <Link href={"/contacts"}>
              <a>
                <div>Контакты</div>
              </a>
            </Link>
            <Link href={"/support"}>
              <a>
                <div>Служба поддержки</div>
              </a>
            </Link>
            <Link href={"/faq"}>
              <a>
                <div>Частые вопросы</div>
              </a>
            </Link>
            <Link href={"/payments"}>
              <a>
                <div>Оплата</div>
              </a>
            </Link>
            <Link href={"/services"}>
              <a>
                <div>Отказ от услуг</div>
              </a>
            </Link>
            <div className={styles.subscribe}>Подписывайся</div>
          </div>
        </div>
      </div>
      <div className={styles.bottomLine}>
        <div>© 2022 All Rights Reserved</div>
        <div className={styles.payMethods}>
          <img className={styles.appImg} src={"/img/footer/mir.svg"} />
          <img className={styles.appImg} src={"/img/footer/visa.svg"} />
          <img className={styles.appImg} src={"/img/footer/ms.svg"} />
        </div>
        <div>
          <img className={styles.appImg} src={"/img/footer/tg.png"} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
