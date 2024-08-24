import React from "react";
import "./Card.scss";
import PLUS from "../../assets/Vector.svg";
import sneak from "../../assets/sneakers/image 5.png";
import LIKE_OF from "../../assets/like/like off.svg";

const Card = () => {
  return (
    <div className="card">
      <div className="favorit">
        <img width={32} src={LIKE_OF} alt="like_off" />
      </div>
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
