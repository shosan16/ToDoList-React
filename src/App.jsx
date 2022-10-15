import React from "react";
import { useState } from "react";
import "./styles.css";

export const App = () => {
  const [incompleteTodos, setincompleteTodos] = useState([
    "ああああ",
    "いいいい",
  ]);
  const [completeTodos, setcompleteTodos] = useState(["うううう", "ええええ"]);

  return (
    <>
      <div className="input-area">
        <input id="add-text" placeholder="To Doを入力"></input>
        <button id="add-button">追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul id="incomplete-list">
          {incompleteTodos.map((todo) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>完了</button>
                <button>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了したTODO</p>
        <ul id="complete-list">
          {completeTodos.map((todo) => {
            return (
              <div className="list-row">
                <li>{todo}</li>
                <button>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
