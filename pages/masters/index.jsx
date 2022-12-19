import styles from "./Masters.module.scss";
import { useForm } from "react-hook-form";

import { useState } from "react";
import Link from "next/link";

const Masters = () => {
  const form = useForm({
    mode: "onChange",
  });

  const onSubmit = (data) => {
    try {
      console.log(data);
      form.reset();
    } catch (err) {
      console.log(err);
    }
  };
  const masters = [
    {
      id: 1,
      name: "Алексей А.",
      rating: 4.9,
      completed: 295,
      description:
        "Решаю проблемы и вопросы в сфере электрики, водоснабжению, водоотведению, отоплению. Благодаря многолетнему опыту даю конкретный результат. Вы не ошибетесь, выбрав меня. Делаю в срок, качественно, акк...",
    },
    {
      id: 2,
      name: "Алексей А.",
      rating: 4.9,
      completed: 295,
      description:
        "Решаю проблемы и вопросы в сфере электрики, водоснабжению, водоотведению, отоплению. Благодаря многолетнему опыту даю конкретный результат. Вы не ошибетесь, выбрав меня. Делаю в срок, качественно, акк...",
    },
    {
      id: 3,
      name: "Алексей А.",
      rating: 4.9,
      completed: 295,
      description:
        "Решаю проблемы и вопросы в сфере электрики, водоснабжению, водоотведению, отоплению. Благодаря многолетнему опыту даю конкретный результат. Вы не ошибетесь, выбрав меня. Делаю в срок, качественно, акк...",
    },
    {
      id: 4,
      name: "Алексей А.",
      rating: 4.9,
      completed: 295,
      description:
        "Решаю проблемы и вопросы в сфере электрики, водоснабжению, водоотведению, отоплению. Благодаря многолетнему опыту даю конкретный результат. Вы не ошибетесь, выбрав меня. Делаю в срок, качественно, акк...",
    },
  ];

  const categories = [
    {
      name: "Все категории",
      id: 1,
    },
    {
      name: "Юридическая и бухгалтерская помощь",
      id: 2,
    },
    {
      name: "Грузоперевозки",
      id: 3,
    },
    {
      name: "Ремонт транспорта",
      id: 4,
    },
    {
      name: "Курьерские услуги",
      id: 5,
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.contentBackground}>
        <div className={styles.content}>
          <h2 className={styles.title}>Исполнители</h2>

          <div className={styles.orderStatus}>
            <div className={styles.orderStatusItem}>
              <span>Сортировать</span>
            </div>
            <div className={styles.orderStatusItem}>
              <span>По рейтингу</span>
            </div>
            <div className={styles.orderStatusItem}>
              <span>По количеству выполненных заданий</span>
            </div>
          </div>
          <div className={styles.ordersCategories}>
            <div className={styles.ordersContainer}>
              {masters.map((master) => (
                <div key={master.id}>
                  <Link href={`/masters/${master.id}`}>
                    <a>
                      <div className={styles.orderCard} key={master.id}>
                        <div className={styles.cardContent}>
                          <div className={styles.top}>
                            <div>
                              <img src="/img/masters/master.png" />
                            </div>
                            <div className={styles.masterInfo}>
                              <span className={styles.name}>{master.name}</span>
                              <span className={styles.rating}>
                                Рейтинг исполнителя {master.rating}
                              </span>{" "}
                              <span className={styles.rating}>
                                Выполнил {master.completed} заданий
                              </span>
                            </div>
                            <div className={styles.icon}>
                              <img src={"/img/masters/masterIcon.svg"} />
                            </div>
                          </div>

                          <div className={styles.cardInfo}>
                            <span>{master.description}</span>
                            <div className={styles.finalize}>
                              Смотреть профиль
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </Link>
                </div>
              ))}
            </div>
            <div className={styles.categoriesContainer}>
              {categories.map((category) => (
                <div className={styles.category} key={category.id}>
                  <img src={"/img/my-orders/tickD.png"} />
                  <img src={"/img/my-orders/emptySq.png"} />
                  <span>{category.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Masters;
