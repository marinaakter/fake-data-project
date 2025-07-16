import React from "react";
import "./Bottle.css";

const Bottle = ({ bottle, handleAddToCart }) => {
  const { name, price, img } = bottle;
  return (
    <div>
      <div className="bottle">
        <img src={img} alt="" />
        <p>{name}</p>
        <p>price: ${price}</p>
        <button onClick={() => handleAddToCart(bottle)}>Purchase</button>
      </div>
    </div>
  );
};

export default Bottle;
