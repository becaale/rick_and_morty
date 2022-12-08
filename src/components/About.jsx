import React from "react";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import styles from "./About.module.css";
import { useNavigate } from "react-router-dom";
import { Component } from "react";

export default function About(props) {
  const navigate = useNavigate();

  const character = {
    id: "ale",
    name: "Alejandro Becagigi",
    status: "Casado",
    species: "IT Nerd",
    gender: "Hombre",
    origin: "Buenos Aires, Argentina",
    location: "Sicilia, Italia (por el momento...)",
    created: "04/12/1985",
    image:
      "https://media-exp1.licdn.com/dms/image/D4D03AQGS8eF9se6Qbg/profile-displayphoto-shrink_800_800/0/1667206009380?e=1675900800&v=beta&t=Lc8Pd4h9sW3WnH44fAWsrhyTbbtNDYRIq_Tc6pdMXoU",
    type: "texto descripcion",
  };

  const goTo = (event) => {
    switch (event.target.name) {
      case "Home":
        navigate(`/`);
        break;
      case "Linkedin":
        window.location.href = "https://www.linkedin.com/in/becagigialejandro/";
        break;
      case "GitHub":
        window.location.href = "https://github.com/becaale";
        break;
      default:
        break;
    }
  };

  const episodiosVividos = function (created) {
    const tiempoTranscurrido = Date.now();
    const hoy = new Date(tiempoTranscurrido);
    let aFecha1 = created.split("/");
    let aFecha2 = hoy.toLocaleDateString().split("/");
    let fFecha1 = Date.UTC(aFecha1[2], aFecha1[1] - 1, aFecha1[0]);
    let fFecha2 = Date.UTC(aFecha2[2], aFecha2[1] - 1, aFecha2[0]);
    let dif = fFecha2 - fFecha1;
    let dias = Math.floor(dif / (1000 * 60 * 60 * 24));
    return dias;
  };

  return (
    <div className={styles.containerchar}>
      <div className={styles.image}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/1200px-Rick_and_Morty.svg.png"
          alt=""
          className={styles.logo}
          name="Home"
          onClick={goTo}
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
            <span
              className={
                character.status === "Alive"
                  ? styles.statusalive
                  : styles.statusdead
              }
            >
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
            <a href="#!" className={styles.active}>
              ★
            </a>
            <a href="#!" className={styles.active}>
              ★
            </a>
          </div>
        </header>
        <article>
          <h5>{character.type ? "Descripcion" : ""}</h5>
          <p>{character.type}</p>
        </article>
        <div className={styles.controls}>
          <div>
            <h5>Origin</h5>
            <a
              href="https://goo.gl/maps/oTLYkfrxhCK9ayFe8"
              className={styles.option}
            >
              {character.origin}
            </a>
          </div>
          <div>
            <h5>Location</h5>
            <a
              href="https://goo.gl/maps/yNoUk8yBneXUUPRT6"
              className={styles.option}
            >
              {character.location}
            </a>
          </div>
          <div>
            <h5>Episodios Vividos</h5>
            <a href="#!" className={styles.option}>
              {episodiosVividos(character.created)}
            </a>
          </div>
        </div>
        <div className={styles.footer}>
          <button type="button" name="Linkedin" onClick={goTo}>
            <img
              src="https://cdn1.iconfinder.com/data/icons/seo-and-web-development-5/32/development_usability_audit_magnifier_magnifyin_gglass_loup_user-512.png"
              alt=""
            />
            <span>Contratar</span>
          </button>
          <a>
            <img
              src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Linkedin_unofficial_colored_svg-512.png"
              alt=""
              name="Linkedin"
              onClick={goTo}
            />
            <img
              src="https://cdn3.iconfinder.com/data/icons/font-awesome-brands/512/github-square-512.png"
              alt=""
              name="GitHub"
              onClick={goTo}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
