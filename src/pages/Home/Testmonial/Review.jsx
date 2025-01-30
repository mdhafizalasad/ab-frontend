import React from "react";

const Review = ({ singleReview }) => {
  const { location, name, img, review } = singleReview;
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <p>{review}</p>
        <div className="card-actions items-center mt-5">
          <img
            className="w-16 h-16 rounded-full border-2 border-primary p-1"
            src={img}
            alt=""
          />
          <div>
            <h2 className="card-title">{name}</h2>
            <p>{location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
