export const SelectedMovie = (movie) => {
  return {
    type: "SELECTED_MOVIE",
    payload: movie,
  };
};
