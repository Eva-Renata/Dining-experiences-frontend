import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaCcMastercard,
  FaMobileAlt,
  FaMoneyBillAlt,
} from "react-icons/fa";
import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className={styles.footer}>
      <section className={styles.leftsidefooter}>
        <p>© 2022 Dining experiences All Rights Reserved</p>
        <p>I restauranterne kan du betale med kort , MobilePay og kontanter</p>
        <p>
          <FaCcMastercard /> <FaMobileAlt /> <FaMoneyBillAlt />
        </p>
      </section>
      <section className={styles.rightsidefooter}>
        <p>Du kan se/følge os på vores socielle medier:</p>
        <p>
          <Link to="/">
            <FaFacebookF />
          </Link>
          <Link to="/">
            <FaInstagram />
          </Link>
          <Link to="/">
            <FaLinkedin />
          </Link>
        </p>
      </section>
    </footer>
  );
}

export default Footer;
