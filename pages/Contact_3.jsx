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

                    {/* <!-- 以下フォーム内容（入力内容確認） --> */}
                    <div class="confirmation">
                        {/* <!-- <form action="送信先のURL" method="POST"> --> */}
                        <div className={styles.name2}>
                            <p>お名前</p>
                            <div className={styles.name2Area}></div>
                        </div>
                        <div className={styles.email2}>
                            <p>メールアドレス</p>
                            <div className={styles.email2Area}></div>
                        </div>
                        <div className={styles.message2}>
                            <p>お問い合わせ内容</p>
                            <div className={styles.message2Area}></div>
                        </div>
                        <div className={styles.campany2}>
                            <p>会社名</p>
                            <div className={styles.campany2Area}></div>
                        </div>
                        <div className={styles.industry2}>
                            <p>業界</p>
                            <div className={styles.industry2Area}></div>
                        </div>
                        <div className={styles.occupation2}>
                            <p>職種</p>
                            <div className={styles.occupation2Area}></div>
                        </div>
                        <div className={styles.remarks2}>
                            <p>備考</p>
                            <div className={styles.remarks2Area}></div>
                        </div>
                        <input type="button" value="戻る" onclick="" />
                        <input type="submit" value="送信する" />
                        {/* <!-- onclick 属性にJavaScriptの location.href を使用。遷移先のURLは、 location.href の引数に指定する。 --> */}
                        {/* <!-- 例：onclick="location.href='http://example.com/next-page.html';" --> */}
                        {/* </form> */}
                    </div>
                </div>
            </Layout>
        </>
    );
}
export default Contactpage;

// localhost:3000/Contact_3