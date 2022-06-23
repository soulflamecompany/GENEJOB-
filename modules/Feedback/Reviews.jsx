import styles from "./Reviews.module.scss";
import { useState } from "react";
import Link from "next/link";

const Reviews = () => {
  const [categoryTasks, setCategoryTasks] = useState([]);
  const [categoryName, setCategoryName] = useState("");

  const categorynames = [
    {
      id: 1,
      name: "Грузоперевозки",
      img: "/img/categories/cargo.svg",
    },
    {
      id: 2,
      name: "Юридическая и бухгалтерская помощь",
      img: "/img/categories/cargo.svg",
    },
    {
      id: 3,
      name: "Ремонт транспорта",
      img: "/img/categories/cargo.svg",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.feedbackWrapper}>
        <h2 className={styles.title}>Отзывы об исполнителях </h2>
        <div className={styles.reviewOne}>
          <div>
            <img src={"/img/reviews/photo1.png"} />
          </div>
          <div>
            <div className={styles.reviewerName}>Алена А.</div>
            <div>
              <div className={styles.reviewerRate}>Рейтинг исполнителя: 5</div>
              <div>Выполнил 195 заданий</div>
            </div>
            <div className={styles.profession}>
              Репетитор по математике 7-8 класс
            </div>
            <div>
              Прекрасный преподаватель. Сразу нашла общий язык с ребенком.
              Объясняет очень доступно. Ребенок доволен.
            </div>
            <div>Исполнитель нашелся за 5 минут</div>
          </div>
        </div>
        <div className={styles.reviewTwo}>
          <div>
            <img src={"/img/reviews/photo1.png"} />
          </div>
          <div>
            <div className={styles.reviewerName}>Алена А.</div>
            <div>
              <div className={styles.reviewerRate}>Рейтинг исполнителя: 5</div>
              <div>Выполнил 195 заданий</div>
            </div>
            <div className={styles.profession}>
              Репетитор по математике 7-8 класс
            </div>
            <div>
              Приятный специалист. Составил договор в кратчайшие сроки.
              Рекомендую!
            </div>
            <div>Исполнитель нашелся за 5 минут</div>
          </div>
        </div>
        <div className={styles.reviewThree}>
          <div>
            <img src={"/img/reviews/photo1.png"} />
          </div>
          <div>
            <div className={styles.reviewerName}>Максим А.</div>
            <div>
              <div className={styles.reviewerRate}>Рейтинг исполнителя: 5</div>
              <div>Выполнил 195 заданий</div>
            </div>
            <div className={styles.profession}>Ремонт видеоняни</div>
            <div>
              Максим отличный специалист, отремонтировал монитор видеоняни
              (сломалось гнездо зарядки). Очень рекомендую 👍
            </div>
            <div>Исполнитель нашелся за 5 минут</div>
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default Reviews;
