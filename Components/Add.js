import React, { useContext } from "react";
import { Contexts } from "./UseContextSongs";
import { allSongs } from "./songs";

function Add() {

  const { songs, setSongs } = useContext(Contexts);

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Submit it");
    const form = e.target;
    const title = form.title.value;
    const artist = form.artist.value;
    const style = form.style.value;
    const price = form.price.value;
    const lyrics = form.lyrics.value;

    const newSongs = {
      id: Date.now(),
      title: title,
      artist: artist,
      style: style,
      lyrics: lyrics,
      price: price,
      like: 0,
      dislike: 0,
    };

    setSongs([...allSongs, newSongs]);
  }

  return (
    <div className="display-block">
      <section className="main-forminput">
        <form onSubmit={handleSubmit}>
          <label>Add New Songs</label>
          <div className="inputs">
            <div>
              Title:
              <br />
              <input type="text" name="title" />
            </div>
            <div>
              Artist:
              <br />
              <input type="text" name="artist" />
            </div>
            <div>
              Price:
              <br />
              <input type="text" name="price" />
            </div>
            <div>
              Styles:
              <br />
              <input type="text" name="style" />
            </div>
            <div>
              Lyrics:
              <br />
              <textarea name="lyrics" />
            </div>
          </div>
          <div className="addbtns">
            <button className="submit">Add</button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Add;
