import React from "react";
import { Header, PageTitle, InputBlog } from "../../index";
import styles from "./Post.module.css";

const Post = () => {
  return (
    <div className={`${styles["post"]}`}>
      <Header />
      <PageTitle title={'投稿'} />
      <InputBlog />
    </div>
  );
}

export default Post;