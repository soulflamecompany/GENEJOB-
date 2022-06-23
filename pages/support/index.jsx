import styles from "./Support.module.scss";
import { useForm } from "react-hook-form";
import { useState } from "react";
import classNames from "classnames";
import Link from "next/link";

const Faq = () => {
  const [modal, setModal] = useState(false);
  const form = useForm({
    mode: "onChange",
  });

  const onSubmit = (data) => {
    try {
      console.log(data);
      setModal(true);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className={styles.container}>
      <div
        className={classNames(styles.contentWrapper, {
          [styles.opacity]: modal,
        })}
      >
        <div>
          <div className={styles.title}>
            <h2>Служба поддержки</h2>
          </div>
          <p className={styles.subtitle}>
            Мы на связи ежедневно 9:00 до 21:00 по московскому времени. Рады
            помочь и ответить на Ваши вопросы.
          </p>
          <div className={styles.form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className={styles.form}
            >
              <label htmlFor="name" className={styles.label}>
                Имя
              </label>
              <input
                className={styles.input}
                id="name"
                {...form.register("name")}
                placeholder="Иван"
              />
              <label htmlFor="email" className={styles.label}>
                Email
              </label>
              <input
                className={styles.input}
                id="email"
                {...form.register("email")}
                placeholder="Ivanivanov@gmail.com"
              />
              <label htmlFor="info" className={styles.label}>
                Опишите проблему
              </label>
              <input
                className={styles.input}
                id="info"
                {...form.register("info")}
                placeholder="Введите текст"
              />
              <div className={styles.confirmDiv}>
                <input
                  type="checkbox"
                  id="confirm"
                  {...form.register("confirm")}
                  className={styles.checkbox}
                />

                <label htmlFor="confirm" className={styles.labelConfirm}>
                  Нажимая на кнопку, я соглашаюсь на обработку персональных
                  данных
                </label>
              </div>

              <input
                className={styles.submitInput}
                type="submit"
                value="Отправить"
              />
            </form>
          </div>
        </div>
      </div>
      {modal && (
        <div className={styles.modal}>
          <img
            className={styles.modalCloseButton}
            src={"/img/modalClose.png"}
            onClick={() => setModal(false)}
          />
          <img className={styles.modalTick} src={"/img/modalTick.png"} />

          <span className={styles.modalTitle}>Готово</span>
          <div className={styles.modalMessage}>
            <div>Ваше сообщение отправлено.</div>
            <div>Мы ответим на Ваш вопрос в ближайшее время.</div>
          </div>

          <Link href={"/"}>
            <a>
              <div className={styles.homeButton}>
                <span>Вернуться на главную</span>
              </div>
            </a>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Faq;
