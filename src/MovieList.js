import React, { useState } from 'react';
import Movie from './Movie';
import bttf1 from './pics/bttf1.jpg'
import bttf2 from './pics/bttf2.jpg'
import bttf3 from './pics/bttf3.jpg'

const MovieList = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: 'Back to the Future',
      image: bttf1,
      summary: 'Marty McFly, a 17-year-old high school student, is accidentally sent 30 years into the past in a time-traveling DeLorean invented by his close friend, the maverick scientist Doc Brown.',
      reviews: []
    },
    {
      id: 2,
      title: 'Back to the Future Part 2',
      image: bttf2,
      summary: 'After visiting 2015, Marty McFly must repeat his visit to 1955 to prevent disastrous changes to 1985...without interfering with his first trip.',
      reviews: []
    },
    {
      id: 3,
      title: 'Back to the Future Part 3',
      image: bttf3,
      summary: 'Stranded in 1955, Marty McFly learns about the death of Doc Brown in 1885 and must travel back in time to save him. With no fuel readily available for the DeLorean, the two must figure how to escape the Old West before Emmett is murdered.',
      reviews: []
    },
  ]);

  const addReview = (movieId, reviewText, rating) => {
    setMovies((prevMovies) => {
      return prevMovies.map((movie) => {
        if (movie.id === movieId) {
          return {
            ...movie,
            reviews: [
              ...movie.reviews,
              { text: reviewText, rating: rating },
            ],
          };
        }
        return movie;
      });
    });
  };

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <Movie id={movie.id} movie={movie} addReview={addReview} />
      ))}
    </div>
  );
};

export default MovieList;
