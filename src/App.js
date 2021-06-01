import React from "react";
import MovieList from "./components/MovieList";
import MovieDetail from "./components/MovieDetail";

const App = () => {
  return (
    <div className="ui four column doubling stackable grid container">
      <div className="column">
        <MovieList />
      </div>
      <div className="column">
        <MovieDetail />
      </div>
    </div>
  );
};

export default App;
