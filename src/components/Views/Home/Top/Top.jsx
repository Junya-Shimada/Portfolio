import React from "react";
import { Link } from "react-router-dom";
import styles from "./Top.module.css";

const Top = () => {
    return(
        <div className={`${styles["top"]}`}>

            <div className={`${styles["table"]}`}>
                <h2 className={`${styles["section-title"]}`}>【 目次 】</h2>
                <nav className={`${styles["ads"]}`}>
                    <a className={`${styles["ad"]}`} href="#profile-ja">自己紹介</a>
                    <a className={`${styles["ad"]}`} href="#products-ja">制作物</a>
                    <Link to='blog' className={`${styles["ad"]}`}>Blog</Link>
                </nav>
            </div>
            
            <div id="greeting-ja" className={`${styles["greeting"]}`}>
                <h2 className={`${styles["section-title"]}`}>【 はじめに 】</h2>
                <p>
                    ご覧いただきありがとうございます。<br />
                    エンジニアとしてポートフォリオくらい作ろうかと思いまして。<br />
                    こちらは、これからも更新を続けていくので楽しみにお待ちください。
                </p>
            </div>
        </div>
    );
}

export default Top;