import React from "react";
import "./Card.scss";
import PLUS from "../../assets/Vector.svg";
import sneak from "../../assets/sneakers/image 5 (1).png";

const Card = () => {
  return (
    <div className="card">
      <img
        width={133}
        height={112}
        className="card_img"
        src={sneak}
        alt="sneaker"
      />
      <p className="heading">
        Мужские Кроссовки
        <br /> Nike Blazer Mid Suede
      </p>
      <br />
      <div className="price_and_icon">
        <div className="cena">
          <p>Цена:</p>
          <b>12 999 руб.</b>
        </div>
        <button className="button_point">
          <img width={11} src={PLUS} alt="+" />
        </button>
      </div>
    </div>
  );
};

export default Card;
