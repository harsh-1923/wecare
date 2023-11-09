import React from "react";
import "./Header.css";

import Logo from "../../../src/assets/Logo.jpg";

const HeaderBar = () => {
  return (
    <div className="header-wrapper">
      <img className="logo" src={Logo} />
      <h1 className="header-wecare">
        we<span className="logo-highlight">care</span>
      </h1>
      <div className="account-badge">H</div>
    </div>
  );
};

export default HeaderBar;
