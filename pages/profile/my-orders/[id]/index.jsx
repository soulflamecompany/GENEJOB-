import { useState } from "react";
import styles from "./Order.module.scss";

const Order = () => {
  const [orderRequested, setOrderRequested] = useState(false);
  const [orderAccepted, setOrderAccepted] = useState(false);

  const submitHandlerContractor = async () => {
    try {
      await Api().order.pickOrder({
        id: order.id,
        contractor: userData,
      });
      setOrderRequested(true);
    } catch (err) {
      console.log(err);
    }
  };

  const submitHandlerClient = async () => {
    try {
      await Api().order.acceptOrder({
        id: order.id,
        isAccepted: true,
      });
      setOrderAccepted(true);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className={styles.container}>
        <div key={order.id} className={styles.orderCard}>
          <div className={styles.orderTitleId}>
            <h3 className={styles.orderTitle}>{order.title}</h3>
            <span className={styles.orderId}>Заказ №{order.id}</span>
          </div>
          <div className={styles.orderPrice}>{order.price} руб.</div>
          <div className={styles.orderClient}>
            <span>Заказчик</span>
            <div className={styles.photoName}>
              <img
                className={styles.clientPhoto}
                src="/img/orderClientPhoto.png"
                alt=""
              />
              <span>{order.user.username}</span>
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
              <span className={styles.rowContent}>{order.about}</span>
            </div>
          </div>
        </div>
      </div>
      )}
    </>
  );
};

export default Order;
