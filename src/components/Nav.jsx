import React from "react";
import { Link } from "react-router-dom";

import SearchBar from "./SearchBar.jsx";
import styles from "./Nav.module.css";

export default function Nav(props) {
  return (
    <div className={styles.navBar}>
      <div className={styles.logo}></div>
      <div className={styles.all}>
        <div className={styles.lefter}>
          <Link to={"/login"}>
          <div className={styles.explainer}>{/* <span>=</span> */}</div>
            <div className={styles.text}></div>
          </Link>
        </div>
        <div className={styles.left}>
          <Link to={"/test"}>
          <div className={styles.explainer}>{/* <span>=</span> */}</div>
            <div className={styles.text}></div>
          </Link>
        </div>
        <div className={styles.center}>
          <Link to={"/"}>
            <div className={styles.explainer}>{/* <span>=</span> */}</div>
            <div className={styles.text}></div>
          </Link>
        </div>
        <div className={styles.right}>
          <Link to={"/test"}>
          <div className={styles.explainer}>{/* <span>=</span> */}</div>
            <div className={styles.text}></div>
          </Link>
        </div>
        <div className={styles.righter}>
          <Link to={"/about"}>
          <div className={styles.explainer}>{/* <span>=</span> */}</div>
            <div className={styles.text}> </div>
          </Link>
        </div>
      </div>
      {<SearchBar onSearch={props.onSearch} />}
    </div>
  );
}
