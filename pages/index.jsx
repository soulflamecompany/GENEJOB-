import Categories from "../modules/Categories/Categories";
import HeroTop from "../modules/Layout/HeroTop/HeroTop";
import HeroBottom from "../modules/Layout/HeroBottom/HeroBottom";
import Reviews from "../modules/Reviews/Reviews";

const Home = () => {
  return (
    <div>
      <HeroTop />
      <Categories />
      <Reviews />
      <HeroBottom />
    </div>
  );
};

export default Home;
