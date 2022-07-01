import styles from "./Tasks.module.scss";
import { useForm } from "react-hook-form";

import { useState } from "react";
import Link from "next/link";

const Tasks = () => {
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
  const orders = [
    {
      id: 1,
      title: "Поменять духовой шкаф шкафшкафшкаф",
      price: 1000,
      address: "улица Родины, Казань",
      date: "25 марта — 30 марта",
      client: "Антон А.",
      requests: "26 отзывов",
    },
    {
      id: 2,
      title: "Поменять духовой шкаф шкафшкафшкаф",
      price: 1000,
      address: "улица Родины, Казань",
      date: "25 марта — 30 марта",
      finished: true,
    },
    {
      id: 3,
      title: "Поменять духовой шкаф шкафшкафшкаф",
      price: 1000,
      address: "улица Родины, Казань",
      date: "25 марта — 30 марта",
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
          <h2 className={styles.title}>Найти задание</h2>
          <div className={styles.inputWrapper}>
            <form
              className={styles.formWrapper}
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <div className={styles.doubleInputDiv}>
                <input
                  className={styles.input}
                  id="title"
                  {...form.register("title")}
                  placeholder="Поиск по ключевым словам"
                />
                <div className={styles.finalize}>Завершить</div>
              </div>
              <div className={styles.doubleInputDiv}>
                <div className={styles.singleInput}>
                  <input
                    className={styles.input}
                    id="category"
                    {...form.register("category")}
                    placeholder="Город, улица, дом"
                  />
                </div>
                <div className={styles.singleInput}>
                  <input
                    className={styles.input}
                    id="subcategory"
                    {...form.register("subcategory")}
                    placeholder="Радиус поиска"
                  />
                </div>
                <div className={styles.singleInput}>
                  <input
                    className={styles.input}
                    id="subcategory"
                    {...form.register("subcategory")}
                    placeholder="Бюджет ₽"
                  />
                </div>
              </div>
            </form>
          </div>

          <div className={styles.orderStatus}>
            <div className={styles.orderStatusItem}>
              <img src={"/img/my-orders/emptySq.png"} />

              <span>Удалённая работа</span>
            </div>
            <div className={styles.orderStatusItem}>
              <img src={"/img/my-orders/emptySq.png"} />

              <span>Задания без откликов</span>
            </div>
            <div className={styles.orderStatusItem}>
              <img src={"/img/my-orders/emptySq.png"} />

              <span>Только вакансии</span>
            </div>
          </div>

          <div className={styles.orderStatus}>
            <div className={styles.orderStatusItem}>
              <span>Сортировать</span>
            </div>
            <div className={styles.orderStatusItem}>
              <span>По дате публиции</span>
            </div>
            <div className={styles.orderStatusItem}>
              <span>По срочности</span>
            </div>
          </div>
          <div className={styles.ordersCategories}>
            <div className={styles.ordersContainer}>
              {orders.map((myOrder) => (
                <div key={myOrder.id}>
                  <Link href={`/tasks/${myOrder.id}`}>
                    <a>
                      <div className={styles.orderCard} key={myOrder.id}>
                        <div className={styles.cardContent}>
                          <div>
                            <img src="/img/taskIcon.png" />
                          </div>
                          <div className={styles.cardInfo}>
                            <div className={styles.cardInfoTitle}>
                              <span className={styles.cardTitle}>
                                {myOrder.title}
                              </span>
                              <span className={styles.cardPrice}>
                                {myOrder.price} руб.
                              </span>
                            </div>
                            <div className={styles.cardInfoAddress}>
                              <span>{myOrder.address}</span>
                              <span>{myOrder.date}</span>
                            </div>
                            <div className={styles.bottomLine}>
                              <div className={styles.cardInfoClient}>
                                <span>{myOrder.client}</span>
                                <span>{myOrder.requests}</span>
                              </div>
                              <div className={styles.finalize}>Завершить</div>
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

export default Tasks;
