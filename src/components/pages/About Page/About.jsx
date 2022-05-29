import React from "react";
import styles from "./About.module.scss";
import useFetch from "../../hooks/useFetch";

function About() {
  const { loading, error, data } = useFetch(
    "http://localhost:1337/api/about?populate=*"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  return (
    <section className={styles.aboutsection}>
      <h2>About us</h2>
      <section className={styles.text}>
        <h3>{data.attributes.title}</h3>
        <p>{data.attributes.description}</p>
      </section>

      <img
        src={`http://localhost:1337${data.attributes.picture.data.attributes.url}`}
        alt=""
      />
    </section>
  );
}

export default About;
