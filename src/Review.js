import React from 'react';
import Stars from './Stars';
import './Review.css';

const Review = ({ review }) => {
  return (
    <div className="review">
      <Stars rating={review.rating} readOnly={true} />
      <p>{review.text}</p>
    </div>
  );
};

export default Review;
