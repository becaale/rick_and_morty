import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

import { filterCards, orderCards } from "../redux/actions";

import Card from "./Card";
import styles from "./Cards.module.css";

function Cards({ characters, onClose, orderCards, filterCards }) {
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
        <select name="Order" id="" onChange={handleChange}>
          <option value="ASCENDENTEID">{"ID >"}</option>
          <option value="DESCENDENTEID">{"ID <"}</option>
          <option value="ASCENDENTEN">{"Nombre >"}</option>
          <option value="DESCENDENTEN">{"Nombre <"}</option>
        </select>
        <select name="Filter" id="" onChange={handleChange}>
          <option value="ALL">All</option>
          <option value="MALE">Male</option>
          <option value="FEMALE">Female</option>
          <option value="GENDERLESS">Genderless</option>
          <option value="UNKNOWN">Unknown</option>
        </select>
      </div>

      <div className={styles.CardsList}>
        {characters.map((character) => {
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
        })}
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
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

export default connect(mapStateToProps, mapDispatchToProps)(Cards);
