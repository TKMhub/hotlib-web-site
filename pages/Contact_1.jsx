import React from "react";
import Layout from "./components/home/Layout";
import styles from "/public/page_styles/Contact_main.module.scss";


// import ContactGragh from "./components/contact/ContactGragh";


function Contactpage() {
    return (
        <>
            <Layout title="contact">

                {/* <!-- グラフ部分　コンポーネント化予定 　<ContactGragh />　--> */}
                <div className={styles.contactWrapper}>
                    <h1>CONTACT</h1>

                    <div className={styles.contactGraph}>
                        <div className={styles.graphContents}>
                            <h2>1</h2>
                            <h3>必須項目</h3>
                        </div>
                        <div className={styles.graphLine}>
                            <span></span>
                        </div>
                        <div className={styles.graphContents}>
                            <h2>2</h2>
                            <h3>任意項目</h3>
                        </div>
                        <div className={styles.graphLine}>
                            <span></span>
                        </div>
                        <div className={styles.graphContents}>
                            <h2>3</h2>
                            <h3>入力内容確認</h3>
                        </div>
                    </div>

                    {/* <!-- 以下フォーム内容（必須項目） --> */}
                    <div className={styles.requiredItem}>
                        <form action="送信先のURL" method="POST">
                            <label htmlFor="name">お名前</label>
                            <input type="text" id="name" name="name" required />
                            <label htmlFor="email">メールアドレス</label>
                            <input type="email" id="email" name="email" required />
                            <label htmlFor="message">お問い合わせ内容</label>
                            <textarea id="message" name="message" required></textarea>
                            <input type="button" value="次へ" onclick="" />
                            {/* <!-- onclick 属性にJavaScriptの location.href を使用。遷移先のURLは、 location.href の引数に指定する。 --> */}
                            {/* <!-- 例：onclick="location.href='http://example.com/next-page.html';" --> */}
                        </form>
                    </div>
                </div>
            </Layout>
        </>
    );
}
export default Contactpage;

// localhost:3000/Contact_1