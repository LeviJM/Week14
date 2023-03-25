import React from 'react';
import './Stars.css';

const Stars = ({ rating, setRating, readOnly }) => {
  const handleClick = (newRating) => {
    if (!readOnly && setRating) {
      setRating(newRating);
    }
  };

  const renderStar = (index) => {
    return (
      <span
        id={index}
        onClick={() => handleClick(index + 1)}
        className={index + 1 <= rating ? 'filled-star' : 'empty-star'}
      >
        &#9733;
      </span>
    );
  };

  return (
    <div className="stars">
      {[0, 1, 2, 3, 4].map((index) => renderStar(index))}
    </div>
  );
};

export default Stars;