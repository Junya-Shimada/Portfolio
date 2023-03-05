import React from "react";
import { Navigation, Header, PageTitle, LatestArticle } from "../../index";
import styles from "./Blog.module.css";

const Blog = () => { 
  return (
    <div className={`${styles["blog"]}`}>
      <Header />
      <PageTitle title={'Blog'} />
      <LatestArticle />
      <Navigation />
    </div>
  );
}

export default Blog;