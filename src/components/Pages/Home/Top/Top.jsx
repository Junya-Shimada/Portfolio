import React from "react";
import { Link } from "react-router-dom";
import styles from "./Top.module.css";

const Top = () => {
    return(
        <div id="top" className={`${styles["top"]}`}>
            <div className={`${styles["table"]}`}>
                <h2 className={`${styles["section-title"]}`}>【 目次 】</h2>
                <nav className={`${styles["ads"]}`}>
                    <li><a className={`${styles["ad"]}`} href="#profile">自己紹介</a></li>
                    <li><a className={`${styles["ad"]}`} href="#products">制作物</a></li>
                    <li><Link to="/blog" className={`${styles["ad"]}`}>保留項目</Link></li>
                </nav>
            </div>
            
            <div id="greeting" className={`${styles["greeting"]}`}>
                <h2 className={`${styles["section-title"]}`}>【 はじめに 】</h2>
                <p>
                    ご覧いただきありがとうございます。<br />
                    ポートフォリオなんて、なんぼあってもいいですからね。<br />
                    ブログ含め、これから更新を続けていくので楽しみにお待ちください。
                </p>
            </div>
        </div>
    );
}

export default Top;