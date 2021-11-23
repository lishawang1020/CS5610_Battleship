import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "./reducers/reducers";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GamePage from "./GamePage";
import Home from "./Home";
import RulePage from "./RulePage";

const store = createStore(reducers);
console.log("test");
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/normal" element={<GamePage isNormal={true} />} />
        <Route path="/freePlay" element={<GamePage isNormal={false} />} />
        <Route path="/rules" element={<RulePage />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
