import React from "react";
import styles from "./Popup.module.scss";

function Popup(props) {
  return props.trigger ? (
    <section className={styles.popup}>
      <section className={styles.inner}>
        <button
          className={styles.close}
          onClick={() => props.setTrigger(false)}
        >
          Close
        </button>
        <h3>Velkommen til {props.restaurant.attributes.Title} </h3>
        {props.restaurant.attributes.OpeningHours.map((hours) => (
          <p key={hours.id}>
            Åbningstider: {hours.days} : {hours.hours}
          </p>
        ))}
        {props.restaurant.attributes.Adress.map((adress) => (
          <p key={adress.id}> Adresse: {adress.adress}</p>
        ))}
        {props.restaurant.attributes.Description}
        <section className={styles.picturewrapper}>
          {props.restaurant.attributes.Picture.data.map((picture) => (
            <div className={styles.picturediv} key={picture.id}>
              <img
                width="200px"
                src={`http://localhost:1337${picture.attributes.url}`}
                alt=""
              />
            </div>
          ))}
        </section>
      </section>
    </section>
  ) : (
    ""
  );
}

export default Popup;
