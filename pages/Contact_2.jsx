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

                    {/* <!-- 以下フォーム内容（任意項目） --> */}
                    <div class="AnyItem">
                        <form action="送信先のURL" method="POST">
                            <label htmlFor="campany">会社名</label>
                            <input type="text" id="campany" name="campany" />
                            <label htmlFor="industry">業界　※「その他」を選択した場合は、備考欄に詳細をご記載ください。</label>
                            <select id="industry" name="industry">
                                <option value="">選択してください</option>
                                <option value="maker">メーカー</option>
                                <option value="tradingCompany">商社</option>
                                <option value="retail">小売</option>
                                <option value="finance">金融</option>
                                <option value="service">サービス</option>
                                <option value="massMedia">マスコミ</option>
                                <option value="software/communications">ソフトウェア/通信</option>
                                <option value="governmentOffice/publicCorporation/organization">官公庁/公社/団体</option>
                                <option value="other">その他</option>
                            </select>
                            <label htmlFor="occupation">職種　※「その他」を選択した場合は、備考欄に詳細をご記載ください。</label>
                            <select id="occupation" name="occupation">
                                <option value="">選択してください</option>
                                <option value="sales">営業職</option>
                                <option value="planning/management">企画/管理</option>
                                <option value="clericalWork/assistant">事務/アシスタント</option>
                                <option value="sales/service">販売/サービス職</option>
                                <option value="profession">専門職</option>
                                <option value="financial professionals">金融系専門職</option>
                                <option value="other">その他</option>
                            </select>
                            <label htmlFor="remarks">備考</label>
                            <textarea id="remarks" name="remarks"></textarea>
                            <input type="button" value="戻る" onclick="" />
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

// localhost:3000/Contact_2