import React from "react";
import { Navigation, Top, Profile, Products } from "../../index";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={`${styles["home"]}`}>
      <Top />
      <Profile />
      <Products />
      <Navigation />
    </div>
  );
}

export default Home;