import React from "react";
import { Link } from "react-router-dom";

import SearchBar from "./SearchBar.jsx";
import styles from "./Nav.module.css";

export default function Nav(props) {
  function charRandom(min = 1, max = 826) {
    var num = Math.floor(Math.random() * (max - min));
    return num + min;
  }
  return (
    <div className={styles.navBar}>
      <div className={styles.logo}></div>
      <div className={styles.all}>
        <div className={styles.lefterx}>
          <Link to={"/Favorites"}>
            <div className={styles.explainer}></div>
            <div className={styles.text}>Favoritos</div>
          </Link>
        </div>
        <div className={styles.lefter}>
          <Link to={`/detail/${charRandom()}`}>
            <div className={styles.explainer}></div>
            <div className={styles.text}>Random</div>
          </Link>
        </div>
        <div className={styles.left}>
          <Link to={"/form"}>
            <div className={styles.explainer}></div>
            <div className={styles.text}>Crear</div>
          </Link>
        </div>
        <div className={styles.center}>
          <Link to={"/"}>
            <div className={styles.explainer}></div>
            <div className={styles.text}>Home</div>
          </Link>
        </div>
        <div className={styles.right}>
          <Link to={"/config"}>
            <div className={styles.explainer}></div>
            <div className={styles.text}>Config</div>
          </Link>
        </div>
        <div className={styles.righter}>
          <Link to={"/about"}>
            <div className={styles.explainer}></div>
            <div className={styles.text}>About</div>
          </Link>
        </div>
        <div
          className={styles.righterx}
          onClick={() => {
            props.logout();
          }}
        >
          <div className={styles.explainer}></div>
          <div className={styles.text}>Logout</div>
        </div>
      </div>
      {<SearchBar onSearch={props.onSearch} />}
    </div>
  );
}
