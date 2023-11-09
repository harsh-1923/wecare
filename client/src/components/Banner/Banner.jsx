import React from "react";
import "./Banner.css";

import PatternOne from "../../assets/PatternOne.jpg";

const Banner = ({ primaryTitle, secondaryTitle }) => {
  const bannerStyle = {
    backgroundImage: `url(${PatternOne})`,
    backgroundSize: "cover", // Adjust as needed: cover, contain, etc.
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    width: "100%",
    height: "300px",
  };
  return (
    <div style={bannerStyle} className="overlay banner-wrapper">
      <h1 className="banner-primary-title">{primaryTitle}</h1>
      <h1 className="banner-secondary-title">{secondaryTitle}</h1>
    </div>
  );
};

export default Banner;
