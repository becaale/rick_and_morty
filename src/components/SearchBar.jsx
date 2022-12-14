import React from "react";
import styles from "./SearchBar.module.css";
import { useState } from "react";
/* import { useEffect } from "react"; */

export default function SearchBar(props) {
  const [character, setCharacter] = useState([
    {
      id: null,
      name: "",
      species: "",
      gender: "",
      image: "",
    },
  ]);

  const handleSearch = (event) => {
    setCharacter((charPrev) => {
      return {
        ...charPrev,
        name: [event.target.value],
      };
    });
  };

  const borrarSearch = () => {
    setCharacter({
      id: null,
      name: "",
      species: "",
      gender: "",
      image: "",
    });
  };
  /*      <div className={styles.cont}>
        <input type="search" />
        <button className={styles.btn} onClick={props.onSearch}>
          Agregar
        </button>
      </div> */
  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="text"
        placeholder="Search..."
        value={character.name || ""}
        onChange={handleSearch}
        onKeyUp={(event) => {
          if (event.key === "Enter") {
            props.onSearch(character);
            borrarSearch();
          }
        }}
      />
      <div className={styles.search}></div>
    </div>
  );
}
