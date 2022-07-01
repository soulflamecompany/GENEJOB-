import styles from "./HeroBottom.module.scss";
import Link from "next/link";

const HeroBottom = () => {
  return (
    <div>
      <div className={styles.heroContainer}>
        <div className={styles.content}>
          <div className={styles.left}></div>
          <div className={styles.right}>
            <div className={styles.rightWrapper}>
              <div className={styles.heroTitle}>НАЧНИТЕ СЕГОДНЯ</div>
              <span className={styles.heroText}>
                Исполнители уже готовы вам помочь
              </span>
              <div className={styles.buttonWrapper}>
                <Link href="/makeorder">
                  <a>
                    <button className={styles.buttonOne}>
                      Создать задание
                    </button>
                  </a>
                </Link>
                <Link href="/orders">
                  <a>
                    <button className={styles.buttonTwo}>Найти задание </button>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBottom;
