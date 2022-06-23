import Categories from "../modules/Categories/Categories";
import Feedback from "../modules/Feedback/Reviews";
import HeroTop from "../modules/Layout/HeroTop/HeroTop";
import HeroBottom from "../modules/Layout/HeroBottom/HeroBottom";

const Home = () => {
  return (
    <div>
      <HeroTop />
      <Categories />
      <Feedback />
      <HeroBottom />
    </div>
  );
};

export default Home;
