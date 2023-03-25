import React, { useState } from 'react';
import Stars from './Stars';

const ReviewForm = ({ movie, addReview }) => {
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (reviewText.trim() !== '') {
      addReview(movie.id, reviewText, rating);
      setReviewText('');
      setRating(0);
    }
  };

  return (
    <div className="review-form">
      <h3>Add a Review</h3>
      <form onSubmit={handleSubmit}>
        <Stars rating={rating} setRating={setRating} readOnly={false} />
        <textarea
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          placeholder="Write your review here"
          required
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ReviewForm;
