import React from "react";
import { Navigation, Header } from "../../index";
import styles from "./OX.module.css";

const OX = () => { 
  return (
    <div className={`${styles["ox"]}`}>
      <Header />
      <h1 className={`${styles["title"]}`}>OX Game</h1>
      <div className={`${styles["description"]}`}>
        <div className={`${styles["description-text"]}`}>
            <p>Terminal上で動作するoxゲームです。</p>
            <p>ソースコードは<a href="https://github.com/sen-bero/ox_game">GitHub</a>に載せてありますが、内容は以下の画像の通りです。</p>
            <p>（用意された3x3のマスで、先に縦・横・斜めいずれかの方向に3つ自身のマークを並べた方の勝ちです。）</p>
        </div>
        <div className={`${styles["ox-images"]}`}>
            <img className={`${styles["ox-image"]}`} src="https://github.com/sen-bero/portfolio/blob/main/public/ox.png?raw=true" alt="ox"/>
            <img className={`${styles["ox-image"]}`} src="https://github.com/sen-bero/portfolio/blob/main/public/ox2.png?raw=true" alt="ox2"/>
        </div>
      </div>
      <Navigation />
    </div>
  );
}

export default OX;