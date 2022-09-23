import React from "react";
import ReactDOM from "react-dom/client";
import App from "./6/App";
import UseEffect_6_1 from "./6/UseEffect_6-1";
import CleanUp_6_4 from "./6/CleanUp_6_4";
import ToDoList from "./7/ToDoList";
import CoinTracker from "./7/CoinTracker";
import MovieApp from "./7/MovieApp";
import "./styles.css";
// css파일 쓰는거보다 자체적으로 하는게 나음
// import "./styles.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
    <hr />
    <UseEffect_6_1 />
    <hr />
    <CleanUp_6_4 />
    <hr />
    <ToDoList />
    <hr />
    <CoinTracker />
    <hr />
    <MovieApp />
  </>
);
