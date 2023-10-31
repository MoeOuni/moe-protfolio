import React from "react";
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

      <OfferHero />

      <div className="b-3">
        <SkillsFeatures />
      </div>

      <CraftHero />
    </div>
  );
};

export default Home;
