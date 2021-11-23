import React from "react";
import Board from "./Board";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./GamePage.css";

export default function GamePage(props) {
  const gameBoards = [];
  gameBoards.push(<Board user="enemy" />);
  if (props.isNormal === true) {
    gameBoards.push(<Board user="player" />);
  }

  const dispatch = useDispatch();

  return (
    <div class="GamePage">
      <div class="btnArea">
        <div class="GameBtn">
          <Link class="link" to={"/"}>
            Home
          </Link>
        </div>
        <div class="GameBtn">
          <Link class="link" to={"/normal"}>
            Normal Game
          </Link>
        </div>
        <div class="GameBtn">
          <Link class="link" to={"/freePlay"}>
            Free Play Game
          </Link>
        </div>
        <div class="GameBtn">
          <Link class="link" to={"/rules"}>
            Game Rules
          </Link>
        </div>
        <div
          class="GameBtn"
          id="reset"
          onClick={() => {
            dispatch({
              type: "reset",
            });
          }}
        >
          Reset Game
        </div>
      </div>
      <div class="board-container">{gameBoards}</div>
    </div>
  );
}
