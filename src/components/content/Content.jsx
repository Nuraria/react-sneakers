import React from "react";
import Card from "../card/Card.jsx";
import SEARCH from "../../assets/loop.svg";

const Content = () => {
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
        <Card />
        <Card />
        <Card />
        <Card />
       
      </div>
    </>
  );
};

export default Content;
