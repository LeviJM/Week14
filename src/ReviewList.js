import React from 'react';
import Review from './Review';

const ReviewList = ({ reviews }) => {
  return (
    <div className="review-list">
      <h3>Reviews:</h3>
      {reviews.length === 0 ? (
        <p>No reviews yet. Be the first to review this movie!</p>
      ) : (
        reviews.map((review, index) => <Review key={index} review={review} />)
      )}
    </div>
  );
};

export default ReviewList;