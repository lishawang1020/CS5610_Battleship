function generateGameBoard() {
  const defaultState = {
    gameBoard: [
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
    ],
  };
  // insert random boats
  const boatLength = [5, 4, 3, 3, 2];
  let board = defaultState.gameBoard;
  for (let i = 0; i < boatLength.length; i++) {
    const len = boatLength[i];
    let randomDir = Math.floor(Math.random() * 2);
    let randomX = Math.floor(Math.random() * 10);
    let randomY = Math.floor(Math.random() * 10);
    // insert boat horizontally
    if (randomDir === 0) {
      let isValid = false;
      while (isValid === false) {
        randomX = Math.floor(Math.random() * 10);
        if (randomX + len >= 10) continue;
        for (let i = 0; i < len; i++) {
          if (board[randomX + i][randomY] === "S") break;
          if (i === len - 1) isValid = true;
        }
      }
      for (let i = 0; i < len; i++) {
        defaultState.gameBoard[randomX + i][randomY] = "S";
      }
    }
    // insert boat vertically
    else {
      let isValid = false;
      while (isValid === false) {
        randomY = Math.floor(Math.random() * 10);
        if (randomY + len >= 10) continue;
        for (let i = 0; i < len; i++) {
          if (board[randomX][randomY + i] === "S") break;
          if (i === len - 1) isValid = true;
        }
      }
      for (let i = 0; i < len; i++) {
        defaultState.gameBoard[randomX][randomY + i] = "S";
      }
    }
  }
  return defaultState.gameBoard;
}

export default function createGameReducer(user = "") {
  return function gameReducer(state, action) {
    if (state === undefined) {
      return generateGameBoard();
    }
    if (action.type === "boardClick_" + user) {
      const value = state[action.x][action.y];
      if (value === "S") {
        state[action.x][action.y] = "Y";
      } else if (value === "") {
        state[action.x][action.y] = "X";
      } else {
        if (user === "player") {
          let newX, newY;
          while (true) {
            newX = Math.floor(Math.random() * 10);
            newY = Math.floor(Math.random() * 10);
            if (state[newX][newY] === "S") {
              state[newX][newY] = "Y";
              break;
            } else if (state[newX][newY] === "Y") {
              state[newX][newY] = "X";
              break;
            }
          }
        }
      }

      // check winning condition
      let isEnd = true;
      for (let i = 0; i < state.length; i++) {
        for (let j = 0; j < state[i].length; j++) {
          if (state[i][j] === "S") {
            isEnd = false;
            break;
          }
        }
        if (isEnd === false) break;
      }
      if (isEnd === true) {
        const name = user === "enemy" ? "Player" : "AI";
        alert("Game over! " + name + " won!");
      }
      return [...state];
    }

    if (action.type === "reset") {
      return generateGameBoard();
    }

    return state;
  };
}
