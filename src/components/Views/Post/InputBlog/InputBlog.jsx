import React from "react";
import styles from "./InputBlog.module.css";

const InputBlog = () => {
  return (
    <div className={`${styles["input-blog"]}`}>
      <textarea name="input-content" className={`${styles["input-content"]}`} placeholder="投稿内容を入力してください"></textarea>
      <button className={`${styles["post-content"]}`}>投稿</button>
    </div>
  );
}

export default InputBlog;