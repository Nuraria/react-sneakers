import React from "react";
import "./Card.scss";
import PLUS from "../../assets/plus_product.svg";
// import sneak from "../../assets/sneakers/image 5.png";
import LIKE_OF from "../../assets/like/like off.svg";
import CHECK from "../../assets/agree.svg"

const Card = ({ title, price, imgUrl, onClickFavorite }) => {
  const [isAded, setIsAded] = React.useState(false);
  const onClickPluse = () => {
    setIsAded(!isAded);
  }

  return (
    <div className="card">
      <div className="favorit">
        <img width={32} src={LIKE_OF} alt="like_off" onClick={ onClickFavorite()} />
      </div>
      <img
        width={133}
        height={112}
        className="card_img"
        src={imgUrl}
        alt="sneaker"
      />
      <p className="heading">{title}</p>
      <br />
      <div className="price_and_icon">
        <div className="cena">
          <p>Цена:</p>
          <b>{price}</b>
        </div>
          <img className="plus_icon" width={32} src={
            isAded ? CHECK : PLUS
          } alt="+" onClick={() => onClickPluse()}  />
      </div>
    </div>
  );
};

export default Card;
