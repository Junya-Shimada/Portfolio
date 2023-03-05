import React from "react";
import styles from "./Products.module.css";

const Products = () => {

    return(
        // タイル状で制作物を表示
        <div id="products-ja"  className={`${styles["products"]}`}>
            <h2 className={`${styles["section-title"]}`}>【 制作物 】</h2>
            <p>
                <br />これまでに制作したものです。<br />
                ぜひ、こちらも覗いてみてください。<br />
                いずれも制作途中ではありますが、フィードバック等いただけると幸いです。
            </p>
            <div className={`${styles["grid"]}`}>
                <a href="https://Yakuzen.github.io/asanpo-diary/" className={`${styles["tile"]}`}>
                    <h3 className={`${styles["tile-title"]}`}>あさんぽ日記</h3>
                    <div>
                        <p>眠い目擦る。</p>
                        <p>外に一歩踏み出す。</p>
                        <p>体の空気も入れ替える。</p>
                        <p>心に少し余裕が生まれる。</p>
                    </div>
                </a>
                <a href="https://Yakuzen.github.io/cocktail-book/" className={`${styles["tile"]}`}>
                    <h3 className={`${styles["tile-title"]}`}>カクテルブック</h3>
                    <div>
                        <p>大人になる。</p>
                        <p>お酒と付き合う。</p>
                        <p>あなたのお気に入りを。</p>
                        <p>苦手なあなたにも選択肢を。</p>
                    </div>
                </a>
                <a href="https://Yakuzen.github.io/color-proposal/" className={`${styles["tile"]}`}>
                    <h3 className={`${styles["tile-title"]}`}>カラープロポーサル</h3>
                    <div>
                        <p>カラーコード。</p>
                        <p>6桁の英数字で1色。</p>
                        <p>あなたに勧めたい色が。</p>
                        <p>アイディアの一助にどうぞ。</p>
                    </div>
                </a>
                <a href="https://Yakuzen.github.io/secretary/" className={`${styles["tile"]}`}>
                    <h3 className={`${styles["tile-title"]}`}>秘書サービス</h3>
                    <div class="tile-description">
                        <p>秘書犬シリウス。</p>
                        <p>メモやToDo管理等。</p>
                        <p>日常の雑務をサポート。</p>
                        <p>ワンちゃんの癒しと共に。</p>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default Products;