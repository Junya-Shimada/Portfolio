import React from "react";
import styles from "./Profile.module.css";

const Profile = () => {
    return (
        // 自己紹介
        <div id="profile" className={`${styles["profile-mobile"]}`}>
            <div className={`${styles["profile"]}`}>
                <div className={`${styles["profile-left"]}`}>
                    <img className={`${styles["profile-img"]}`} src={`${process.env.PUBLIC_URL}/profile.jpg`} alt="プロフィール画像" />
                    <p className={`${styles["profile-img-description"]}`}>写真は出雲大社。（日本酒が好き）</p>
                </div>

                <div className={`${styles["profile-right"]}`}>
                    {/* 自己紹介文 */}
                    <div className={`${styles["introduce"]}`}>
                        <p>
                            <span className={styles["name"]}>せんべろ</span><br /><br />
                            
                            情報系学部に通う大学4年生。ENFP。<br />
                            好奇心が旺盛。思いつきで行動することも多く、褒められると鼻が伸びるタイプ。<br />
                            フロントエンドを中心としてフルスタックな技術の習得を目指す、ぴよぴよエンジニア。<br /><br />
                            
                            <span className={styles["no-mobile"]}>
                                旅行が好き。新しい景色や人との出会い、非日常を満喫することに没頭する時間を大切にしたい。<br />
                                美味い飯と酒が好き。コスパが良く贅沢なご飯と日本酒が身近にある事が田舎暮らしの良いところ。<br />
                                大学3年から「あさんぽ」を日課としているが、投稿の写真にこだわって「朝旅」ぽくなっている。<br /><br />

                                大学での授業に加えて学内外のハッカソンに出場する中で、つよつよな人達を横目に眺めてきた。<br />
                                長期インターンでは、FlutterやJavaを用いたAndroidアプリの開発を中心に経験する機会を得た。<br />
                            </span>
                            こんな名前ではあるが、特別お酒を飲む頻度が多い訳でも弱過ぎる訳でもないはず。。。笑<br />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;