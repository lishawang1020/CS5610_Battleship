import { combineReducers } from "redux";
import createGameReducer from "./createGameReducer";

export default combineReducers({
  enemy: createGameReducer("enemy"),
  player: createGameReducer("player")
})
