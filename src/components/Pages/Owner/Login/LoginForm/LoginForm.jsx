import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./LoginForm.module.css";

const LoginForm = ( props ) => {

    // const initialValues = { username: "", mail: "", password:"" };
    // const [loginValues, setLoginValues] = useState(initialValues);

    // const handleChange = (e) => {
    //     const {name, value} = e.target; // 分割代入
    //     setLoginValues({ ...loginValues, [name]: value });
    //     console.log(loginValues);
    // }

    return(
        <form className={styles["login-form"]}>
            {/* <h2>ログイン</h2> */}
            {/* <p>{loginValues}</p> */}
            <div className={styles["login-form-item"]}>
                <label>ユーザー名</label>
                <input
                    type="text" 
                    name='username'
                    placeholder="ユーザー名"
                    onChange={(e) => props.onChange(e)}
                />
            </div>
            <div className={styles["login-form-item"]}>
                <label>パスワード</label>
                <input
                    type="password"
                    name='password'
                    placeholder="パスワード"
                    onChange={(e) => props.onChange(e)}
                />
            </div>
            <button className={styles["login-form-btn"]}>
                ログイン
            </button>
        </form>
    
    );
}

export default LoginForm;