import styles from "./Requests.module.scss";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";

const Requests = () => {
  const [show, setShow] = useState(false);

  const form = useForm({
    mode: "onChange",
  });

  const onSubmit = () => {
    try {
      // router.push("/");
    } catch (err) {}
  };
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.titleDiv}>
          <h3 className={styles.title}>У задания 22 отклика</h3>
        </div>
        <div className={styles.requestsMessage}>
          <div>
            Вы можете назначить исполнителем любого пользователя, который
            оставил отклик к вашему заданию или подождать еще откликов.
          </div>
          <div>
            Уведомлять меня о новых откликах к заданию по e-mail:
            ivanivanov@gmail.com
          </div>
        </div>
        <div className={styles.filter}>
          <span>По рейтингу</span>
          <span>По времени</span>
          <span>По отзывам</span>
        </div>
        <div className={styles.request}>
          <div className={styles.userInfo}>
            <div>
              <img src={"/img/order/requestUser.png"} />
            </div>
            <div className={styles.info}>
              <span className={styles.name}>Антон А.</span>
              <span className={styles.rating}>Рейтинг исполнителя: 4.9</span>
              <span className={styles.record}>Выполнил 295 заданий</span>
              <span className={styles.reviews}>Отзывы: 12</span>
            </div>
          </div>
          <div className={styles.requestPrice}>Стоимость 8 000 ₽</div>
          <div className={styles.requestText}>
            <span>Здравствуйте!</span>
            <span>
              Готов выполнить ваш заказ! Качественно и с гарантией выполню
              работы по замене и монтаже водопровода , отопления и канализации,
              сантехники и электрики , опыт работы в данной сфере 19 лет .
              Работаю сам , без подсобников и подмастерьев, соответственно и всю
              ответственность за выполненную мною работу несу сам лично.
            </span>
          </div>
          <div>
            <Link href="/">
              <a>
                <button className={styles.buttonTwo}>
                  Выбрать исполнителем
                </button>
              </a>
            </Link>
          </div>
          <div>Выберите исполнителя, чтобы потом оставить отзыв о работе.</div>
        </div>
        <div className={styles.response}>
          <span>Пожаловаться</span>
          <div className={styles.modalShow}>
            <span onClick={() => setShow(true)}>Скрыть отклик</span>
            {show && (
              <div className={styles.modal}>
                <div className={styles.titleClose}>
                  <span className={styles.modalTitle}>
                    Отклик скрыт. Почему он вам не подошел?
                  </span>
                  <img
                    className={styles.modalCloseButton}
                    src={"/img/modalClose.png"}
                    onClick={() => setShow(false)}
                  />
                </div>

                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className={styles.form}
                >
                  <div className={styles.confirmDiv}>
                    <input
                      type="checkbox"
                      id="confirm"
                      {...form.register("confirm")}
                      className={styles.checkbox}
                    />

                    <label htmlFor="confirm" className={styles.labelConfirm}>
                      Высокая цена
                    </label>
                  </div>
                  <div className={styles.confirmDiv}>
                    <input
                      type="checkbox"
                      id="confirm"
                      {...form.register("confirm")}
                      className={styles.checkbox}
                    />

                    <label htmlFor="confirm" className={styles.labelConfirm}>
                      У исполнителя мало отзывов{" "}
                    </label>
                  </div>
                  <div className={styles.confirmDiv}>
                    <input
                      type="checkbox"
                      id="confirm"
                      {...form.register("confirm")}
                      className={styles.checkbox}
                    />

                    <label htmlFor="confirm" className={styles.labelConfirm}>
                      Не соответствует заданию{" "}
                    </label>
                  </div>
                  <div className={styles.confirmDiv}>
                    <input
                      type="checkbox"
                      id="confirm"
                      {...form.register("confirm")}
                      className={styles.checkbox}
                    />

                    <label htmlFor="confirm" className={styles.labelConfirm}>
                      Не рассматриваю компании{" "}
                    </label>
                  </div>
                  <div className={styles.confirmDiv}>
                    <input
                      type="checkbox"
                      id="confirm"
                      {...form.register("confirm")}
                      className={styles.checkbox}
                    />

                    <label htmlFor="confirm" className={styles.labelConfirm}>
                      Что-то другое{" "}
                    </label>
                  </div>

                  <input
                    className={styles.input}
                    id="reason"
                    {...form.register("reason")}
                    placeholder="Укажите причину скрытия отклика"
                  />
                  <div className={styles.buttonWrapper}>
                    <input
                      className={styles.buttonTwoSmall}
                      disabled={
                        !form.formState.isValid || form.formState.isSubmitting
                      }
                      type="submit"
                      value="Готово"
                    />
                    <span>
                      Отклик скрыт и находится в конце списка, но вы всегда
                      можете к нему вернуться.
                    </span>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Requests;
