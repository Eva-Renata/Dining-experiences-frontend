import React from "react";
import styles from "./Homepage.module.scss";

function Homepage() {
  return (
    <section className={styles.wrapper}>
      {/* hero picture on homepage */}
      <h1>Dining experiences</h1>
      <h2> in Aalborg</h2>
      <img src={require("../../../assets/pictures/2.png")} alt="" />
    </section>
  );
}

export default Homepage;
