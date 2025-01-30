import React from "react";

const InfoCard = ({ card }) => {
  const { name, description, image, bgClass } = card;
  return (
    <div className={`card shadow-xl p-6 text-center text-white ${bgClass}`}>
      <figure>
        <img src={image} alt="" />
      </figure>
      <div className="card-body py-2">
        <h2 className="text-xl font-semibold text-center">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
