import React from "react";

const Card = ({ name, location, logo }) => {
  return (
    <div className='card__container'>
      <div className='card__container-image'>
        <img src={logo} alt='' />
      </div>
      <div className='card__container-text'>
        <h3>{name}</h3>
        <p>{location}</p>
      </div>
    </div>
  );
};

export default Card;
