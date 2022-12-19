import React, { useState } from "react";
import Link from "next/link";
import styles from "./Header.module.scss";

import { useRouter } from "next/router";
import Signin from "../../../components/Signin/Signin.jsx";
import Signup from "../../../components/Signup/Signup";
import Notifications from "../../../components/Notifications/Notifications";
import Profilemodal from "../../../components/Profilemodal/Profilemodal";
import Walletmodal from "../../../components/Walletmodal/Walletmodal";
import Chat from "../../Chat/Chat";

const Header = () => {
  const [signupModal, showSignupModal] = useState(false);
  const [signinModal, showSigninModal] = useState(false);

  const router = useRouter();

  const logoutHandler = async () => {
    destroyCookie({}, "authToken", { path: "/" });
    await router.reload();
  };

  return (
  
    <section className={styles.container}>
    <div className={styles.logoWrapper}>
      <Link href="/">
        <a>
          <div className={styles.logoDiv}>
            <img
              className={styles.logo}
              src="/img/header/logoGenejob1.svg"
              alt="logo"
            />
            <img
              className={styles.logoTitle}
              src="/img/header/logoGenejob2.svg"
              alt="logo name"
            />
          </div>
        </a>
      </Link>
    </div>
   
    <article className={styles.infoWrapper}>
        <span>
          <Link href="/makeorder">
            <a>
              <span>Создать задание</span>
            </a>
          </Link>
          </span>
          <span>
          <Link href="/tasks">
            <a>
              <span>Найти задание</span>
            </a>
          </Link>
          </span>
        <button className={styles.buttonWrapper}><div className={styles.modalLinks}>
          <Signin />/
          <Signup />
        </div></button>
        
      
      {signinModal && (
  <div className={styles.signinModal}>
/   <Signin showSigninModal={showSigninModal} />
  </div>
)}
 
      </article>
  </section>
  );
};

export default Header;





 /* First Header with button enter/registry
      <article className={styles.infoWrapper}>
        <span>
          <Link href="/makeorder">
            <a>
              <span>Создать задание</span>
            </a>
          </Link>
        </span>
         <span>
          <Link href="/tasks">
            <a>
              <span>Найти задание</span>
            </a>
          </Link>
        </span>
        <button className={styles.buttonWrapper}>Вход/Регистрация</button>
      </article>
      */






      /* Second Header with full info
      <section className={styles.container}>
      <div className={styles.logoWrapper}>
        <Link href="/">
          <a>
            <div className={styles.logoDiv}>
              <img
                className={styles.logo}
                src="/img/header/logoGenejob1.svg"
                alt="logo"
              />
              <img
                className={styles.logoTitle}
                src="/img/header/logoGenejob2.svg"
                alt="logo name"
              />
            </div>
          </a>
        </Link>
      </div>
     
      <article className={styles.contentWrapper}>
        <div className={styles.infoWrapper}>
       <span>
          <Link href="/makeorder">
            <a>
              <span>Создать задание</span>
            </a>
          </Link>
        </span>
         <span>
          <Link href="/tasks">
            <a>
              <span>Найти задание</span>
            </a>
          </Link>
        </span>
        <span>
          <Link href="/contractors">
            <a>
              <span>Исполнители</span>
            </a>
          </Link>
        </span>
         <span>
          <Link href="/profile/my-orders">
            <a>
              <span>Мои заказы</span>
            </a>
          </Link>
        </span>
        </div>
        <div className={styles.walletWrapper}>
        <span><Walletmodal /></span>
        </div>
      
      <div className={styles.profileNotificationsWrapper}>
      <span>
      <Chat />
        
      </span>
      <span>
             <Notifications />
      </span>
      </div>
      <div className={styles.avatar}>
      <Profilemodal />
              </div>
      </article>
    </section>
    */





















/*
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.modalLinks}>
          <span>
            <Link href="/">
              <a>
                <div className={styles.logoDiv}>
                  <img className={styles.logo} src="/img/header/logoGenejob1.svg" alt="logo" />
                  <img className={styles.logoTitle} src="/img/header/logoGenejob2.svg" alt="logo name"/>
                </div>
              </a>
            </Link>
          </span>
          <span>
            <Link href="/makeorder">
              <a>
                <span>Создать задание</span>
              </a>
            </Link>
          </span>
          <span>
            <Link href="/tasks">
              <a>
                <span>Найти задание</span>
              </a>
            </Link>
          </span>
        </div>
  
       {/* <div className={styles.modalLinks}>
          /*<span>*/
/*  <Link href={"/contractors"}>*/
/*    <a>Исполнители</a>*/
/*  </Link>*/
/*</span>*/

/*<span>*/
/* <Link href="/profile/my-orders">*/
/*    <a>Мои заказы</a>*/
/*  </Link>*/
/*</span>*/
/*<span>
            /*<Notifications />*/
/*<Profilemodal />*/
/*<Walletmodal />*/
/* <Chat />
          </span>
        </div>
        <div className={styles.modalLinks}>
          <Signin />
          <Signup />
        </div>
      </div>
      /*{signinModal && (*/
/*  <div className={styles.signinModal}>*/
/*    <Signin showSigninModal={showSigninModal} />*/
/*  </div>*/
/*)}*/
/*</div> */
