import { FloatButton } from "antd";
import AboutMeHero from "../components/AboutMeHero";
import CraftHero from "../components/CraftHero";
import MainHero from "../components/MainHero";
import OfferHero from "../components/OfferHero";
import SkillsFeatures from "../components/SkillsFeatures";

const Home = () => {
  return (
    <div>
      <div className="b-5">
        <MainHero />
      </div>
      <AboutMeHero />

      <OfferHero />

      <div className="b-3">
        <SkillsFeatures />
      </div>

      <CraftHero />
      <FloatButton.BackTop type="primary" />
    </div>
  );
};

export default Home;
