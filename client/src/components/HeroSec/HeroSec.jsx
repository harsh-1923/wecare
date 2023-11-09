import React from "react";
import HERO from "../../assets/HERO.png";
import "./HeroSec.css";
import AdvertBanner from "../AdvertBanner/AdvertBanner";

const HeroSec = () => {
  return (
    <div
      style={{ backgroundImage: `url(${HERO})` }}
      className="herosec-wrapper"
    >
      <div className="herosec-overlay"></div>
      <div className="herosec-content">
        <AdvertBanner />
        <div className="herosec-cta">Get Started</div>
      </div>
    </div>
  );
};

export default HeroSec;
