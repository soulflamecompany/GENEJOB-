import { useForm } from "react-hook-form";
import styles from "./Notifications.module.scss";
import { useState } from "react";
import Modal from "../../modules/Modal/Modal";

const Notifications = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <span className={styles.modalLink} onClick={() => setShowModal(true)}>
        <img src="/img/notify.png" />
      </span>
      <Modal show={showModal} close={() => setShowModal(false)}>
        <div className={styles.container}>
          <div className={styles.titleDiv}>
            <h4 className={styles.title}>Уведомления</h4>
          </div>
          <div className={styles.notificationsWrapper}>
            <div className={styles.notification}>
              <div className={styles.notificationInfo}>
                <div className={styles.authorMessage}>
                  <span className={styles.author}>Onlinejobx support</span>
                  <span className={styles.message}>
                    Lorem ipsum dolor sit amet, consectetur...
                  </span>
                </div>
                <div className={styles.date}>10.12</div>
              </div>
              <div>
                <img src={"/img/notify/line.png"} />
              </div>
            </div>
            <div className={styles.notification}>
              <div className={styles.notificationInfo}>
                <div className={styles.authorMessage}>
                  <span className={styles.author}>Lee Williamson</span>
                  <span className={styles.message}>
                    Вас выбрали исполнителем в задании...
                  </span>
                </div>
                <div className={styles.date}>8.12</div>
              </div>
              <div>
                <img src={"/img/notify/line.png"} />
              </div>
            </div>{" "}
            <div className={styles.notification}>
              <div className={styles.notificationInfo}>
                <div className={styles.authorMessage}>
                  <span className={styles.author}>Ronald Mccoy</span>
                  <span className={styles.message}>
                    Lorem ipsum dolor sit amet, consectetur...
                  </span>
                </div>
                <div className={styles.date}>5.12</div>
              </div>
              <div>
                <img src={"/img/notify/line.png"} />
              </div>
            </div>
            <div className={styles.notification}>
              <div className={styles.notificationInfo}>
                <div className={styles.authorMessage}>
                  <span className={styles.author}>Albert Bell</span>
                  <span className={styles.message}>
                    Lorem ipsum dolor sit amet, consectetur...
                  </span>
                </div>
                <div className={styles.date}>28.11</div>
              </div>
              <div>
                <img src={"/img/notify/line.png"} />
              </div>
            </div>
            <div className={styles.actions}>
              <span>Отметить все как прочитанные</span>
              <span>Показать еще</span>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Notifications;
