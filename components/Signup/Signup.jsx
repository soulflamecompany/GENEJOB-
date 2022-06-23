import { useForm } from "react-hook-form";
import styles from "./Signup.module.scss";
import Modal from "../../modules/Modal/Modal";
import { useState } from "react";

const Signup = ({ showSignupModal }) => {
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
        Зарегистрироваться
      </span>
      <Modal show={showModal} close={() => setShowModal(false)}>
        <div className={styles.container}>
          <div className={styles.titlebutton}>
            <h4 className={styles.title}>Создайте свой профиль</h4>
          </div>
          <form onSubmit={form.handleSubmit(onSubmit)} className={styles.form}>
            <label htmlFor="name" className={styles.label}>
              Имя
            </label>
            <input
              className={styles.input}
              id="name"
              {...form.register("identifier")}
              placeholder="Иван"
            />
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <input
              className={styles.input}
              id="email"
              {...form.register("identifier")}
              placeholder="mail@mail.ru"
            />
            {/*{form.formState.errors.identifier?.message ? (*/}
            {/*  <p className={styles.errorMessage}>*/}
            {/*    {form.formState.errors.identifier?.message}*/}
            {/*  </p>*/}
            {/*) : (*/}
            {/*  <p className={styles.errorMessage}></p>*/}
            {/*)}*/}

            <label htmlFor="password" className={styles.label}>
              Пароль
            </label>
            <input
              className={styles.input}
              id="password"
              {...form.register("password")}
              type="password"
              placeholder="********"
            />
            {/*{form.formState.errors.password?.message ? (*/}
            {/*  <p className={styles.errorMessage}>*/}
            {/*    {form.formState.errors.password?.message}*/}
            {/*  </p>*/}
            {/*) : (*/}
            {/*  <p className={styles.errorMessage}></p>*/}
            {/*)}*/}
            <div className={styles.confirmDiv}>
              <input
                type="checkbox"
                id="confirm"
                {...form.register("confirm")}
                className={styles.checkbox}
              />

              <label htmlFor="confirm" className={styles.labelConfirm}>
                Нажимая на кнопку, я соглашаюсь на обработку персональных данных
              </label>
            </div>
            <div className={styles.buttonWrapper}>
              <input
                className={styles.submitInput}
                disabled={
                  !form.formState.isValid || form.formState.isSubmitting
                }
                type="submit"
                value="Зарегистрироваться"
              />
              <span>или</span>
              <div className={styles.googleButton}>
                <img src={"/img/auth/iconGoogle.png"} />
                <span>Быстрая регистрация через Google</span>
              </div>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default Signup;
