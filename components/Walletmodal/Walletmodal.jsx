import styles from "./Walletmodal.module.scss";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";

const Profilemodal = () => {
  const [show, setShow] = useState(false);
  const [sucess, setSuccess] = useState(false);
  const form = useForm({
    mode: "onChange",
  });

  const onSubmit = () => {
    try {
      setShow(false);
      setSuccess(true);
    } catch (err) {}
  };
  return (
    <div className={styles.container}>
      <img
        className={styles.img}
        src={"/img/header/wallet.png"}
        onClick={() => {
          setShow(!show);
          setSuccess(false);
        }}
      />
      {show && (
        <div className={styles.modal}>
          <div>На какую сумму хотите пополнить кошелёк?</div>
          <div className={styles.depositInfo}>
            * — Порядок выплаты, ограничения и полные условия определены в
            оферте.
          </div>
          <div className={styles.divWithImg}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className={styles.form}
            >
              <input
                className={styles.input}
                id="deposit"
                {...form.register("deposit")}
                placeholder="1000 Р"
              />

              <div className={styles.buttonWrapper}>
                <input
                  className={styles.submitInput}
                  disabled={
                    !form.formState.isValid || form.formState.isSubmitting
                  }
                  type="submit"
                  value="Пополнить"
                />
              </div>
            </form>
          </div>
        </div>
      )}
      {sucess && (
        <div className={styles.modalSuccess}>
          <img
            className={styles.modalCloseButton}
            src={"/img/modalClose.png"}
            onClick={() => setSuccess(false)}
          />
          <img className={styles.modalTick} src={"/img/modalTick.png"} />

          <span className={styles.modalTitle}>Выполнено</span>
          <div className={styles.modalMessage}>
            <div>Баланс вашего кошелька успешно пополнен.</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profilemodal;
