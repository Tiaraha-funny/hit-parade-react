import React, { useContext } from "react";
import { Contexts } from "./UseContextSongs";
import likeSvg from "../icons/like.svg";
import dislikeSvg from "../icons/dislike.svg";
import dotsSvg from "../icons/dots.svg";

import { Link } from "react-router-dom";

function PopularSong() {
  const {
    changeFill,
    sortedByLike,
    increase,
    decrease,
    isFavorited,
    cartItems,
    addToCart,
  } = useContext(Contexts);

  return (
    <div className="popular__song">
      <header>
        <h2>These are the most popular songs</h2>
      </header>
      {sortedByLike.map((song) => { 

        function cartIcon() {
          const alreadyInCart = cartItems.some((cartitem) => cartitem.id === song.id);
          console.log(song);
        
          if (alreadyInCart) {
            return<i onClick={() => removeSong(song.id)} className="ri-shopping-cart-fill cart"  ></i>
            
          } else {
            return<i  onClick={() => addToCart(song)} className="ri-shopping-cart-2-line"></i>
        
          }
        }
        
        return (
        <div key={song.id} className="popular">
          <ul className="popular__container">
            <li className="heart">
              <button onClick={changeFill}>
                {isFavorited ? (
                  <i className="ri-heart-fill favorite"></i>
                ) : (
                  <i className="ri-heart-line favorite"></i>
                )}
              </button>
            </li>
            <li>
              <h3>
                {song.title}
                <br />
                <i>{song.artist}</i>
              </h3>
            </li>
            <li>
              <button onClick={() => increase(song.id)} className="like">
                <img src={likeSvg} />
                {song.like}
              </button>
            </li>
            <li>
              <button onClick={() => decrease(song.id)} className="like">
                <img src={dislikeSvg} /> {song.dislike}
              </button>
            </li>
            <li>{cartIcon()}</li>
            <li>
              <Link to={`/song/${song.id}`}>
                <img src={dotsSvg} />
              </Link>
            </li>
          </ul>
        </div>
      )})}
    </div>
  );
}

export default PopularSong;
