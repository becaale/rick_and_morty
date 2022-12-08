import React from "react";
import { useNavigate } from "react-router-dom";

import Card from "./Card";
import styles from "./Cards.module.css";

export default function Cards(props) {
  const { characters } = props;
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
              onClose={props.onClose}
              goToDetail={goToDetail}
            />
          </div>
        );
      })}
    </div>
  );
}
