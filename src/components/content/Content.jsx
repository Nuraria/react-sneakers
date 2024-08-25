import React from "react";
import Card from "../card/Card.jsx";
import SEARCH from "../../assets/loop.svg";

const Content = () => {
  const arr = [
    {
      title: "Мужские Кроссовки Nike Blazer Mid Suede",
      price: 12999,
      imgUrl: "/img/image 5.png",
    },
    {
      title: "Мужские Кроссовки Nike Air Max 270",
      price: 15899,
      imgUrl: "/img/image 5 (1).png",
    },
    {
      title: "Мужские Кроссовки Nike Blazer Mid Suede",
      price: 8499,
      imgUrl: "/img/image 5 (2).png",
    },
    {
      title: "Кроссовки Puma X Aka Boku Future Rider",
      price: 7999,
      imgUrl: "/img/image 5 (4).png",
    },
  ];

  return (
    <>
      <div className="search_and_heading-block">
        <h1>Все кроссовки</h1>
        <div className="search_inp">
          <img width={14} src={SEARCH} alt="search" />
          <input placeholder="Поиск..." />
        </div>
      </div>
      <div className="container_for_cards">
        {arr.map((obj) => (
          <Card
            title={obj.title}
            price={obj.price}
            imgUrl={obj.imgUrl}
            onClickFavorite={() => console.log(1)}
            onClickPluse={() => console.log(1)}
          />
        ))}
      </div>
    </>
  );
};

export default Content;
