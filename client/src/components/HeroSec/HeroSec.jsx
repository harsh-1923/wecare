import React from "react";
import HERO from "../../assets/HERO.png";
import "./HeroSec.css";
import AdvertBanner from "../AdvertBanner/AdvertBanner";
import { useNavigate } from "react-router-dom";

const HeroSec = () => {
  const navigateTo = useNavigate();

  return (
    <div
      style={{ backgroundImage: `url(${HERO})` }}
      className="herosec-wrapper"
    >
      <div className="herosec-overlay"></div>
      <div className="herosec-content">
        <AdvertBanner />
        <div
          onClick={() => {
            navigateTo("/dashboard");
          }}
          className="herosec-cta"
        >
          Get Started
        </div>
      </div>
    </div>
  );
};

export default HeroSec;
