import styles from "./HeroTop.module.scss";
import Link from "next/link";

const HeroTop = () => {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.background}>
        <div className={styles.titleWrapper}>
          <h1 className={styles.title}>Genejob</h1>
        </div>

        <span className={styles.text}>
          Сервис для поиска квалифицированных специалистов и надежных
          исполнителей для решения ваших задач. Доверьте свои заботы лучшим с
          Genejob!
        </span>

        <div className={styles.buttonsWrapper}>
          <button className={styles.orderServiceButton}>Заказать услугу</button>
          <button className={styles.becomePerformerButton}>
            Стать исполнителем
          </button>
        </div>

        <ul className={styles.ul}>
          <li>
            <span className={styles.subtitle}>Опишите задачу</span>
            <p className={styles.subtitleP}>Это бесплатно и займёт 3-4 минуты.</p>
          </li>
          <li className={styles.border}></li>
          <li>
            <span className={styles.subtitle}>Получите отклики</span>
            <p className={styles.subtitleP}>
              Обычно они приходят в течение 30 минут.
            </p>
          </li>
          <li className={styles.border}></li>
          <li>
            <span className={styles.subtitle}>Выберите исполнителя</span>
            <p className={styles.subtitleP}>
              Общайтесь и обсудите сроки выполнения.
            </p>
          </li>
        </ul>

        <span className={styles.textBottom}>
          Вы можете посмотреть всех специалистов в интересующей вас категории,
          изучить рейтинг, отзывы заказчиков и сделать свой выбор.
        </span>
      </div>
    </section>
  );
};

export default HeroTop;

/*<div>
<div className={styles.heroContainer}>
  <div className={styles.left}></div>
  <div className={styles.right}>
    <div className={styles.rightWrapper}>
      <div className={styles.heroTitle}>POSTDESIGN</div>
      <span className={styles.heroText}>
        Поможем найти надёжного исполнителя для любых задач
      </span>
      <div className={styles.buttonWrapper}>
        <Link href="/makeorder">
          <a>
            <button className={styles.buttonOne}>Заказать услугу</button>
          </a>
        </Link>
        <Link href="/orders">
          <a>
            <button className={styles.buttonTwo}>
              Стать исполнителем
            </button>
          </a>
        </Link>
      </div>
    </div>
  </div>
</div>
<div className={styles.infoContainer}>
  <div className={styles.infoContainerTitle}>Как работает сервис</div>
  <img className={styles.stepSliderImg} src={"/img/step-slider.png"} />
  <div className={styles.infoStepsContainer}>
    <div className={styles.infoStep}>
      <div className={styles.stepNumber}>1</div>
      <div className={styles.infoStepContent}>
        <div className={styles.infoStepTitle}>Опишите задачу</div>
        <div className={styles.infoStepText}>
          Это бесплатно и займёт 3‑4 минуты.
        </div>
      </div>
    </div>
    <div className={styles.infoStep}>
      <div className={styles.stepNumber}>2</div>
      <div className={styles.infoStepContent}>
        <div className={styles.infoStepTitle}>Получите отклики</div>
        <div className={styles.infoStepText}>
          Обычно они приходят в течение 30 минут.
        </div>
      </div>
    </div>
  </div>
</div>
</div>*/
