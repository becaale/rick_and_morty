import Card from "./Card";
import styles from "./Cards.module.css";

export default function Cards(props) {
  const { characters } = props;
  return (
    <div className={styles.CardsList}>
      {characters.map((character) => {
        return (
          <Card
            name={character.name}
            species={character.species}
            gender={character.gender}
            image={character.image}
            onClose={() => window.alert("Emulamos que se cierra la card")}
          />
        );
      })}
    </div>
  );
}
