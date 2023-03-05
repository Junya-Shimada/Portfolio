import React, { useState } from "react";
import styles from "./PageTitle.module.css";

const PageTitle = ( props ) => {

    return(
        <h1 id="title-ja" className={`${styles["title"]}`}>{ props.title }</h1>
    );
}

export default PageTitle;