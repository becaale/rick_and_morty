import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

import { getAllCharacters, searchCharacter, deleteFavorite, deleteCharacter } from "./redux/actions";

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

export default function App() {
  let location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [access, setAccess] = useState(true);
  const username = "ejemplo@gmail.com";
  const password = "1password";

  const stateCharacters = useSelector((state) => state.characters);

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
    if (stateCharacters.length === 0) dispatch(getAllCharacters());
  }, [stateCharacters, access]);

  const onSearch = (character) => {
    dispatch(searchCharacter(character));
  };

  const onClose = (event) => {
    dispatch(deleteFavorite(event.target.id));
    dispatch(deleteCharacter(event.target.id));
  };

  return (
    <div className="App">
      {location.pathname !== "/login" ? <Nav logout={logout} onSearch={onSearch} /> : null}
      <Routes>
        <Route path="/login" element={<FormLogin login={login} />} />
        <Route path="/about" element={<About />} />
        <Route path="/form" element={<Form />} />
        <Route path="/favorites" element={<Favorites onClose={onClose} />} />
        <Route exact path="/detail/:id" element={<Detail onClose={onClose} />} />
        <Route exact path="/" element={<Cards onClose={onClose} />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}
