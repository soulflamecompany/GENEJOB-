import { useState } from "react";
import styles from "./Profile.module.scss";
import Link from "next/link";
import Walletmodal from "..//..//components/Walletmodal/Walletmodal";
const Profile = () => {
 /*
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
  */
  return (
    <section className={styles.container}>
    <h1 className={styles.title}>Мой профиль</h1>
     
     <section className={styles.content}>
     
   
       
     <article className={styles.profileWrapper}>
       <span className={styles.profileAvatar}><img src="/img/profileAvatar.svg"  /></span>
       <div className={styles.profile}>
       <div className={styles.profileNameWrapper}>
       <span className={styles.profileName}>Иван Ильин</span>
       </div>
       <div className={styles.profileInfoWrapper}>
         <span className={styles.profileInfo}>26 лет, Санкт-Петербург</span>
         <span className={styles.rate}><img src="/img/starRate.svg"  /> 5.0 (12 Отзывов)</span>
       </div>
       <button className={styles.editProfileButton}>Изменить фотографию</button>
       </div>
       
     </article>
    

    
<article className={styles.aboutMe}>
  
  <section className={styles.infoWrapper}>
    <div className={styles.divInfo}>
      <span className={styles.name}>Имя</span>
      <span >
        <input className={styles.input}  type="text" 
        placeholder ="Иван Ильин"/></span>
    </div>

    <div className={styles.divInfo}>
      <span className={styles.name}>Email</span>
      <span >
        <input className={styles.input}  type="email" 
        placeholder="ivan_ilyn@mail.ru"/></span>
    </div>
</section>
<section className={styles.infoWrapper}>
    <div className={styles.divInfo}>
      <span className={styles.name}>Пароль</span>
      <span >
        <input className={styles.input}  type="password" 
        placeholder="********"/></span>
    </div>

    <div className={styles.divInfo}>
      <span className={styles.name}>Телефон</span>
      <span >
        <input className={styles.input}  type="tel" 
        placeholder="+7 944 698 12 34"/></span>
    </div>
    </section>
    <section className={styles.infoWrapper}>
    <div className={styles.divInfo}>
      <span className={styles.name}>Город</span>
      <span >
        <input className={styles.inputPointer}  type="text" 
        placeholder="Москва"/></span>
    </div>
  
  
    <div className={styles.divInfo}>
      <span className={styles.name}>Дата рождения</span>
      <span >
        <input className={styles.input}  type="date" 
        placeholder="02.08.1997"/></span>
    </div>
    </section>
  



  
  
<span className={styles.titleAboutMe}>Обо мне</span>
<span className={styles.description}><textarea className={styles.inputDescription}> Выполняю ремонт квартир, комнат, мелкий ремонт, сантехника, электрика, утепление балконов, устройство межкомнатных перегородок. Натяжные потолки. Работы выполняю сам, на большие объемы привлекаю помощника. Опыт работы в строительстве и ремонте более 20 лет. Составление сметы, заключение договора, гарантия.</textarea>
 </span>
<span className={styles.typesOfWork}>Виды выполняемых работ</span>
<section className={styles.categories}>

<div className={styles.category1}>
  <span> Ремонт и строительство</span>
  <span><img src="/img/addIcon.svg" /></span>
  </div>

  <div className={styles.category2}>
<span>Сантехнические работы</span>
<span><img src="/img/addIcon.svg" /></span>
</div>

<div className={styles.category3}>
<span>Мастер на час</span>
<span><img src="/img/addIcon.svg" /></span>
</div>

<div className={styles.category4}>
<span>Электромонтажные работы</span>
<span><img src="/img/addIcon.svg" /></span>
</div>

<div className={styles.category5}>
<span>Сборка и ремонт мебели</span>
<span><img src="/img/addIcon.svg" /></span>
</div>

<div className={styles.category6}>

<span><img src="/img/addIconEmptySlot.svg" /></span>
</div>

</section>
<span className={styles.workExamples}>Примеры работ</span>
<div className={styles.workExamplesPicsWrapper}>
<span><img className={styles.workExamplesPics} src="/img/workExamples.jpg" /></span>
<span><img className={styles.workExamplesPics} src="/img/workExamples.jpg" /></span>
<span><img className={styles.workExamplesPics} src="/img/workExamples.jpg" /></span>
<span><img className={styles.workExamplesPics} src="/img/workExamples.jpg" /></span>
<span><img className={styles.workExamplesPics} src="/img/workExamples.jpg" /></span>
<span className={styles.addImg}><img src="/img/addIconEmptySlot.svg" /></span>
</div>

<div className={styles.buttonsWrapper}>
  <button className={styles.saveButton}>Сохранить</button>
  <button className={styles.cancelButton}>Отменить</button>
</div>
</article>

     </section>
     </section>
  );
};

export default Profile;













/* Profile page

<section className={styles.container}>
<h1 className={styles.title}>Мой профиль</h1>
 
 <section className={styles.content}>
 
 <div className={styles.firstColumn}>
   
 <article className={styles.profileWrapper}>
   <span className={styles.profileAvatar}><img src="/img/profileAvatar.svg"  /></span>
   <div className={styles.profile}>
   <div className={styles.profileNameWrapper}>
   <span className={styles.profileName}>Иван Ильин</span>
   </div>
   <div className={styles.profileInfoWrapper}>
     <span className={styles.profileInfo}>26 лет, Санкт-Петербург</span>
     <span className={styles.rate}><img src="/img/starRate.svg"  /> 5.0 (12 Отзывов)</span>
   </div>
   <button className={styles.editProfileButton}>Редактировать профиль</button>
   </div>
 </article>

 <article className={styles.walletWrapper}>
   <span>Баланс: 120 000 ₽</span>
   <input
           className={styles.input}
           
           placeholder="1000 ₽"
         />
   <input className={styles.submitInput}   type="submit"
             value="Пополнить баланс"  />
 </article>
 </div>
 <div className={styles.secondColumn}>
<article className={styles.aboutMe}>
<span className={styles.titleAboutMe}>Обо мне</span>
<span className={styles.description}>Выполняю ремонт квартир, комнат, мелкий ремонт, сантехника, электрика, утепление балконов, устройство межкомнатных перегородок. Натяжные потолки. Работы выполняю сам, на большие объемы привлекаю помощника. Опыт работы в строительстве и ремонте более 20 лет. Составление сметы, заключение договора, гарантия .</span>
<span className={styles.typesOfWork}>Виды выполняемых работ</span>
<div className={styles.categories}>
<span className={styles.category1}>Ремонт и строительство</span>
<span className={styles.category2}>Сантехнические работы</span>
<span className={styles.category3}>Мастер на час</span>
<span className={styles.category4}>Электромонтажные работы</span>
<span className={styles.category5}>Сборка и ремонт мебели</span>
</div>
<span className={styles.workExamples}>Примеры работ</span>
<div className={styles.workExamplesPicsWrapper}>
<span><img className={styles.workExamplesPics} src="/img/workExamples.jpg" /></span>
<span><img className={styles.workExamplesPics} src="/img/workExamples.jpg" /></span>
<span><img className={styles.workExamplesPics} src="/img/workExamples.jpg" /></span>
<span><img className={styles.workExamplesPics} src="/img/workExamples.jpg" /></span>
<span><img className={styles.workExamplesPics} src="/img/workExamples.jpg" /></span>
</div>
</article>

<article className={styles.reviews}>
<span className={styles.titleReviews}>Отзывы</span>
<span className={styles.borderLine}></span>
<div className={styles.nameRateWrapper}>
<span className={styles.nameRate}>Алексей Иванов</span>
<span><img src="/img/reviews/starLineGold.svg"  /></span>
</div>
<span className={styles.descriptionReview}>Очень рад, что нашелся такой специалист! Задача мне казалась очень сложной, но Иван справился с ней всего за пару часов. Приятно иметь дело с профессионалом своего дела. Обязательно обращусь к нему снова и посоветую коллегам.</span>
<div className={styles.nameRateWrapper}>
<span className={styles.nameRate}>Мария Гаврилова</span>
<span><img src="/img/reviews/starLineGold.svg"  /></span>
</div>
<span className={styles.descriptionReview}>Спасибо за отличный проект! Я капризный клиент, у меня было много условий. Иван смог выполнить все мои требования и по красоте, и по функциональности будущего ремонта. Рекомендую!</span>
<button className={styles.seeAllReviewsButton}>Посмотреть все отзывы</button>
</article>
</div>
 </section>
</section>

*/










/*
 <div className={styles.container}>
      <div className={styles.contentBackground}>
        <div key={order.id} className={styles.orderCard}>
          <div className={styles.orderTitleId}>
            <h3 className={styles.Title}>МОЙ ПРОФИЛЬ</h3>
          </div>

          <div className={styles.users}>
            <div className={styles.orderUser}>
              <div className={styles.photoInfo}>
                <img
                  className={styles.clientPhoto}
                  src="/img/order/client.png"
                  alt=""
                />
                <div className={styles.userInfo}>
                  <span className={styles.name}>Иван Иванов</span>
                  <span className={styles.age}>29 лет, Москва</span>
                  <span className={styles.info}>Рейтинг исполнителя 5.0</span>
                  <span className={styles.info}>Выполнил 295 заданий</span>
                </div>
              </div>
            </div>
            <div className={styles.orderUser}>
              <div className={styles.photoInfo}></div>
            </div>
          </div>

          <div className={styles.buttonWrapper}>
            {/*<Link href="/makeorder">*/
            {/*  <a>*/}
            {/*    <button className={styles.buttonOne}>Написать исполнителю</button>*/}
            {/*  </a>*/}
            {/*</Link>*/}
            {/*<Link href="/">*/}
            {/*  <a>*/}
            {/*    <button className={styles.buttonTwo}>Завершить</button>*/}
            {/*  </a>*/}
            /*
            {/*</Link>*/
           /* <Link href="/makeorder">
              <a>
                <button className={styles.buttonOne}>Изменить фото</button>
              </a>
            </Link>
          </div>
          <div className={styles.text}>
            Выполняю ремонт квартир, комнат, мелкий ремонт, сантехника,
            электрика, утепление балконов, устройство межкомнатных перегородок.
            Натяжные потолки. Работы выполняю сам, на большие объемы привлекаю
            помощника. Опыт работы в строительстве и ремонте более 20 лет.
            Составление сметы, заключение договора, гарантия.
          </div>
        </div>
      </div>
    </div>

    */