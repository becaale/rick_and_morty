import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

import { filterCards, orderCards } from "../redux/actions";

import Card from "./Card";
import styles from "./Favorites.module.css";

function Favorites({ characters, myFavorites, onClose, orderCards, filterCards }) {
  const navigate = useNavigate();
  const handleChange = (event) => {
    switch (event.target.name) {
      case "Order":
        orderCards(event.target.value);
        break;
      case "Filter":
        filterCards(event.target.value);
        break;
      default:
        break;
    }
  };
  const goToDetail = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <>
      <div id="appcover" className={styles.appcover}>
        <div id="selectbox">
          <input type="checkbox" id="optionsviewbutton" className={styles.optionsviewbutton} />
          <div id="selectbutton" className={styles.selectbutton}>
            <div id="selectedvalue" className={styles.selectedvalue}>
              <span>Select a platform</span>
            </div>
            <div id="chevrons" className={styles.chevrons}>
              <i className="chevronup"></i>
              <i className="chevrondown"></i>
            </div>
          </div>
          <div id="options" className={styles.options}>
            <div className={styles.option}>
              <input className={styles.sctop} type="radio" name="platform" value="codepen" />
              <input className={styles.scbutton} type="radio" name="platform" value="codepen" />
              <i className="fab facodepen"></i>
              <span className={styles.label}>CodePen</span>
              <span className={styles.optval}>CodePen</span>
            </div>
            <div className={styles.option}>
              <input className={styles.sctop} type="radio" name="platform" value="dribbble" />
              <input className={styles.scbutton} type="radio" name="platform" value="dribbble" />
              <i className="fab fadribbble"></i>
              <span className={styles.label}>Dribbble</span>
              <span className={styles.optval}>Dribbble</span>
            </div>
            <div className={styles.option}>
              <input className={styles.sctop} type="radio" name="platform" value="behance" />
              <input className={styles.scbutton} type="radio" name="platform" value="behance" />
              <i className="fab fabehance"></i>
              <span className={styles.label}>Behance</span>
              <span className={styles.optval}>Behance</span>
            </div>
            <div className={styles.option}>
              <input className={styles.sctop} type="radio" name="platform" value="hackerrank" />
              <input className={styles.scbutton} type="radio" name="platform" value="hackerrank" />
              <i className="fab fahackerrank"></i>
              <span className={styles.label}>HackerRank</span>
              <span className={styles.optval}>HackerRank</span>
            </div>
            <div className={styles.option}>
              <input className={styles.sctop} type="radio" name="platform" value="stackoverflow" />
              <input className={styles.scbutton} type="radio" name="platform" value="stackoverflow" />
              <i className="fab fastackoverflow"></i>
              <span className={styles.label}>StackOverflow</span>
              <span className={styles.optval}>StackOverflow</span>
            </div>
            <div className={styles.option}>
              <input className={styles.sctop} type="radio" name="platform" value="freecodecamp" />
              <input className={styles.scbutton} type="radio" name="platform" value="freecodecamp" />
              <i className="fab fafreecodecamp"></i>
              <span className={styles.label}>FreeCodeCamp</span>
              <span className={styles.optval}>FreeCodeCamp</span>
            </div>
            <div id="optionbg" className={styles.optionbg}></div>
          </div>
        </div>
      </div>

      <div>
        <select name="Order" id="" onChange={handleChange}>
          <option value="ASCENDENTEID">Ascendente ID</option>
          <option value="DESCENDENTEID">Descendente ID</option>
          <option value="ASCENDENTEN">Ascendente Nombre</option>
          <option value="DESCENDENTEN">Descendente Nombre</option>
        </select>
        <select name="Filter" id="" onChange={handleChange}>
          <option value="ALL">Todos</option>
          <option value="MALE">Male</option>
          <option value="FEMALE">Female</option>
          <option value="GENDERLESS">Genderless</option>
          <option value="UNKNOWN">Unknown</option>
        </select>
      </div>

      <div className={styles.CardsList}>
        {characters?.map((character) => {
          if (myFavorites?.filter((fav) => fav === character.id).length > 0) {
            return (
              <div key={character.id}>
                <Card
                  id={character.id}
                  name={character.name}
                  species={character.species}
                  gender={character.gender}
                  image={character.image}
                  onClose={onClose}
                  goToDetail={goToDetail}
                />
              </div>
            );
          }
        })}
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
    characters: state.characters,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    filterCards: (status) => {
      dispatch(filterCards(status));
    },
    orderCards: (order) => {
      dispatch(orderCards(order));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
