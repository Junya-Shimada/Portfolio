import React from "react";
import { Link } from "react-router-dom";
import styles from "./Products.module.css";

const Products = () => {
  // 制作物のリスト
  const productsList = [
    {
        title: "せんべろ日記",
        description: [
          "個人ブログです。",
          "Notionを使っています。",
          "アウトプットの練習も兼ねて",
          "不定期に投稿する予定です。",
        ],
        link: "https://notion-blog-sooty-iota.vercel.app/",
      },
    {
      title: "あさんぽ日記",
      description: [
        "眠い目擦る。",
        "外に一歩踏み出す。",
        "体の空気も入れ替える。",
        "心に少し余裕が生まれる。",
      ],
      link: "https://sen-bero.github.io/asanpo-diary/",
    },
    {
      title: "Attendance_Bot",
      description: [
        "LINEBotです。",
        "所属していたサッカー部の",
        "出欠を少しでも楽に登録すべく",
        "GASでBotを作成しました。",
      ],
      // link: "",
    },
    {
      title: "カクテルブック",
      description: [
        "大人になる。",
        "お酒と付き合う。",
        "あなたのお気に入りを。",
        "苦手なあなたにも選択肢を。",
      ],
      link: "https://sen-bero.github.io/cocktail-book/",
    },
    {
      title: "Color Book",
      description: [
        "カラーコード。",
        "6桁の英数字で1色。",
        "あなたに勧めたい色が。",
        "アイディアの一助にどうぞ。",
      ],
      link: "https://sen-bero.github.io/color-proposal/",
    },
    {
      title: "秘書サービス",
      description: [
        "秘書犬シリウス。",
        "メモやToDo管理等。",
        "日常の雑務をサポート。",
        "ワンちゃんの癒しと共に。",
      ],
      link: "https://sen-bero.github.io/secretary/",
    },
    {
      title: "OX Game",
      description: [
        "C言語で作ったoxゲーム。",
        "Terminal上で遊べます。",
      ],
      link: "/OX", 
      internalLink: true, 
    },
  ];

  return (
    <div id="products" className={`${styles["products"]}`}>
      <h2 className={`${styles["section-title"]}`}>【 制作物 】</h2>
      <p className={`${styles["description"]}`}>
        <br />これまでに制作したものです。<br />
        ぜひ、こちらも覗いてみてください。<br />
        いずれも制作途中ではありますが、フィードバック等いただけると幸いです。
      </p>
      <div className={`${styles["grid"]}`}>
        {productsList.map((product, index) => (
          // 条件分岐を使って内部リンクと外部リンクを切り替え
          product.internalLink ? (
            <Link key={index} to={product.link} className={`${styles["tile"]}`}>
              {/* Linkコンポーネントを使用して内部リンクを作成 */}
              <h3 className={`${styles["tile-title"]}`}>{product.title}</h3>
              <div>
                {product.description.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            </Link>
          ) : (
            <a key={index} href={product.link} className={`${styles["tile"]}`}>
              {/* 通常の外部リンク */}
              <h3 className={`${styles["tile-title"]}`}>{product.title}</h3>
              <div>
                {product.description.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            </a>
          )
        ))}
      </div>
    </div>
  );
};

export default Products;
