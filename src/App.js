import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import { useState } from "react";
import CartProvider from "./store/CartProvider";

function App(props) {
  const [cardIsShown, setCardIsShown] = useState(false);

  const showCartHandler = () => {
    setCardIsShown(true);
  };

  const hideCartHandler = () => {
    setCardIsShown(false);
  };

  return (
    <CartProvider>
      {cardIsShown && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCard={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
