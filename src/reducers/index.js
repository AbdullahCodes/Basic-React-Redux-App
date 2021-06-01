import { combineReducers } from "redux";

const ListOfMovieReducer = () => {
  return [
    { title: "Spiderman", duration: "2 Hours" },
    { title: "End Game", duration: "3 Hours" },
    { title: "Hulk", duration: "2.5 Hours" },
    { title: "Justice League", duration: "3.5 Hours" },
  ];
};

const SelectedMovieReducer = (prevSelectedMovie = null, action) => {
  if (action.type === "SELECTED_MOVIE") {
    return action.payload;
  }
  return prevSelectedMovie;
};

export default combineReducers({
  ListOfMovieReducer,
  SelectedMovieReducer,
});
