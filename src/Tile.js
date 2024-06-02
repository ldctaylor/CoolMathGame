import React from "react";
import theme from "./Theme";
import "bootstrap/dist/css/bootstrap.css";

export function Tile() {
  return (
    <div
      className="tile"
      style={{
        fontSize: "4rem",
        backgroundColor: theme.available,
        height: "6rem",
        width: "6rem",
        margin: "auto",
        padding: "auto",
        border: "1px solid grey",
      }}
    >
      😊
    </div>
  );
}

export default Tile;
