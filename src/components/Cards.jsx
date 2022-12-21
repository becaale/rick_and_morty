import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

import Card from "./Card";
import styles from "./Cards.module.css";

function Cards({ characters, onClose }) {
  const navigate = useNavigate();
  const goToDetail = (id) => {
    navigate(`/detail/${id}`);
  };
  return (
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
  );
}

const mapStateToProps = (state) => {
  return {
    characters: state.characters,
  };
};

export default connect(mapStateToProps, null)(Cards);
