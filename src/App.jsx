import React from "react";
import "./styles.css";

export const App = () => {
  return (
    <>
      <div class="input-area">
        <input id="add-text" placeholder="To Doを入力"></input>
        <button id="add-button">追加</button>
      </div>
      <div class="incomplete-area">
        <p class="title">未完了のTODO</p>
        <ul id="incomplete-list">
          <div class="list-row">
            <li>TODOです</li>
            <button>完了</button>
            <button>削除</button>
          </div>
          <div class="list-row">
            <li>TODOです</li>
            <button>完了</button>
            <button>削除</button>
          </div>
        </ul>
      </div>
      <div class="complete-area">
        <p class="title">完了したTODO</p>
        <ul id="complete-list">
          <div class="list-row">
            <li>TODOです</li>
            <button>戻す</button>
          </div>
        </ul>
      </div>
    </>
  );
};
