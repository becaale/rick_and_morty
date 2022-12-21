import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";
import { useNavigate } from "react-router-dom";

export default function Detail({ onClose }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const [character, setCharacter] = useState([
    {
      id: "",
      name: "",
      status: "",
      species: "",
      gender: "",
      origin: "",
      image: "",
    },
  ]);
  const goToHome = () => {
    navigate(`/`);
  };
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
          goToHome();
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
        goToHome();
      });
    return setCharacter({});
  }, [id, goToHome]);

  return (
    <div className={styles.containerchar}>
      <div className={styles.image}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/1200px-Rick_and_Morty.svg.png"
          alt=""
          className={styles.logo}
          onClick={goToHome}
        />
        <img src={character.image} alt="" className={styles.pic} />
      </div>

      <div className={styles.details}>
        <header>
          <h1 className={styles.title}>{character.name}</h1>
          <span className={styles.species}>{character.species}</span>
          <div className={styles.banner}>
            <span className={styles.gender}>{character.gender}</span>
          </div>
          <div className={styles.banner}>
            <span className={character.status === "Alive" ? styles.statusalive : styles.statusdead}>
              {character.status}
            </span>
          </div>
          <div className={styles.rate}>
            <a href="#!" className={styles.active}>
              ★
            </a>
            <a href="#!" className={styles.active}>
              ★
            </a>
            <a href="#!" className={styles.active}>
              ★
            </a>
            <a href="#!">★</a>
            <a href="#!">★</a>
          </div>
        </header>
        <article>
          <h5>{character.type ? "Descripcion" : ""}</h5>
          <p>{character.type}</p>
        </article>
        <div className={styles.controls}>
          <div>
            <h5>Origin</h5>
            <a href="#!" className={styles.option}>
              {character.origin?.name}
            </a>
          </div>
          <div>
            <h5>Location</h5>
            <a href="#!" className={styles.option}>
              {character.location?.name}
            </a>
          </div>
          <div>
            <h5>    Episodios</h5>
            <a href="#!" className={styles.option}>
              {character.episode?.length}
            </a>
          </div>
        </div>
        <div className={styles.footer}>
          <button id={id} type="button" onClick={onClose}>
            <img
              onClick={onClose}
              src="https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_delete_48px-512.png"
              alt=""
            />
            <span id={id} onClick={onClose}>
              Eliminar
            </span>
          </button>
          <a href="#!">
            <img id={id} src="http://co0kie.github.io/codepen/nike-product-page/share.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}
