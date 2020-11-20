import React, { useContext } from "react";
import { Contexts } from "./UseContextSongs";
import likeSvg from "../icons/like.svg";
import dislikeSvg from "../icons/dislike.svg";
import heartSvg from "../icons/heart.svg";
import cartSvg from "../icons/cart.svg";
import dotsSvg from "../icons/dots.svg";

import InputSongsComponents from "./InputSongsComponents";

function PopularSong() {
  const {
    changeFill,
    sortedByLike,
    addPopularSongs,
    onAddBtn,
    increase,
    decrease,
    isFavorited,
  } = useContext(Contexts);

  return (
    <div className="popular__song">
      <header>
        <h2>These are the most popular songs</h2>
      </header>
      {sortedByLike.map((song) => (
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
            <li>
              <img src={cartSvg} />
            </li>
            <li>
              <button onClick={() => addPopularSongs()} className="add">
                <img src={dotsSvg} />
              </button>
            </li>
          </ul>
          {onAddBtn && <InputSongsComponents />}
        </div>
      ))}
    </div>
  );
}

export default PopularSong;
