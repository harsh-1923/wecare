import React from "react";
import "./HomePage.css";
// import AdvertBanner from "../../components/AdvertBanner/AdvertBanner";
import HeroSec from "../../components/HeroSec/HeroSec";
import BG from "../../assets/BG.jpg";

const HomePage = () => {
  return (
    <div className="homepage-wrapper">
      <HeroSec />
      <div style={{ backgroundImage: `url(${BG})` }} className="sec2-wrapper">
        <div className="tagline-wrapper">
          <h1>
            wecare because <br></br>you matter
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
