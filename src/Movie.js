import React from 'react';
import ReviewList from './ReviewList';
import ReviewForm from './ReviewForm';

const Movie = ({ movie, addReview }) => {
  return (
    <div className="movie">
      <h2>{movie.title}</h2>
      <img src={movie.image} width='500'/>
      <p>{movie.summary}</p>
      <ReviewList reviews={movie.reviews} />
      <ReviewForm movie={movie} addReview={addReview} />
    </div>
  );
};

export default Movie;