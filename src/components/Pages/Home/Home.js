import React from "react";
import { Header, Navigation, PageTitle, Top, Profile, Products } from "../../index";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={`${styles["home"]}`}>
      <Header />
      <PageTitle title={'Portfolio'} />
      <Top />
      <Profile />
      <Products />
      <Navigation />
    </div>
  );
}

export default Home;