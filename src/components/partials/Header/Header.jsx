import React from "react";
import { Navbar } from "../Navbar/navbar";
//import styles from "./Header.module.scss";

// navlinks array
const navItems = [
  { name: "Home", path: "/ " },
  { name: "About", path: "/About" },
  { name: "Restaurants", path: "/Restaurants" },
  { name: "Contact", path: "/Contact" },
];

function Header() {
  return (
    <header>
      <Navbar navItems={navItems} />
    </header>
  );
}

export default Header;
