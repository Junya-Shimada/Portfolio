import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";


const Header = () => {    
    return(
        <nav className={styles["header"]}>
            <Link to="/"><h1>Portfolio</h1></Link>
            <span className={styles["header-nav"]}>
                <Link to="/" className={styles["header-nav-item"]}><h3>Home</h3></Link>
                <a className={`${styles["header-nav-item"]}`} href="https://notion-blog-6wfsme4cj-sen-bero.vercel.app/"><h3>Blog</h3></a>
                <Link to="/login" className={styles["header-nav-item"]}><h3>Owner</h3></Link>
            </span>
        </nav>
    );
}

export default Header;