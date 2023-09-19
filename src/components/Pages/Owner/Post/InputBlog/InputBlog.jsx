import React from "react";
import styles from "./InputBlog.module.css";

const InputBlog = ( props ) => {

  return (
    <div className={`${styles["input-blog"]}`}>
      <div className={`${styles["input-titles"]}`}>
        <button onClick={ props.onClick } className={`${styles["input-index"]}`} >+</button>
        <input onChange={ props.onChange } type="text" className={`${styles["input-title"]}`} placeholder="タイトルを入力してください" />
      </div>
      <textarea name="input-content" className={`${styles["input-content"]}`} placeholder="投稿内容を入力してください"></textarea>
      <button className={`${styles["post-content"]}`}>投稿</button>
    </div>
  );
}

export default InputBlog;