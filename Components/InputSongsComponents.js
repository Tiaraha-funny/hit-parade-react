import React, { useContext } from "react";
import { Contexts } from "./UseContextSongs";

function InputSongsComponents() {
  const { onAddBtn, offAddBtn, handleSumbit } = useContext(Contexts);

  const classNameInputAddForm = onAddBtn
    ? "show-form display-block"
    : "show-form display-none";

  return (
    <section className="main-forminput">
      <form onSubmit={handleSumbit} className={classNameInputAddForm}>
        <label>Add Songs</label>
        <div className="inputs">
          <div>
            Title:<br/>
            <input type="text" name="title" />
          </div>
          <div>
            Artist:<br/>
            <input type="text" name="artist" />
          </div>
          <div>
            Price:<br/>
            <input type="text" name="price" />
          </div>
          <div>
            Styles:<br/>
            <input type="text" name="style" />
          </div>
          <div>
            Lyrics:<br/>
            <textarea name="lyrics"/>
          </div>
        </div>
        <div className="addbtns">
        <button type="submit" className="submit">Add</button>
        <button onClick={offAddBtn}>cancel</button>
        </div>
      </form>
    </section>
  );
}

export default InputSongsComponents;
