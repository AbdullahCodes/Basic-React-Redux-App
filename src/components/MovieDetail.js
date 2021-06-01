import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return state;
};

const MovieDetail = (props) => {
  if (props.SelectedMovieReducer === null) {
    return <h3>Select the movie</h3>;
  } else {
    const { title, duration } = props.SelectedMovieReducer;

    return (
      <div>
        <h4>{title}</h4>
        <h4>{duration}</h4>
      </div>
    );
  }
};

export default connect(mapStateToProps)(MovieDetail);
