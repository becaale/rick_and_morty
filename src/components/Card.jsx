import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { addFavorite, deleteFavorite } from "../redux/actions";
import styles from "./Card.module.css";

function Card({ id, name, species, gender, image, onClose, goToDetail, addFavorite, deleteFavorite, myFavorites }) {
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      deleteFavorite(id);
    } else {
      setIsFav(true);
      addFavorite(id);
    }
  };

  useEffect(() => {
    if (myFavorites?.filter((fav) => fav === id).length > 0) setIsFav(true);
  }, [myFavorites,id]);

  return (
    <div className={styles.card}>
      <img src={image} alt={`img of ${name}`} />
      <div className={styles.cont}>
        {isFav ? (
          <button className={styles.cardBtnFav} onClick={handleFavorite}>
            ❤️
          </button>
        ) : (
          <button className={styles.cardBtnFav} onClick={handleFavorite}>
            🤍
          </button>
        )}
        <button className={styles.cardBtn} id={id} onClick={(event) => onClose(event)}>
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

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFavorite: (character) => {
      dispatch(addFavorite(character));
    },
    deleteFavorite: (character) => {
      dispatch(deleteFavorite(character));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
