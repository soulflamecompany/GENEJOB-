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
    <section className={styles.container}>
      <h2 className={styles.title}>Отзывы об исполнителях </h2>
                  <div className={styles.feedbackWrapper}>


                <article className={styles.reviewOne}>

          <div className={styles.avatarReviewer}>
            <img src={"/img/reviews/reviewer1.svg"} />
          </div>
          <div className={styles.infoReviewer}>
            <div className={styles.topLine}>
            <span className={styles.textDate}>11 мая 2022</span>
            <span><img src={"/img/reviews/starLine.svg"} /></span>
            </div>
            <span  className={styles.textName}>Алексей Иванов</span>
            <span  className={styles.textReview}>Очень рад, что нашелся такой специалист! 
            Задача мне казалась очень сложной, но Алексей справился с ней всего за пару часов. Приятно иметь дело с профессионалом своего дела. Обязательно обращусь к нему снова и посоветую коллегам.</span>
            <span  className={styles.textCategory}>Настройка 1С-Бухгалтерии</span>
            <span  className={styles.textTime}>Исполнитель нашелся за 12 минут</span>
          </div>
         
        </article>
      
        <article className={styles.reviewTwo}>

              <div className={styles.avatarReviewer}>
              <img src={"/img/reviews/reviewer2.svg"} />
            </div>
            <div className={styles.infoReviewer}>
              <div className={styles.topLine}>
              <span className={styles.textDate}>19 мая 2022</span>
              <span><img src={"/img/reviews/starLine.svg"} /></span>
              </div>
              <span  className={styles.textName}>Мария Гаврилова</span>
              <span  className={styles.textReview}>Спасибо за отличный проект! Я капризный клиент, у меня было много условий, но Мария смогла выполнить все мои требования и по красоте, и по функциональности будущего ремонта. Рекомендую!</span>
              <span  className={styles.textCategory}>Дизайн-проект квартиры</span>
              <span  className={styles.textTime}>Исполнитель нашёлся за 17 минут</span>
            </div>

            </article>


            <article className={styles.reviewThree}>

            <div className={styles.avatarReviewer}>
              <img src={"/img/reviews/reviewer3.svg"} />
            </div>
            <div className={styles.infoReviewer}>
              <div className={styles.topLine}>
              <span className={styles.textDate}>16 мая 2022</span>
              <span><img src={"/img/reviews/starLine.svg"} /></span>
              </div>
              <span  className={styles.textName}>Владислав Аркадьев</span>
              <span  className={styles.textReview}>Большая благодарность за помощь. Были сложности с подготовкой отчёта в Excel, никогда не приходилось раньше работать с формулами. Владислав все сделал быстро, и что важно настроил мне шаблон для будущих периодов за что ему отдельное спасибо!</span>
              <span  className={styles.textCategory}>Подготовка отчета</span>
              <span  className={styles.textTime}>Исполнитель нашелся за 10 минут</span>
            </div>

            </article>


            <article className={styles.reviewFour}>

            <div className={styles.avatarReviewer}>
              <img src={"/img/reviews/reviewer2.svg"} />
            </div>
            <div className={styles.infoReviewer}>
              <div className={styles.topLine}>
              <span className={styles.textDate}>19 мая 2022</span>
              <span><img src={"/img/reviews/starLine.svg"} /></span>
              </div>
              <span  className={styles.textName}>Мария Гаврилова</span>
              <span  className={styles.textReview}>Спасибо за отличный проект! Я капризный клиент, у меня было много условий, но Мария смогла выполнить все мои требования и по красоте, и по функциональности будущего ремонта. Рекомендую!</span>
              <span  className={styles.textCategory}>Дизайн-проект квартиры</span>
              <span  className={styles.textTime}>Исполнитель нашёлся за 17 минут</span>
            </div>

            </article>


      </div>
          </section>
  );
};

export default Reviews;
