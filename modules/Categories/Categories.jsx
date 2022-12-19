import styles from "./Categories.module.scss";
import { useState } from "react";
import Link from "next/link";
import Reviews from "../Reviews/Reviews";

const Categories = () => {
  const [categoryTasks, setCategoryTasks] = useState([]);
  const [categoryName, setCategoryName] = useState("");

  const categorynames = [
    {
      id: 1,
      name: "Грузоперевозки",
      img: "/img/categories/cargo.svg",
    },
    {
      id: 2,
      name: "Юридическая и бухгалтерская помощь",
      img: "/img/categories/cargo.svg",
    },
    {
      id: 3,
      name: "Ремонт транспорта",
      img: "/img/categories/cargo.svg",
    },
    {
      id: 4,
      name: "Курьерские услуги",
      img: "/img/categories/cargo.svg",
    },
    {
      id: 5,
      name: "Уборка и помощь по хозяйству",
      img: "/img/categories/cargo.svg",
    },
    {
      id: 6,
      name: "Дизайн",
      img: "/img/categories/cargo.svg",
    },
    {
      id: 7,
      name: "Красота и здоровье",
      img: "/img/categories/cargo.svg",
    },
    {
      id: 8,
      name: "Красота и здоровье",
      img: "/img/categories/cargo.svg",
    },
    {
      id: 9,
      name: "Ремонт и строительство",
      img: "/img/categories/cargo.svg",
    },
    {
      id: 10,
      name: "Компьютерная помощь",
      img: "/img/categories/cargo.svg",
    },
    {
      id: 11,
      name: "Установка и ремонт техники",
      img: "/img/categories/cargo.svg",
    },
  ];

  return (

    <section className={styles.container}>
      <div className={styles.contentWrapper}>
      <div className={styles.categoriesWrapper}>
        <img src="/img/categories/categoriesPic1.jpg" alt="pc" />
        <span>Компьютерная помощь</span>
      </div>
      <div className={styles.categoriesWrapper}>
        <img src="/img/categories/categoriesPic2.jpg" alt="" />
        <span>Разработка ПО</span>
      </div>
      <div className={styles.categoriesWrapper}>
        <img src="/img/categories/categoriesPic3.jpg" alt="courier" />
        <span>Курьерские услуги</span>
      </div>
      <div className={styles.categoriesWrapper}>
        <img src="/img/categories/categoriesPic4.jpg" alt="cleaning" />
        <span>Уборка и помощь по хозяйству</span>
      </div>
     
      <div className={styles.categoriesWrapper}>
        <img src="/img/categories/categoriesPic5.jpg" alt="pc" />
        <span>Грузоперевозки</span>
      </div>
      <div className={styles.categoriesWrapper}>
        <img src="/img/categories/categoriesPic6.jpg" alt="pc" />
        <span>Мероприятия и промоакции</span>
      </div>
      
      <div className={styles.categoriesWrapper}>
        <img src="/img/categories/categoriesPic7.jpg" alt="pc" />
        <span>Фото, видео и аудио</span>
      </div>
      
      <div className={styles.categoriesWrapper}>
        <img src="/img/categories/categoriesPic8.jpg" alt="pc" />
        <span>Ремонт цифровой техники</span>
      </div>
      

      <div className={styles.categoriesWrapper}>
        <img src="/img/categories/categoriesPic9.jpg" alt="pc" />
        <span>Красота и здоровье</span>
      </div>
      <div className={styles.categoriesWrapper}>
        <img src="/img/categories/categoriesPic10.jpg" alt="pc" />
        <span>Репетиторы и обучение</span>
      </div>
      <div className={styles.categoriesWrapper}>
        <img src="/img/categories/categoriesPic11.jpg" alt="pc" />
        <span>Дизайн</span>
      </div>
      <div className={styles.categoriesWrapper}>
        <img src="/img/categories/categoriesPic12.jpg" alt="pc" />
        <span>Ремонт транспорта</span>
      </div>
      
      


      </div>
    </section>

  );
};

export default Categories;



    /*
    <div className={styles.container}>
      <img className={styles.worm} src={"/img/categories/worm.png"} />
      <div className={styles.contentBack}>
        <div className={styles.content}>
          <h2 className={styles.title}>Категории</h2>
          <div className={styles.categoriesWrapper}>
            {categorynames.map((category) => (
              <div className={styles.categoryWrapper} key={category.id}>
                <img src={"/img/categories/cargo.svg"} />
                <span
                  className={styles.categoryName}
                  // onClick={() => {
                  //   setCategoryName(category.title);
                  // }}
                >
                  {category.name}
                </span>
              </div>
            ))}
          </div>

          <div className={styles.categoryLink}>
            <Link href="/categories">
              <a>
                <span>Посмотреть все услуги</span>
              </a>
            </Link>
          </div>
          <Reviews />
        </div>
      </div>
    </div>*/