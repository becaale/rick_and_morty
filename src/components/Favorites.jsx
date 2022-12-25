import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

import { filterCards, orderCards } from "../redux/actions";

import Card from "./Card";
import styles from "./Favorites.module.css";

function Favorites({ characters, myFavorites, onClose, orderCards, filterCards }) {
  const navigate = useNavigate();
  const handleChange = (event) => {
    switch (event.target.name) {
      case "Order":
        orderCards(event.target.value);
        break;
      case "Filter":
        filterCards(event.target.value);
        break;
      default:
        break;
    }
  };
  const goToDetail = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <>
      <div className={styles.filters}>
        <select className={styles.select} name="Order" id="" onChange={handleChange}>
          <option className={styles.option} value="ASCENDENTEID">
            {"ID >"}
          </option>
          <option className={styles.option} value="DESCENDENTEID">
            {"ID <"}
          </option>
          <option className={styles.option} value="ASCENDENTEN">
            {"Nombre >"}
          </option>
          <option className={styles.option} value="DESCENDENTEN">
            {"Nombre <"}
          </option>
        </select>
        <select className={styles.select} name="Filter" id="" onChange={handleChange}>
          <option className={styles.option} value="ALL">
            All
          </option>
          <option className={styles.option} value="MALE">
            Male
          </option>
          <option className={styles.option} value="FEMALE">
            Female
          </option>
          <option className={styles.option} value="GENDERLESS">
            Genderless
          </option>
          <option className={styles.option} value="UNKNOWN">
            Unknown
          </option>
        </select>
      </div>

      <div className={styles.CardsList}>
        {characters?.map((character) => {
          if (myFavorites?.filter((fav) => fav === character.id).length > 0) {
            return (
              <div key={character.id}>
                <Card
                  id={character.id}
                  name={character.name}
                  species={character.species}
                  gender={character.gender}
                  image={character.image}
                  onClose={onClose}
                  goToDetail={goToDetail}
                />
              </div>
            );
          }
          return null;
        })}
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
    characters: state.characters,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    filterCards: (status) => {
      dispatch(filterCards(status));
    },
    orderCards: (order) => {
      dispatch(orderCards(order));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
