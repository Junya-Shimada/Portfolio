import React, { useState } from "react";
import { Navigation, Header, PageTitle, LoginForm } from "../../../index";
import styles from "./Login.module.css";

const Login = () => { 

  const initialValues = { userName:'', email:'', password:'' };
  const [loginValues, setLoginValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target; // 分割代入
    setLoginValues({ ...loginValues, [name]: value });
    console.log(loginValues);
  }

  return (
    <div className={`${styles["login"]}`}>
      <Header />
      <PageTitle title={ '403号室' } />
      <LoginForm onChange={ handleChange } />
      <Navigation />
    </div>
  );
}

export default Login;