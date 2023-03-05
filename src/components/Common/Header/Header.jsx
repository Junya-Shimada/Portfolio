import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
    return(
        <nav className={styles["header"]}>
            <Link to="/"><h1>Portfolio</h1></Link>
            <span className={styles["header-nav"]}>
                <Link to="/" className={styles["header-nav-item"]}><h3>Top</h3></Link>
                <Link to="/blog" className={styles["header-nav-item"]}><h3>Blog</h3></Link>
                <Link to="/post" className={styles["header-nav-item"]}><h3>Post</h3></Link>
            </span>
        </nav>
    );
}

export default Header;