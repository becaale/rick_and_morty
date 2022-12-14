import {
  CREATE_CHARACTER,
  DELETE_CHARACTER,
  GET_CHARACTERS,
  ADD_FAVORITE,
  DELETE_FAVORITE,
  FILTER,
  ORDER,
} from "./actions";

const initialState = {
  characters: [],
  allCharacters: [],
  myCharacters: [],
  myFavorites: [],
  detail: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CHARACTERS:
      return {
        ...state,
        allCharacters: [
          ...state.allCharacters,
          ...action.payload.filter((element) => !state.allCharacters.includes(element)),
        ],
        characters: [...state.characters, ...action.payload.filter((element) => !state.characters.includes(element))],
      };
    case CREATE_CHARACTER:
      return {
        ...state,
        allCharacters: [action.payload, ...state.allCharacters],
        characters: [action.payload, ...state.characters],
      };
    case DELETE_CHARACTER:
      return {
        ...state,
        characters: [...state.characters.filter((char) => char.id !== action.payload)],
      };
    case ADD_FAVORITE:
      return {
        ...state,
        myFavorites: [...state.myFavorites, action.payload],
      };
    case DELETE_FAVORITE:
      return {
        ...state,
        myFavorites: [...state.myFavorites.filter((fav) => fav !== action.payload)],
      };
    case FILTER:
      return {
        ...state,
        characters: [...state.allCharacters.filter((element) => element.gender === action.payload)],
      };
    case ORDER:
      return {
        ...state,
        characters: [
          ...state.characters.sort((a, b) => {
            if (a.id > b.id) {
              return action.payload === "Ascendente" ? 1 : -1;
            }
            if (a.id < b.id) {
              return action.payload === "Ascendente" ? -1 : 1;
            }
            return 0;
          }),
        ],
      };
    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
