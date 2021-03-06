import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Add from "./Add";
import Cart from "./Cart";
import PopularSong from "./PopularSong";
import Style from "./Style";
import heartIcon from "../icons/heart.svg";
import cartIcon from "../icons/cart.svg";
import starsIcon from "../icons/popular.svg";
import cloudIcon from "../icons/clouds.svg";
import happyIcon from "../icons/happy.svg";
import "../Components/index.css";
import Lyrics from "./Lyrics";
import StylesName from "./StylesName";

function SongsApp() {

  return (
    <article>
      <header className="main__heading">
      <h1> <img src={happyIcon} width="50px" /> Hit Parade <img src={happyIcon} width="50px" /></h1>
      </header>
      <nav>
        <ul>
          <li className="heading-links">
          <img src={starsIcon}/> <Link to="/">Popular Sog</Link>
          </li>
          <li className="heading-links">
           <img src={heartIcon}/> <Link to="/styles">Styles</Link>
          </li>
          <li className="heading-links">
           <img src={cloudIcon} /> <Link to="/add">Add</Link>
          </li>
          <li className="heading-links">
          <img src={cartIcon}/> <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path="/">
          <PopularSong />
        </Route>
        <Route exact path="/styles">
          <Style />
        </Route>
        <Route path="/styles/:style">
          <StylesName />
        </Route>
        <Route path="/add">
          <Add />
        </Route>
        <Route path="/song/:songId">
          <Lyrics/>
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>
    </article>
  );
}

export default SongsApp;
