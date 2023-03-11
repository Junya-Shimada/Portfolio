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
                    <p>
                        <span>Junya Shimada</span><br /><br />
                        
                        2000年生まれの大学生。<br />

                        好奇心旺盛かつ欲張りな性格で、可能な限り幅広い領域で挑戦を続けたい。<br />
                        コンビニの新作からバンジージャンプまで、幅広く「未知」に挑戦することが好き。<br /><br />
                        
                        幼稚園から大学現在までサッカーを続けている。最近は運動不足気味。（笑）<br />
                        最近は、起床後の早朝「あさんぽ」を日課としており、その回数は143回を突破。<br /><br />


                        大学ではハッカソン等のイベントに複数参加し、IT以外の勉強としてFP資格なども取得。<br />
                        1年の長期インターンではFlutterやJavaを用いたAndroidアプリの開発に携わっている他、<br />
                        地元企業と連携して地域が抱える課題に対する議論や、他大学の講義資料の作成を手伝う。<br />
                        趣味でWebフロントの開発をしており、大学の研究はPythonを用いたデータ解析を予定。
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Profile;