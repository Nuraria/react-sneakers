import React from "react";
import "./Header.scss";
import ICON from "../../assets/image 4.jpg";
import BASKET from "../../assets/Group.svg";
import LIKE from "../../assets/zmdi_favorite-outline.svg";
import USER from "../../assets/Union.svg";

const Footer = () => {
  return (
    <header>
      <div className="left_part">
        <img src={ICON} alt="icon" />
        <div className="info_field">
          <h3>REACT SNEAKERS</h3>
          <p>Магазин лучших кроссовок</p>
        </div>
      </div>
      <div className="right_part">
        <a href="#">
          <img width={18} src={BASKET} alt="basket" />
          <span>1205 руб.</span>
        </a>
        <a href="#">
          <img width={18} src={LIKE} alt="like" />
          <span>Закладки</span>
        </a>
        <a href="#">
          <img width={18} src={USER} alt="user" />
          <span>Профиль</span>
        </a>
      </div>
    </header>
  );
};

export default Footer;
