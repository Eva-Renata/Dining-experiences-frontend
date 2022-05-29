import React, { useEffect } from "react";
import styles from "./Restaurants.module.scss";
import { useState } from "react";
import Popup from "./Popup";

function Restaurants() {
  // state for all resrtaurants
  const [restaurants, setRestaurants] = useState([]);
  const [selectedRestaurant, setSelected] = useState(null);
  // state for only filtered
  const [filtered, setFiltered] = useState([]);

  //
  const [loading, setLoading] = useState(true);

  // when the component mounts ( renders )
  useEffect(() => {
    async function fetchRestaurants() {
      const response = await fetch(
        "http://localhost:1337/api/restaurants?populate=*"
      );
      const json = await response.json();

      setRestaurants(json.data);
      setFiltered(json.data);
      setLoading(false);
    }
    fetchRestaurants();
  }, []);

  const filterItem = (categoryItem) => {
    const updatedItem = restaurants.filter((curElem) => {
      return (
        curElem.attributes.categories.data[0].attributes.category ===
        categoryItem
      );
    });
    setFiltered(updatedItem);
  };

  //popup button
  //changing the state of the popup, that is by default false
  const [buttonPopup, setButtonPopup] = useState(false);

  if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error...</p>;
  return (
    <>
      {/* Title */}
      <h1>ListOfRestaurants</h1>
      {/* Selection buttons */}
      <div className={styles.selectionbutton}>
        <button onClick={() => setFiltered(restaurants)}>Alle</button>
        <button onClick={() => filterItem("restaurant")}>Restauranter</button>
        <button onClick={() => filterItem("cafe")}>Cafeer</button>
      </div>
      {/*  Restaurants */}
      <div className={styles.List}>
        {filtered.map((restaurant) => (
          <div key={restaurant.id} className={styles.restaurantslist}>
            {/* //Titel af restauranten */}
            <h3>{restaurant.attributes.Title}</h3>
            <p>
              {restaurant.attributes.categories.data[0].attributes.category}
            </p>
            {/* Billede */}
            <div className={styles.picturewrapper}>
              <img
                src={`http://localhost:1337${restaurant.attributes.cover.data.attributes.url}`}
                alt=""
              />
            </div>
            <button
              onClick={() => {
                setSelected(restaurant);
                setButtonPopup(true);
              }}
            >
              Klik for detaljer
            </button>
          </div>
        ))}
      </div>
      {/* Detaljer popup*/}
      <Popup
        trigger={buttonPopup}
        setTrigger={setButtonPopup}
        restaurant={selectedRestaurant}
      ></Popup>
    </>
  );
}

export default Restaurants;
