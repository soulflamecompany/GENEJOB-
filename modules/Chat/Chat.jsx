import { useForm } from "react-hook-form";
import styles from "./Chat.module.scss";
import { useState } from "react";
import Modal from "../../modules/Modal/Modal";

const Chat = () => {
  const [showModal, setShowModal] = useState(false);

  const form = useForm({
    mode: "onChange",
  });

  const onSubmit = () => {
    try {
      // router.push("/");
    } catch (err) {}
  };

  return (
    <div>
      <span className={styles.modalLink} onClick={() => setShowModal(true)}>
        <img src="/img/header/iconEnvelope.svg" />
      </span>
      <Modal show={showModal} close={() => setShowModal(false)}>
        <div className={styles.container}>
          <div className={styles.left}>
            <input
              placeholder={"Введите имя для общения"}
              className={styles.input}
            />
            <div className={styles.groups}>
              <div className={styles.groupsHead}>Группы</div>
              <div className={styles.masters}>
                <img
                  src={"/img/chat/masters.png"}
                  className={styles.groupIcon}
                />
                <span>Исполнители</span>
              </div>
              <div className={styles.clients}>
                <img
                  src={"/img/chat/clients.png"}
                  className={styles.groupIcon}
                />
                <span>Заказчики</span>
              </div>
            </div>
            <div className={styles.users}>
              <div className={styles.groupsHead}>Исполнители</div>
              <div className={styles.masters}>
                <img
                  src={"/img/chat/userPhoto.png"}
                  className={styles.groupIcon}
                />
                <div className={styles.clientName}>
                  <span>Алена Власова</span>
                  <span>Здравствуйте ! Хотел бы боле...</span>
                </div>
              </div>
              <div className={styles.clients}>
                <img
                  src={"/img/chat/userPhoto.png"}
                  className={styles.groupIcon}
                />
                <div className={styles.clientName}>
                  <span>Алена Власова</span>
                  <span>Здравствуйте ! Хотел бы боле...</span>
                </div>
              </div>
              <div className={styles.clients}>
                <img
                  src={"/img/chat/userPhoto.png"}
                  className={styles.groupIcon}
                />
                <div className={styles.clientName}>
                  <span>Алена Власова</span>
                  <span>Здравствуйте ! Хотел бы боле...</span>
                </div>
              </div>
              <div className={styles.clients}>
                <img
                  src={"/img/chat/userPhoto.png"}
                  className={styles.groupIcon}
                />
                <div className={styles.clientName}>
                  <span>Алена Власова</span>
                  <span>Здравствуйте ! Хотел бы боле...</span>
                </div>
              </div>
            </div>
          </div>
          <img className={styles.line} src={"/img/chat/line.png"} />
          <div className={styles.right}>
            <div className={styles.chatUser}>
              <div className={styles.clients}>
                <img
                  src={"/img/chat/userPhoto.png"}
                  className={styles.groupIcon}
                />
                <div className={styles.clientName}>
                  <span>Алена Власова</span>
                </div>
              </div>
              <div>Пользователь выбрал вас исполнителем в задании</div>
              <div>«Ремонт мойки из искусственного камня»</div>
            </div>

            <div className={styles.chatText}>
              <div className={styles.chatUserText}>
                Здравствуйте ! Хотел бы более подробно узнать о Вашем проекте)
              </div>

              <div className={styles.meUserText}>Здравствуйте</div>
              <div>
                <input className={styles.inputChat} />
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Chat;
