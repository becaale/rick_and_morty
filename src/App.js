import React from "react";
import "./App.css";
import Nav from "./components/Nav.jsx";
import Card from "./components/Card.jsx";
import Cards from "./components/Cards.jsx";
import styles from "./App.module.css";
import { useState, useEffect } from "react";
/* import characters, { Rick } from "./data.js";

let uno = [Rick]; */

function App() {
  const [characters, setCharacters] = useState([
    {
      id: 0,
      name: "Morty Smith",
      species: "Human",
      gender: "Male",
      image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    },
  ]);
  /* 
  useEffect(() => {}, []); */

  const onSearch = (character) => {
    fetch(`https://rickandmortyapi.com/api/character/`)
      .then((response) => response.json())
      .then((data) => {
        setCharacters((charsPrev) => {
          return [...charsPrev, ...filterResults(data.results, character)];
        });
      });
  };

  const filterResults = (results, character) => {
    let arrResult = [];
    let arrReturn = [];

    arrResult = [
      ...results.filter(
        (element) =>
          element.name
            .toString()
            .toLowerCase()
            .indexOf(character.name.toString().toLowerCase()) >= 0
      ),
    ];
    arrResult.map((element) => {
      arrReturn.push({
        id: element.id,
        name: element.name,
        species: element.species,
        gender: element.gender,
        image: element.image,
      });
    });
    return arrReturn;
  };

  return (
    <div className="App" style={{ padding: "25px" }}>
      <div>
        <Nav onSearch={onSearch} />
      </div>
      {/* <hr /> */}
      <div>
        <Cards characters={characters} />
      </div>
    </div>
  );
}

export default App;
