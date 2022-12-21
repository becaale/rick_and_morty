export const GET_CHARACTERS = "GET_CHARACTERS";
export const GET_ALL_CHARACTERS = "GET_ALL_CHARACTERS";
export const SEARCH_CHARACTER = "SEARCH_CHARACTER";
export const DELETE_CHARACTER = "DELETE_CHARACTER";
export const CREATE_CHARACTER = "CREATE_CHARACTER";
export const ADD_FAVORITE = "ADD_FAVORITE";
export const DELETE_FAVORITE = "DELETE_FAVORITE";
export const FILTER = "FILTER";
export const ORDER = "ORDER";

export const getCharacters = (url) => {
  return function (dispatch) {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => dispatch({ type: GET_CHARACTERS, payload: data.results }));
  };
};

export const getAllCharacters = (url) => {
  return function (dispatch) {
    if (!url) {
      url = `https://rickandmortyapi.com/api/character/`;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.info.next) {
          dispatch(getAllCharacters(data.info.next));
        }
        let arrFormated = formatChar(data.results);
        return dispatch({
          type: GET_ALL_CHARACTERS,
          payload: { results: arrFormated, total: data.info.count },
        });
      });
  };
};

export const searchCharacter = (character) => {
  return {
    type: SEARCH_CHARACTER,
    payload: character,
  };
};

export const deleteCharacter = (id) => {
  return {
    type: DELETE_CHARACTER,
    payload: id,
  };
};

export const createCharacter = (character) => {
  return {
    type: CREATE_CHARACTER,
    payload: character,
  };
};

export const addFavorite = (id) => {
  return {
    type: ADD_FAVORITE,
    payload: id,
  };
};

export const deleteFavorite = (id) => {
  return {
    type: DELETE_FAVORITE,
    payload: id,
  };
};

export const filterCards = (status) => {
  return {
    type: FILTER,
    payload: status,
  };
};

export const orderCards = (order) => {
  return {
    type: ORDER,
    payload: order,
  };
};

/* const rmCharDupli = (arr) => {
  let arrReturn = [];
  let uniq = {};
  for (const element of arr) {
    if (!uniq[element.id]) {
      uniq[element.id] = true;
      arrReturn.push(element);
    }
  }
  return arrReturn;
}; */

/* const filterResults = (results, character) => {
  if (character.name.toString().toLowerCase() === "all") {
    return formatChar(results);
  }
  let arrResult = [
    ...results.filter(
      (element) => element.name.toString().toLowerCase().indexOf(character.name.toString().toLowerCase()) >= 0
    ),
  ];
  return formatChar(arrResult);
}; */

const formatChar = (arr) => {
  return arr.map((element) => {
    return {
      id: element.id,
      name: element.name,
      species: element.species,
      gender: element.gender,
      image: element.image,
    };
  });
};
