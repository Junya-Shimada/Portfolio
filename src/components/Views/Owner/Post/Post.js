import React, { useState } from "react";
import { Header, PageTitle, InputBlog } from "../../../index";
import styles from "./Post.module.css";

const Post = () => {

  const [index, setIndex] = useState(0);
  const [blogTitle, setBlogTitle] = useState('#' + index + '「タイトル」');

  const incrementIndex = () => {
    setIndex( prevState => prevState + 1 );
  }

  const addBlogTitle = (e) => {
    if(!e.target.value) {
      setBlogTitle('#' + index + '「タイトル」');
    } else {
      setBlogTitle('#' + index + '「' + e.target.value + '」');
    }
  }

  return (
    <div className={`${styles["post"]}`}>
      <Header />
      <PageTitle title={ blogTitle } />
      <InputBlog onChange={ addBlogTitle } onClick={ incrementIndex } />
    </div>
  );
}

export default Post;