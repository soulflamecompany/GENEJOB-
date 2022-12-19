import styles from "./Tasks.module.scss";
import { useForm } from "react-hook-form";

import { useState } from "react";
import Link from "next/link";

const Tasks = () => {
  const form = useForm({
    mode: "onChange",
  });

  const onSubmit = (data) => {
    try {
      console.log(data);
      form.reset();
    } catch (err) {
      console.log(err);
    }
  };
  const orders = [
    {
      id: 1,
      category: "Сантехнические работы",
      title: "Ремонт мойки из искусственного камня",
      description: "Поменять трубы, подключить/установить стиральную машинку и установить/подключить раковину и смеситель в ванной. Cдвинуть унитаз, установить вытяжку-вентилятор для ванно...",
      price: "до 1 000₽",
      address: "ул. Глазунова, 6, Казань",
      date: "25.03.2022 — 30.03.2022",
      client: "Иван. И",
      requests: "12 отзывов",
    },
    {
      id: 2,
      category: "Сантехнические работы",
      title: "Ремонт мойки из искусственного камня",
      description: "Поменять трубы, подключить/установить стиральную машинку и установить/подключить раковину и смеситель в ванной. Cдвинуть унитаз, установить вытяжку-вентилятор для ванно...",
      price: "до 1 000₽",
      address: "ул. Глазунова, 6, Казань",
      date: "25.03.2022 — 30.03.2022",
      client: "Иван. И",
      requests: "12 отзывов",
      finished: true,
    },
    {
      id: 3,
      category: "Сантехнические работы",
      title: "Ремонт мойки из искусственного камня",
      description: "Поменять трубы, подключить/установить стиральную машинку и установить/подключить раковину и смеситель в ванной. Cдвинуть унитаз, установить вытяжку-вентилятор для ванно...",
      price: "до 1 000₽",
      address: "ул. Глазунова, 6, Казань",
      date: "25.03.2022 — 30.03.2022",
      client: "Иван. И",
      requests: "12 отзывов",
    },
    {
      id: 4,
      category: "Сантехнические работы",
      title: "Ремонт мойки из искусственного камня",
      description: "Поменять трубы, подключить/установить стиральную машинку и установить/подключить раковину и смеситель в ванной. Cдвинуть унитаз, установить вытяжку-вентилятор для ванно...",
      price: "до 1 000₽",
      address: "ул. Глазунова, 6, Казань",
      date: "25.03.2022 — 30.03.2022",
      client: "Иван. И",
      requests: "12 отзывов",
    },
  ];

  const categories = [
    {
      name: "Все категории",
      id: 1,
    },
    {
      name: "Юридическая и бухгалтерская помощь",
      id: 2,
    },
    {
      name: "Грузоперевозки",
      id: 3,
    },
    {
      name: "Ремонт транспорта",
      id: 4,
    },
    {
      name: "Курьерские услуги",
      id: 5,
    },
  ];
  return (
   <div className={styles.container}>
     <section className={styles.contentWrapper}>
    <h2 className={styles.title}>Найти задание</h2>
   <section className={styles.content}>
<article className={styles.searchBarColumn}>
  <section className={styles.searchBarBlockWrapper}>
    <div className={styles.locationBarWrapper}>
      <input className={styles.locationBar}type="text" placeholder="Город,улица,дом "   />
      <img className={styles.locationMarkIcon} src="/img/my-orders/locationMarkIcon.svg"  />
    </div>
    <div className={styles.searchRadiusBarWrapper}>
      <input className={styles.searchRadiusBar}type="text" placeholder="Радиус поиска"   />
      <img className={styles.expandDownIcon} src="/img/my-orders/expandDownIcon.svg"  />
    </div>
    <div className={styles.budgetBarWrapper}>
      <input className={styles.budgetBar}type="text" placeholder="Бюджет ₽"   />
          </div>
      </section>

      <span className={styles.borderLine}></span>

      <section className={styles.sortingButtonsBlockWrapper}>
         <button className={styles.publicationDateButton}>По дате публикации</button>
         <button className={styles.urgencyButton}>По срочности</button>
       </section>

       <span className={styles.borderLine}></span>

       <section className={styles.mainSelectionBlockWrapper}>
<span className={styles.categoryTitle}><img className={styles.chekboxIcon}src="/img/my-orders/chekboxIcon.svg" />Удаленная работа  </span>
<span className={styles.categoryTitle}><img className={styles.chekboxIcon}src="/img/my-orders/chekboxIcon.svg" />Задания без откликов  </span>
<span className={styles.categoryTitle}><img className={styles.chekboxIcon}src="/img/my-orders/chekboxIcon.svg" />Только вакансии </span>
       </section>

       <span className={styles.borderLine}></span>



       <section className={styles.categoriesSelection}>
              <div className={styles.mainColumn}>
       <span className={styles.categoryTitle}><img className={styles.expandDownWhiteIcon}src="/img/my-orders/expandDownWhiteIcon.svg" /><img className={styles.chekboxIcon}src="/img/my-orders/chekboxIcon.svg" />Все категории  </span>
       <span className={styles.categoryTitle}><img className={styles.expandDownWhiteIcon}src="/img/my-orders/expandDownWhiteIcon.svg" /><img className={styles.chekboxIcon}src="/img/my-orders/chekboxIcon.svg" />Юридическая и бухгалтерская помощь </span>
       <span className={styles.categoryTitle}><img className={styles.expandDownWhiteIcon}src="/img/my-orders/expandDownWhiteIcon.svg" /><img className={styles.chekboxIcon}src="/img/my-orders/chekboxIcon.svg" />Грузоперевозки  </span>
       <span className={styles.categoryTitle}><img className={styles.expandDownWhiteIcon}src="/img/my-orders/expandDownWhiteIcon.svg" /><img className={styles.chekboxIcon}src="/img/my-orders/chekboxIcon.svg" />Ремонт транспорта </span>
       <span className={styles.categoryTitle}><img className={styles.expandDownWhiteIcon}src="/img/my-orders/expandDownWhiteIcon.svg" /><img className={styles.chekboxIcon}src="/img/my-orders/chekboxIcon.svg" />Курьерские услуги  </span>
       <span className={styles.categoryTitle}><img className={styles.expandDownWhiteIcon}src="/img/my-orders/expandDownWhiteIcon.svg" /><img className={styles.chekboxIcon}src="/img/my-orders/chekboxIcon.svg" />Уборка и помощь по хозяйству </span>
       <span className={styles.categoryTitle}><img className={styles.expandDownWhiteIcon}src="/img/my-orders/expandDownWhiteIcon.svg" /><img className={styles.chekboxIcon}src="/img/my-orders/chekboxIcon.svg" />Дизайн </span>
       <span className={styles.categoryTitle}><img className={styles.expandDownWhiteIcon}src="/img/my-orders/expandDownWhiteIcon.svg" /><img className={styles.chekboxIcon}src="/img/my-orders/chekboxIcon.svg" />Красота и здоровье  </span>
       <span className={styles.categoryTitle}><img className={styles.expandDownWhiteIcon}src="/img/my-orders/expandDownWhiteIcon.svg" /><img className={styles.chekboxIcon}src="/img/my-orders/chekboxIcon.svg" />Курьерские услуги  </span>
       <span className={styles.categoryTitle}><img className={styles.expandDownWhiteIcon}src="/img/my-orders/expandDownWhiteIcon.svg" /><img className={styles.chekboxIcon}src="/img/my-orders/chekboxIcon.svg" />Репетиторы и обучение </span>
              </div>

              <div className={styles.additionalExpandColumn}>
              <span className={styles.categoryTitleHover}><img className={styles.expandDownWhiteIcon}src="/img/my-orders/expandDownWhiteIcon.svg" /><img className={styles.chekboxIconDone}src="/img/my-orders/chekboxDoneIcon.svg" />Ремонт и строительство </span>
             </div>
<div className={styles.additionalColumn} >
<span className={styles.categoryTitle}><img className={styles.chekboxIcon}src="/img/my-orders/chekboxIcon.svg" />Мастер на час </span>
<span className={styles.categoryTitle}><img className={styles.chekboxIcon}src="/img/my-orders/chekboxIcon.svg" />Ремонт под ключ </span>
<span className={styles.categoryTitleHover}><img className={styles.chekboxIconDone}src="/img/my-orders/chekboxDoneIcon.svg" />Сантехнические работы</span>
<span className={styles.categoryTitle}><img className={styles.chekboxIcon}src="/img/my-orders/chekboxIcon.svg" />Электромонтажные работы </span>
<span className={styles.categoryTitle}><img className={styles.chekboxIcon}src="/img/my-orders/chekboxIcon.svg" />Отделочные работы </span>
<span className={styles.categoryTitle}><img className={styles.chekboxIcon}src="/img/my-orders/chekboxIcon.svg" />Потолки </span>
<span className={styles.categoryTitle}><img className={styles.chekboxIcon}src="/img/my-orders/chekboxIcon.svg" />Полы </span>
<span className={styles.categoryTitle}><img className={styles.chekboxIcon}src="/img/my-orders/chekboxIcon.svg" />Плиточные работы </span>
<span className={styles.categoryTitle}><img className={styles.chekboxIcon}src="/img/my-orders/chekboxIcon.svg" />Сборка и ремонт мебели </span>
<span className={styles.categoryTitle}><img className={styles.chekboxIcon}src="/img/my-orders/chekboxIcon.svg" />Установка и ремонт дверей, замков </span>
<span className={styles.categoryTitle}><img className={styles.chekboxIcon}src="/img/my-orders/chekboxIcon.svg" />Окна, остекление, балконы </span>
<span className={styles.categoryTitle}><img className={styles.chekboxIcon}src="/img/my-orders/chekboxIcon.svg" />Кровельные и фасадные работы </span>
<span className={styles.categoryTitle}><img className={styles.chekboxIcon}src="/img/my-orders/chekboxIcon.svg" />Отопление, водоснабжение, канализация </span>
<span className={styles.categoryTitle}><img className={styles.chekboxIcon}src="/img/my-orders/chekboxIcon.svg" />Изоляционные работы </span>
<span className={styles.categoryTitle}><img className={styles.chekboxIcon}src="/img/my-orders/chekboxIcon.svg" />Строительно-монтажные работы </span>
<span className={styles.categoryTitle}><img className={styles.chekboxIcon}src="/img/my-orders/chekboxIcon.svg" />Крупное строительство </span>
<span className={styles.categoryTitle}><img className={styles.chekboxIcon}src="/img/my-orders/chekboxIcon.svg" />Охранные системы </span>
<span className={styles.categoryTitle}><img className={styles.chekboxIcon}src="/img/my-orders/chekboxIcon.svg" />Что-то другое </span>
</div>

<div className={styles.additionalExpandColumn}>
              <span className={styles.categoryTitleHover}><img className={styles.expandDownWhiteIcon}src="/img/my-orders/expandDownWhiteIcon.svg" /><img className={styles.chekboxIconDone}src="/img/my-orders/chekboxDoneIcon.svg" />Ремонт и строительство </span>
             </div>

       </section>
</article>

<article className={styles.cardsColumn}>

  <section className={styles.cardStatusRespondWrapper}>
<span className={styles.cardCategory}>Сантехнические работы</span>
<span className={styles.cardTitle}>Ремонт мойки из искусственного камня</span>
<span className={styles.cardOrder}>Поменять трубы, подключить/установить стиральную машинку и установить/подключить раковину и смеситель в ванной. Cдвинуть унитаз, установить <br /> вытяжку-вентилятор для ванно...</span>
<div className={styles.cardInfo}>
<div className={styles.cardDataWrapper}>
<span className={styles.cardDataPrice}>до 5 000₽</span>
<div className={styles.cardData}>
  <span className={styles.cardDataAddress}> <img src="/img/my-orders/cardMapMarker.svg"/>ул. Глазунова, 6, Казань </span>
  <span className={styles.cardDataDate}> <img src="/img/my-orders/cardCalendar.svg" />25.03.2022 — 30.03.2022  </span>
  <div className={styles.cardDataProfileWrapper}>
    <span className={styles.cardDataProfileAvatar}> <img src="/img/my-orders/miniAvatar.svg" />   </span>
    <span className={styles.cardDataProfileName}>Иван. И</span>
    <span className={styles.cardDataProfileReviews}>12 отзывов</span>
  </div>
</div>
</div>
<button className={styles.respondButton}>Откликнуться</button>
</div>
  </section>

  <section className={styles.cardStatusResponseSendWrapper}>
<span className={styles.cardCategory}>Сантехнические работы</span>
<span className={styles.cardTitle}>Ремонт мойки из искусственного камня</span>
<span className={styles.cardOrder}>Поменять трубы, подключить/установить стиральную машинку и установить/подключить раковину и смеситель в ванной. Cдвинуть унитаз, установить <br /> вытяжку-вентилятор для ванно...</span>
<div className={styles.cardInfo}>
<div className={styles.cardDataWrapper}>
<span className={styles.cardDataPrice}>до 5 000₽</span>
<div className={styles.cardData}>
  <span className={styles.cardDataAddress}> <img src="/img/my-orders/cardMapMarker.svg"/>ул. Глазунова, 6, Казань </span>
  <span className={styles.cardDataDate}> <img src="/img/my-orders/cardCalendar.svg" />25.03.2022 — 30.03.2022  </span>
  <div className={styles.cardDataProfileWrapper}>
    <span className={styles.cardDataProfileAvatar}> <img src="/img/my-orders/miniAvatar.svg" />   </span>
    <span className={styles.cardDataProfileName}>Иван. И</span>
    <span className={styles.cardDataProfileReviews}>12 отзывов</span>
  </div>
</div>
</div>
<button className={styles.responseSendButton}>Отклик отправлен</button>
</div>
  </section>

  <section className={styles.cardStatusRespondHoverWrapper}>
<span className={styles.cardCategoryHover}>Сантехнические работы</span>
<span className={styles.cardTitleHover}>Ремонт мойки из искусственного камня</span>
<span className={styles.cardOrderHover}>Поменять трубы, подключить/установить стиральную машинку и установить/подключить раковину и смеситель в ванной. Cдвинуть унитаз, установить <br /> вытяжку-вентилятор для ванно...</span>
<div className={styles.cardInfoHover}>
<div className={styles.cardDataWrapperHover}>
<span className={styles.cardDataPriceHover}>до 5 000₽</span>
<div className={styles.cardDataHover}>
  <span className={styles.cardDataAddressHover}> <img  clasName={styles.cardMapMarkerHover} src="/img/my-orders/cardMapMarkerHover.svg"/>ул. Глазунова, 6, Казань </span>
  <span className={styles.cardDataDateHover}> <img  clasName={styles.cardCalendarHover} src="/img/my-orders/cardCalendarHover.svg" />25.03.2022 — 30.03.2022  </span>
  <div className={styles.cardDataProfileWrapperHover}>
    <span className={styles.cardDataProfileAvatarHover}> <img src="/img/my-orders/miniAvatar.svg" />   </span>
    <span className={styles.cardDataProfileNameHover}>Иван. И</span>
    <span className={styles.cardDataProfileReviewsHover}>12 отзывов</span>
  </div>
</div>
</div>
<button className={styles.respondButtonHover}>Откликнуться</button>
</div>
  </section>
  
 <section className={styles.cardStatusRespondWrapper}>
<span className={styles.cardCategory}>Сантехнические работы</span>
<span className={styles.cardTitle}>Ремонт мойки из искусственного камня</span>
<span className={styles.cardOrder}>Поменять трубы, подключить/установить стиральную машинку и установить/подключить раковину и смеситель в ванной. Cдвинуть унитаз, установить <br /> вытяжку-вентилятор для ванно...</span>
<div className={styles.cardInfo}>
<div className={styles.cardDataWrapper}>
<span className={styles.cardDataPrice}>до 5 000₽</span>
<div className={styles.cardData}>
  <span className={styles.cardDataAddress}> <img src="/img/my-orders/cardMapMarker.svg"/>ул. Глазунова, 6, Казань </span>
  <span className={styles.cardDataDate}> <img src="/img/my-orders/cardCalendar.svg" />25.03.2022 — 30.03.2022  </span>
  <div className={styles.cardDataProfileWrapper}>
    <span className={styles.cardDataProfileAvatar}> <img src="/img/my-orders/miniAvatar.svg" />   </span>
    <span className={styles.cardDataProfileName}>Иван. И</span>
    <span className={styles.cardDataProfileReviews}>12 отзывов</span>
  </div>
</div>
</div>
<button className={styles.respondButton}>Откликнуться</button>
</div>
  </section>

</article>


</section>
    </section>
   </div>
  );
};

export default Tasks;


/*


<div className={styles.container}>
<div className={styles.contentBackground}>
  <div className={styles.content}>
    <h2 className={styles.title}>Найти задание</h2>
    <div className={styles.inputWrapper}>
      <form
        className={styles.formWrapper}
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className={styles.doubleInputDiv}>
          <input
            className={styles.inputTop}
            id="title"
            {...form.register("title")}
            placeholder="Поиск по ключевым словам"
          />
          <div className={styles.finalize}>Завершить</div>
        </div>
        <div className={styles.doubleInputDiv}>
          <div className={styles.singleInput}>
            <input
              className={styles.input}
              id="category"
              {...form.register("category")}
              placeholder="Город, улица, дом"
            />
          </div>
          <div className={styles.singleInput}>
            <input
              className={styles.input}
              id="subcategory"
              {...form.register("subcategory")}
              placeholder="Радиус поиска"
            />
          </div>
          <div className={styles.singleInput}>
            <input
              className={styles.input}
              id="subcategory"
              {...form.register("subcategory")}
              placeholder="Бюджет ₽"
            />
          </div>
        </div>
      </form>
    </div>

    <div className={styles.orderStatus}>
      <div className={styles.orderStatusItem}>
        <img src={"/img/my-orders/emptySq.png"} />

        <span>Удалённая работа</span>
      </div>
      <div className={styles.orderStatusItem}>
        <img src={"/img/my-orders/emptySq.png"} />

        <span>Задания без откликов</span>
      </div>
      <div className={styles.orderStatusItem}>
        <img src={"/img/my-orders/emptySq.png"} />

        <span>Только вакансии</span>
      </div>
    </div>

    <div className={styles.orderStatus}>
      <div className={styles.orderStatusItem}>
        <span>Сортировать</span>
      </div>
      <div className={styles.orderStatusItem}>
        <span>По дате публиции</span>
      </div>
      <div className={styles.orderStatusItem}>
        <span>По срочности</span>
      </div>
    </div>

    <section className={styles.ordersCategories}>
      <article className={styles.ordersContainer}>
        {orders.map((myOrder) => (
          <div key={myOrder.id}>
            <Link href={`/tasks/${myOrder.id}`}>
              <a>
                <div className={styles.orderCard} key={myOrder.id}>
                  <div className={styles.cardContent}>
                   <span className={styles.cardCategory}>{myOrder.category}</span>
                   <span className={styles.cardTitle}>{myOrder.title}</span>
                   <span className={styles.cardDescription}>{myOrder.description}</span>
                   <span className={styles.cardPrice}>{myOrder.price}</span>
                   <div className={styles.cardAddressWrapper}>
                    <span><img src="/img/my-orders/cardMapMarker.svg" /></span>
                    <span className={styles.cardAddress}>{myOrder.address}</span>
                    </div>
                    <div className={styles.cardDateWrapper}>
                    <span><img src="/img/my-orders/cardCalendar.svg" /></span>
                    <span className={styles.cardDate}>{myOrder.date}</span>
                    </div>
                    <div className={styles.cardBottomLineWrapper}>
                    <span><img src="/img/my-orders/miniAvatar.svg" /></span>
                    <span className={styles.cardClient}>{myOrder.client}</span>
                    <span className={styles.cardRequests}>{myOrder.requests}</span>
                    </div>
                  </div>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </article>
      <div className={styles.categoriesContainer}>
        {categories.map((category) => (
          <div className={styles.category} key={category.id}>
            <img src={"/img/my-orders/tickD.png"} />
            <img src={"/img/my-orders/emptySq.png"} />
            <span>{category.name}</span>
          </div>
        ))}
      </div>
    </section>

  </div>
</div>
</div>
*/