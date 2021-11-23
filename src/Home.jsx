import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div class="HomePage">
      <h1 class="welcome">Welcome to Battleship</h1>
      <div class="nav-container">
        <div class="nav">
          <Link class="link" to={"/normal"}>Normal Game</Link>
        </div>
        <div class="nav">
          <Link class="link" to={"/freePlay"}>Free Play Game</Link>
        </div>
        <div class="nav">
          <Link class="link" to={"/rules"}>Game Rules</Link>
        </div>
      </div>
    </div>
  );
}