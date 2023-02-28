import React from "react";
import styles from "./Navigation.module.css";

const Navigation = () => {
    return(
        <div className={styles["navigation"]}>

            {/* 表示言語 */}
            <a className={`${styles["flow-btn"]} ${styles["language-btn"]}`} href="./english.html"><i class="fas fa-language"></i></a>
            
            {/* GitHub */}
            <a className={`${styles["flow-btn"]} ${styles["github-btn"]}`} href="https://github.com/Yakuzen/Yakuzen"><i class="fab fa-github"></i></a>
            
            {/* Twitter */}
            <a className={`${styles["flow-btn"]} ${styles["twitter-btn"]}`} href="https://twitter.com/Yakuzen555"><i class="fab fa-twitter"></i></a>
            
            {/* Topに戻る */}
            <a className={`${styles["flow-btn"]} ${styles["top-btn"]}`} href="#title-ja"><i class="fas fa-chevron-up"></i></a>

        </div>
    );
}

export default Navigation;