import React, { useContext } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useHistory, useParams } from "react-router-dom";
import { Contexts } from "./UseContextSongs";

function Lyrics() {
  const history = useHistory();
  const { songs } = useContext(Contexts);
  console.log(songs);
  const { songId } = useParams();
  const filteredSongs = songs.filter((song) => song.id == songId);
  console.log(filteredSongs);

  return (
    <div>
      {filteredSongs.map((song) => (
        <div key={song.id} className="lyrics">
          <AiOutlineArrowLeft onClick={history.goBack} />
          <h3>
            {song.artist}: {song.title}
          </h3>
          <div className="verse">{song.lyrics}</div>
        </div>
      ))}
    </div>
  );
}

export default Lyrics;
