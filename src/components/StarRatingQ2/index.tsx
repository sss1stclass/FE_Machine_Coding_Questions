import React, { useState } from "react";

const StarRating = ({ totalStars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  
  return (
    <>
    <h1 style={{textAlign:'center'}}>Star Rating</h1>
    <div style={{ display: "flex", alignItems:'center', justifyContent:'center', gap: "5px", cursor: "pointer" }}>
      {[...Array(totalStars)].map((_, index) => {
        const starValue = index + 1;
        return (
          <span
            key={starValue}
            onClick={() => setRating(starValue)}
            onMouseEnter={() => setHover(starValue)}
            onMouseLeave={() => setHover(rating)}
            style={{
              fontSize: "30px",
              color: starValue <= (hover || rating) ? "gold" : "gray",
            }}
          >
            ★
          </span>
        );
      })}
    </div>
    </>
  );
};

export default StarRating;
