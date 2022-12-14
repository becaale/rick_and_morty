import React, { useState } from "react";
import { useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

import FormLogin from "./components/FormLogin.jsx";
import Form from "./components/Form.jsx";
import Favorites from "./components/Favorites.jsx";
import Nav from "./components/Nav.jsx";
import Cards from "./components/Cards.jsx";
import Detail from "./components/Detail.jsx";
import About from "./components/About.jsx";
import Error from "./components/Error.jsx";
/* import Footer from "./components/Footer.jsx"; */

import "./App.css";

function App() {
  let location = useLocation();
  const navigate = useNavigate();

  const [characters, setCharacters] = useState([
    {
      id: 0,
      name: "Morty Smith",
      species: "Human",
      gender: "Male",
      image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    },
  ]);

  /*   const [allCharacters, setallCharacters] = useState([
    {
      id: 0,
      name: "",
      species: "",
      gender: "",
      image: "",
    },
  ]); */

  const [access, setAccess] = useState(true);
  const username = "ejemplo@gmail.com";
  const password = "1password";

  function login(userData) {
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate("/");
    }
  }
  function logout() {
    setAccess(false);
    navigate("/loguin");
  }

  useEffect(() => {
    !access && navigate("/login");
  }, [access]);

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
        (element) => element.name.toString().toLowerCase().indexOf(character.name.toString().toLowerCase()) >= 0
      ),
    ];
    return formatChar(arrResult);
  };

  const formatChar = (arr) => {
    return arr.map((element) => {
      if (checkExist(element)) {
        return {
          id: element.id,
          name: element.name,
          species: element.species,
          gender: element.gender,
          image: element.image,
        };
      } else {
        return null;
      }
    });
  };

  const checkExist = (character) => {
    if (characters.filter((element) => element.id === character.id).length > 0) {
      return false;
    } else {
      return true;
    }
  };

  const onClose = (event) => {
    setCharacters((charsPrev) => charsPrev.filter((element) => element.id.toString() !== event.target.id.toString()));
  };

  return (
    <div className="App">
      {location.pathname !== "/login" ? <Nav logout={logout} onSearch={onSearch} /> : null}
      <Routes>
        <Route path="/login" element={<FormLogin login={login} />} />
        <Route path="/about" element={<About />} />
        <Route path="/form" element={<Form />} />
        <Route path="/favorites" element={<Favorites characters={characters} />} />
        <Route exact path="/detail/:id" element={<Detail />} />
        <Route exact path="/" element={<Cards characters={characters} onClose={onClose} />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
