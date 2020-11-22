import React, { useContext } from "react";
import { Contexts } from "./UseContextSongs";
import trashSvg from "../icons/trash.svg";

function CartItem({ item }) {
  const { deleteSongsFromCart } = useContext(Contexts);

  return (
    <div className="cart-item">
      <i
        onClick={() => deleteSongsFromCart(item.id)}
      >
          <button className="delBtn" ><img src={trashSvg} /></button>
      </i>
      <div>
        <b>{item.title}</b>
        <br/>{item.artist}
      </div>
      <p>{item.price} Ar</p>
    </div>
  );
}

export default CartItem;
