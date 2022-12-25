import React from "react";

import styles from "./Form.module.css";

export default function Form() {
  return (
    <div className={styles.createcontainer}>
      <div className={styles.leftcontainer}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/1200px-Rick_and_Morty.svg.png"
          alt=""
          className={styles.imagen}
          onClick={"goToHome"}
        />
        <div className={styles.img}>
          <img className={styles.imagen} src="https://rickandmortyapi.com/api/character/avatar/19.jpeg" />
        </div>
      </div>
      <div className={styles.rightcontainer}>
        <header>
          <h1>Creemos nuestro propio personaje! </h1>
          <div className={styles.set}>
            <div className={styles.charname}>
              <label htmlFor="name">Name</label>
              <input id="name" type="text"></input>
            </div>
            <div className={styles.charphoto} >
              <button id="upload">
              </button>
              <label htmlFor="upload">Upload a photo</label>
            </div>
          </div>
          <div className={styles.set}>
            <div className={styles.charspecies}>
              <label htmlFor="char-species">Species</label>
              <input id="char-species" type="text"></input>
            </div>
            <div className={styles.charspecies}>
              <label htmlFor="char-location">Location</label>
              <select className={styles.selectcontainer} name="location" id="char-location">
                <option value="ASCENDENTEID">{"ID >"}</option>
                <option value="DESCENDENTEID">{"ID <"}</option>
                <option value="ASCENDENTEN">{"Nombre >"}</option>
                <option value="DESCENDENTEN">{"Nombre <"}</option>
              </select>
            </div>
            {/* <div className={styles.charbirthday}>
              <label htmlFor="char-birthday">Birthday</label>
              <input id="char-birthday" placeholder="MM/DD/YYYY" type="text"></input>
            </div> */}
          </div>
          <div className={styles.set}>
            <div className={styles.charstatus}>
              <label htmlFor="char-status-alive">Status</label>
              <div className={styles.radiocontainer}>
                <input id="char-status-alive" name="char-status" type="radio" value="alive"></input>
                <label htmlFor="char-status-alive">Alive</label>
                <input id="char-status-dead" name="char-status" type="radio" value="dead"></input>
                <label htmlFor="char-status-dead">Dead</label>
                <input id="char-status-unknown" name="char-status" type="radio" value="unknown"></input>
                <label htmlFor="char-status-unknown">Unknown</label>
              </div>
            </div>
            <div className={styles.charspayedneutered}>
              <label htmlFor="char-origin">Origin</label>
              <select className={styles.selectcontainer} name="location" id="char-origin">
                <option value="ASCENDENTEID">{"ID >"}</option>
                <option value="DESCENDENTEID">{"ID <"}</option>
                <option value="ASCENDENTEN">{"Nombre >"}</option>
                <option value="DESCENDENTEN">{"Nombre <"}</option>
              </select>
            </div>
          </div>
          <div className={styles.set}>
          <div className={styles.chargender}>
            <label htmlFor="char-gender-female">Gender</label>
            <div className={styles.radiocontainer}>
              <input id="char-gender-female" name="char-gender" type="radio" value="female"></input>
              <label htmlFor="char-gender-female">Female</label>
              <input id="char-gender-male" name="char-gender" type="radio" value="male"></input>
              <label htmlFor="char-gender-male">Male</label>
              <input id="char-gender-unknown" name="char-gender" type="radio" value="unknown"></input>
              <label htmlFor="char-gender-unknown">Unknown</label>
              <input id="char-gender-genderless" name="char-gender" type="radio" value="genderless"></input>
              <label htmlFor="char-gender-genderless">Genderless</label>
            </div>
          </div>
          </div>
        </header>
        <footer>
          <div className={styles.set}>
            <button id="back" className={styles.back}>
              Back
            </button>
            <button id="next" className={styles.next}>
              Next
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}
