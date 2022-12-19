import styles from "./Footer.module.scss";
import Link from "next/link";
const Footer = () => {
  return (
    <div className={styles.container}>
      <section className={styles.wrapper}>
        <Link href="/">
          <a>
            <div className={styles.logoLine}>
              <img src={"/img/header/logoGenejob1.svg"} />
              <img src={"/img/header/logoGenejob2.svg"} />
            </div>
          </a>
        </Link>
        <article className={styles.links}>
          <Link href={"/faq"}>
            <a>
              <span>Частые вопросы</span>
            </a>
          </Link>
          <Link href={"/support"}>
            <a>
              <span>Служба поддeржки</span>
            </a>
          </Link>
          <Link href={"/contacts"}>
            <a>
              <span>Контакты</span>
            </a>
          </Link>
          <Link href={"/payments"}>
            <a>
              <span>Правила оплаты</span>
            </a>
          </Link>
          <Link href={"/services"}>
            <a>
              <span>Отказ от услуги</span>
            </a>
          </Link>
        </article>
        <div className={styles.rightsIconsWrapper}>
          <div className={styles.rights}>
            <span>
              © genejob.com /{" "}
              <span className={styles.rightsText}>Правила сервиса</span>
            </span>
            <span className={styles.rightsText}>
              Правила обработки пользовательских данных
            </span>
          </div>
          <div className={styles.iconsWrapper}>
            <img
              className={styles.footerIcons}
              src="/img/footer/visa.svg"
              alt="visa"
            />
            <img
              className={styles.footerIcons}
              src="/img/footer/mir.svg"
              alt="mir"
            />
            <img
              className={styles.footerIcons}
              src="/img/footer/mastercard.svg"
              alt="mastercard"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;


