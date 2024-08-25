import React from "react";
import BaskeеСart from "../basket_card/Basket_card";
import Cost from "../basket_card/Cost.jsx";
import DELETE from "../../assets/delete.svg";
const Drawer = ({ basket = [], onCloseCart }) => {
  return (
    <div className="overlay">
      <div className="drawer">
        <br />
        <div className="top_stroke">
          <h2>Корзина</h2>
          <img
            className="removeBtn"
            width={25}
            src={DELETE}
            alt="delete"
            onClick={onCloseCart}
          />
        </div>
        <div className="container_card_scroll">
          {/* {basket.map((obj) => (
            <BaskeеСart />
          ))} */}
          <BaskeеСart />
          <BaskeеСart />
          <BaskeеСart />
        </div>
        <Cost />
      </div>
    </div>
  );
};

export default Drawer;
