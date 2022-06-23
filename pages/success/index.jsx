import { useForm } from "react-hook-form";
import { useState } from "react";
import styles from "./Success.module.scss";
import Link from "next/link";

const Success = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.title}>
          <h2>Ваше задание успешно опубликовано!</h2>
        </div>
        <div className={styles.buttonWrapper}>
          <Link href="/makeorder">
            <a>
              <button className={styles.buttonOne}>Создать еще задание</button>
            </a>
          </Link>
          <Link href="/">
            <a>
              <button className={styles.buttonTwo}>Вернуться на главную</button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Success;
