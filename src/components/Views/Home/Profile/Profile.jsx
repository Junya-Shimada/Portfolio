import React from "react";
import styles from "./Profile.module.css";

const Profile = () => {
    return (
        // 自己紹介
        <div id="profile-ja" className={`${styles["profile"]}`}>
            <div className={`${styles["profile-left"]}`}>
                <img className={`${styles["profile-img"]}`} src={`${process.env.PUBLIC_URL}/profile.jpg`} alt="プロフィール画像" />
                <p className={`${styles["profile-img-description"]}`}>写真は出雲大社。（日本酒が好き）</p>
            </div>

            <div className={`${styles["profile-right"]}`}>
                {/* 自己紹介文 */}
                <div className={`${styles["introduce-ja"]} ${styles["introduce"]}`}>
                    
                    <h1 className={`${styles["introduce-title"]}`}>せんべろ</h1>                        
                    
                    {'const character = {'}
                    <div className={`${styles["introduce-json"]}`}>
                        {'"age": 22,'}<br />
                        {'"occupation": "大学生",'}<br />
                        {'"hobby": [ "あさんぽ", "サッカー", "温泉", "お酒", "読書" ],'}<br />
                        {'"movie": [ "ハリーポッター", "ターミナル", "きっとうまくいく" ],'}<br />
                        {'"music": [ "ハンブレッダーズ", "RADWIMPS", "米津玄師", "Ed Sheeran" ]'}<br />
                    </div>
                    {'}'}        
                </div>
            </div>
        </div>
    );
}

export default Profile;