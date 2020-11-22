import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Lyrics from "./Lyrics";
import { Contexts } from "./UseContextSongs";

function StylesName() {
  const { songs } = useContext(Contexts);
  const { style } = useParams();
  const filterStylesById = songs.filter((song) => song.style == style);

  return (
    <div>
      {filterStylesById.map((song) => (
        <Link key={song.id} to={`/song/${song.id}`}>
          <div className="styles">
            <b>{song.title}</b>
            <br />
            {song.artist}
          </div>
        </Link>
      ))}
    </div>
  );
}

export default StylesName;
