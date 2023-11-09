// Navbar.js
import React, { useState } from "react";
import { Bars3Icon, UserIcon } from "@heroicons/react/24/outline";
import "./Navbar.css";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar-wrapper">
      <Bars3Icon className="hamburger-logo" />
      <h1 className="navbar-logo">wecare clinic</h1>
      <UserIcon className="navbar-user-icon" />
    </nav>
  );
};

export default NavBar;
