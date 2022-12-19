import styles from "./Master.module.scss";

const Master = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contentBackground}>
        <div className={styles.content}>
          <h2 className={styles.title}>Профиль исполнителя</h2>
          <div className={styles.masterInfo}>
            <div className={styles.bio}>
              <img src={"/img/masters/idPhoto.png"} />
              <div className={styles.info}>
                <span className={styles.name}>Иван Иванов</span>
                <span className={styles.city}>29 лет, Москва</span>
                <span>Рейтинг исполнителя:</span>
                <span>Выполнил 295 заданий</span>
              </div>
            </div>
            <div className={styles.views}>128 просмотров профиля</div>
          </div>
          <div className={styles.offerTask}>Предложить задание</div>
          <div className={styles.about}>
            <div className={styles.subtitle}>Обо мне</div>
            <div className={styles.text}>
              Выполняю ремонт квартир, комнат, мелкий ремонт, сантехника,
              электрика, утепление балконов, устройство межкомнатных
              перегородок. Натяжные потолки. Работы выполняю сам, на большие
              объемы привлекаю помощника. Опыт работы в строительстве и ремонте
              более 20 лет. Составление сметы, заключение договора, гарантия .
            </div>
            <div className={styles.examples}>
              <div className={styles.subtitle}>Обо мне</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Master;
