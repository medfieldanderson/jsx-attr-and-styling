import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1>My Favourite Foods</h1>
    <img alt="" src={img + "?grayscale"} />
    <ul>
      <li>Bacon</li>
      <li>Jamon</li>
      <li>Noodles</li>
    </ul>
  </div>,
  document.getElementById("root")
);
