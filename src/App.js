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

  const [allCharacters, setallCharacters] = useState([
    {
      id: 0,
      name: "",
      species: "",
      gender: "",
      image: "",
    },
  ]);
  /* 
  useEffect(() => {}, []); */

  const onSearch = (character, url) => {
    if (!url) {
      url = `https://rickandmortyapi.com/api/character/`;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCharacters((charsPrev) => {
          return [...charsPrev, ...filterResults(data.results, character)];
        });
        if (data.info.next) {
          onSearch(character, data.info.next);
        }
      });
  };

  const filterResults = (results, character) => {
    if (character.name.toString().toLowerCase() === "all") {
      return formatChar(results);
    }
    let arrResult = [
      ...results.filter(
        (element) =>
          element.name
            .toString()
            .toLowerCase()
            .indexOf(character.name.toString().toLowerCase()) >= 0
      ),
    ];
    return formatChar(arrResult);
  };

  const formatChar = (arr) => {
    let arrReturn = [];
    arr.map((element) => {
      if (checkExist(element)) {
        arrReturn.push({
          id: element.id,
          name: element.name,
          species: element.species,
          gender: element.gender,
          image: element.image,
        });
      }
    });
    return arrReturn;
  };

  const checkExist = (character) => {
    if (
      characters.filter((element) => element.id === character.id).length > 0
    ) {
      return false;
    } else {
      return true;
    }
  };

  const onClose = (event) => {
    setCharacters((charsPrev) =>
      charsPrev.filter(
        (element) => element.id.toString() !== event.target.id.toString()
      )
    );
  };

  return (
    <div className="App" style={{ padding: "25px" }}>
      <div>
        <Nav onSearch={onSearch} />
      </div>
      {/* <hr /> */}
      <div>
        <Cards characters={characters} onClose={onClose} />
      </div>
    </div>
  );
}

export default App;
