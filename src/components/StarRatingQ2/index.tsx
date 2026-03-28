import React, { useState, useRef } from "react";
import "./index.css";

interface StarRatingProps {
  totalStars?: number;
  onRateChange?: (rating: number) => void;
  initialRating?: number;
}

const StarRating: React.FC<StarRatingProps> = ({
  totalStars = 5,
  onRateChange,
  initialRating = 0,
}) => {
  const [rating, setRating] = useState(initialRating);
  const [hover, setHover] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleStarClick = (starValue: number) => {
    setRating(starValue);
    onRateChange?.(starValue);
  };

  const handleKeyDown = (e: React.KeyboardEvent, starIndex: number) => {
    if (e.key === "ArrowRight" && starIndex < totalStars - 1) {
      const nextStar = starIndex + 2;
      handleStarClick(nextStar);
    } else if (e.key === "ArrowLeft" && starIndex > 0) {
      const prevStar = starIndex;
      handleStarClick(prevStar);
    } else if (e.key === "Enter" || e.key === " ") {
      handleStarClick(starIndex + 1);
    }
  };

  const handleReset = () => {
    setRating(0);
    onRateChange?.(0);
  };

  const getRatingLabel = () => {
    if (rating === 0) return "Not rated";
    if (rating === 1) return "Poor";
    if (rating === 2) return "Fair";
    if (rating === 3) return "Good";
    if (rating === 4) return "Very Good";
    return "Excellent";
  };

  return (
    <div className="star-rating-container">
      <h1 className="star-rating-title">Star Rating</h1>
      <div
        className="star-rating"
        ref={containerRef}
        role="group"
        aria-label="Star rating"
      >
        {[...Array(totalStars)].map((_, index) => {
          const starValue = index + 1;
          const isFilled = starValue <= (hover || rating);
          return (
            <button
              key={starValue}
              className={`star ${isFilled ? "on" : "off"}`}
              onClick={() => handleStarClick(starValue)}
              onMouseEnter={() => setHover(starValue)}
              onMouseLeave={() => setHover(0)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              aria-label={`Rate ${starValue} stars`}
              aria-pressed={starValue === rating}
              tabIndex={starValue === 1 ? 0 : -1}
              title={`${starValue} star${starValue > 1 ? "s" : ""}`}
            >
              ★
            </button>
          );
        })}
      </div>
      <div className="star-rating-info">
        <p className="rating-text">
          {rating > 0 ? (
            <>
              <strong>{rating}</strong> / {totalStars} - {getRatingLabel()}
            </>
          ) : (
            "Click to rate"
          )}
        </p>
        {rating > 0 && (
          <button className="reset-button" onClick={handleReset}>
            Reset
          </button>
        )}
      </div>
    </div>
  );
};

export default React.memo(StarRating);
