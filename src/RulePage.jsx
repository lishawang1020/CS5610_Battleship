import React from "react";
import { Link } from "react-router-dom";
import "./RulePage.css";

export default function RulePage() {
  return (
    <div class="RulePage">
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
      </div>
      <h1>Game Rules</h1>
      <p>
        At the start of the game, 5 ships are randomly placed on each board (one
        5X1 ship, one 4X1 ship, two 3X1 ships, and one 2X1 ship). During the
        game, you and an AI will take turns (you will always go first). On your
        turn, you will select a square on the enemy board. On the AI's turn, the
        AI will randomly select a square on your grid. If a ship is hit, then
        the corresponding square will turn green. If the ship is missed, then
        the square will be marked red. The The squares cannot be attacked twice.
        If you can hit all of the AI's ships before AI hits all of yours, you
        win the game. Otherwise AI wins the game.
      </p>
      <p>
        If you choose the Free Play Game, there will be no AI that plays against
        you.
      </p>
    </div>
  );
}
