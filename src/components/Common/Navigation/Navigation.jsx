import React from "react";
import styles from "./Navigation.module.css";

const Navigation = () => {
    return(
        <div className={styles["navigation"]}>

            {/* Mail */}
            <a className={`${styles["flow-btn"]} ${styles["mail-btn"]}`} href="mailto:yakuzen555@gmail.com"><i class="fas fa-envelope"></i></a>
        
            {/* GitHub */}
            <a className={`${styles["flow-btn"]} ${styles["github-btn"]}`} href="https://github.com/sen-bero/sen-bero"><i class="fab fa-github"></i></a>
            
            {/* Twitter */}
            <a className={`${styles["flow-btn"]} ${styles["twitter-btn"]}`} href="https://twitter.com/senbero_boy"><i class="fab fa-twitter"></i></a>
            
            {/* Topに戻る */}
            <a className={`${styles["flow-btn"]} ${styles["top-btn"]}`} href="#title-ja"><i class="fas fa-chevron-up"></i></a>

        </div>
    );
}

export default Navigation;