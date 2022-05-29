import React from "react";
import { Link } from "react-router-dom";
import styles from "../Navbar/navbar.module.scss";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { NavLink } from "react-router-dom";

export const Navbar = (props) => {
  return (
    <>
      <nav className={styles.nav}>
        <Link to="/">
          <GiForkKnifeSpoon />
        </Link>

        <ul className={styles.navlist}>
          {props &&
            props.navItems.map((value, index) => {
              return (
                <li key={index}>
                  <NavLink to={value.path}>{value.name}</NavLink>
                </li>
              );
            })}
        </ul>
      </nav>
    </>
  );
};
