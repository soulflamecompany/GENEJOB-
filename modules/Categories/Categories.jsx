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
    </div>
  );
};

export default Categories;
