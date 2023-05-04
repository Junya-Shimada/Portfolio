import React from "react";
import styles from "./LatestArticle.module.css";

const LatestArticle = () => { 
  return (
    <article className={`${styles["latest"]}`}>
      
      <p>まだ記事がありません。</p>
    
    </article>
  );
}

export default LatestArticle;