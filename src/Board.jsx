import { Square } from "./Square";
import "./Board.css";
import { useSelector } from "react-redux";

export default function Board(props) {
  const user = props.user;
  const enemyBoard = useSelector((state) => state.enemy);
  const playerBoard = useSelector((state) => state.player);
  let boardState;
  let boardName;
  if (user === "enemy") {
    boardState = enemyBoard;
    boardName = "Enemy's Board";
  } else {
    boardState = playerBoard;
    boardName = "Player's Board";
  }

  const boardComponent = [];

  for (let i = 0; i < boardState.length; i++) {
    let row = boardState[i];
    for (let j = 0; j < row.length; j++) {
      boardComponent.push(
        <Square symbol={boardState[i][j]} x={i} y={j} user={user} />
      );
    }
  }

  return (
    <div class="board-wrapper">
      <h3>{boardName}</h3>
      <div id="board">{boardComponent}</div>
    </div>
  );
}
