import React from "react";
import styles from "./Footer.module.css";

export default function Footer(props) {
  return (
    <div>
      <footer className={styles.footer}>
        <div className={styles.waves}>
          <div className={styles.wave} id="wave1"></div>
          <div className={styles.wave} id="wave2"></div>
          <div className={styles.wave} id="wave3"></div>
          <div className={styles.wave} id="wave4"></div>
        </div>
        {/* <ul className={styles.social icon}>
          <li className={styles.social-icon__item}>
            <a className={styles.social-icon__link} href="#">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
          </li>
          <li className={styles.social-icon__item}>
            <a className={styles.social-icon__link} href="#">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
          </li>
          <li className={styles.social-icon__item}>
            <a className={styles.social-icon__link} href="#">
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </li>
          <li className={styles.social-icon__item}>
            <a className={styles.social-icon__link} href="#">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </li>
        </ul> */}
        <ul className={styles.menu}>
          <li className={styles.menu__item}>
            <a className={styles.menu__link} href="#">
              Home
            </a>
          </li>
          <li className={styles.menu__item}>
            <a className={styles.menu__link} href="#">
              About
            </a>
          </li>
          <li className={styles.menu__item}>
            <a className={styles.menu__link} href="#">
              Services
            </a>
          </li>
          <li className={styles.menu__item}>
            <a className={styles.menu__link} href="#">
              Team
            </a>
          </li>
          <li className={styles.menu__item}>
            <a className={styles.menu__link} href="#">
              Contact
            </a>
          </li>
        </ul>
        <p>&copy;2021 Nadine Coelho | All Rights Reserved</p>
      </footer>
    </div>
  );
}
