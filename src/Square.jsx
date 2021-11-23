import React from "react";
import { useDispatch } from "react-redux";
import "./Square.css";

export function Square(props) {
  const symbol = props.symbol;
  const user = props.user;

  let tileColor = "";
  let sign = "";
  if (symbol === "X") {
    tileColor = "redTile";
    sign = "X";
  } else if (symbol === "Y") {
    tileColor = "greenTile";
    sign = "Y";
  } else {
    if (symbol === "S" && user === "player") {
      tileColor = "blackTile";
      sign = "";
    }
    else {
      tileColor = "blueTile";
      sign = "";
    }
  }

  const dispatch = useDispatch();

  return (
    <div
      onClick={() => {
        if (user === "enemy") {
          if (props.symbol !== "X" && props.symbol !== "Y") {
            dispatch({
              type: "boardClick_enemy",
              x: props.x,
              y: props.y,
            });

            const randomX = Math.floor(Math.random() * 10);
            const randomY = Math.floor(Math.random() * 10);
            dispatch({
              type: "boardClick_player",
              x: randomX,
              y: randomY,
            });
          }
        }
      }}
      id="square"
      class={tileColor}
    >
      {sign}
    </div>
  );
}
