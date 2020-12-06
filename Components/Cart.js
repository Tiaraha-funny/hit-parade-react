import React, { useContext, useState } from "react";
import CartItem from "./CartItems";
import { Contexts } from "./UseContextSongs";

function Cart() {
  const { cartItems, emptyCart } = useContext(Contexts);

  const cartItemElements = cartItems.map((item) => (
    <CartItem key={item.id} item={item} />
  ));

  let totalCost = 0;
  for (let i = 0; i < cartItems.length; i++) {
    totalCost += cartItems[i].price;
  }

  const [text, setText] = useState("Buy it");

  function orderPlace() {
    setText("Ordering....");

    setTimeout(() => {
      console.log("Order placed!");
      emptyCart();
      setText("Buy it");
    }, 3000);
  }

  return (
    <main className="cart-page">
      {cartItemElements}
      <div className="order-button">
        {cartItems.length > 0 ? (
          <button className="buyBtn" onClick={orderPlace}>
            {text}
          </button>
        ) : (
          <p className="sorry"> 😜 Sorry 🤔! Your cart is empty 👌!!!</p>
        )}
      </div>
      <p className="total-cost">
        Total:<b className="cost"> {totalCost} Ar</b>{" "}
      </p>
    </main>
  );
}

export default Cart;
