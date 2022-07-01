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
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.modalLinks}>
          <span>
            <Link href="/">
              <a>
                <div className={styles.logoDiv}>
                  <img className={styles.logo} src="/img/icon.png" alt="logo" />
                  <span className={styles.logoTitle}>POSTDESIGN</span>
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

        <div className={styles.modalLinks}>
          {/*<span>*/}
          {/*  <Link href={"/contractors"}>*/}
          {/*    <a>Исполнители</a>*/}
          {/*  </Link>*/}
          {/*</span>*/}

          {/*<span>*/}
          {/*  <Link href="/profile/my-orders">*/}
          {/*    <a>Мои заказы</a>*/}
          {/*  </Link>*/}
          {/*</span>*/}
          <span>
            {/*<Notifications />*/}
            {/*<Profilemodal />*/}
            {/*<Walletmodal />*/}
            <Chat />
          </span>
        </div>
        <div className={styles.modalLinks}>
          <Signin />
          <Signup />
        </div>
      </div>
      {/*{signinModal && (*/}
      {/*  <div className={styles.signinModal}>*/}
      {/*    <Signin showSigninModal={showSigninModal} />*/}
      {/*  </div>*/}
      {/*)}*/}
    </div>
  );
};

export default Header;
