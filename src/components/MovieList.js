import React from "react";

import { connect } from "react-redux";
import { SelectedMovie } from "../actions";

const mapStateToProps = (state) => {
  return state;
};

const MovieList = (props) => {
  const theMovieList = props.ListOfMovieReducer.map((movieList) => {
    return (
      <div
        style={{
          border: "2px solid lightblue",
          marginBottom: "10px",
          padding: "10px",
        }}
      >
        <div>
          <h4>{movieList.title}</h4>
          <p>{movieList.duration}</p>
        </div>
        <button
          className="ui primary button"
          style={{ marginTop: "5px" }}
          onClick={() => props.SelectedMovie(movieList)}
        >
          Click Me
        </button>
      </div>
    );
  });

  return <div style={{ padding: "10px" }}>{theMovieList}</div>;
};

export default connect(mapStateToProps, { SelectedMovie })(MovieList);
