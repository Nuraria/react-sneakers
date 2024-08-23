import React from "react";
import Card from "../card/Card.jsx";

const Content = () => {
  return (
    <>
      <h1>Все кроссовки</h1>
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
