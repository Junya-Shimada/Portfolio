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
                        <span>せんべろ</span><br /><br />
                        
                        2000年生まれの大学生。<br />
                        好奇心旺盛な性格で興味の幅が広い。褒められて鼻が伸びるタイプ。<br />
                        「欲を張って生き、胸を張って死ぬ」。挑戦への手加減を知らない人でありたい。<br />
                        自分に正直であること。人の痛みを知ること。飾らず素直で、柔軟な人になりたい。<br /><br />
                        
                        旅が好き。計画はいらない。行く先々で現地の人と話し、文化に触れ、体験を重ねる。<br />
                        本が好き。捲る時に感じる紙の香り。白紙に並ぶ、声なき文字から筆者の思いを感じる。<br />
                        また、2022年5月からは「あさんぽ」を日課として継続しており、歩き始めてもうすぐ1年。<br /><br />

                        大学ではIT系の授業に加え、学内外のイベントで、デザイン思考に基づく課題解決を学ぶ。<br />
                        学習領域を限定したくないため、FP資格の取得や、世界史、栄養学など学習の手を広げてきた。<br />
                        また、長期インターンでは、FlutterやJavaを用いたAndroidアプリの開発を中心に従事してきた。<br />
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Profile;