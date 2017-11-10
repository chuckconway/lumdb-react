import React from 'react';
import PropTypes from 'prop-types';


const Movie = ({ movie }) => (
  <div>
    <h3>{movie.title}</h3>
    <p />
  </div>
);

export default Movie;


// // every proptype should have a definition
Movie.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
};
