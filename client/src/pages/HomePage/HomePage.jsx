import React from "react";
import "./HomePage.css";
// import AdvertBanner from "../../components/AdvertBanner/AdvertBanner";
import HeroSec from "../../components/HeroSec/HeroSec";

const HomePage = () => {
  return (
    <div className="homepage-wrapper">
      <HeroSec />
      {/* <div className="tagline-wrapper">
        <div>
          we<span className="logo-highlight">care</span> <br /> because you
          <span className="logo-highlight">matter</span>
        </div>
      </div> */}
    </div>
  );
};

export default HomePage;
