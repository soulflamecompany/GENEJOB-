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
        Регистрация
      </span>
      <Modal show={showModal} close={() => setShowModal(false)}>

      <article className={styles.container}>
          <div className={styles.titleWrapper}>
            <span className={styles.title}>Создайте свой профиль</span>
            <span><img src="/img/closeButton.svg" /></span>
          </div>
          <div className={styles.subtitleWrapper}>
            <span className={styles.signIn}>Вход</span>
            <span className={styles.signUp}>Регистрация</span>
          </div>
          <form onSubmit={form.handleSubmit(onSubmit)} className={styles.form}>
           
            <input
              className={styles.input}
              id="email"
              {...form.register("identifier")}
              placeholder="Email"
            />
            {/*{form.formState.errors.identifier?.message ? (*/}
            {/*  <p className={styles.errorMessage}>*/}
            {/*    {form.formState.errors.identifier?.message}*/}
            {/*  </p>*/}
            {/*) : (*/}
            {/*  <p className={styles.errorMessage}></p>*/}
            {/*)}*/}

            <input
              className={styles.input}
              id="password"
              {...form.register("password")}
              type="password"
              placeholder="Password"
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
                Нажимая на кнопку, я соглашаюсь на <span>обработку персональных данных</span>
              </label>
            </div>
            <div className={styles.buttonsWrapper}>
              <input
                className={styles.submitInput}
                disabled={
                  !form.formState.isValid || form.formState.isSubmitting
                }
                type="submit"
                value="Зарегистрироваться"
              />
              
              <div className={styles.googleButtonWrapper}>
                <button className={styles.googleButton}>
                <span><img src={"/img/auth/iconGoogle.png"} /></span>
                <span>Быстрая регистрация через Google</span>
                </button>
              </div>
            </div>
          </form>
        </article>
        
      </Modal>
    </div>
  );
};

export default Signup;
