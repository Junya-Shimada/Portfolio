import React from "react";
import { Link } from "react-router-dom";
import styles from "./Blog.module.css";

const Blog = () => {
  return (
    <div className={`${styles["blog"]}`}>
      <h1>Blog</h1>
      <Link to='/'>Home</Link>
    </div>
  );
}

export default Blog;