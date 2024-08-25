import React from "react";
import Header from "./components/header/Header.jsx";
import Content from "./components/content/Content.jsx";
import Drawer from "./components/drawer/Drawer.jsx";
function App() {
  const [cartOpen, setCartOpen] = React.useState(false);
  const [basket, setBasket] = React.useState([{
    title: "Кроссовки Puma X Aka Boku Future Rider",
    price: 7999,
    imgUrl: "/img/image 5 (5).png",
  },
  {
    title: "Кроссовки Puma X Aka Boku Future Rider",
    price: 7999,
    imgUrl: "/img/image 5 (7).png",
  },]);

  return (
    <div className="wrapper">
      {cartOpen && <Drawer basketCart={basket} onCloseCart={() => setCartOpen(false)} />}
      <Header onClickCart={() => setCartOpen(true)} />
      <Content />
    </div>
  );
}

export default App;
