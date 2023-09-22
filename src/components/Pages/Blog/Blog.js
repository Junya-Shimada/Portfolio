import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navigation, Header, PageTitle, LatestArticle } from "../../index";
import styles from "./Blog.module.css";

const Blog = () => { 

  const [index, setIndex] = useState(0);
  const [blogTitle, setBlogTitle] = useState('Hello World!');

  const incrementIndex = () => {
    setIndex( prevState => prevState + 1 );
  }

  const addBlogTitle = (e) => {
    setBlogTitle(e.target.value);
  }

  return (
    <div className={`${styles["blog"]}`}>
      <Header />
      <PageTitle title={ '#' + index + ' 「' + blogTitle + '」 '} />
      <LatestArticle  />
      <Link to="/post" className={styles["post"]}><h3>Post</h3></Link>
      <Navigation />
    </div>
  );
}

export default Blog;