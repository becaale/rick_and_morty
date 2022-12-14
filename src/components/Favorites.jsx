import React, { useState } from "react";
import { useDispatch, connect } from "react-redux";

import { addFavorite, deleteFavorite, filterCards, orderCards } from "../redux/actions";

import Card from "./Card";
import styles from "./Favorites.module.css";

function Favorites({ characters, myFavorites, addFavorite, deleteFavorite }) {
  const handleChange = (event) => {
    switch (event.target.name) {
      case "Order":
        console.log(event.target);
        //dispatch(orderCards(event.target.name));
        break;
      case "Filter":
        console.log(event.target);
        // dispatch(filterCards(event.target.name));
        break;
      default:
        break;
    }
  };
  return (
    <>
      <div>
        <select name="Order" id="" onChange={handleChange}>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>
        <select name="Filter" id="" onChange={handleChange}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Male</option>
          <option value="unknown">Female</option>
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
                />
              </div>
            );
          }
        })}
      </div>
    </>
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
    filterCards: (status) => {
      dispatch(filterCards(status));
    },
    orderCards: (order) => {
      dispatch(orderCards(order));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
