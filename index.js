import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import SongsApp from "./Components/SongsApp";
import { UseContextSongs } from "./Components/UseContextSongs";

ReactDOM.render(
  <UseContextSongs>
    <Router>
      <SongsApp />
    </Router>
  </UseContextSongs>,
  document.getElementById("root")
);
