import { func } from "prop-types";
import React, { createContext, useEffect, useState } from "react";
import { songs } from "./songs";

const Contexts = createContext();

function UseContextSongs({ children }) {
  const [addSongs, setAddSongs] = useState([]);
  const [onAddBtn, setOnAddBtn] = useState(false);
  const [ isFavorited, setIsFavorited ] = useState(false);
  const [like, setLike] = useState(20);
  let classHeartIconName;

  useEffect(() => {
    setAddSongs(songs);
  }, []);

  function changeFill() {
    setIsFavorited(true);
  }

  function increase(id) {
    console.log("I like it");
    const findById = addSongs.find((song) => song.id === id);
    const isLiked = findById.like++;
    setLike(isLiked);
  }

  function decrease(id) {
    console.log("I don't like this");
    const findById = addSongs.find((song) => song.id === id);
    const isDisLiked = findById.dislike++;
    setLike(isDisLiked);
  }

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
    };

    songs.push(newSongs);
    setAddSongs([...songs]);

    console.log(addSongs);
  }

  function addPopularSongs() {
    setOnAddBtn(true);
  }

  function offAddBtn() {
    setOnAddBtn(false);
  }

  const sortedByLike = addSongs.sort((like, dislike) => {
    const likeIt = like.like - like.dislike;
    const notLikeIt = dislike.like - dislike.dislike;
    return notLikeIt - likeIt;
  });

  return (
    <Contexts.Provider
      value={{
        addPopularSongs,
        sortedByLike,
        offAddBtn,
        onAddBtn,
        handleSubmit,
        increase,
        decrease,
        like,
        changeFill,
        isFavorited,
      }}
    >
      {children}
    </Contexts.Provider>
  );
}

export { UseContextSongs, Contexts };

// setPopularSongs(newSongs);
