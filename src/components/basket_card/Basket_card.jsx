import React from "react";
import sneakr from "../../assets/sneakers/image 5 (3).png";
import "./Basket_card.scss";
import DELETE from "../../assets/delete.svg";

const Basket_card = () => {
  return (
    <div className="container_product">
      <img className="itemImg" src={sneakr} alt="icon_product" />
      {/* <div style={{backgroundImage: 'url()'}} className="itemImg"></div> */}
      <div className="description">
        <p>
          Мужские Кроссовки <br /> Nike Air Max 270
        </p>
        <b>12 999 руб.</b>
      </div>
      <img className="removeBtn" src={DELETE} alt="delete_button" />

    </div>
  );
};

export default Basket_card;
