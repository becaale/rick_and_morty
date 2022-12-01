import "./App.css";
import Card from "./components/Card.jsx";
import Cards from "./components/Cards.jsx";
import styles from "./App.module.css";
import SearchBar from "./components/SearchBar.jsx";
import characters, { Rick } from "./data.js";

let uno = [Rick];

function App() {
  return (
    <div className="App" style={{ padding: "25px" }}>
      {/* <div>
        <Cards characters={uno} /> */}
      {/*         <Card 
          name={Rick.name}
          species={Rick.species}
          gender={Rick.gender}
          image={Rick.image}
          onClose={() => window.alert("Emulamos que se cierra la card")}
        /> */}
      {/* </div>
      <hr /> */}
      <div>
        <SearchBar onSearch={(characterID) => window.alert(characterID)} />
      </div>
            {/* <hr /> */}
      <div>
        <Cards characters={characters} />
      </div>

    </div>
  );
}

export default App;
