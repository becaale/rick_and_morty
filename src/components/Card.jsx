import React from "react";
import styles from "./Card.module.css";

export default function Card({
  id,
  name,
  species,
  gender,
  image,
  onClose,
  goToDetail,
}) {
  return (
    <div className={styles.card}>
      <img src={image} alt={`img of ${name}`} />
      <div className={styles.cont}>
        <button
          className={styles.cardBtn}
          id={id}
          onClick={(event) => onClose(event)}
        >
          x
        </button>
      </div>
      <div className={styles.data}>
        <h2 className={styles.cardTitle} onClick={() => goToDetail(id)}>
          {name}
        </h2>

        <div className={styles.especs}>
          <p className={styles.cardDescription}>{species}</p>
          <p className={styles.cardDescription}>{gender}</p>
        </div>
      </div>
    </div>
  );
}
