import React, { useContext } from "react";
import { Contexts } from "./UseContextSongs";
import headphonesSvg from "../icons/headphones.svg";
import { Link } from "react-router-dom";

function Style() {
  const { songs } = useContext(Contexts);
  console.log(songs);

  return (
    <div>
      {songs.map((song) => (
        <div key={song.id} className="styeOfSong">
          <Link to={`/styles/${song.style}`}>
            <img className="headphone" src={headphonesSvg} />
            <span>{song.style}</span>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Style;
