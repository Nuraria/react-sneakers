import React from "react";
import "./Cost.scss";
import ARROW from "../../assets/arrow.svg";

const Cost = () => {
  return (
    <div className="all_cena">
      <ul>
        <li>
          <span>Итого:</span>
          <div className="dash"></div>
          <b>21 498 руб. </b>
        </li>
        <li>
          <span>Налог 5%:</span>
          <div className="dash"></div>
          <b>1074 руб.</b>
        </li>
        <button className="btn-order">Оформить заказ <img className="arrow-btn" src={ARROW} alt="arrow" /> </button>
      </ul>
    </div>
  );
};

export default Cost;
