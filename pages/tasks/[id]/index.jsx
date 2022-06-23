import { useState } from "react";
import styles from "./Task.module.scss";
import Link from "next/link";
import Requests from "../../../modules/Requests/Requests";
const Order = () => {
  const [orderRequested, setOrderRequested] = useState(false);
  const order = {
    id: 9941868,
    title: "Установить сантехнику",
    price: "до 10 000 руб.",
    address: "улица Глазунова, 6, Казань",
    date: "25 марта 2022 - 30 марта 2022",
    user: {
      username: 1,
    },
    about:
      "Поменять трубы, подключить/установить стиральную машинку и установить/подключить раковину и смеситель в ванной. Cдвинуть унитаз, установить вытяжку-вентилятор для ванной установить обратно все панели. Предлагайте свою цену, рассмотрю все варианты.",
  };
  const submitHandler = () => {
    try {
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className={styles.container}>
      <div key={order.id} className={styles.orderCard}>
        <div className={styles.orderTitleId}>
          <h3 className={styles.orderTitle}>{order.title}</h3>
        </div>
        <div className={styles.orderPrice}>{order.price} руб.</div>
        <div className={styles.statusMessage}>Вы выбрали исполнителя</div>
        <div className={styles.orderStatus}>
          <div className={styles.orderStatusItem}>
            <span>Выполняется</span>
            <img src={"/img/order/smLine.png"} />
          </div>
          <div className={styles.orderStatusItem}>
            <span>1 просмотр</span>
            <img src={"/img/order/smLine.png"} />
          </div>
          <div className={styles.orderStatusItem}>
            <span>Создано 1 ч. 20 мин. назад</span>
            <img src={"/img/order/smLine.png"} />
          </div>
          <div className={styles.orderStatusItem}>
            <span>Сайт под ключ</span>
          </div>
          <div className={styles.orderId}>Заказ №{order.id}</div>
        </div>

        <div className={styles.users}>
          <div className={styles.orderUser}>
            <span>Заказчик</span>
            <div className={styles.photoInfo}>
              <img
                className={styles.clientPhoto}
                src="/img/order/client.png"
                alt=""
              />
              <div className={styles.userInfo}>
                <span className={styles.name}>Иван И.</span>
                <span className={styles.info}>36 лет, Санкт-Петербург</span>
                <span className={styles.info}>Отзывы: 12</span>
              </div>
            </div>
          </div>
          <div className={styles.orderUser}>
            <span>Исполнитель</span>
            <div className={styles.photoInfo}>
              <img
                className={styles.clientPhoto}
                src="/img/order/master.png"
                alt=""
              />
              <div className={styles.userInfo}>
                <span className={styles.name}>Антон А.</span>
                <span className={styles.info}>36 лет, Санкт-Петербург</span>
                <span className={styles.info}>Отзывы: 12</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.infoTable}>
          <div className={styles.infoTableRow}>
            <span className={styles.rowTitle}>Адрес</span>
            <span className={styles.rowContent}>{order.address} </span>
          </div>
          <div className={styles.infoTableRow}>
            <span className={styles.rowTitle}>Срок</span>
            <span className={styles.rowContent}>{order.date}</span>
          </div>
          <div className={styles.infoTableRow}>
            <span className={styles.rowTitle}>Бюджет</span>
            <span className={styles.rowContent}>{order.price}</span>
          </div>
          <div className={styles.infoTableRow}>
            <span className={styles.rowTitle}>Оплата задания</span>
            <span className={styles.rowContent}>Банковской картой</span>
          </div>
          <div className={styles.infoTableRowLast}>
            <span className={styles.rowTitle}>Описание</span>
            <span className={styles.rowContent}>
              {order.about}
              <img
                className={styles.taskPhoto}
                src={"/img/order/taskphoto.png"}
              />
            </span>
          </div>
        </div>
        <div className={styles.buttonWrapper}>
          {/*<Link href="/makeorder">*/}
          {/*  <a>*/}
          {/*    <button className={styles.buttonOne}>Написать исполнителю</button>*/}
          {/*  </a>*/}
          {/*</Link>*/}
          {/*<Link href="/">*/}
          {/*  <a>*/}
          {/*    <button className={styles.buttonTwo}>Завершить</button>*/}
          {/*  </a>*/}
          {/*</Link>*/}
          <Link href="/makeorder">
            <a>
              <button className={styles.buttonOne}>
                Редактировать задание
              </button>
            </a>
          </Link>
        </div>
      </div>
      <Requests />
    </div>
  );
};

export default Order;
