import styles from "./HeroBottom.module.scss";
import Link from "next/link";

const HeroBottom = () => {
  return (
    <section className={styles.heroContainer}>

<h2 className={styles.title}>Начните сегодня</h2>

<div className={styles.text}>
  <span>Опубликуйте заказ или обратитесь к специалисту напрямую. Тысячи исполнителей готовы выполнить ваше задание прямо сейчас. А если вы хотите предложить свои услуги, становитесь исполнителем на Genejob и находите задания в своей сфере!
</span>
</div>
<div className={styles.buttonsWrapper}>
  <div className={styles.buttonOrderServiceWrapper}>
    <button className={styles.buttonOrderService}>Заказать услугу</button>
  </div>
  <div className={styles.buttonBecomePerformerWrapper}>
    <button className={styles.buttonBecomePerformer}>Стать исполнителем</button>
  </div>
</div>
    </section>
  );
};

export default HeroBottom;
