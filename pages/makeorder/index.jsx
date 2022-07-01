import { useForm } from "react-hook-form";
import { useState } from "react";
import styles from "./Makeorder.module.scss";
import Link from "next/link";

const MakeOrder = () => {
  // const [categoryTasks, setCategoryTasks] = useState([]);
  // const [categoryName, setCategoryName] = useState("");
  // const [orderTask, setOrderTask] = useState < any > {};
  // const [orderCreated, setOrderCreated] = useState(false);

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

  return (
    <div className={styles.container}>
      <div className={styles.contentBackground}>
        <div>
          <h2>СОЗДАТЬ ЗАДАНИЕ</h2>
          <h4 className={styles.subtitle}>
            Мы поможем найти исполнителя для вашего задания
          </h4>
          <form
            className={styles.formWrapper}
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <label htmlFor="title" className={styles.label}>
              Название задания
            </label>
            <input
              className={styles.input}
              id="title"
              {...form.register("title")}
              placeholder="Например, сделать сайт интернет-магазина"
            />
            <div className={styles.doubleInputDiv}>
              <div className={styles.singleInput}>
                <label htmlFor="category" className={styles.label}>
                  Категория
                </label>
                <input
                  className={styles.input}
                  id="category"
                  {...form.register("category")}
                  placeholder="Дизайн"
                />
              </div>
              <div className={styles.singleInput}>
                <label htmlFor="subcategory" className={styles.label}>
                  Подкатегория
                </label>
                <input
                  className={styles.input}
                  id="subcategory"
                  {...form.register("subcategory")}
                  placeholder="Дизайн сайта"
                />
              </div>
            </div>

            <div className={styles.location}>
              <div className={styles.label}>Место оказания услуги</div>
              <div className={styles.locationSelect}>
                <input
                  id="locationAt"
                  {...form.register("locationAt")}
                  type="checkbox"
                />
                <label className={styles.locationLabel} htmlFor="location">
                  Можно выполнить удаленно
                </label>
              </div>

              <div className={styles.locationSelect}>
                <input
                  id="locationRemote"
                  {...form.register("locationRemote")}
                  type="checkbox"
                />
                <label className={styles.locationLabel} htmlFor="location">
                  Нужно присутствие по адресу
                </label>
              </div>
            </div>

            <label className={styles.label} htmlFor="address">
              По какому адресу?
            </label>
            <input
              className={styles.input}
              id="address"
              {...form.register("address")}
              placeholder="Город, улица, дом"
            />
            <div className={styles.doubleInputDiv}>
              <div className={styles.singleInput}>
                <label htmlFor="timeStart" className={styles.label}>
                  Начало
                </label>
                <input
                  className={styles.input}
                  id="timeStart"
                  {...form.register("timeStart")}
                  placeholder="Дизайн"
                />
              </div>
              <div className={styles.singleInput}>
                <label htmlFor="timeFinish" className={styles.label}>
                  Конец
                </label>
                <input
                  className={styles.input}
                  id="timeFinish"
                  {...form.register("timeFinish")}
                  placeholder="Дизайн сайта"
                />
              </div>
            </div>
            <label className={styles.label} htmlFor="price">
              Бюджет
            </label>
            <input
              className={styles.input}
              id="price"
              {...form.register("price")}
              placeholder="На какой бюджет вы расчитываете?"
            />
            <div className={styles.confirmDiv}>
              <input
                type="checkbox"
                id="assistance"
                {...form.register("confirm")}
                className={styles.checkbox}
              />

              <label htmlFor="assistance" className={styles.labelConfirm}>
                Не могу оценить стоимость заказа. Жду предложений от
                исполнителей.
              </label>
            </div>

            <label className={styles.label} htmlFor="about">
              Подробное описание
            </label>
            <input
              className={styles.textarea}
              id="about"
              {...form.register("about")}
              placeholder="Введите текст"
            />

            <input
              className={styles.submitInput}
              type="submit"
              value="Создать задание"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default MakeOrder;
