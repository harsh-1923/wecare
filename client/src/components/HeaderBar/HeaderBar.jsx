import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";

import Logo from "../../../src/assets/Logo.jpg";

const HeaderBar = () => {
  const navigateTo = useNavigate();

  return (
    <div className="header-wrapper">
      <img
        alt="img here"
        onClick={() => navigateTo("/")}
        className="logo"
        src={Logo}
      />
      <h1 className="header-wecare">
        we<span className="logo-highlight">care.</span>
      </h1>
      <div onClick={() => navigateTo("/profile")} className="account-badge">
        H
      </div>
    </div>
  );
};

export default HeaderBar;
