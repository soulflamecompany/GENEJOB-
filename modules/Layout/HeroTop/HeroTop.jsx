import styles from "./HeroTop.module.scss";
import Link from "next/link";

const HeroTop = () => {
  return (
    <div>
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
    </div>
  );
};

export default HeroTop;
