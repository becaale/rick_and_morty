import styles from "./Card.module.css";

export default function Card(props) {
  return (
    <div className={styles.card}>
      <img src={props.image} alt={`img of ${props.name}`} />
      <div className={styles.cont}>
        <button className={styles.cardBtn} onClick={props.onClose}>
          x
        </button>
      </div>
      <div className={styles.data}>
        <h2 className={styles.cardTitle}>{props.name}</h2>
        <p className={styles.cardDescription}>{props.species}</p>
        <p className={styles.cardDescription}>{props.gender}</p>
      </div>
    </div>
  );
}
