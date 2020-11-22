import React, { createContext, useEffect, useState } from "react";
import {allSongs} from "./songs";

const Contexts = createContext();

function UseContextSongs({ children }) {

  const [songs, setSongs] = useState([]);
  const [isFavorited, setIsFavorited] = useState(false);
  const [like, setLike] = useState(20);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setSongs(allSongs);
    initCartItems();
  }, []);

  function initCartItems() {
    const lsCartItems = JSON.parse(localStorage.getItem('cartItems'));
    if (lsCartItems) {
      setCartItems(lsCartItems);
    }
  }

  function addToCart(song) {
    setCartItems((prevItem) => [...prevItem, song]);
    console.log(cartItems);
  }

  function emptyCart() {
    setCartItems([]);
  }

  function deleteSongsFromCart(id) {
    const filterTHisSongById = cartItems.filter(song => song.id !== id);
    setCartItems(filterTHisSongById);
    console.log("It is deleted");
  }

  function changeFill() {
    setIsFavorited(true);
  }

  function increase(id) {
    console.log("I like it");
    const findById = songs.find((song) => song.id === id);
    const isLiked = findById.like++;
    setLike(isLiked);
  }

  function decrease(id) {
    console.log("I don't like this");
    const findById = songs.find((song) => song.id === id);
    const isDisLiked = findById.dislike++;
    setLike(isDisLiked);
  }

  const sortedByLike = songs.sort((like, dislike) => {
    const likeIt = like.like - like.dislike;
    const notLikeIt = dislike.like - dislike.dislike;
    return notLikeIt - likeIt;
  });

  useEffect(() => {
    if (songs.length > 0) {
      localStorage.setItem('popularSongs', JSON.stringify(songs));
    }
  }, [songs]);

  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }
  }, [cartItems]);

  console.log(songs);
  console.log(cartItems);
  
  function removeSong(id) {
    setCartItems((prevItems) => prevItems.filter((image) => image.id !== id));
  }

  return (
    <Contexts.Provider
      value={{
        cartItems,
        sortedByLike,
        increase,
        decrease,
        like,
        changeFill,
        isFavorited,
        songs,
        setSongs,
        addToCart,
        emptyCart,
        removeSong,
        deleteSongsFromCart,
      }}
    >
      {children}
    </Contexts.Provider>
  );
}

export { UseContextSongs, Contexts };