import React from "react";
import styles from "./Contact.module.scss";
import useFetch from "../../hooks/useFetch";
import ReactPlayer from "react-player";

export const Contact = () => {
  const { loading, error, data } = useFetch(
    "http://localhost:1337/api/contact?populate=*"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  console.log(data);

  return (
    <section className={styles.contactsection}>
      <h2>Kontakt os </h2>
      <p>{data.attributes.Description}</p>
      <section className={styles.videoogform}>
        <ReactPlayer
          className={styles.video}
          playing={true}
          muted={true}
          url={`http://localhost:1337${data.attributes.video.data.attributes.url}`}
        />
        <form action="">
          <input type="text" placeholder={data.attributes.name} />
          <input type="email" placeholder={data.attributes.email} />
          <input
            type="textarea"
            placeholder={data.attributes.message}
            className={styles.message}
          />
          <button>Send</button>
        </form>
      </section>
    </section>
  );
};
